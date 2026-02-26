/* ============================================================
   APP.JS — Router y estado global (Admin Dashboard)
   Centir · Centro de Psicología
   ============================================================ */

window.Centir = window.Centir || {};

Centir.app = {

  currentView: 'dashboard',

  // ── Inicialización ──────────────────────────────────────────
  init() {
    // Guard: solo admins pueden ver este dashboard
    const role = sessionStorage.getItem('centir_role');
    if (role === 'psicologa') {
      window.location.href = 'dashboard-psicologa.html';
      return;
    }

    this._setCurrentDate();
    this._bindSidebarNav();
    this.navigate('dashboard');
  },

  // ── Navegación principal ────────────────────────────────────
  navigate(view, param) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.view === view);
    });

    this.currentView = view;

    switch (view) {
      case 'dashboard':
        document.getElementById('view-dashboard').classList.add('active');
        this._setHeader('Dashboard', 'Inicio');
        Centir.viewDashboard.render();
        break;

      case 'detalle':
        document.getElementById('view-detalle').classList.add('active');
        Centir.viewDetalle.render(param);
        break;

      case 'horario':
        document.getElementById('view-horario').classList.add('active');
        this._setHeader('Horario', 'Febrero 2026');
        Centir.viewHorario.render();
        break;

      default:
        document.getElementById('view-dashboard').classList.add('active');
        this._setHeader('Dashboard', 'Inicio');
        Centir.viewDashboard.render();
    }

    const contentArea = document.querySelector('.content-area');
    if (contentArea) contentArea.scrollTop = 0;
  },

  // ── Actualizar título del header ─────────────────────────────
  _setHeader(title, breadcrumb) {
    const titleEl = document.querySelector('.header-page-title');
    const breadEl = document.querySelector('.header-breadcrumb');
    if (titleEl) titleEl.textContent = title;
    if (breadEl) breadEl.innerHTML   = breadcrumb ? `<span>${breadcrumb}</span>` : '';
  },

  // ── Sidebar navigation ──────────────────────────────────────
  _bindSidebarNav() {
    document.querySelectorAll('.nav-item[data-view]').forEach(item => {
      item.addEventListener('click', () => {
        this.navigate(item.dataset.view);
      });
    });
  },

  // ── Fecha actual en el header ────────────────────────────────
  _setCurrentDate() {
    const dateEl = document.getElementById('header-date');
    if (!dateEl) return;
    const now = new Date();
    const formatted = now.toLocaleDateString('es-CO', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
    });
    dateEl.textContent = formatted.charAt(0).toUpperCase() + formatted.slice(1);
  },
};

document.addEventListener('DOMContentLoaded', () => {
  Centir.app.init();
});
