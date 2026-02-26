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
      titulo: 'Psicóloga',
      especialidad: 'Adultos · Ansiedad y Depresión',
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
      titulo: 'Psicóloga',
      especialidad: 'Terapia de Pareja y Familia',
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
      titulo: 'Psicóloga',
      especialidad: 'Terapia Infantil y Adolescentes',
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
      titulo: 'Psicóloga',
      especialidad: 'Duelos, Pérdidas y Crisis Vitales',
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
      titulo: 'Psicóloga',
      especialidad: 'Arte Terapia y Expresión Creativa',
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

  /* ── Pacientes ──────────────────────────────────────────── */
  pacientes: [
    // Ana María Rodríguez (psicologaId: 1)
    { id: 1,  nombre: 'Carlos Mendoza',      telefono: '3001110001', email: 'carlos.m@email.com',    categoria: 'centir',   psicologaId: 1, fechaIngreso: '2025-06-15', notas: '' },
    { id: 2,  nombre: 'María López García',  telefono: '3001110002', email: 'maria.l@email.com',     categoria: 'centir',   psicologaId: 1, fechaIngreso: '2025-04-20', notas: '' },
    { id: 3,  nombre: 'Juan Hernández',      telefono: '3001110003', email: 'juan.h@email.com',      categoria: 'referido', psicologaId: 1, fechaIngreso: '2025-10-05', notas: '' },
    { id: 4,  nombre: 'Rosa Elena Gómez',    telefono: '3001110004', email: 'rosa.g@email.com',      categoria: 'privado',  psicologaId: 1, fechaIngreso: '2025-12-01', notas: '' },
    { id: 5,  nombre: 'Patricia Sánchez',    telefono: '3001110005', email: 'patricia.s@email.com',  categoria: 'referido', psicologaId: 1, fechaIngreso: '2026-02-10', notas: '' },
    { id: 6,  nombre: 'Alejandro Torres',    telefono: '3001110006', email: 'alej.t@email.com',      categoria: 'privado',  psicologaId: 1, fechaIngreso: '2025-08-22', notas: '' },
    { id: 7,  nombre: 'Claudia Jiménez',     telefono: '3001110007', email: 'claudia.j@email.com',   categoria: 'centir',   psicologaId: 1, fechaIngreso: '2025-11-30', notas: '' },
    // Paula Valentina Restrepo (psicologaId: 2)
    { id: 8,  nombre: 'Diego Ramírez',       telefono: '3002220001', email: 'diego.r@email.com',     categoria: 'centir',   psicologaId: 2, fechaIngreso: '2025-09-01', notas: '' },
    { id: 9,  nombre: 'Sofía Ruiz Mora',     telefono: '3002220002', email: 'sofia.rm@email.com',    categoria: 'centir',   psicologaId: 2, fechaIngreso: '2025-07-15', notas: '' },
    { id: 10, nombre: 'Luis Felipe Castro',  telefono: '3002220003', email: 'lf.castro@email.com',   categoria: 'privado',  psicologaId: 2, fechaIngreso: '2025-05-20', notas: '' },
    { id: 11, nombre: 'Natalia Vargas',      telefono: '3002220004', email: 'natalia.v@email.com',   categoria: 'referido', psicologaId: 2, fechaIngreso: '2025-11-10', notas: '' },
    { id: 12, nombre: 'Valentina Cruz',      telefono: '3002220005', email: 'valen.c@email.com',     categoria: 'privado',  psicologaId: 2, fechaIngreso: '2025-12-05', notas: '' },
    { id: 13, nombre: 'Mario Peñaloza',      telefono: '3002220006', email: 'mario.p@email.com',     categoria: 'centir',   psicologaId: 2, fechaIngreso: '2026-01-20', notas: '' },
    // Carla Sofía Vargas (psicologaId: 3)
    { id: 14, nombre: 'Tomás Herrera',       telefono: '3003330001', email: 'tomas.h@email.com',     categoria: 'centir',   psicologaId: 3, fechaIngreso: '2025-03-10', notas: '' },
    { id: 15, nombre: 'Isabella Moreno',     telefono: '3003330002', email: 'isa.m@email.com',       categoria: 'centir',   psicologaId: 3, fechaIngreso: '2025-01-15', notas: '' },
    { id: 16, nombre: 'Sebastián Díaz',      telefono: '3003330003', email: 'seba.d@email.com',      categoria: 'referido', psicologaId: 3, fechaIngreso: '2025-06-01', notas: '' },
    { id: 17, nombre: 'Valeria Ospina',      telefono: '3003330004', email: 'vale.o@email.com',      categoria: 'privado',  psicologaId: 3, fechaIngreso: '2025-10-20', notas: '' },
    { id: 18, nombre: 'Mariana Lozano',      telefono: '3003330005', email: 'mariana.l@email.com',   categoria: 'privado',  psicologaId: 3, fechaIngreso: '2025-08-05', notas: '' },
    { id: 19, nombre: 'Felipe Arango',       telefono: '3003330006', email: 'felipe.a@email.com',    categoria: 'centir',   psicologaId: 3, fechaIngreso: '2025-12-15', notas: '' },
    // Daniela Martínez López (psicologaId: 4)
    { id: 20, nombre: 'Ricardo Salcedo',     telefono: '3004440001', email: 'ricardo.s@email.com',   categoria: 'privado',  psicologaId: 4, fechaIngreso: '2024-10-01', notas: '' },
    { id: 21, nombre: 'Ana Isabel Benítez',  telefono: '3004440002', email: 'anaisa.b@email.com',    categoria: 'centir',   psicologaId: 4, fechaIngreso: '2025-05-10', notas: '' },
    { id: 22, nombre: 'Santiago Mora',       telefono: '3004440003', email: 'santi.m@email.com',     categoria: 'referido', psicologaId: 4, fechaIngreso: '2025-08-20', notas: '' },
    { id: 23, nombre: 'Elena Ponce',         telefono: '3004440004', email: 'elena.p@email.com',     categoria: 'centir',   psicologaId: 4, fechaIngreso: '2025-11-05', notas: '' },
    // Lucía Fernández Ruiz (psicologaId: 5)
    { id: 24, nombre: 'Gabriela Ríos',       telefono: '3005550001', email: 'gabi.r@email.com',      categoria: 'centir',   psicologaId: 5, fechaIngreso: '2026-01-05', notas: '' },
    { id: 25, nombre: 'Andrés Mejía',        telefono: '3005550002', email: 'andres.m@email.com',    categoria: 'privado',  psicologaId: 5, fechaIngreso: '2025-09-15', notas: '' },
    { id: 26, nombre: 'Cristina Velásquez',  telefono: '3005550003', email: 'cris.v@email.com',      categoria: 'referido', psicologaId: 5, fechaIngreso: '2025-07-20', notas: '' },
    { id: 27, nombre: 'Héctor Quintero',     telefono: '3005550004', email: 'hector.q@email.com',    categoria: 'centir',   psicologaId: 5, fechaIngreso: '2025-12-10', notas: '' },
    { id: 28, nombre: 'Laura Montoya',       telefono: '3005550005', email: 'laura.mo@email.com',    categoria: 'privado',  psicologaId: 5, fechaIngreso: '2025-10-25', notas: '' },
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

    // ── Citas de hoy 2026-02-26 ──────────────────────────────
    { id: 64, psicologaId: 1, paciente: 'Carlos Mendoza',      categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-26', hora: '09:00', valor: 120000, consultorio: 'Consultorio 1', sesionNumero: 10 },
    { id: 65, psicologaId: 1, paciente: 'Rosa Elena Gómez',    categoria: 'privado',  modalidad: 'presencial', fecha: '2026-02-26', hora: '11:00', valor: 180000, consultorio: 'Consultorio 1', sesionNumero: 4  },
    { id: 66, psicologaId: 1, paciente: 'Patricia Sánchez',    categoria: 'referido', modalidad: 'virtual',    fecha: '2026-02-26', hora: '14:00', valor: 150000, consultorio: 'Sala Virtual',  sesionNumero: 3  },
    { id: 67, psicologaId: 2, paciente: 'Diego Ramírez',       categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-26', hora: '08:00', valor: 120000, consultorio: 'Consultorio 2', sesionNumero: 8  },
    { id: 68, psicologaId: 2, paciente: 'Valentina Cruz',      categoria: 'privado',  modalidad: 'presencial', fecha: '2026-02-26', hora: '10:00', valor: 200000, consultorio: 'Consultorio 2', sesionNumero: 5  },
    { id: 69, psicologaId: 3, paciente: 'Isabella Moreno (8)', categoria: 'centir',   modalidad: 'presencial', fecha: '2026-02-26', hora: '15:00', valor: 120000, consultorio: 'Consultorio 3', sesionNumero: 23 },
    { id: 70, psicologaId: 4, paciente: 'Ricardo Salcedo',     categoria: 'privado',  modalidad: 'presencial', fecha: '2026-02-26', hora: '11:00', valor: 220000, consultorio: 'Consultorio 1', sesionNumero: 27 },
    { id: 71, psicologaId: 5, paciente: 'Laura Montoya',       categoria: 'privado',  modalidad: 'presencial', fecha: '2026-02-26', hora: '09:00', valor: 280000, consultorio: 'Consultorio 3', sesionNumero: 3  },

    // ── Próximas citas (marzo 2026) ──────────────────────────
    { id: 72, psicologaId: 1, paciente: 'Carlos Mendoza',      categoria: 'centir',   modalidad: 'presencial', fecha: '2026-03-02', hora: '09:00', valor: 120000, consultorio: 'Consultorio 1', sesionNumero: 11 },
    { id: 73, psicologaId: 1, paciente: 'María López García',  categoria: 'centir',   modalidad: 'presencial', fecha: '2026-03-03', hora: '10:00', valor: 120000, consultorio: 'Consultorio 1', sesionNumero: 14 },
    { id: 74, psicologaId: 1, paciente: 'Juan Hernández',      categoria: 'referido', modalidad: 'virtual',    fecha: '2026-03-05', hora: '11:00', valor: 150000, consultorio: 'Sala Virtual',  sesionNumero: 6  },
    { id: 75, psicologaId: 1, paciente: 'Alejandro Torres',    categoria: 'privado',  modalidad: 'presencial', fecha: '2026-03-05', hora: '09:00', valor: 180000, consultorio: 'Consultorio 1', sesionNumero: 7  },
    { id: 76, psicologaId: 1, paciente: 'Claudia Jiménez',     categoria: 'centir',   modalidad: 'presencial', fecha: '2026-03-09', hora: '09:00', valor: 120000, consultorio: 'Consultorio 1', sesionNumero: 4  },
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

  // ── Helpers para el Dashboard de Psicólogas ─────────────

  getPacientesDePsicologa(psicologaId) {
    return this.pacientes.filter(p => p.psicologaId === psicologaId);
  },

  getConsultasHoy(psicologaId) {
    const hoy = Centir.config.today();
    return this.consultas
      .filter(c => c.psicologaId === psicologaId && c.fecha === hoy)
      .sort((a, b) => a.hora.localeCompare(b.hora));
  },

  getProximasCitas(psicologaId, limite = 5) {
    const hoy = Centir.config.today();
    return this.consultas
      .filter(c => c.psicologaId === psicologaId && c.fecha > hoy)
      .sort((a, b) => a.fecha.localeCompare(b.fecha) || a.hora.localeCompare(b.hora))
      .slice(0, limite);
  },

  getConsultoriosDisponibles(fecha, hora) {
    const ocupados = this.consultas
      .filter(c => c.fecha === fecha && c.hora === hora && c.modalidad === 'presencial')
      .map(c => c.consultorio);
    return this.consultorios
      .filter(c => c.tipo === 'presencial')
      .map(c => ({
        ...c,
        disponible: !ocupados.includes(c.nombre),
        ocupadoPor: ocupados.includes(c.nombre)
          ? (this.consultas.find(co => co.fecha === fecha && co.hora === hora && co.consultorio === c.nombre)?.paciente || null)
          : null,
      }));
  },

  createPaciente(data) {
    const newId = Math.max(...this.pacientes.map(p => p.id)) + 1;
    const paciente = { id: newId, ...data, fechaIngreso: Centir.config.today() };
    this.pacientes.push(paciente);
    return paciente;
  },

  createConsulta(data) {
    const newId = Math.max(...this.consultas.map(c => c.id)) + 1;
    const sesionNumero = this.consultas
      .filter(c => c.psicologaId === data.psicologaId && c.paciente === data.paciente).length + 1;
    const consulta = { id: newId, sesionNumero, ...data };
    this.consultas.push(consulta);
    return consulta;
  },
};
