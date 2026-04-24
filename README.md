# Cemento Mayor Frontend

Sitio corporativo para Cemento Mayor construido con React + Vite. El proyecto incluye una arquitectura modular, React Router, componentes reutilizables y estilos responsivos listos para produccion.

## Stack

- React
- Vite
- React Router DOM
- CSS modular por capas (base, componentes y paginas)

## Estructura principal

```text
cemento-mayor/
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |-- pages/
|   |-- layouts/
|   |-- routes/
|   |-- data/
|   |-- hooks/
|   |-- utils/
|   |-- styles/
|   |-- App.jsx
|   |-- constants.js
|   `-- main.jsx
|-- .env
|-- .env.local
|-- .env.development
|-- .env.production
|-- index.html
|-- package.json
`-- vite.config.js
```

## Variables de entorno

Vite expone variables que empiezan con `VITE_`.

- `VITE_APP_NAME`: nombre de la marca (se usa en header, footer y titulos)
- `VITE_API_URL`: endpoint placeholder visible en Contacto
- `VITE_WHATSAPP_NUMBER`: numero para CTA de WhatsApp
- `VITE_COMPANY_EMAIL`: correo en footer y pagina Contacto
- `VITE_GOOGLE_MAPS_EMBED_URL`: URL del iframe de mapa

Archivos:

- `.env`: valores base compartidos
- `.env.local`: overrides locales (no versionar secretos)
- `.env.development`: valores para entorno dev
- `.env.production`: valores para build productivo

## Instalacion y desarrollo local

```bash
npm install
npm run dev
```

La app queda disponible en la URL que muestra Vite (normalmente `http://localhost:5173`).

## Build de produccion

```bash
npm run build
npm run preview
```

- `npm run build` genera la carpeta `dist/`
- `npm run preview` sirve localmente el build para validar

## Despliegue en Hostinger (sitio estatico)

1. Ejecutar `npm run build`.
2. Subir el contenido de la carpeta `dist/` a `public_html` (o subcarpeta de destino).
3. Mantener el archivo `.htaccess` incluido (si usas rutas de React Router) para redirigir a `index.html`.
4. Configurar valores reales en `.env.production` antes de construir.

## Estrategia de ramas recomendada

- `main`: produccion
- `develop`: integracion continua
- `feature/*`: nuevas funcionalidades o mejoras
