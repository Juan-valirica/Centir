/* ============================================================
   DETALLE.JS — Vista detalle de una psicóloga + consultas
   Centir · Centro de Psicología
   ============================================================ */

window.Centir = window.Centir || {};

Centir.viewDetalle = {

  currentFilter: 'todos',
  currentModalidad: 'todos',
  psicologaId: null,

  render(psicologaId) {
    this.psicologaId      = psicologaId;
    this.currentFilter    = 'todos';
    this.currentModalidad = 'todos';

    const psicologa = Centir.data.getPsicologa(psicologaId);
    if (!psicologa) return;

    const consultas    = Centir.data.getConsultasPorPsicologa(psicologaId);
    const pacientes    = Centir.data.getPacientesActivosPorPsicologa(psicologaId);
    const facturado    = Centir.data.getFacturacionMensualPorPsicologa(psicologaId);
    const fmt          = Centir.config.formatCurrency.bind(Centir.config);
    const initials     = Centir.config.getInitials(psicologa.nombre);

    const centirCount    = consultas.filter(c => c.categoria === 'centir').length;
    const referidoCount  = consultas.filter(c => c.categoria === 'referido').length;
    const privadoCount   = consultas.filter(c => c.categoria === 'privado').length;
    const presencialCount= consultas.filter(c => c.modalidad === 'presencial').length;
    const virtualCount   = consultas.filter(c => c.modalidad === 'virtual').length;

    const html = `
      <!-- Botón volver -->
      <button class="back-btn" onclick="Centir.app.navigate('dashboard')" style="margin-bottom:var(--space-4);">
        <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
        Volver al dashboard
      </button>

      <!-- Header de la psicóloga -->
      <div class="detalle-header">
        <div class="detalle-header-top">
          <div class="detalle-avatar-fallback"
               style="background: linear-gradient(135deg, ${psicologa.color}, ${psicologa.colorDark});">
            ${initials}
          </div>
          <div class="detalle-header-info">
            <div class="detalle-header-name">${psicologa.nombre}</div>
            <div class="detalle-header-specialty"
                 style="background:${psicologa.colorLight}; color:${psicologa.colorDark};">
              ${psicologa.especialidad}
            </div>
            <div class="detalle-header-meta">
              <div class="detalle-meta-item">
                <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                ${psicologa.email}
              </div>
              <div class="detalle-meta-item">
                <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.93 2 2 0 0 1 3.6 2.74h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.1A16 16 0 0 0 13.9 16.1l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.46 17.5z"/></svg>
                ${psicologa.telefono}
              </div>
            </div>
          </div>
        </div>

        <!-- Stats resumen -->
        <div class="detalle-header-stats">
          <div class="detalle-stat-box">
            <div class="detalle-stat-box-label">Pacientes únicos</div>
            <div class="detalle-stat-box-value">${pacientes}</div>
          </div>
          <div class="detalle-stat-box">
            <div class="detalle-stat-box-label">Consultas este mes</div>
            <div class="detalle-stat-box-value">${consultas.length}</div>
          </div>
          <div class="detalle-stat-box">
            <div class="detalle-stat-box-label">Facturación feb 2026</div>
            <div class="detalle-stat-box-value" style="color:${psicologa.colorDark};">${fmt(facturado)}</div>
          </div>
          <div class="detalle-stat-box">
            <div class="detalle-stat-box-label">Promedio por sesión</div>
            <div class="detalle-stat-box-value">${fmt(Math.round(facturado / consultas.length))}</div>
          </div>
        </div>
      </div>

      <!-- Mini resumen de distribución -->
      <div class="resumen-mes-cards">
        <div class="resumen-mes-card">
          <div class="resumen-mes-card-value primary">${centirCount}</div>
          <div class="resumen-mes-card-label">Pacientes Centir</div>
        </div>
        <div class="resumen-mes-card">
          <div class="resumen-mes-card-value secondary">${referidoCount}</div>
          <div class="resumen-mes-card-label">Referidos</div>
        </div>
        <div class="resumen-mes-card">
          <div class="resumen-mes-card-value" style="color:#9c4a58;">${privadoCount}</div>
          <div class="resumen-mes-card-label">Privados</div>
        </div>
        <div class="resumen-mes-card">
          <div class="resumen-mes-card-value" style="color:#3d7a3a;">${presencialCount}</div>
          <div class="resumen-mes-card-label">Presenciales</div>
        </div>
        <div class="resumen-mes-card">
          <div class="resumen-mes-card-value" style="color:#3a5f7a;">${virtualCount}</div>
          <div class="resumen-mes-card-label">Virtuales</div>
        </div>
      </div>

      <!-- Tabla de consultas -->
      <div class="consultas-section" id="consultas-section">
        <div class="consultas-section-header">
          <div class="consultas-section-title">Registro de Consultas · Febrero 2026</div>
          <div class="consultas-filters">
            <!-- Filtro por categoría -->
            <div class="filter-tabs" id="cat-filter">
              <button class="filter-tab active" data-cat="todos">Todas</button>
              <button class="filter-tab" data-cat="centir">
                <span class="tag tag-centir" style="font-size:0.6875rem;">Centir</span>
              </button>
              <button class="filter-tab" data-cat="referido">
                <span class="tag tag-referido" style="font-size:0.6875rem;">Referido</span>
              </button>
              <button class="filter-tab" data-cat="privado">
                <span class="tag tag-privado" style="font-size:0.6875rem;">Privado</span>
              </button>
            </div>
            <!-- Filtro por modalidad -->
            <div class="filter-tabs" id="mod-filter">
              <button class="filter-tab active" data-mod="todos">Todas</button>
              <button class="filter-tab" data-mod="presencial">
                <span class="tag tag-presencial" style="font-size:0.6875rem;">Presencial</span>
              </button>
              <button class="filter-tab" data-mod="virtual">
                <span class="tag tag-virtual" style="font-size:0.6875rem;">Virtual</span>
              </button>
            </div>
          </div>
        </div>

        <div class="consultas-table-wrapper" id="consultas-table-wrapper">
          ${this._renderTable(consultas)}
        </div>
      </div>
    `;

    document.getElementById('view-detalle').innerHTML = html;
    this._bindFilters(consultas);
    this._updateHeaderTitle(psicologa.nombre, `Psicólogas / ${psicologa.nombre.split(' ')[0]}`);
  },

  _renderTable(consultas) {
    if (consultas.length === 0) {
      return `
        <div class="consultas-empty">
          <svg viewBox="0 0 24 24"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
          <p>No hay consultas con los filtros seleccionados.</p>
        </div>
      `;
    }

    const fmt = Centir.config.formatCurrency.bind(Centir.config);

    const rows = consultas.map(c => {
      const initials = c.paciente
        .split(' ')
        .filter(w => w.length > 2)
        .slice(0, 2)
        .map(w => w[0].toUpperCase())
        .join('');

      const catTag = {
        centir:   `<span class="tag tag-centir">Centir</span>`,
        referido: `<span class="tag tag-referido">Referido</span>`,
        privado:  `<span class="tag tag-privado">Privado</span>`,
      }[c.categoria] || '';

      const modTag = c.modalidad === 'presencial'
        ? `<span class="tag tag-presencial"><svg viewBox="0 0 24 24" style="width:8px;height:8px;stroke:currentColor;fill:none;stroke-width:2.5;"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>Presencial</span>`
        : `<span class="tag tag-virtual"><svg viewBox="0 0 24 24" style="width:8px;height:8px;stroke:currentColor;fill:none;stroke-width:2.5;"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>Virtual</span>`;

      return `
        <tr>
          <td>
            <div class="paciente-cell">
              <span class="consultas-table-paciente-initials" style="
                width:32px; height:32px; border-radius:50%;
                background: linear-gradient(135deg, ${this._getPsicologaColor()}, ${this._getPsicologaColorDark()});
                display:inline-flex; align-items:center; justify-content:center;
                font-size:0.625rem; font-weight:700; color:white; flex-shrink:0; margin-right:10px;">
                ${initials}
              </span>
              <span class="paciente-name">${c.paciente}</span>
            </div>
          </td>
          <td>${catTag}</td>
          <td>${modTag}</td>
          <td class="fecha-cell">
            ${Centir.config.formatDateShort(c.fecha)}
          </td>
          <td class="hora-cell">${c.hora}</td>
          <td>${c.consultorio}</td>
          <td class="sesion-cell">Sesión #${c.sesionNumero}</td>
          <td class="valor-cell">${fmt(c.valor)}</td>
        </tr>
      `;
    }).join('');

    const totalFiltrado = consultas.reduce((t, c) => t + c.valor, 0);

    return `
      <table class="consultas-table">
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Categoría</th>
            <th>Modalidad</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Consultorio</th>
            <th>Sesión</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
        <tfoot>
          <tr>
            <td colspan="7" style="text-align:right; font-weight:600; color:var(--text-medium); padding: var(--space-3) var(--space-4); font-size:0.875rem;">
              Total (${consultas.length} consultas):
            </td>
            <td style="font-weight:800; color:var(--primary-dark); padding: var(--space-3) var(--space-4);">
              ${fmt(totalFiltrado)}
            </td>
          </tr>
        </tfoot>
      </table>
    `;
  },

  _bindFilters(allConsultas) {
    const catBtns = document.querySelectorAll('#cat-filter .filter-tab');
    const modBtns = document.querySelectorAll('#mod-filter .filter-tab');

    catBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        catBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentFilter = btn.dataset.cat;
        this._applyFilters(allConsultas);
      });
    });

    modBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        modBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentModalidad = btn.dataset.mod;
        this._applyFilters(allConsultas);
      });
    });
  },

  _applyFilters(allConsultas) {
    let filtered = allConsultas;

    if (this.currentFilter !== 'todos') {
      filtered = filtered.filter(c => c.categoria === this.currentFilter);
    }
    if (this.currentModalidad !== 'todos') {
      filtered = filtered.filter(c => c.modalidad === this.currentModalidad);
    }

    const wrapper = document.getElementById('consultas-table-wrapper');
    if (wrapper) {
      wrapper.innerHTML = this._renderTable(filtered);
    }
  },

  _getPsicologaColor() {
    const p = Centir.data.getPsicologa(this.psicologaId);
    return p ? p.color : '#9cc3c0';
  },

  _getPsicologaColorDark() {
    const p = Centir.data.getPsicologa(this.psicologaId);
    return p ? p.colorDark : '#5a8a87';
  },

  _updateHeaderTitle(title, breadcrumb) {
    const el = document.querySelector('.header-page-title');
    const bc = document.querySelector('.header-breadcrumb');
    if (el) el.textContent = title;
    if (bc) bc.innerHTML = breadcrumb
      ? breadcrumb.split('/').map((s, i, arr) =>
          i === arr.length - 1
            ? `<span>${s.trim()}</span>`
            : `${s.trim()} / `
        ).join('')
      : '';
  },
};
