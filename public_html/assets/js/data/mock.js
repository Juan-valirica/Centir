/* ============================================================
   MOCK.JS — Datos de prueba realistas para el dashboard
   Centir · Centro de Psicología
   ============================================================ */

window.Centir = window.Centir || {};

Centir.data = {

  /* ── Psicólogas ─────────────────────────────────────────── */
  psicologas: [
    {
      id: 1,
      nombre: 'Ana María Rodríguez',
      titulo: 'Psicóloga Clínica',
      especialidad: 'Psicología Clínica y Adultos',
      email: 'ana.rodriguez@centir.com',
      telefono: '+57 315 234 5678',
      color: '#9cc3c0',
      colorDark: '#5a8a87',
      colorLight: '#eef6f5',
      estado: 'activa',
    },
    {
      id: 2,
      nombre: 'Paula Valentina Restrepo',
      titulo: 'Psicóloga Cognitiva',
      especialidad: 'Terapia Cognitivo-Conductual',
      email: 'paula.restrepo@centir.com',
      telefono: '+57 320 987 6543',
      color: '#9787a3',
      colorDark: '#5e5270',
      colorLight: '#f0edf5',
      estado: 'activa',
    },
    {
      id: 3,
      nombre: 'Carla Sofía Vargas',
      titulo: 'Psicóloga Infantil',
      especialidad: 'Psicología Infantil y Adolescentes',
      email: 'carla.vargas@centir.com',
      telefono: '+57 311 456 7890',
      color: '#c4a0b8',
      colorDark: '#8a5e78',
      colorLight: '#f5eaf1',
      estado: 'activa',
    },
    {
      id: 4,
      nombre: 'Daniela Martínez López',
      titulo: 'Psicoanalista',
      especialidad: 'Psicoanálisis y Terapia de Pareja',
      email: 'daniela.martinez@centir.com',
      telefono: '+57 300 111 2233',
      color: '#a0c4b0',
      colorDark: '#3d7a5a',
      colorLight: '#e8f5ee',
      estado: 'activa',
    },
    {
      id: 5,
      nombre: 'Lucía Fernández Ruiz',
      titulo: 'Neuropsicóloga',
      especialidad: 'Neuropsicología y Evaluación',
      email: 'lucia.fernandez@centir.com',
      telefono: '+57 316 789 0123',
      color: '#c4b870',
      colorDark: '#7a7030',
      colorLight: '#f5f0e0',
      estado: 'activa',
    },
  ],

  /* ── Consultorios ───────────────────────────────────────── */
  consultorios: [
    { id: 1, nombre: 'Consultorio 1', tipo: 'presencial' },
    { id: 2, nombre: 'Consultorio 2', tipo: 'presencial' },
    { id: 3, nombre: 'Consultorio 3', tipo: 'presencial' },
    { id: 4, nombre: 'Sala Virtual',  tipo: 'virtual' },
  ],

  /* ── Consultas (febrero 2026) ───────────────────────────── */
  consultas: [
    // ── Ana María Rodríguez (id: 1) ─────────────────────────
    { id:  1, psicologaId: 1, paciente: 'Carlos Mendoza',      categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-02', hora: '09:00', valor: 120000, consultorio: 'Consultorio 1', sesionNumero: 8 },
    { id:  2, psicologaId: 1, paciente: 'María López García',  categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-03', hora: '10:00', valor: 120000, consultorio: 'Consultorio 1', sesionNumero: 12 },
    { id:  3, psicologaId: 1, paciente: 'Juan Hernández',      categoria: 'referido', modalidad: 'virtual',    fecha: '2026-02-05', hora: '11:00', valor: 150000, consultorio: 'Sala Virtual',  sesionNumero: 4 },
    { id:  4, psicologaId: 1, paciente: 'Rosa Elena Gómez',    categoria: 'privado',  modalidad: 'presencial', fecha: '2026-02-09', hora: '09:00', valor: 180000, consultorio: 'Consultorio 1', sesionNumero: 2 },
    { id:  5, psicologaId: 1, paciente: 'Carlos Mendoza',      categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-09', hora: '10:00', valor: 120000, consultorio: 'Consultorio 1', sesionNumero: 9 },
    { id:  6, psicologaId: 1, paciente: 'Patricia Sánchez',    categoria: 'referido', modalidad: 'virtual',    fecha: '2026-02-10', hora: '14:00', valor: 150000, consultorio: 'Sala Virtual',  sesionNumero: 1 },
    { id:  7, psicologaId: 1, paciente: 'Alejandro Torres',    categoria: 'privado',  modalidad: 'presencial', fecha: '2026-02-12', hora: '09:00', valor: 180000, consultorio: 'Consultorio 1', sesionNumero: 6 },
    { id:  8, psicologaId: 1, paciente: 'María López García',  categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-17', hora: '10:00', valor: 120000, consultorio: 'Consultorio 1', sesionNumero: 13 },
    { id:  9, psicologaId: 1, paciente: 'Juan Hernández',      categoria: 'referido', modalidad: 'virtual',    fecha: '2026-02-19', hora: '11:00', valor: 150000, consultorio: 'Sala Virtual',  sesionNumero: 5 },
    { id: 10, psicologaId: 1, paciente: 'Claudia Jiménez',     categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-23', hora: '09:00', valor: 120000, consultorio: 'Consultorio 1', sesionNumero: 3 },
    { id: 11, psicologaId: 1, paciente: 'Rosa Elena Gómez',    categoria: 'privado',  modalidad: 'presencial', fecha: '2026-02-23', hora: '11:00', valor: 180000, consultorio: 'Consultorio 1', sesionNumero: 3 },
    { id: 12, psicologaId: 1, paciente: 'Patricia Sánchez',    categoria: 'referido', modalidad: 'virtual',    fecha: '2026-02-24', hora: '14:00', valor: 150000, consultorio: 'Sala Virtual',  sesionNumero: 2 },

    // ── Paula Valentina Restrepo (id: 2) ─────────────────────
    { id: 13, psicologaId: 2, paciente: 'Diego Ramírez',        categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-02', hora: '08:00', valor: 120000, consultorio: 'Consultorio 2', sesionNumero: 5 },
    { id: 14, psicologaId: 2, paciente: 'Sofía Ruiz Mora',      categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-03', hora: '09:00', valor: 120000, consultorio: 'Consultorio 2', sesionNumero: 7 },
    { id: 15, psicologaId: 2, paciente: 'Luis Felipe Castro',   categoria: 'privado',  modalidad: 'presencial', fecha: '2026-02-04', hora: '10:00', valor: 200000, consultorio: 'Consultorio 2', sesionNumero: 10 },
    { id: 16, psicologaId: 2, paciente: 'Natalia Vargas',       categoria: 'referido', modalidad: 'virtual',    fecha: '2026-02-05', hora: '15:00', valor: 150000, consultorio: 'Sala Virtual',  sesionNumero: 2 },
    { id: 17, psicologaId: 2, paciente: 'Diego Ramírez',        categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-09', hora: '08:00', valor: 120000, consultorio: 'Consultorio 2', sesionNumero: 6 },
    { id: 18, psicologaId: 2, paciente: 'Valentina Cruz',       categoria: 'privado',  modalidad: 'presencial', fecha: '2026-02-10', hora: '10:00', valor: 200000, consultorio: 'Consultorio 2', sesionNumero: 3 },
    { id: 19, psicologaId: 2, paciente: 'Sofía Ruiz Mora',      categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-11', hora: '09:00', valor: 120000, consultorio: 'Consultorio 2', sesionNumero: 8 },
    { id: 20, psicologaId: 2, paciente: 'Luis Felipe Castro',   categoria: 'privado',  modalidad: 'presencial', fecha: '2026-02-16', hora: '10:00', valor: 200000, consultorio: 'Consultorio 2', sesionNumero: 11 },
    { id: 21, psicologaId: 2, paciente: 'Natalia Vargas',       categoria: 'referido', modalidad: 'virtual',    fecha: '2026-02-17', hora: '15:00', valor: 150000, consultorio: 'Sala Virtual',  sesionNumero: 3 },
    { id: 22, psicologaId: 2, paciente: 'Mario Peñaloza',       categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-18', hora: '08:00', valor: 120000, consultorio: 'Consultorio 2', sesionNumero: 1 },
    { id: 23, psicologaId: 2, paciente: 'Valentina Cruz',       categoria: 'privado',  modalidad: 'presencial', fecha: '2026-02-23', hora: '10:00', valor: 200000, consultorio: 'Consultorio 2', sesionNumero: 4 },
    { id: 24, psicologaId: 2, paciente: 'Diego Ramírez',        categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-24', hora: '08:00', valor: 120000, consultorio: 'Consultorio 2', sesionNumero: 7 },
    { id: 25, psicologaId: 2, paciente: 'Mario Peñaloza',       categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-25', hora: '09:00', valor: 120000, consultorio: 'Consultorio 2', sesionNumero: 2 },

    // ── Carla Sofía Vargas (id: 3) ───────────────────────────
    { id: 26, psicologaId: 3, paciente: 'Tomás Herrera (10)',   categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-02', hora: '14:00', valor: 120000, consultorio: 'Consultorio 3', sesionNumero: 15 },
    { id: 27, psicologaId: 3, paciente: 'Isabella Moreno (8)',  categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-03', hora: '15:00', valor: 120000, consultorio: 'Consultorio 3', sesionNumero: 20 },
    { id: 28, psicologaId: 3, paciente: 'Sebastián Díaz (14)', categoria: 'referido', modalidad: 'virtual',    fecha: '2026-02-04', hora: '16:00', valor: 150000, consultorio: 'Sala Virtual',  sesionNumero: 8 },
    { id: 29, psicologaId: 3, paciente: 'Valeria Ospina (7)',   categoria: 'privado',  modalidad: 'presencial', fecha: '2026-02-05', hora: '14:00', valor: 180000, consultorio: 'Consultorio 3', sesionNumero: 4 },
    { id: 30, psicologaId: 3, paciente: 'Tomás Herrera (10)',   categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-09', hora: '14:00', valor: 120000, consultorio: 'Consultorio 3', sesionNumero: 16 },
    { id: 31, psicologaId: 3, paciente: 'Mariana Lozano (12)', categoria: 'privado',  modalidad: 'presencial', fecha: '2026-02-10', hora: '15:00', valor: 180000, consultorio: 'Consultorio 3', sesionNumero: 6 },
    { id: 32, psicologaId: 3, paciente: 'Isabella Moreno (8)',  categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-11', hora: '15:00', valor: 120000, consultorio: 'Consultorio 3', sesionNumero: 21 },
    { id: 33, psicologaId: 3, paciente: 'Sebastián Díaz (14)', categoria: 'referido', modalidad: 'virtual',    fecha: '2026-02-12', hora: '16:00', valor: 150000, consultorio: 'Sala Virtual',  sesionNumero: 9 },
    { id: 34, psicologaId: 3, paciente: 'Tomás Herrera (10)',   categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-16', hora: '14:00', valor: 120000, consultorio: 'Consultorio 3', sesionNumero: 17 },
    { id: 35, psicologaId: 3, paciente: 'Valeria Ospina (7)',   categoria: 'privado',  modalidad: 'presencial', fecha: '2026-02-17', hora: '14:00', valor: 180000, consultorio: 'Consultorio 3', sesionNumero: 5 },
    { id: 36, psicologaId: 3, paciente: 'Felipe Arango (16)',   categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-18', hora: '16:00', valor: 120000, consultorio: 'Consultorio 3', sesionNumero: 2 },
    { id: 37, psicologaId: 3, paciente: 'Isabella Moreno (8)',  categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-23', hora: '15:00', valor: 120000, consultorio: 'Consultorio 3', sesionNumero: 22 },
    { id: 38, psicologaId: 3, paciente: 'Mariana Lozano (12)', categoria: 'privado',  modalidad: 'presencial', fecha: '2026-02-24', hora: '15:00', valor: 180000, consultorio: 'Consultorio 3', sesionNumero: 7 },
    { id: 39, psicologaId: 3, paciente: 'Sebastián Díaz (14)', categoria: 'referido', modalidad: 'virtual',    fecha: '2026-02-25', hora: '16:00', valor: 150000, consultorio: 'Sala Virtual',  sesionNumero: 10 },

    // ── Daniela Martínez López (id: 4) ───────────────────────
    { id: 40, psicologaId: 4, paciente: 'Ricardo Salcedo',          categoria: 'privado',  modalidad: 'presencial', fecha: '2026-02-02', hora: '11:00', valor: 220000, consultorio: 'Consultorio 1', sesionNumero: 24 },
    { id: 41, psicologaId: 4, paciente: 'Ana Isabel Benítez',       categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-03', hora: '14:00', valor: 120000, consultorio: 'Consultorio 2', sesionNumero: 9 },
    { id: 42, psicologaId: 4, paciente: 'Camila & Rodrigo (pareja)',categoria: 'privado',  modalidad: 'presencial', fecha: '2026-02-04', hora: '11:00', valor: 250000, consultorio: 'Consultorio 1', sesionNumero: 12 },
    { id: 43, psicologaId: 4, paciente: 'Santiago Mora',            categoria: 'referido', modalidad: 'virtual',    fecha: '2026-02-05', hora: '16:00', valor: 150000, consultorio: 'Sala Virtual',  sesionNumero: 6 },
    { id: 44, psicologaId: 4, paciente: 'Ricardo Salcedo',          categoria: 'privado',  modalidad: 'presencial', fecha: '2026-02-09', hora: '11:00', valor: 220000, consultorio: 'Consultorio 1', sesionNumero: 25 },
    { id: 45, psicologaId: 4, paciente: 'Ana Isabel Benítez',       categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-11', hora: '14:00', valor: 120000, consultorio: 'Consultorio 2', sesionNumero: 10 },
    { id: 46, psicologaId: 4, paciente: 'Camila & Rodrigo (pareja)',categoria: 'privado',  modalidad: 'presencial', fecha: '2026-02-12', hora: '11:00', valor: 250000, consultorio: 'Consultorio 1', sesionNumero: 13 },
    { id: 47, psicologaId: 4, paciente: 'Elena Ponce',              categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-16', hora: '14:00', valor: 120000, consultorio: 'Consultorio 2', sesionNumero: 4 },
    { id: 48, psicologaId: 4, paciente: 'Santiago Mora',            categoria: 'referido', modalidad: 'virtual',    fecha: '2026-02-17', hora: '16:00', valor: 150000, consultorio: 'Sala Virtual',  sesionNumero: 7 },
    { id: 49, psicologaId: 4, paciente: 'Ricardo Salcedo',          categoria: 'privado',  modalidad: 'presencial', fecha: '2026-02-18', hora: '11:00', valor: 220000, consultorio: 'Consultorio 1', sesionNumero: 26 },
    { id: 50, psicologaId: 4, paciente: 'Elena Ponce',              categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-23', hora: '14:00', valor: 120000, consultorio: 'Consultorio 2', sesionNumero: 5 },
    { id: 51, psicologaId: 4, paciente: 'Camila & Rodrigo (pareja)',categoria: 'privado',  modalidad: 'presencial', fecha: '2026-02-25', hora: '11:00', valor: 250000, consultorio: 'Consultorio 1', sesionNumero: 14 },

    // ── Lucía Fernández Ruiz (id: 5) ─────────────────────────
    { id: 52, psicologaId: 5, paciente: 'Gabriela Ríos (Eval.)',    categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-03', hora: '08:00', valor: 350000, consultorio: 'Consultorio 3', sesionNumero: 1 },
    { id: 53, psicologaId: 5, paciente: 'Andrés Mejía',             categoria: 'privado',  modalidad: 'presencial', fecha: '2026-02-04', hora: '09:00', valor: 280000, consultorio: 'Consultorio 3', sesionNumero: 5 },
    { id: 54, psicologaId: 5, paciente: 'Cristina Velásquez',       categoria: 'referido', modalidad: 'virtual',    fecha: '2026-02-05', hora: '10:00', valor: 200000, consultorio: 'Sala Virtual',  sesionNumero: 3 },
    { id: 55, psicologaId: 5, paciente: 'Gabriela Ríos (Eval.)',    categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-10', hora: '08:00', valor: 350000, consultorio: 'Consultorio 3', sesionNumero: 2 },
    { id: 56, psicologaId: 5, paciente: 'Andrés Mejía',             categoria: 'privado',  modalidad: 'presencial', fecha: '2026-02-11', hora: '09:00', valor: 280000, consultorio: 'Consultorio 3', sesionNumero: 6 },
    { id: 57, psicologaId: 5, paciente: 'Héctor Quintero (Eval.)',  categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-12', hora: '08:00', valor: 350000, consultorio: 'Consultorio 3', sesionNumero: 1 },
    { id: 58, psicologaId: 5, paciente: 'Cristina Velásquez',       categoria: 'referido', modalidad: 'virtual',    fecha: '2026-02-17', hora: '10:00', valor: 200000, consultorio: 'Sala Virtual',  sesionNumero: 4 },
    { id: 59, psicologaId: 5, paciente: 'Andrés Mejía',             categoria: 'privado',  modalidad: 'presencial', fecha: '2026-02-18', hora: '09:00', valor: 280000, consultorio: 'Consultorio 3', sesionNumero: 7 },
    { id: 60, psicologaId: 5, paciente: 'Héctor Quintero (Eval.)',  categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-19', hora: '08:00', valor: 350000, consultorio: 'Consultorio 3', sesionNumero: 2 },
    { id: 61, psicologaId: 5, paciente: 'Laura Montoya',            categoria: 'privado',  modalidad: 'presencial', fecha: '2026-02-23', hora: '09:00', valor: 280000, consultorio: 'Consultorio 3', sesionNumero: 2 },
    { id: 62, psicologaId: 5, paciente: 'Cristina Velásquez',       categoria: 'referido', modalidad: 'virtual',    fecha: '2026-02-24', hora: '10:00', valor: 200000, consultorio: 'Sala Virtual',  sesionNumero: 5 },
    { id: 63, psicologaId: 5, paciente: 'Gabriela Ríos (Eval.)',    categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-25', hora: '08:00', valor: 120000, consultorio: 'Consultorio 3', sesionNumero: 3 },
  ],

  /* ── Helpers ────────────────────────────────────────────── */

  getPsicologa(id) {
    return this.psicologas.find(p => p.id === id) || null;
  },

  getConsultasPorPsicologa(psicologaId) {
    return this.consultas
      .filter(c => c.psicologaId === psicologaId)
      .sort((a, b) => a.fecha.localeCompare(b.fecha));
  },

  getPacientesActivosPorPsicologa(psicologaId) {
    const consultas = this.getConsultasPorPsicologa(psicologaId);
    return new Set(consultas.map(c => c.paciente)).size;
  },

  getFacturacionMensualPorPsicologa(psicologaId) {
    return this.getConsultasPorPsicologa(psicologaId)
      .reduce((total, c) => total + c.valor, 0);
  },

  getConsultasPorRango(fechaInicio, fechaFin) {
    return this.consultas
      .filter(c => c.fecha >= fechaInicio && c.fecha <= fechaFin)
      .sort((a, b) => a.fecha.localeCompare(b.fecha) || a.hora.localeCompare(b.hora));
  },

  getTotalesGlobales() {
    const totalPacientes = new Set(this.consultas.map(c => c.paciente)).size;
    const totalFacturado = this.consultas.reduce((t, c) => t + c.valor, 0);
    const totalConsultas = this.consultas.length;
    return { totalPacientes, totalFacturado, totalConsultas };
  },
};
