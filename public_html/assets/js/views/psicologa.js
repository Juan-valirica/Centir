/* ============================================================
   PSICOLOGA.JS — Dashboard de Psicóloga (Mobile First)
   Centir · Centro de Psicología
   ============================================================ */

window.Centir = window.Centir || {};

Centir.viewPsicologa = {

  // Psicóloga actualmente autenticada (simulado — Ana María Rodríguez)
  _psicologaId: 1,

  // Estado interno del modal de cita
  _selectedModalidad:   'presencial',
  _selectedDuracion:    '60',
  _selectedConsultorio: null,

  // Estado interno del modal de reserva de consultorio
  _selectedConsultorioReserva: null,
  _selectedDuracionReserva:    '60',

  // ── Render principal ─────────────────────────────────────────
  render() {
    const container = document.getElementById('view-psicologa');
    if (!container) return;

    const psic         = Centir.data.getPsicologa(this._psicologaId);
    const consultasHoy = Centir.data.getConsultasHoy(this._psicologaId);
    const proximas     = Centir.data.getProximasCitas(this._psicologaId, 6);
    const pacientes    = Centir.data.getPacientesDePsicologa(this._psicologaId);

    // Actualizar header global
    const titleEl      = document.querySelector('.header-page-title');
    const breadcrumbEl = document.querySelector('.header-breadcrumb');
    if (titleEl)      titleEl.textContent = 'Mi Agenda';
    if (breadcrumbEl) breadcrumbEl.innerHTML = `<span>${psic.nombre}</span>`;

    const initials = Centir.config.getInitials(psic.nombre);
    const facturadoHoy = consultasHoy.reduce((s, c) => s + c.valor, 0);

    container.innerHTML = `
      <!-- Bienvenida -->
      <div class="psi-welcome">
        <div>
          <h2 class="psi-greeting">Hola, ${psic.nombre.split(' ')[0]} 👋</h2>
          <p class="psi-date">${this._formatFechaLarga()}</p>
        </div>
        <div class="psi-avatar" style="background: linear-gradient(135deg, ${psic.colorDark}, ${psic.color})">
          ${initials}
        </div>
      </div>

      <!-- Estadísticas rápidas -->
      <div class="psi-mini-stats">
        <div class="psi-mini-stat">
          <span class="psi-mini-stat-value">${consultasHoy.length}</span>
          <span class="psi-mini-stat-label">Citas hoy</span>
        </div>
        <div class="psi-mini-stat">
          <span class="psi-mini-stat-value">${pacientes.length}</span>
          <span class="psi-mini-stat-label">Pacientes</span>
        </div>
        <div class="psi-mini-stat">
          <span class="psi-mini-stat-value psi-mini-stat-value--currency">${this._formatCompacto(facturadoHoy)}</span>
          <span class="psi-mini-stat-label">Facturado hoy</span>
        </div>
      </div>

      <!-- Acciones rápidas -->
      <div class="psi-quick-actions">
        <button class="btn btn-primary psi-action-btn"
                onclick="Centir.viewPsicologa.openModalPaciente()">
          <svg viewBox="0 0 24 24">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <line x1="19" y1="8" x2="19" y2="14"/>
            <line x1="22" y1="11" x2="16" y2="11"/>
          </svg>
          Nuevo Paciente
        </button>
        <button class="btn btn-secondary psi-action-btn"
                onclick="Centir.viewPsicologa.openModalCita()">
          <svg viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8"  y1="2" x2="8"  y2="6"/>
            <line x1="3"  y1="10" x2="21" y2="10"/>
            <line x1="12" y1="14" x2="12" y2="18"/>
            <line x1="10" y1="16" x2="14" y2="16"/>
          </svg>
          Agendar Cita
        </button>
        <button class="btn btn-outline psi-action-btn"
                onclick="Centir.viewPsicologa.openModalConsultorio()">
          <svg viewBox="0 0 24 24">
            <rect x="2" y="3" width="20" height="14" rx="1"/>
            <path d="M8 21h8M12 17v4"/>
            <line x1="9" y1="9" x2="15" y2="9"/>
            <line x1="12" y1="7" x2="12" y2="11"/>
          </svg>
          Reservar Consultorio
        </button>
      </div>

      <!-- Agenda de hoy + Próximas citas -->
      <div class="psi-sections-row">

        <!-- Agenda de hoy -->
        <div class="psi-section">
          <div class="psi-section-header">
            <h3 class="psi-section-title">Agenda de Hoy</h3>
            <span class="psi-section-count">${consultasHoy.length} ${consultasHoy.length === 1 ? 'cita' : 'citas'}</span>
          </div>
          ${this._renderAgendaHoy(consultasHoy)}
        </div>

        <!-- Próximas citas -->
        <div class="psi-section">
          <div class="psi-section-header">
            <h3 class="psi-section-title">Próximas Citas</h3>
          </div>
          ${this._renderProximas(proximas)}
        </div>

      </div>
    `;

    // Montar modales en el body
    this._setupModals(pacientes);
  },

  // ── Utilidades de formato ─────────────────────────────────────
  _formatFechaLarga() {
    const now = new Date();
    const str = now.toLocaleDateString('es-CO', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
    });
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  _formatCompacto(valor) {
    if (valor === 0) return '$0';
    if (valor >= 1000000) return `$${(valor / 1000000).toFixed(1)}M`;
    return `$${(valor / 1000).toFixed(0)}K`;
  },

  // ── Agenda de hoy ─────────────────────────────────────────────
  _renderAgendaHoy(consultas) {
    if (consultas.length === 0) {
      return `
        <div class="psi-empty">
          <svg viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <line x1="3"  y1="10" x2="21" y2="10"/>
            <line x1="8"  y1="2"  x2="8"  y2="6"/>
            <line x1="16" y1="2"  x2="16" y2="6"/>
          </svg>
          <p>Sin citas agendadas para hoy</p>
        </div>`;
    }
    return `
      <div class="psi-appt-list">
        ${consultas.map(c => this._renderApptCard(c)).join('')}
      </div>`;
  },

  // ── Próximas citas ────────────────────────────────────────────
  _renderProximas(proximas) {
    if (proximas.length === 0) {
      return `
        <div class="psi-empty">
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          <p>Sin próximas citas programadas</p>
        </div>`;
    }

    let html = '<div class="psi-appt-list">';
    let lastFecha = '';

    proximas.forEach(c => {
      if (c.fecha !== lastFecha) {
        lastFecha = c.fecha;
        const label = new Date(c.fecha + 'T00:00:00').toLocaleDateString('es-CO', {
          weekday: 'long', day: 'numeric', month: 'short',
        });
        html += `<div class="psi-date-label">${label.charAt(0).toUpperCase() + label.slice(1)}</div>`;
      }
      html += this._renderApptCard(c, true);
    });

    html += '</div>';
    return html;
  },

  // ── Tarjeta de cita ───────────────────────────────────────────
  _renderApptCard(c, compact = false) {
    const catClass  = { centir: 'tag-centir', referido: 'tag-referido', privado: 'tag-privado' }[c.categoria] || 'tag-centir';
    const modClass  = c.modalidad === 'presencial' ? 'tag-presencial' : 'tag-virtual';
    const oficina   = c.modalidad === 'presencial'
      ? c.consultorio.replace('Consultorio ', 'C.')
      : 'Virtual';
    const nombre    = c.paciente.replace(/ \(\d+\)|\s*\(Eval\.\)/g, '');
    const initials  = Centir.config.getInitials(nombre);
    const catLabel  = c.categoria.charAt(0).toUpperCase() + c.categoria.slice(1);
    const modLabel  = c.modalidad.charAt(0).toUpperCase() + c.modalidad.slice(1);
    const modIcon   = c.modalidad === 'presencial'
      ? `<svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`
      : `<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`;

    return `
      <div class="psi-appt-card ${compact ? 'psi-appt-card--compact' : ''}">
        <div class="psi-appt-time">
          <span class="psi-appt-hora">${c.hora}</span>
          <span class="psi-appt-office">${oficina}</span>
        </div>
        <div class="psi-appt-divider"></div>
        <div class="psi-appt-info">
          <div class="psi-appt-patient">
            <div class="psi-appt-initials">${initials}</div>
            <span class="psi-appt-name">${nombre}</span>
          </div>
          <div class="psi-appt-tags">
            <span class="tag ${catClass}">${catLabel}</span>
            <span class="tag ${modClass}">${modIcon}${modLabel}</span>
          </div>
        </div>
        <span class="psi-appt-valor">${Centir.config.formatCurrency(c.valor)}</span>
      </div>`;
  },

  // ── Configuración de modales ──────────────────────────────────
  _setupModals(pacientes) {
    // Limpiar modales anteriores
    document.querySelectorAll('.psi-modal-overlay').forEach(m => m.remove());

    const wrapper = document.createElement('div');
    wrapper.innerHTML = this._renderModalPaciente() + this._renderModalCita(pacientes) + this._renderModalConsultorio();
    document.body.appendChild(wrapper);

    this._bindModalEvents();
    this._loadConsultorios(); // Precargar disponibilidad
  },

  // ════════════════════════════════════════════════════════════
  // MODAL — NUEVO PACIENTE
  // ════════════════════════════════════════════════════════════
  _renderModalPaciente() {
    return `
    <div class="psi-modal-overlay" id="modal-paciente" style="display:none">
      <div class="psi-modal">

        <div class="psi-modal-header">
          <h3>Nuevo Paciente</h3>
          <button class="psi-modal-close" onclick="Centir.viewPsicologa.closeModalPaciente()">
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div class="psi-modal-body">

          <div class="psi-form-group">
            <label class="psi-form-label">Nombre completo <span class="psi-required">*</span></label>
            <input type="text" id="pac-nombre" class="psi-form-input"
                   placeholder="Ej: María González López" autocomplete="off" />
          </div>

          <div class="psi-form-row">
            <div class="psi-form-group">
              <label class="psi-form-label">Teléfono <span class="psi-required">*</span></label>
              <input type="tel" id="pac-telefono" class="psi-form-input" placeholder="300 123 4567" />
            </div>
            <div class="psi-form-group">
              <label class="psi-form-label">Email</label>
              <input type="email" id="pac-email" class="psi-form-input" placeholder="correo@email.com" />
            </div>
          </div>

          <div class="psi-form-group">
            <label class="psi-form-label">Categoría <span class="psi-required">*</span></label>
            <div class="psi-category-selector" id="pac-cat-selector">
              <button class="psi-cat-btn active" data-cat="centir"
                      onclick="Centir.viewPsicologa._selectCategoria('centir')">
                <span class="psi-cat-dot psi-cat-dot--centir"></span> Centir
              </button>
              <button class="psi-cat-btn" data-cat="referido"
                      onclick="Centir.viewPsicologa._selectCategoria('referido')">
                <span class="psi-cat-dot psi-cat-dot--referido"></span> Referido
              </button>
              <button class="psi-cat-btn" data-cat="privado"
                      onclick="Centir.viewPsicologa._selectCategoria('privado')">
                <span class="psi-cat-dot psi-cat-dot--privado"></span> Privado
              </button>
            </div>
            <input type="hidden" id="pac-categoria" value="centir" />
          </div>

          <div class="psi-form-group">
            <label class="psi-form-label">Notas iniciales</label>
            <textarea id="pac-notas" class="psi-form-input psi-form-textarea"
                      placeholder="Motivo de consulta, observaciones previas..."></textarea>
          </div>

          <div id="pac-error" class="psi-form-error" style="display:none"></div>

        </div>

        <div class="psi-modal-footer">
          <button class="btn btn-outline" onclick="Centir.viewPsicologa.closeModalPaciente()">
            Cancelar
          </button>
          <button class="btn btn-primary" onclick="Centir.viewPsicologa._submitPaciente()">
            <svg viewBox="0 0 24 24">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <line x1="19" y1="8" x2="19" y2="14"/>
              <line x1="22" y1="11" x2="16" y2="11"/>
            </svg>
            Guardar Paciente
          </button>
        </div>

      </div>
    </div>`;
  },

  // ════════════════════════════════════════════════════════════
  // MODAL — AGENDAR CITA
  // ════════════════════════════════════════════════════════════
  _renderModalCita(pacientes) {
    const horasOptions = this._generarHoras();

    const pacientesHtml = (pacientes || []).map(p => `
      <div class="psi-patient-option"
           data-id="${p.id}" data-nombre="${p.nombre}" data-cat="${p.categoria}"
           onclick="Centir.viewPsicologa._selectPaciente(${p.id}, '${p.nombre.replace(/'/g, "\\'")}', '${p.categoria}')">
        <div class="psi-patient-option-avatar">${Centir.config.getInitials(p.nombre)}</div>
        <div class="psi-patient-option-info">
          <span class="psi-patient-option-name">${p.nombre}</span>
          <span class="tag tag-${p.categoria}">${p.categoria.charAt(0).toUpperCase() + p.categoria.slice(1)}</span>
        </div>
      </div>`).join('');

    return `
    <div class="psi-modal-overlay" id="modal-cita" style="display:none">
      <div class="psi-modal psi-modal--large">

        <div class="psi-modal-header">
          <h3>Agendar Cita</h3>
          <button class="psi-modal-close" onclick="Centir.viewPsicologa.closeModalCita()">
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div class="psi-modal-body">

          <!-- Paciente -->
          <div class="psi-form-group">
            <label class="psi-form-label">Paciente <span class="psi-required">*</span></label>
            <div class="psi-patient-search-wrap">
              <svg class="psi-search-icon" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input type="text" id="cita-pac-search" class="psi-form-input psi-patient-search"
                     placeholder="Buscar paciente por nombre..."
                     oninput="Centir.viewPsicologa._filterPacientes()"
                     onfocus="Centir.viewPsicologa._mostrarTodosPacientes()"
                     autocomplete="off" />
              <input type="hidden" id="cita-pac-id" />
              <div class="psi-patient-dropdown" id="psi-pac-dropdown" style="display:none">
                ${pacientesHtml}
              </div>
            </div>
          </div>

          <!-- Fecha y Hora -->
          <div class="psi-form-row">
            <div class="psi-form-group">
              <label class="psi-form-label">Fecha <span class="psi-required">*</span></label>
              <input type="date" id="cita-fecha" class="psi-form-input"
                     min="${Centir.config.today()}" value="${Centir.config.today()}"
                     onchange="Centir.viewPsicologa._onFechaHoraChange()" />
            </div>
            <div class="psi-form-group">
              <label class="psi-form-label">Hora <span class="psi-required">*</span></label>
              <select id="cita-hora" class="psi-form-input"
                      onchange="Centir.viewPsicologa._onFechaHoraChange()">
                ${horasOptions}
              </select>
            </div>
          </div>

          <!-- Duración -->
          <div class="psi-form-group">
            <label class="psi-form-label">Duración</label>
            <div class="psi-duracion-selector">
              <button class="psi-dur-btn" data-dur="45"
                      onclick="Centir.viewPsicologa._selectDuracion('45')">45 min</button>
              <button class="psi-dur-btn active" data-dur="60"
                      onclick="Centir.viewPsicologa._selectDuracion('60')">60 min</button>
              <button class="psi-dur-btn" data-dur="90"
                      onclick="Centir.viewPsicologa._selectDuracion('90')">90 min</button>
            </div>
          </div>

          <!-- Modalidad -->
          <div class="psi-form-group">
            <label class="psi-form-label">Modalidad <span class="psi-required">*</span></label>
            <div class="psi-modalidad-selector">
              <button class="psi-mod-btn active" data-mod="presencial"
                      onclick="Centir.viewPsicologa._selectModalidad('presencial')">
                <svg viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Presencial
              </button>
              <button class="psi-mod-btn" data-mod="virtual"
                      onclick="Centir.viewPsicologa._selectModalidad('virtual')">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <line x1="8"  y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                Virtual
              </button>
            </div>
          </div>

          <!-- Consultorio (solo presencial) -->
          <div class="psi-consultorio-section" id="cita-consultorio-section">
            <div class="psi-form-group">
              <label class="psi-form-label">
                Seleccionar Consultorio <span class="psi-required">*</span>
              </label>
              <div class="psi-office-grid" id="psi-office-grid">
                <!-- cargado dinámicamente -->
              </div>
              <input type="hidden" id="cita-consultorio" />
            </div>
          </div>

          <!-- Valor -->
          <div class="psi-form-group">
            <label class="psi-form-label">Valor de la sesión</label>
            <div class="psi-valor-wrap">
              <span class="psi-valor-prefix">$</span>
              <input type="number" id="cita-valor" class="psi-form-input psi-valor-input"
                     placeholder="150000" min="0" step="5000" />
            </div>
          </div>

          <!-- Notas -->
          <div class="psi-form-group">
            <label class="psi-form-label">Notas de la sesión</label>
            <textarea id="cita-notas" class="psi-form-input psi-form-textarea"
                      placeholder="Objetivo de la sesión, temas a tratar..."></textarea>
          </div>

          <div id="cita-error" class="psi-form-error" style="display:none"></div>

        </div>

        <div class="psi-modal-footer">
          <button class="btn btn-outline" onclick="Centir.viewPsicologa.closeModalCita()">
            Cancelar
          </button>
          <button class="btn btn-secondary" onclick="Centir.viewPsicologa._submitCita()">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <line x1="3"  y1="10" x2="21" y2="10"/>
              <line x1="12" y1="14" x2="12" y2="18"/>
              <line x1="10" y1="16" x2="14" y2="16"/>
            </svg>
            Confirmar Cita
          </button>
        </div>

      </div>
    </div>`;
  },

  // ── Generador de opciones de horas ────────────────────────────
  _generarHoras() {
    const opts = [];
    for (let h = 7; h <= 19; h++) {
      for (let m = 0; m < 60; m += 30) {
        const hora = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
        opts.push(`<option value="${hora}">${hora}</option>`);
      }
    }
    return opts.join('');
  },

  // ── Abrir / Cerrar modales ────────────────────────────────────
  openModalPaciente() {
    const modal = document.getElementById('modal-paciente');
    if (!modal) return;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    // Reset
    document.getElementById('pac-nombre').value    = '';
    document.getElementById('pac-telefono').value  = '';
    document.getElementById('pac-email').value     = '';
    document.getElementById('pac-notas').value     = '';
    document.getElementById('pac-categoria').value = 'centir';
    document.getElementById('pac-error').style.display = 'none';
    this._selectCategoria('centir');
    setTimeout(() => document.getElementById('pac-nombre').focus(), 100);
  },

  closeModalPaciente() {
    const modal = document.getElementById('modal-paciente');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = '';
  },

  openModalCita() {
    const modal = document.getElementById('modal-cita');
    if (!modal) return;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    // Reset
    document.getElementById('cita-pac-search').value  = '';
    document.getElementById('cita-pac-id').value       = '';
    document.getElementById('cita-valor').value        = '';
    document.getElementById('cita-notas').value        = '';
    document.getElementById('cita-error').style.display = 'none';
    document.getElementById('psi-pac-dropdown').style.display = 'none';
    document.getElementById('cita-consultorio').value  = '';
    document.getElementById('cita-fecha').value        = Centir.config.today();
    this._selectedModalidad    = 'presencial';
    this._selectedDuracion     = '60';
    this._selectedConsultorio  = null;
    document.querySelectorAll('.psi-mod-btn').forEach(b => b.classList.toggle('active', b.dataset.mod === 'presencial'));
    document.querySelectorAll('.psi-dur-btn').forEach(b => b.classList.toggle('active', b.dataset.dur === '60'));
    document.getElementById('cita-consultorio-section').style.display = 'block';
    this._loadConsultorios();
    setTimeout(() => document.getElementById('cita-pac-search').focus(), 100);
  },

  closeModalCita() {
    const modal = document.getElementById('modal-cita');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = '';
  },

  // ── Selectores de estado ──────────────────────────────────────
  _selectCategoria(cat) {
    document.getElementById('pac-categoria').value = cat;
    document.querySelectorAll('#pac-cat-selector .psi-cat-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.cat === cat);
    });
  },

  _selectModalidad(mod) {
    this._selectedModalidad = mod;
    document.querySelectorAll('.psi-mod-btn').forEach(b => b.classList.toggle('active', b.dataset.mod === mod));
    const section = document.getElementById('cita-consultorio-section');
    section.style.display = mod === 'presencial' ? 'block' : 'none';
    if (mod === 'presencial') this._loadConsultorios();
    this._selectedConsultorio = null;
    document.getElementById('cita-consultorio').value = '';
  },

  _selectDuracion(dur) {
    this._selectedDuracion = dur;
    document.querySelectorAll('.psi-dur-btn').forEach(b => b.classList.toggle('active', b.dataset.dur === dur));
  },

  _selectConsultorio(nombre) {
    this._selectedConsultorio = nombre;
    document.getElementById('cita-consultorio').value = nombre;
    this._loadConsultorios(); // re-render para actualizar badge de selección
  },

  _onFechaHoraChange() {
    if (this._selectedModalidad === 'presencial') {
      this._selectedConsultorio = null;
      document.getElementById('cita-consultorio').value = '';
      this._loadConsultorios();
    }
  },

  // ── Carga de consultorios disponibles ────────────────────────
  _loadConsultorios() {
    const grid    = document.getElementById('psi-office-grid');
    const fechaEl = document.getElementById('cita-fecha');
    const horaEl  = document.getElementById('cita-hora');
    if (!grid || !fechaEl || !horaEl) return;

    const fecha = fechaEl.value;
    const hora  = horaEl.value;
    if (!fecha || !hora) return;

    const consultorios = Centir.data.getConsultoriosDisponibles(fecha, hora);
    const selected     = this._selectedConsultorio;

    grid.innerHTML = consultorios.map(c => {
      const isSelected = selected === c.nombre;
      const isOcupado  = !c.disponible;
      return `
        <div class="psi-office-item${isOcupado ? ' psi-office-item--occupied' : ''}${isSelected ? ' selected' : ''}"
             data-nombre="${c.nombre}"
             ${c.disponible ? `onclick="Centir.viewPsicologa._selectConsultorio('${c.nombre}')"` : ''}>
          <div class="psi-office-icon">
            <svg viewBox="0 0 24 24">
              <rect x="2" y="3" width="20" height="14" rx="1"/>
              <path d="M8 21h8M12 17v4"/>
            </svg>
          </div>
          <span class="psi-office-name">${c.nombre}</span>
          <div class="psi-office-status">
            ${c.disponible
              ? `<span class="psi-office-available">
                   <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                   Disponible
                 </span>`
              : `<span class="psi-office-occupied">Ocupado</span>`}
          </div>
          ${isSelected ? `
            <div class="psi-office-selected-badge">
              <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
            </div>` : ''}
        </div>`;
    }).join('');
  },

  // ── Búsqueda de pacientes ─────────────────────────────────────
  _filterPacientes() {
    const query    = (document.getElementById('cita-pac-search')?.value || '').toLowerCase().trim();
    const dropdown = document.getElementById('psi-pac-dropdown');
    if (!dropdown) return;

    const options = dropdown.querySelectorAll('.psi-patient-option');
    let found = false;

    if (query.length === 0) {
      dropdown.style.display = 'none';
      return;
    }

    dropdown.style.display = 'block';
    options.forEach(opt => {
      const match = opt.dataset.nombre.toLowerCase().includes(query);
      opt.style.display = match ? 'flex' : 'none';
      if (match) found = true;
    });

    if (!found) dropdown.style.display = 'none';
  },

  _mostrarTodosPacientes() {
    const dropdown = document.getElementById('psi-pac-dropdown');
    const options  = dropdown?.querySelectorAll('.psi-patient-option');
    if (!dropdown || !options) return;
    options.forEach(o => o.style.display = 'flex');
    dropdown.style.display = 'block';
  },

  _selectPaciente(id, nombre, categoria) {
    document.getElementById('cita-pac-search').value = nombre;
    document.getElementById('cita-pac-id').value     = id;
    document.getElementById('psi-pac-dropdown').style.display = 'none';
    // Auto-sugerir valor según categoría
    const valores = { centir: 120000, referido: 150000, privado: 180000 };
    if (!document.getElementById('cita-valor').value) {
      document.getElementById('cita-valor').value = valores[categoria] || '';
    }
  },

  // ── Submit: Nuevo Paciente ────────────────────────────────────
  _submitPaciente() {
    const nombre    = document.getElementById('pac-nombre')?.value.trim()    || '';
    const telefono  = document.getElementById('pac-telefono')?.value.trim() || '';
    const email     = document.getElementById('pac-email')?.value.trim()    || '';
    const categoria = document.getElementById('pac-categoria')?.value       || 'centir';
    const notas     = document.getElementById('pac-notas')?.value.trim()    || '';
    const errorEl   = document.getElementById('pac-error');

    if (!nombre) {
      this._showError(errorEl, 'El nombre completo es requerido.');
      return;
    }
    if (!telefono) {
      this._showError(errorEl, 'El número de teléfono es requerido.');
      return;
    }

    Centir.data.createPaciente({ nombre, telefono, email, categoria, notas, psicologaId: this._psicologaId });
    this.closeModalPaciente();
    this._showToast(`Paciente ${nombre} registrado exitosamente`, 'success');
    this.render();
  },

  // ── Submit: Agendar Cita ──────────────────────────────────────
  _submitCita() {
    const pacienteId     = document.getElementById('cita-pac-id')?.value    || '';
    const pacienteNombre = (document.getElementById('cita-pac-search')?.value || '').trim();
    const fecha          = document.getElementById('cita-fecha')?.value     || '';
    const hora           = document.getElementById('cita-hora')?.value      || '';
    const valor          = parseInt(document.getElementById('cita-valor')?.value) || 0;
    const notas          = document.getElementById('cita-notas')?.value     || '';
    const errorEl        = document.getElementById('cita-error');

    if (!pacienteNombre || !pacienteId) {
      this._showError(errorEl, 'Selecciona un paciente de la lista.');
      return;
    }
    if (!fecha) {
      this._showError(errorEl, 'La fecha es requerida.');
      return;
    }
    if (this._selectedModalidad === 'presencial' && !this._selectedConsultorio) {
      this._showError(errorEl, 'Selecciona un consultorio disponible.');
      return;
    }

    const paciente    = Centir.data.pacientes.find(p => p.id === parseInt(pacienteId));
    const consultorio = this._selectedModalidad === 'presencial'
      ? this._selectedConsultorio
      : 'Sala Virtual';

    Centir.data.createConsulta({
      psicologaId: this._psicologaId,
      paciente:    pacienteNombre,
      categoria:   paciente?.categoria || 'centir',
      modalidad:   this._selectedModalidad,
      fecha, hora, valor, consultorio, notas,
    });

    this.closeModalCita();

    const fechaStr = new Date(fecha + 'T00:00:00').toLocaleDateString('es-CO', { day: 'numeric', month: 'long' });
    this._showToast(`Cita agendada para ${pacienteNombre} el ${fechaStr} a las ${hora}`, 'success');
    this.render();
  },

  // ── Helpers UI ────────────────────────────────────────────────
  _showError(el, msg) {
    if (!el) return;
    el.textContent = msg;
    el.style.display = 'block';
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  },

  _showToast(message, type = 'success') {
    document.querySelector('.psi-toast')?.remove();
    const toast = document.createElement('div');
    toast.className = `psi-toast psi-toast--${type}`;
    toast.innerHTML = `
      <svg viewBox="0 0 24 24">
        ${type === 'success'
          ? '<polyline points="20 6 9 17 4 12"/>'
          : '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/>'}
      </svg>
      <span>${message}</span>`;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('psi-toast--visible'), 10);
    setTimeout(() => {
      toast.classList.remove('psi-toast--visible');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  },

  // ════════════════════════════════════════════════════════════
  // MODAL — RESERVAR CONSULTORIO
  // ════════════════════════════════════════════════════════════
  _renderModalConsultorio() {
    const horasOptions = this._generarHoras();
    return `
    <div class="psi-modal-overlay" id="modal-consultorio" style="display:none">
      <div class="psi-modal psi-modal--large">

        <div class="psi-modal-header">
          <h3>Reservar Consultorio</h3>
          <button class="psi-modal-close" onclick="Centir.viewPsicologa.closeModalConsultorio()">
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div class="psi-modal-body">

          <!-- Fecha y Hora -->
          <div class="psi-form-row">
            <div class="psi-form-group">
              <label class="psi-form-label">Fecha <span class="psi-required">*</span></label>
              <input type="date" id="res-fecha" class="psi-form-input"
                     min="${Centir.config.today()}" value="${Centir.config.today()}"
                     onchange="Centir.viewPsicologa._onResDateChange()" />
            </div>
            <div class="psi-form-group">
              <label class="psi-form-label">Hora <span class="psi-required">*</span></label>
              <select id="res-hora" class="psi-form-input"
                      onchange="Centir.viewPsicologa._onResDateChange()">
                ${horasOptions}
              </select>
            </div>
          </div>

          <!-- Duración -->
          <div class="psi-form-group">
            <label class="psi-form-label">Duración del bloque</label>
            <div class="psi-duracion-selector">
              <button class="psi-dur-btn res-dur-btn" data-dur="45"
                      onclick="Centir.viewPsicologa._selectDuracionReserva('45')">45 min</button>
              <button class="psi-dur-btn res-dur-btn active" data-dur="60"
                      onclick="Centir.viewPsicologa._selectDuracionReserva('60')">60 min</button>
              <button class="psi-dur-btn res-dur-btn" data-dur="90"
                      onclick="Centir.viewPsicologa._selectDuracionReserva('90')">90 min</button>
            </div>
          </div>

          <!-- Selección de consultorio -->
          <div class="psi-form-group">
            <label class="psi-form-label">
              Seleccionar Consultorio <span class="psi-required">*</span>
            </label>
            <div class="psi-office-grid" id="psi-res-office-grid">
              <!-- cargado dinámicamente -->
            </div>
            <input type="hidden" id="res-consultorio" />
          </div>

          <!-- Motivo -->
          <div class="psi-form-group">
            <label class="psi-form-label">Motivo de la reserva</label>
            <input type="text" id="res-motivo" class="psi-form-input"
                   placeholder="Ej: Preparación de sesión, supervisión, reunión..." />
          </div>

          <div id="res-error" class="psi-form-error" style="display:none"></div>

        </div>

        <div class="psi-modal-footer">
          <button class="btn btn-outline" onclick="Centir.viewPsicologa.closeModalConsultorio()">
            Cancelar
          </button>
          <button class="btn btn-primary" onclick="Centir.viewPsicologa._submitConsultorio()">
            <svg viewBox="0 0 24 24">
              <rect x="2" y="3" width="20" height="14" rx="1"/>
              <path d="M8 21h8M12 17v4"/>
              <polyline points="9 9 12 6 15 9"/>
            </svg>
            Confirmar Reserva
          </button>
        </div>

      </div>
    </div>`;
  },

  openModalConsultorio() {
    const modal = document.getElementById('modal-consultorio');
    if (!modal) return;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    // Reset
    document.getElementById('res-fecha').value      = Centir.config.today();
    document.getElementById('res-motivo').value     = '';
    document.getElementById('res-consultorio').value = '';
    document.getElementById('res-error').style.display = 'none';
    this._selectedConsultorioReserva = null;
    this._selectedDuracionReserva    = '60';
    document.querySelectorAll('.res-dur-btn').forEach(b => b.classList.toggle('active', b.dataset.dur === '60'));
    this._loadConsultoriosReserva();
  },

  closeModalConsultorio() {
    const modal = document.getElementById('modal-consultorio');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = '';
  },

  _selectDuracionReserva(dur) {
    this._selectedDuracionReserva = dur;
    document.querySelectorAll('.res-dur-btn').forEach(b => b.classList.toggle('active', b.dataset.dur === dur));
  },

  _onResDateChange() {
    this._selectedConsultorioReserva = null;
    document.getElementById('res-consultorio').value = '';
    this._loadConsultoriosReserva();
  },

  _selectConsultorioReserva(nombre) {
    this._selectedConsultorioReserva = nombre;
    document.getElementById('res-consultorio').value = nombre;
    this._loadConsultoriosReserva();
  },

  _loadConsultoriosReserva() {
    const grid    = document.getElementById('psi-res-office-grid');
    const fechaEl = document.getElementById('res-fecha');
    const horaEl  = document.getElementById('res-hora');
    if (!grid || !fechaEl || !horaEl) return;

    const fecha = fechaEl.value;
    const hora  = horaEl.value;
    if (!fecha || !hora) return;

    const consultorios = Centir.data.getConsultoriosDisponibles(fecha, hora);
    const selected     = this._selectedConsultorioReserva;

    grid.innerHTML = consultorios.map(c => {
      const isSelected = selected === c.nombre;
      const isOcupado  = !c.disponible;
      return `
        <div class="psi-office-item${isOcupado ? ' psi-office-item--occupied' : ''}${isSelected ? ' selected' : ''}"
             data-nombre="${c.nombre}"
             ${c.disponible ? `onclick="Centir.viewPsicologa._selectConsultorioReserva('${c.nombre}')"` : ''}>
          <div class="psi-office-icon">
            <svg viewBox="0 0 24 24">
              <rect x="2" y="3" width="20" height="14" rx="1"/>
              <path d="M8 21h8M12 17v4"/>
            </svg>
          </div>
          <span class="psi-office-name">${c.nombre}</span>
          <div class="psi-office-status">
            ${c.disponible
              ? `<span class="psi-office-available">
                   <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                   Disponible
                 </span>`
              : `<span class="psi-office-occupied">Ocupado</span>`}
          </div>
          ${isSelected ? `
            <div class="psi-office-selected-badge">
              <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
            </div>` : ''}
        </div>`;
    }).join('');
  },

  _submitConsultorio() {
    const fecha      = document.getElementById('res-fecha')?.value      || '';
    const hora       = document.getElementById('res-hora')?.value       || '';
    const motivo     = document.getElementById('res-motivo')?.value.trim() || 'Reserva de consultorio';
    const errorEl    = document.getElementById('res-error');

    if (!fecha) {
      this._showError(errorEl, 'La fecha es requerida.');
      return;
    }
    if (!this._selectedConsultorioReserva) {
      this._showError(errorEl, 'Selecciona un consultorio disponible.');
      return;
    }

    Centir.data.createConsulta({
      psicologaId: this._psicologaId,
      paciente:    `— ${motivo} —`,
      categoria:   'privado',
      modalidad:   'presencial',
      fecha,
      hora,
      valor:       0,
      consultorio: this._selectedConsultorioReserva,
      notas:       motivo,
    });

    this.closeModalConsultorio();

    const fechaStr = new Date(fecha + 'T00:00:00').toLocaleDateString('es-CO', { day: 'numeric', month: 'long' });
    this._showToast(
      `${this._selectedConsultorioReserva} reservado el ${fechaStr} a las ${hora}`,
      'success'
    );
    this.render();
  },

  // ── Bind de eventos globales de modales ───────────────────────
  _bindModalEvents() {
    // Cerrar al hacer click en el overlay
    document.querySelectorAll('.psi-modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', e => {
        if (e.target === overlay) {
          overlay.style.display = 'none';
          document.body.style.overflow = '';
        }
      });
    });

    // Cerrar dropdown de paciente al hacer click fuera (una sola vez)
    if (!document._psiDropdownListenerBound) {
      document._psiDropdownListenerBound = true;
      document.addEventListener('click', e => {
        const dropdown = document.getElementById('psi-pac-dropdown');
        const search   = document.getElementById('cita-pac-search');
        if (dropdown && !dropdown.contains(e.target) && e.target !== search) {
          dropdown.style.display = 'none';
        }
      });
    }

    // Cerrar modales con Escape
    if (!document._psiEscListenerBound) {
      document._psiEscListenerBound = true;
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
          this.closeModalPaciente();
          this.closeModalCita();
          this.closeModalConsultorio();
        }
      });
    }
  },
};
