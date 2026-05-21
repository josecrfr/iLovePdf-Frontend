# iLovePDF Clone Frontend

Frontend desarrollado con Angular para una plataforma tipo iLovePDF que permite trabajar con archivos PDF de forma online.

---

## 🚀 Características

- 📄 Comprimir PDF
- 🔗 Unir PDF
- ✂️ Dividir PDF
- 📱 Diseño responsive
- 🍪 Consentimiento de cookies GDPR
- 📢 Preparado para integración de anuncios
- ⚡ Arquitectura SPA con Angular Router

---

## 🛠️ Tecnologías utilizadas

- Angular 15
- TypeScript
- HTML5
- CSS3
- Angular Router
- RxJS

---

## 📁 Estructura del proyecto

````text
src/
 └── app/
      ├── components/
      │    ├── header/
      │    ├── footer/
      │    ├── ad-banner/
      │    └── cookie-banner/
      │
      ├── pages/
      │    ├── home/
      │    ├── compress-pdf/
      │    ├── merge-pdf/
      │    ├── split-pdf/
      │    ├── privacy/
      │    ├── terms/
      │    └── support/
      │
      ├── app-routing.module.ts
      └── app.module.ts
      ```
````

⚙️ Requisitos
Node.js 16+
npm
Angular CLI 15
📦 Instalación

1. Clonar repositorio
   git clone <url-del-repositorio>
2. Entrar al proyecto
   cd iLovePdf-Frontend
3. Instalar dependencias
   npm install
4. Ejecutar proyecto
   ng serve

Abrir en:

http://localhost:4200

🧭 Rutas principales
Ruta Descripción
/ Inicio
/compress-pdf Comprimir PDF
/merge-pdf Unir PDFs
/split-pdf Dividir PDF
/privacy Política de privacidad
/terms Términos y condiciones
/support Soporte
📢 Publicidad

El proyecto está preparado para integrar anuncios como:

Google AdSense

Componente:

components/ad-banner
🍪 GDPR / Cookies

Incluye:

Banner de consentimiento de cookies
Guardado en localStorage
Preparado para Google Analytics y AdSense
📱 Responsive
Menú hamburguesa en móvil
Layout adaptable
Dropdown funcional en desktop y móvil
🔮 Próximas mejoras
Login / registro
Subida real de archivos
Backend con Spring Boot
Motor PDF con Python
Dark mode
Drag & drop avanzado
🧱 Arquitectura futura
frontend-angular
backend-springboot
pdf-engine-python
📄 Licencia

Proyecto educativo/demo inspirado en herramientas de procesamiento de PDF.
