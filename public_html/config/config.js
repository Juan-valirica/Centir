/* ============================================================
   CONFIG.JS — Configuración global de la aplicación
   Centir · Centro de Psicología
   ============================================================ */

window.Centir = window.Centir || {};

Centir.config = {
  appName:    'Centir',
  appTagline: 'Centro de Psicología',
  version:    '1.0.0',

  // Localización
  locale:   'es-CO',
  currency: 'COP',
  timezone: 'America/Bogota',

  // Formato de moneda colombiana
  formatCurrency(amount) {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  },

  // Formato de fecha legible en español
  formatDate(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('es-CO', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  },

  formatDateShort(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('es-CO', {
      day: 'numeric',
      month: 'short',
    });
  },

  formatDateFull(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('es-CO', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  },

  // Día de la semana abreviado (Lun, Mar, ...)
  getDayName(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('es-CO', { weekday: 'short' });
  },

  // Mes de la semana para el label del horario
  getWeekLabel(startDate) {
    const start = new Date(startDate);
    const end = new Date(startDate);
    end.setDate(end.getDate() + 5);

    const startStr = start.toLocaleDateString('es-CO', { day: 'numeric', month: 'short' });
    const endStr   = end.toLocaleDateString('es-CO', { day: 'numeric', month: 'short', year: 'numeric' });

    return `${startStr} – ${endStr}`;
  },

  // Iniciales de un nombre
  getInitials(name) {
    return name
      .split(' ')
      .filter(w => w.length > 2)
      .slice(0, 2)
      .map(w => w[0].toUpperCase())
      .join('');
  },

  // Lunes de la semana actual (como string YYYY-MM-DD)
  getCurrentWeekMonday() {
    const today = new Date();
    const day = today.getDay();
    const diff = today.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(today.setDate(diff));
    return monday.toISOString().split('T')[0];
  },

  // Fecha de hoy como YYYY-MM-DD
  today() {
    return new Date().toISOString().split('T')[0];
  },
};
