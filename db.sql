CREATE TABLE trabajador (
    TraID SERIAL PRIMARY KEY,
    TraNombre VARCHAR(100) NOT NULL,
    TraApellido VARCHAR(100) NOT NULL,
    TraCorreo VARCHAR(100) UNIQUE NOT NULL,
    TraCelular VARCHAR(20) UNIQUE NOT NULL,
    TraContrasena TEXT NOT NULL,
    TraEstado VARCHAR(20) DEFAULT 'activo',
    TraFecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ubicacion (
    id SERIAL PRIMARY KEY,
    trabajador_id INT REFERENCES trabajador(id) ON DELETE CASCADE,
    ciudad VARCHAR(100),
    direccion TEXT,
    latitud DECIMAL(9,6),
    longitud DECIMAL(9,6)
    -- para usar PostGIS es: geometry(Point, 4326)
);

CREATE TABLE habilidad (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    categoria VARCHAR(100)
);

CREATE TABLE trabajador_habilidad (
    id SERIAL PRIMARY KEY,
    trabajador_id INT REFERENCES trabajador(id) ON DELETE CASCADE,
    habilidad_id INT REFERENCES habilidad(id) ON DELETE CASCADE
);

CREATE TABLE documento (
    id SERIAL PRIMARY KEY,
    trabajador_id INT REFERENCES trabajador(id) ON DELETE CASCADE,
    tipo VARCHAR(50), 
    url TEXT NOT NULL,
    verificado BOOLEAN DEFAULT FALSE
);

CREATE TABLE disponibilidad (
    id SERIAL PRIMARY KEY,
    trabajador_id INT REFERENCES trabajador(id) ON DELETE CASCADE,
    dia VARCHAR(10),
    hora_inicio TIME,
    hora_fin TIME
);
