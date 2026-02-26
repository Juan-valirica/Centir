/* ============================================================
   DASHBOARD.JS — Vista principal: tarjetas de psicólogas
   Centir · Centro de Psicología
   ============================================================ */

window.Centir = window.Centir || {};

Centir.viewDashboard = {

  render() {
    const { psicologas } = Centir.data;
    const totales = Centir.data.getTotalesGlobales();
    const fmt     = Centir.config.formatCurrency.bind(Centir.config);

    const html = `
      <!-- Stats generales -->
      <div class="stat-cards-row">
        ${this._renderStatCard({
          icon: `<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
          iconClass: 'teal',
          label: 'Psicólogas Activas',
          value: psicologas.filter(p => p.estado === 'activa').length,
          sub: 'Este mes',
        })}
        ${this._renderStatCard({
          icon: `<svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
          iconClass: 'purple',
          label: 'Pacientes Activos',
          value: totales.totalPacientes,
          sub: 'Pacientes únicos en el mes',
        })}
        ${this._renderStatCard({
          icon: `<svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
          iconClass: 'rose',
          label: 'Facturación del Mes',
          value: fmt(totales.totalFacturado),
          sub: 'Total acumulado · Feb 2026',
          big: true,
        })}
        ${this._renderStatCard({
          icon: `<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
          iconClass: 'sage',
          label: 'Consultas Realizadas',
          value: totales.totalConsultas,
          sub: 'Sesiones en febrero',
        })}
      </div>

      <!-- Header de la sección -->
      <div class="page-header">
        <div class="page-header-left">
          <h2>Psicólogas Activas</h2>
          <p>Seguimiento de pacientes y facturación por profesional · Febrero 2026</p>
        </div>
        <div class="page-header-right">
          <button class="btn btn-outline btn-sm" onclick="Centir.app.navigate('horario')">
            <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Ver Horario
          </button>
        </div>
      </div>

      <!-- Grid de tarjetas de psicólogas -->
      <div class="cards-grid">
        ${psicologas.map(p => this._renderPsicologaCard(p)).join('')}
      </div>
    `;

    document.getElementById('view-dashboard').innerHTML = html;
    this._updateHeaderTitle('Dashboard', 'Inicio');
  },

  _renderStatCard({ icon, iconClass, label, value, sub, big = false }) {
    return `
      <div class="stat-card">
        <div class="stat-card-icon ${iconClass}">${icon}</div>
        <div class="stat-card-content">
          <div class="stat-card-label">${label}</div>
          <div class="stat-card-value ${big ? 'text-xl' : ''}">${value}</div>
          ${sub ? `<div class="stat-card-sub">${sub}</div>` : ''}
        </div>
      </div>
    `;
  },

  _renderPsicologaCard(p) {
    const pacientes  = Centir.data.getPacientesActivosPorPsicologa(p.id);
    const facturado  = Centir.data.getFacturacionMensualPorPsicologa(p.id);
    const consultas  = Centir.data.getConsultasPorPsicologa(p.id);
    const initials   = Centir.config.getInitials(p.nombre);
    const fmt        = Centir.config.formatCurrency.bind(Centir.config);

    // Distribución por categoría
    const centirCount    = consultas.filter(c => c.categoria === 'centir').length;
    const referidoCount  = consultas.filter(c => c.categoria === 'referido').length;
    const privadoCount   = consultas.filter(c => c.categoria === 'privado').length;

    return `
      <div class="psicologa-card">
        <div class="psicologa-card-top">
          <div class="psicologa-avatar-wrapper">
            <div class="psicologa-avatar-fallback"
                 style="background: linear-gradient(135deg, ${p.color}, ${p.colorDark});">
              ${initials}
            </div>
            <div class="status-dot"></div>
          </div>
          <div class="psicologa-card-info">
            <div class="psicologa-name">${p.nombre}</div>
            <div class="psicologa-specialty"
                 style="background:${p.colorLight}; color:${p.colorDark};">
              ${p.especialidad}
            </div>
          </div>
        </div>

        <div class="psicologa-card-divider"></div>

        <div class="psicologa-card-stats">
          <div class="psicologa-stat">
            <div class="psicologa-stat-label">
              <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
              Pacientes
            </div>
            <div class="psicologa-stat-value">${pacientes}</div>
          </div>
          <div class="psicologa-stat">
            <div class="psicologa-stat-label">
              <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Consultas
            </div>
            <div class="psicologa-stat-value">${consultas.length}</div>
          </div>
          <div class="psicologa-stat" style="grid-column: span 2;">
            <div class="psicologa-stat-label">
              <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Facturado en el mes
            </div>
            <div class="psicologa-stat-value billing">${fmt(facturado)}</div>
          </div>
        </div>

        <!-- Mini distribución de categorías -->
        <div style="padding: 0 var(--space-6) var(--space-3); display:flex; gap:var(--space-2); flex-wrap:wrap;">
          ${centirCount   > 0 ? `<span class="tag tag-centir">${centirCount} Centir</span>` : ''}
          ${referidoCount > 0 ? `<span class="tag tag-referido">${referidoCount} Referido</span>` : ''}
          ${privadoCount  > 0 ? `<span class="tag tag-privado">${privadoCount} Privado</span>` : ''}
        </div>

        <div class="psicologa-card-actions">
          <button class="btn btn-primary btn-full"
                  onclick="Centir.app.navigate('detalle', ${p.id})"
                  style="background: linear-gradient(135deg, ${p.colorDark}, ${p.color}); border-color: ${p.colorDark};">
            <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            Ver detalles
          </button>
        </div>
      </div>
    `;
  },

  _updateHeaderTitle(title, breadcrumb) {
    const el = document.querySelector('.header-page-title');
    const bc = document.querySelector('.header-breadcrumb');
    if (el) el.textContent = title;
    if (bc) bc.innerHTML = breadcrumb ? `<span>${breadcrumb}</span>` : '';
  },
};
