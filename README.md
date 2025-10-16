# 📚 Reseñas Libros App

Aplicación web desarrollada con **Angular** para gestionar reseñas de libros. Permite a los usuarios registrarse, iniciar sesión, visualizar libros, ver detalles y **agregar, editar o eliminar reseñas** propias.

---

## ✨ Características Principales

* **Registro y Autenticación** de usuarios.
* **Listado de libros** con navegación al detalle.
* Sistema **CRUD** (Crear, Leer, Actualizar y Eliminar) para reseñas.
* **Protección de rutas** mediante *guards* de autenticación.
* Interfaz moderna y responsiva diseñada con **Tailwind CSS**.

---

## 💻 Tecnologías Utilizadas

| Categoría | Tecnología |
| :--- | :--- |
| **Frontend** | Angular 18, TypeScript |
| **Estilos** | Tailwind CSS |
| **Ruteo** | Angular Router |
| **Servicios** | Inyección de dependencias y comunicación entre componentes |
| **Base de datos (planeada)** | PostgreSQL |
| **Backend (pendiente)** | API REST con Node.js / Spring Boot |

---

## 📂 Estructura del Proyecto

Esta es la organización de los directorios principales del código fuente.

```text
src/
├── app/
│   ├── core/
│   │   ├── guards/   # 🛡️ Autenticación y protección de rutas
│   │   └── services/  # 🛠️ Servicios y lógica de negocio
│   ├── components/  # 🧩 Componentes reutilizables (Navbar, Footer, etc.)
│   ├── pages/
│   │   ├── auth/      # 🔑 Login y Registro
│   │   ├── books/     # 📚 Listado y detalle de libros
│   │   └── my-reviews/ # 📝 CRUD de reseñas
│   ├── app.routes.ts
│   └── app.ts
└── assets/           # 🖼️ Archivos estáticos (imágenes, fuentes, etc.)
🚀 Instalación y Ejecución Local
Sigue estos pasos para poner en marcha la aplicación en tu entorno de desarrollo.

1. Clonar el repositorio
Bash

git clone [https://github.com/tuusuario/resenas-libros-app.git](https://github.com/tuusuario/resenas-libros-app.git)
cd resenas-libros-app
2. Instalar dependencias
Bash

npm install
3. Ejecutar el servidor de desarrollo
Bash

ng serve
4. Abrir en el navegador
Accede a la aplicación en:

Plaintext

http://localhost:4200

🎯 Próximos Pasos (Roadmap)
Conectar el frontend con una API real (Node.js o Spring Boot).

Implementar autenticación con JWT.

Guardar y recuperar datos desde PostgreSQL.

Desplegar la aplicación en producción (Vercel o Render).

📄 Licencia
Este proyecto se distribuye bajo la Licencia MIT.