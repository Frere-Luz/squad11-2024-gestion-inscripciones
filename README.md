# Acelerador 2024 POLO IT - Squad 11

## Gestión de inscripciones

El objetivo del MVP es poder mostrar un proyecto de un sistema de gestión de inscripciones para actividades como el acelerador, que ocurrirá entre un tiempo determinado y podrá vincular de forma automática Mentores Técnicos con Egresados en base a distintos parámetros de configuración de equipos (Tamaño de equipos máximos, perfiles de egresados por equipos, mentores técnicos por tecnología). También podrán tener la posibilidad de manejar la comunicación vía e-mails entre los candidatos/mentores y hacer el seguimiento durante la mentoría de los egresados.

Es un sistema para organizar, acceder y participar de los projetos Acelerador. Tanto para los administradores como para los egresados invitados a participar y para los mentores que quieren anotarse.

### Requisitos

* Java 17
  
* Maven
    
* Node v20.17.0
  * Si no lo tienes, puedes descargarlo de [aquí](https://nodejs.org/en/download/package-manager).
- MySql (opcional)


## Ejecución del Proyecto
### Demo

1) Bajar el proyecto

```bash
git clone https://github.com/Frere-Luz/squad11-2024-gestion-inscripciones.git
```

2) Iniciar el backend

```bash
cd back
mvn spring-boot:run -D spring-boot.run.profiles=dev
```

Estas son las opciones de perfiles para ejecutar el backend: dev, qa, prod

Configuración basica: back\src\main\resources\application.yml

Y perfiles para customizar las opciones según el ambiente:
- back\src\main\resources\application-dev.yml
- back\src\main\resources\application-prod.yml
- back\src\main\resources\application-qa.yml

Si se necesita modificar el nivel de loggin:  back\src\main\resources\logback.xml

1) Iniciar el frontend

```bash
cd frontend
npm install
npm run dev
```

2) Acceder a la aplicación

Sistema - http://localhost:5173/

API - http://localhost:8080/swagger-ui/index.html


## Backend
Java + Spring Boot + Swagger + Mysql/HB2 + Spring Security +Spring  Starter Mail
<details>
<summary>Backend</summary>

### **Java**
- **Descripción**: Java es un lenguaje de programación de propósito general, orientado a objetos y ampliamente utilizado para el desarrollo de aplicaciones empresariales. Su popularidad se debe a su portabilidad, rendimiento y robustez.
* Asegúrate de tener instalado Java JDK en tu sistema. Puedes verificarlo usando el siguiente comando en tu terminal o consola:
  ```bash
  java -version
  ```
    * Si no lo tienes, descarga e instala el [JDK desde aquí](https://www.oracle.com/java/technologies/downloads/#java11).
    * [Instructiones](https://docs.oracle.com/en/java/javase/11/install/overview-jdk-installation.html#GUID-8677A77F-231A-40F7-98B9-1FD0B48C346A__INSTALLINGTHEJDKANDJREONMICROSOFTWI-E04E8B17).
### **Maven**
* Puedes verificar si ya tienes Maven instalado ejecutando:
    ```bash
    mvn -version
    ```
    * Si no lo tienes, puedes descargarlo de [aquí](https://maven.apache.org/download.cgi) e instalarlo.
    * [Instructiones](https://maven.apache.org/install.html).

### **Spring Boot**
- **Descripción**: Spring Boot es un framework de Java que facilita la creación de aplicaciones basadas en Spring. Proporciona una configuración automática y convenciones sobre configuraciones para acelerar el desarrollo.
- **Características**:
    - Configuración simplificada mediante `application.properties` o `application.yml`.
    - Integración fácil con otros proyectos Spring (Spring Data, Spring Security, etc.).
    - Actuadores para monitoreo y gestión de la aplicación.

### **Swagger**
- **Descripción**: Swagger es una herramienta para documentar y visualizar APIs RESTful. Proporciona una interfaz interactiva que permite a los desarrolladores y consumidores de API entender y probar la API fácilmente.
- **Características**:
    - Generación automática de documentación a partir de anotaciones en el código.
    - Interfaz gráfica para probar las API.
    - Soporte para múltiples formatos de salida (OpenAPI).

### **MySQL/Hibernate (HB2)**
- **MySQL**:
    - **Descripción**: MySQL es un sistema de gestión de bases de datos relacional (RDBMS) que utiliza SQL (Structured Query Language) para gestionar datos.
    - **Características**:
        - Altamente escalable y eficiente.
        - Amplio soporte comunitario y comercial.
        - Ideal para aplicaciones web y empresariales.

- **Hibernate (HB2)**:
    - **Descripción**: Hibernate es un marco de mapeo objeto-relacional (ORM) que permite a los desarrolladores trabajar con bases de datos relacionales a través de objetos Java, eliminando la necesidad de consultas SQL en muchas ocasiones.
    - **Características**:
        - Simplificación de la persistencia de datos.
        - Mapeo automático entre clases Java y tablas de la base de datos.
        - Soporte para transacciones y consultas complejas.

### **Spring Security**
- **Descripción**: Spring Security es un framework que proporciona autenticación y autorización para aplicaciones Java basadas en Spring. Se encarga de asegurar las aplicaciones contra amenazas comunes.
- **Características**:
    - Autenticación mediante varios métodos (formulario, HTTP Basic, OAuth, etc.).
    - Autorización basada en roles y permisos.
    - Protección contra ataques comunes como CSRF, XSS y session fixation.

### **Spring Starter Mail**
- **Descripción**: Spring Starter Mail es un módulo de Spring Boot que facilita el envío de correos electrónicos desde la aplicación. Se configura rápidamente y ofrece integración con diversos servicios de correo.
- **Características**:
    - Envío fácil de correos electrónicos en texto plano o HTML.
    - Soporte para archivos adjuntos.
    - Integración con servicios de correo SMTP como Gmail, Amazon SES, etc.
</details>

## Frontend
NodeJS + React + Vite + Tailwind + Material UI + Radix + Axios

<details>

<summary>Frontend</summary>

### Node JS
[NodeJS](https://nodejs.org/en/) v20.17.0

### React + Vite
[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Librerias para los estilos
[Tailwind](https://tailwindcss.com/docs/installation)

```bash
npm install -D tailwindcss
npx tailwindcss init
```

Configuración:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

[Material UI](https://mui.com/material-ui/getting-started/installation/)

```bash
npm install @mui/material @emotion/react @emotion/styled
```

[Radix](https://www.radix-ui.com/themes/docs/overview/getting-started)

```bash
npm install @radix-ui/themes
```

#### Integración con el backend
[Axios](https://axios-http.com/es/docs/intro)

```bash
npm install axios
```

</details>

## UX

<details>
<summary>UX</summary>

</details>

## QA

<details>
<summary>QA</summary>

</details>

## Cloud

<details>
<summary>Cloud</summary>

</details>
### Configuración del Entorno

1. **Clona el Repositorio**

    ```bash
    git clone https://github.com/Frere-Luz/squad11-2024-gestion-inscripciones/new/develop-back-cristian?filename=README.md
    cd squad11-2024-gestion-inscripciones/back/
    ```

2. **Configura la Base de Datos DOCKER**

    Si usas Docker para MySQL, asegúrate de que el contenedor esté en funcionamiento:

    ```bash
    docker run --name mysql -e MYSQL_ROOT_PASSWORD=123 -e MYSQL_DATABASE=squad -p 3306:3306 -d mysql:8
    ```

3. **Base de Datos LOCAL Configura el Archivo `application.properties`**

    Edita el archivo `src/main/resources/application.properties` o `application.yml` para asegurar que la URL de la base de datos y otras configuraciones sean correctas.

4. **Ejecuta la Aplicación**

    Usar intellij idea o ide de preferencia.
  
  
5. **Accede a la Aplicación**

   La aplicación debería estar disponible en `http://localhost:8080`.

   # Endpoints
   
    Autenticación y Registro

 
   Autenticación de usuario. Requiere un OBJECT(EMAIL,PASSWORD) en el cuerpo de la solicitud. Devuelve un JWT.

   ```bash
    POST /api/v1/auth/authentication 
   ```
   Registro de nuevo usuario. Requiere un OBJECT(EMAIL,PASSWORD,ROL(admin,student,mentor))  en el cuerpo de la solicitud. Devuelve un JWT.
   
   ```bash
    POST /api/v1/auth/register
   ```
    
   Acceso Basado en Roles

   Acceso para usuarios con el rol de administrador.
   
   ```bash
    GET /api/v1/admin
   ```

   Acceso para usuarios con el rol de mentor.
    
   ```bash
    GET /api/v1/mentor
   ```
   Acceso para usuarios con el rol de estudiante.

   ```bash
    GET /api/v1/student
   ```
   ### Eventos
***Agregar un evento***
   * Usuarios permitidos para la peticion : ADMIN

      ```bash
     POST /api/v1/event/add
      ```

   * Ejemplo del cuerpo de la peticion
      ```json
      {
      "name":"Evento 1"
      }
      ```
   * Ejemplo respuesta
   * Respuesta en el Header con un enlace del evento : 	http://localhost:8080/api/v1/event/11
      ```json
     {
      "id": 34,
      "name": "Evento 1",
      "description": "Este es un evento sobre...",
      "createdAt": "2024-08-24T21:19:53.809773",
      "finishAt": "2024-08-24T21:19:53.809773",
      "registrations": null,
      "admin": {
        "id": 1,
        "email": "elvizvida@gmail.com"
       }
      }   
     ```
***Obtener Evento***
   * Usuarios permitidos para la peticion : ADMIN, STUDENT, MENTOR

      ```bash
      GET /api/v1/event/{id}
      ```

   * Ejemplo del la peticion
      ```bash
      GET /api/v1/event/1
      ```
   * Ejemplo respuesta
      ```json
     {
      "id": 1,
      "name": "Evento 12",
      "description": "Este es un evento sobre...",
      "createdAt": "2024-08-24T21:19:53.809773",
      "finishAt": "2024-08-24T21:19:53.809773",
      "registrations": null,
      "admin": {
        "id": 1,
        "email": "elvizvida@gmail.com"
       }
      }   
     ```
***Listar Evento***
   * Usuarios permitidos para la peticion : ADMIN, USER, MENTOR
   * En la peticion le indico el tamaño de la lista de **Eventos** y que **pagina** de la lista quiere traer

      ```bash
      GET /api/v1/event/list/{tamaño}/{pagina}
      ```

   * Ejemplo del la peticion
      ```bash
      GET /api/v1/event/list/3/2
      ```
   * Ejemplo respuesta
      ```json
      {
        "content": [
          {
          "id": 28,
          "name": "evento 11",
          "createdAt": "2024-08-24T21:11:12.936755",
          "finishAt": "2024-08-24T21:11:12.936755"
          },
          {
          "id": 29,
          "name": "evento 11",
          "createdAt": "2024-08-24T21:11:53.637213",
          "finishAt": "2024-08-24T21:11:53.637213"
          },
          {
          "id": 30,
          "name": "evento 4",
          "createdAt": "2024-08-24T21:13:30.563517",
          "finishAt": "2024-08-24T21:42:32.069671"
          }
        ],
          "pageable": {
          "pageNumber": 2,
          "pageSize": 3
          },
     "CONTINUA...": "CONTINUA..."
      }
        ```
***Modificar Evento***
* Usuarios permitidos para la peticion : ADMIN

   ```bash
   PUT /api/v1/event/update
   ```

* Ejemplo del la peticion
   ```json
   {
    "id":"30",
    "name":"evento 4",
    "description":"este evento se modifico..."
    }
   ```
* Ejemplo respuesta
   ```json
    {
	  "message": "se modifico el evento"
    }
  ```
***Quitar Evento***
* Usuarios permitidos para la peticion : ADMIN

   ```bash
   DELETE /api/v1/event/delete/{id}
   ```

* Ejemplo del la peticion
   ```bash
  DELETE /api/v1/event/delete/23
   ```
* Ejemplo respuesta
   ```json
    {
    "message": "se elimino el evento"
    }
  ```
### Faltante a agragar al readme
1. ***Listar Eventos Activos***
2. ***Listar Eventos inactivos***
3. ***Listar todos los Eventos***

### Cambiar Contraseña
* Se utiliso [spring-boot-starter-mail](https://docs.spring.io/spring-boot/reference/io/email.html) como dependencia para el envio ed mails a los usuarios para que puedan recuperar la contraseña

***Configuracion***
* Dentro del archivo **_src/main/resources/application.yml_** cofigurar la cuenta de correo que enviara los mails
* Para crear  
```yml
spring:
  # configuraciones del email del remitente 
  mail:
    host: smtp.gmail.com
    port: 587
    username: ${email}
    password: ${email_password}

    properties:
      mail:
        smtp:
          auth: true
          starttls:
            enable: true

  #email de ejemplo para probar /resetPassword
  mail: ${email_user_ejemplo}
```
