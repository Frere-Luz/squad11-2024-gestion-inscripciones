-- Insertar usuarios en la tabla `users`
-- Lo queria implementar para poder realiza prubas por parte del frontend
-- y puedan probar los demas compañeros pero nesecito configurarlo que se ejecute
-- despues de que springboot cree las tablas para que no me de error flaywey
--INSERT INTO `users` (email, is_delete, password, rol) VALUES
--('admin1@example.com', 0, 'adminpass1', 'ADMIN'),
--('admin2@example.com', 0, 'adminpass2', 'ADMIN'),
--('admin3@example.com', 0, 'adminpass3', 'ADMIN'),
--('mentor1@example.com', 0, 'mentorpass1', 'MENTOR'),
--('mentor2@example.com', 0, 'mentorpass2', 'MENTOR'),
--('mentor3@example.com', 0, 'mentorpass3', 'MENTOR'),
--('student1@example.com', 0, 'studentpass1', 'STUDENT'),
--('student2@example.com', 0, 'studentpass2', 'STUDENT'),
--('student3@example.com', 0, 'studentpass3', 'STUDENT'),
--('student4@example.com', 0, 'studentpass4', 'STUDENT');

INSERT INTO `users` (email, is_delete, password, rol) VALUES
('admin1@example.com', 0, 'eyJhbGciOiJIUzI1NiJ9.YWRtaW5wYXNzMQ.6LytXWkU0AlJQv8HzOq5pR5qriNhho8Kx3uJ7IJ6PXk', 'ADMIN'),
('admin2@example.com', 0, 'eyJhbGciOiJIUzI1NiJ9.YWRtaW5wYXNzMg.OOt44kt_RkjVJieH2Vd3lPaTxJ9WfTZAnugIuO5MsVQ', 'ADMIN'),
('admin3@example.com', 0, 'eyJhbGciOiJIUzI1NiJ9.YWRtaW5wYXNzMw.qVoTxW7uv5rj3KYFmVDwhHqG-ZHXz3d0t8fj_ZtdWRc', 'ADMIN'),
('mentor1@example.com', 0, 'eyJhbGciOiJIUzI1NiJ9.bWVudG9ycGFzczE.gDa5vFfTWzS9Zs0qPZYrpbdtLtpfV2wX1shHrkYpM_A', 'MENTOR'),
('mentor2@example.com', 0, 'eyJhbGciOiJIUzI1NiJ9.bWVudG9ycGFzczI.uXOxLjrfnAjcSxbxGZXWS5rAdxV1cw33Vdnt50_56PU', 'MENTOR'),
('mentor3@example.com', 0, 'eyJhbGciOiJIUzI1NiJ9.bWVudG9ycGFzczM.tFz2SjVCJ-3sebhuxMAsY6CmP8xAdUs3LVkKX3q3kBo', 'MENTOR'),
('student1@example.com', 0, 'eyJhbGciOiJIUzI1NiJ9.c3R1ZGVudHBhc3Mx.nTI77mk04tvJt1e_1UZ5WojWh5g0sTFKx0jQkYf38Ek', 'STUDENT'),
('student2@example.com', 0, 'eyJhbGciOiJIUzI1NiJ9.c3R1ZGVudHBhc3My.aoxc_0u7UTTn9SBh6i74BW3ENpsNzWpeydBdtn5PiA4', 'STUDENT'),
('student3@example.com', 0, 'eyJhbGciOiJIUzI1NiJ9.c3R1ZGVudHBhc3Mz.hbN5i4dROeyP7mBD4ftX6CvAAOkfBB5mPuivgPqS1Ko', 'STUDENT'),
('student4@example.com', 0, 'eyJhbGciOiJIUzI1NiJ9.c3R1ZGVudHBhc3M0.2uHZtT1F1PhJAPivqkHiBdH9ruSMDXXlZkQ0BtqMYRU', 'STUDENT');

-- Insertar registros en la tabla `admin`
INSERT INTO `admin` (user_id, last_name, name, img_url) VALUES
(1, 'Smith', 'John', 'https://example.com/images/admin1.jpg'),
(2, 'Johnson', 'Emily', 'https://example.com/images/admin2.jpg'),
(3, 'Brown', 'Michael', 'https://example.com/images/admin3.jpg');

-- Insertar registros en la tabla `mentor`
INSERT INTO `mentor` (user_id, birthdate, company, dni, img_url, last_name, linkedin, name, nationality, phone, studies, technologies) VALUES
(4, '1980-05-20', 'TechCorp', '12345678', 'https://example.com/images/mentor1.jpg', 'Williams', 'https://linkedin.com/in/mentor1', 'Anna', 'Argentina', '123456789', 'Ingeniería Informática', NULL),
(5, '1985-08-15', 'InnovaTech', '23456789', 'https://example.com/images/mentor2.jpg', 'Martinez', 'https://linkedin.com/in/mentor2', 'Carlos', 'España', '987654321', 'Lic. en Sistemas', NULL),
(6, '1975-12-01', 'DevSoft', '34567890', 'https://example.com/images/mentor3.jpg', 'González', 'https://linkedin.com/in/mentor3', 'Lucía', 'México', '1122334455', 'Ingeniería en Software', NULL);

-- Insertar registros en la tabla `student`
INSERT INTO `student` (user_id, birthdate, dni, graduation_year, img_url, last_name, linkedin, name, nationality, phone, technologies) VALUES
(7, '2000-03-10', '45678901', '2023', 'https://example.com/images/student1.jpg', 'Díaz', 'https://linkedin.com/in/student1', 'Mateo', 'Argentina', '2233445566', NULL),
(8, '1998-09-22', '56789012', '2021', 'https://example.com/images/student2.jpg', 'Pérez', 'https://linkedin.com/in/student2', 'Sofía', 'Chile', '6677889900', NULL),
(9, '2002-01-30', '67890123', '2024', 'https://example.com/images/student3.jpg', 'López', 'https://linkedin.com/in/student3', 'Martina', 'Uruguay', '3344556677', NULL),
(10, '1999-07-14', '78901234', '2022', 'https://example.com/images/student4.jpg', 'Hernández', 'https://linkedin.com/in/student4', 'Joaquín', 'Perú', '5566778899', NULL);
