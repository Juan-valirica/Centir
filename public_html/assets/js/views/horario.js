/* ============================================================
   HORARIO.JS — Vista de horario semanal por consultorios
   Centir · Centro de Psicología
   ============================================================ */

window.Centir = window.Centir || {};

Centir.viewHorario = {

  currentWeekStart: null,

  render(weekStart) {
    // Por defecto: semana del 23 Feb 2026 (semana con más datos en el mock)
    this.currentWeekStart = weekStart || '2026-02-23';

    const html = `
      <!-- Leyenda de psicólogas -->
      <div class="schedule-legend">
        <span class="legend-title">Psicólogas:</span>
        ${Centir.data.psicologas.map(p => `
          <div class="legend-item">
            <div class="legend-dot" style="background:${p.color};"></div>
            ${p.nombre.split(' ').slice(0, 2).join(' ')}
          </div>
        `).join('')}
        <div class="legend-item" style="margin-left:auto;">
          <div class="legend-dot" style="background:var(--tag-presencial-text);"></div> Presencial
        </div>
        <div class="legend-item">
          <div class="legend-dot" style="background:var(--tag-virtual-text);"></div> Virtual
        </div>
      </div>

      <!-- Resumen de consultorios -->
      <div class="room-summary-cards" id="room-summary"></div>

      <!-- Controles de navegación -->
      <div class="schedule-controls">
        <div class="schedule-week-nav">
          <button class="week-nav-btn" id="prev-week" title="Semana anterior">
            <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <div class="week-label" id="week-label"></div>
          <button class="week-nav-btn" id="next-week" title="Semana siguiente">
            <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
        <button class="today-btn" id="today-btn">Semana actual</button>
      </div>

      <!-- Grid semanal -->
      <div class="schedule-week-grid" id="schedule-grid"></div>
    `;

    document.getElementById('view-horario').innerHTML = html;
    this._renderWeek();
    this._bindControls();
    this._updateHeaderTitle('Horario', 'Consultorios');
  },

  _renderWeek() {
    this._updateWeekLabel();
    this._renderRoomSummary();
    this._renderWeekGrid();
  },

  _updateWeekLabel() {
    const label = document.getElementById('week-label');
    if (label) {
      label.textContent = Centir.config.getWeekLabel(this.currentWeekStart);
    }
  },

  _renderRoomSummary() {
    const start = this.currentWeekStart;
    const end   = this._addDays(start, 5);
    const consultas = Centir.data.getConsultasPorRango(start, end);

    const container = document.getElementById('room-summary');
    if (!container) return;

    const rooms = Centir.data.consultorios;

    container.innerHTML = rooms.map(room => {
      const roomConsultas = consultas.filter(c => c.consultorio === room.nombre);
      const icon = room.tipo === 'virtual'
        ? `<svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`
        : `<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;

      return `
        <div class="room-summary-card">
          <div class="room-summary-icon ${room.tipo === 'virtual' ? 'virtual' : ''}">${icon}</div>
          <div>
            <div class="room-summary-name">${room.nombre}</div>
            <div class="room-summary-count">${roomConsultas.length} cita${roomConsultas.length !== 1 ? 's' : ''} esta semana</div>
          </div>
        </div>
      `;
    }).join('');
  },

  _renderWeekGrid() {
    const grid = document.getElementById('schedule-grid');
    if (!grid) return;

    // Generar los 6 días (Lun–Sáb)
    const days = [];
    for (let i = 0; i < 6; i++) {
      days.push(this._addDays(this.currentWeekStart, i));
    }

    const today = Centir.config.today();
    const rooms  = Centir.data.consultorios;

    grid.innerHTML = days.map(day => {
      const isToday   = day === today;
      const dayName   = this._getDayShortName(day);
      const dayNumber = parseInt(day.split('-')[2]);

      const dayConsultas = Centir.data.consultas.filter(c => c.fecha === day);

      // Agrupar por consultorio
      const byRoom = {};
      rooms.forEach(r => { byRoom[r.nombre] = []; });
      dayConsultas.forEach(c => {
        if (byRoom[c.consultorio] !== undefined) {
          byRoom[c.consultorio].push(c);
        }
      });

      // Ordenar cada consultorio por hora
      Object.keys(byRoom).forEach(r => {
        byRoom[r].sort((a, b) => a.hora.localeCompare(b.hora));
      });

      const hasAny = dayConsultas.length > 0;

      const roomBlocks = rooms.map(room => {
        const appts = byRoom[room.nombre];
        if (appts.length === 0) return '';

        const apptHtml = appts.map(c => {
          const psicologa = Centir.data.getPsicologa(c.psicologaId);
          const color     = psicologa ? psicologa.color : '#9cc3c0';
          const colorDark = psicologa ? psicologa.colorDark : '#5a8a87';
          const colorLight= psicologa ? psicologa.colorLight : '#eef6f5';
          const firstName = psicologa ? psicologa.nombre.split(' ')[0] + ' ' + psicologa.nombre.split(' ')[1] : '';

          const catLabel = { centir: 'C', referido: 'R', privado: 'P' }[c.categoria] || '';
          const modLabel = c.modalidad === 'virtual' ? '📹' : '🏥';

          return `
            <div class="appt-block"
                 style="background:${colorLight}; border-left-color:${color}; color:${colorDark};"
                 title="${firstName} · ${c.paciente} · ${c.hora} · ${c.consultorio}">
              <div class="appt-time">${c.hora}</div>
              <div class="appt-psicologa">${firstName}</div>
              <div class="appt-paciente">${c.paciente}</div>
              <div class="appt-tags">
                <span class="appt-tag">${catLabel}</span>
                <span class="appt-tag">${c.modalidad === 'virtual' ? 'V' : 'P'}</span>
              </div>
            </div>
          `;
        }).join('');

        return `
          <div class="schedule-room-group">
            <div class="schedule-room-label">${room.nombre}</div>
            <div class="schedule-appointments">${apptHtml}</div>
          </div>
        `;
      }).join('');

      return `
        <div class="schedule-day-col">
          <div class="schedule-day-header ${isToday ? 'today' : ''}">
            <div class="schedule-day-name">${dayName}</div>
            <div class="schedule-day-number">${dayNumber}</div>
          </div>
          <div class="schedule-day-body">
            ${hasAny
              ? roomBlocks || '<div class="schedule-day-empty">Sin citas</div>'
              : '<div class="schedule-day-empty">Sin citas programadas</div>'
            }
          </div>
        </div>
      `;
    }).join('');
  },

  _bindControls() {
    const prevBtn  = document.getElementById('prev-week');
    const nextBtn  = document.getElementById('next-week');
    const todayBtn = document.getElementById('today-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        this.currentWeekStart = this._addDays(this.currentWeekStart, -7);
        this._renderWeek();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.currentWeekStart = this._addDays(this.currentWeekStart, 7);
        this._renderWeek();
      });
    }

    if (todayBtn) {
      todayBtn.addEventListener('click', () => {
        this.currentWeekStart = Centir.config.getCurrentWeekMonday();
        this._renderWeek();
      });
    }
  },

  // ── Helpers de fechas ────────────────────────────────────────
  _addDays(dateStr, days) {
    const date = new Date(dateStr + 'T00:00:00');
    date.setDate(date.getDate() + days);
    return date.toISOString().split('T')[0];
  },

  _getDayShortName(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    const names = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    return names[date.getDay()];
  },

  _updateHeaderTitle(title, breadcrumb) {
    const el = document.querySelector('.header-page-title');
    const bc = document.querySelector('.header-breadcrumb');
    if (el) el.textContent = title;
    if (bc) bc.innerHTML = breadcrumb ? `<span>${breadcrumb}</span>` : '';
  },
};
