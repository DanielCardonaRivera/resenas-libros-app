## Reseñas Libros App

Aplicación web desarrollada con Angular para gestionar reseñas de libros.
Permite a los usuarios registrarse, iniciar sesión, visualizar libros, ver detalles y agregar, editar o eliminar reseñas.

## Características principales

Registro y autenticación de usuarios con almacenamiento local.

Listado de libros con navegación al detalle.

Sistema CRUD para reseñas (crear, leer, actualizar y eliminar).

Protección de rutas mediante guardas de autenticación.

Interfaz moderna y responsiva con Tailwind CSS.

## Tecnologías utilizadas

Frontend: Angular 18, TypeScript

Estilos: Tailwind CSS

Ruteo: Angular Router

Servicios: Inyección de dependencias y comunicación entre componentes

Base de datos (planeada): PostgreSQL

Backend (pendiente): API REST con Node.js / Spring Boot

## Estructura del proyecto
```text src/ ├── app/ │ ├── core/ │ │ ├── guards/ # Autenticación y protección de rutas │ │ ├── services/ # Servicios y lógica de negocio │ ├── components/ # Navbar, Footer, etc. │ ├── pages/ │ │ ├── auth/ # Login y Registro │ │ ├── books/ # Listado y detalle de libros │ │ └── my-reviews/ # CRUD de reseñas │ ├── app.routes.ts │ └── app.ts └── assets/ ```

## Instalación y ejecución local

Clonar el repositorio:

git clone https://github.com/tuusuario/resenas-libros-app.git
cd resenas-libros-app


Instalar dependencias:

npm install


Ejecutar el servidor de desarrollo:

ng serve


Abrir en el navegador:

http://localhost:4200

Próximos pasos

Conectar el frontend con una API real (Node.js o Spring Boot).

Implementar autenticación con JWT.

Guardar y recuperar datos desde PostgreSQL.

Desplegar la aplicación en producción (por ejemplo, en Vercel o Render).

##Licencia

Este proyecto se distribuye bajo la licencia MIT.