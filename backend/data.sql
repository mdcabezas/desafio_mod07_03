CREATE DATABASE likeme;

CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000),descripcion VARCHAR(255), likes INT);

INSERT INTO "posts" ("titulo", "img", "descripcion", "likes") VALUES
('La Palta', 'https://images.pexels.com/photos/2228553/pexels-photo-2228553.jpeg', 'Las paltas son una fruta, no una verdura.', 4),
('Torre Eiffel', 'https://images.pexels.com/photos/60027/eiffel-tower-paris-france-tower-60027.jpeg', 'La Torre Eiffel puede ser 15 cm más alta durante el verano.', 8),
('Conejitos', 'https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg', 'Dato curioso: los conejos bebé se llaman gazapos.', 6);

