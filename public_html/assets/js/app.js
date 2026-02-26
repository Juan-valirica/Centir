/* ============================================================
   APP.JS — Router y estado global de la aplicación
   Centir · Centro de Psicología
   ============================================================ */

window.Centir = window.Centir || {};

Centir.app = {

  currentView: 'dashboard',

  // ── Inicialización ──────────────────────────────────────────
  init() {
    this._setCurrentDate();
    this._bindSidebarNav();
    this._navigateFromSession();
  },

  // ── Detectar rol desde sessionStorage o URL ──────────────────
  _navigateFromSession() {
    // Leer parámetro ?vista= de la URL
    const params = new URLSearchParams(window.location.search);
    const vistaParam = params.get('vista');

    if (vistaParam === 'psicologa') {
      // Leer psicóloga seleccionada
      const psicologaId = parseInt(sessionStorage.getItem('centir_psicologa_id')) || 1;
      Centir.viewPsicologa._psicologaId = psicologaId;
      this.navigate('psicologa');
      return;
    }

    // Si ya había una sesión de psicóloga guardada, restaurarla
    const role = sessionStorage.getItem('centir_role');
    if (role === 'psicologa') {
      const psicologaId = parseInt(sessionStorage.getItem('centir_psicologa_id')) || 1;
      Centir.viewPsicologa._psicologaId = psicologaId;
      this.navigate('psicologa');
      return;
    }

    this.navigate('dashboard');
  },

  // ── Navegación principal ────────────────────────────────────
  navigate(view, param) {
    // Ocultar todas las vistas
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

    // Actualizar nav items activos
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

      case 'psicologa':
        document.getElementById('view-psicologa').classList.add('active');
        Centir.viewPsicologa.render();
        break;

      default:
        document.getElementById('view-dashboard').classList.add('active');
        this._setHeader('Dashboard', 'Inicio');
        Centir.viewDashboard.render();
    }

    // Scroll al top del área de contenido
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
        const view = item.dataset.view;
        this.navigate(view);
      });
    });
  },

  // ── Fecha actual en el header ────────────────────────────────
  _setCurrentDate() {
    const dateEl = document.getElementById('header-date');
    if (!dateEl) return;

    const now = new Date();
    const formatted = now.toLocaleDateString('es-CO', {
      weekday: 'long',
      day:     'numeric',
      month:   'long',
      year:    'numeric',
    });

    // Capitalizar primera letra
    dateEl.textContent = formatted.charAt(0).toUpperCase() + formatted.slice(1);
  },
};

// ── Auto-inicio cuando el DOM esté listo ──────────────────────
document.addEventListener('DOMContentLoaded', () => {
  Centir.app.init();
});
