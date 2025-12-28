# Front Guerrero de Troya

Proyecto frontend para la plataforma de Guerrero de Troya, organizadora de eventos OCR.

## Características

- ⚡️ React Router v7 con Server-Side Rendering
- 🎨 Tailwind CSS v4 para estilos
- 📦 JavaScript (sin TypeScript)
- 🔌 API centralizada en `src/api/`
- 🎯 Componentes modulares y reutilizables

## Estructura del Proyecto

```
Front_Guerrero_de_Troya/
├── app/
│   ├── components/
│   │   └── home/                    # Componentes de la página principal
│   │       ├── BrandLogo.tsx        # Logo de la marca
│   │       ├── ContactSection.tsx   # Sección de contacto
│   │       ├── Footer.tsx           # Pie de página
│   │       ├── GlowCard.tsx         # Tarjeta con efecto glow
│   │       ├── HeroSection.tsx      # Sección hero principal
│   │       ├── InfoSections.tsx     # Secciones de información
│   │       ├── LoginForm.tsx        # Formulario de inicio de sesión
│   │       ├── MediaGallery.tsx     # Galería de medios
│   │       ├── PaymentForm.tsx      # Formulario de pagos
│   │       ├── Sidebar.tsx          # Barra lateral
│   │       ├── SponsorsSection.tsx  # Sección de patrocinadores
│   │       ├── TopBar.tsx           # Barra superior
│   │       └── UserRegistrationForm.tsx  # Formulario de registro
│   ├── routes/                      # Rutas de la aplicación
│   │   ├── home.tsx                 # Página principal
│   │   ├── login.tsx                # Página de login
│   │   ├── registro-usuario.tsx     # Página de registro de usuario
│   │   └── registro.tsx             # Página de registro
│   ├── app.css                      # Estilos globales
│   ├── root.tsx                     # Componente raíz
│   └── routes.js                    # Configuración de rutas
├── src/
│   ├── api/                         # Módulos de API (endpoints de backend)
│   │   ├── auth.js                  # Autenticación
│   │   ├── usuarios.js              # Gestión de usuarios
│   │   ├── pagos.js                 # Procesamiento de pagos
│   │   ├── config.js                # Configuración de API
│   │   └── index.js                 # Exportaciones principales
│   ├── asset/                       # Recursos estáticos
│   └── data/                        # Datos y configuraciones
│       ├── content.js               # Contenido de la aplicación
│       ├── navigation.js            # Navegación
│       └── types.js                 # Definiciones de tipos
├── public/                          # Archivos públicos estáticos
├── package.json                     # Dependencias y scripts
├── vite.config.js                   # Configuración de Vite
├── react-router.config.js           # Configuración de React Router
└── README.md                        # Documentación
```

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

## Construcción

```bash
npm run build
```

## Producción

```bash
npm run start
```

## Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

## API

Todos los endpoints de backend están centralizados en `src/api/`:

- `auth.js` - Login y autenticación
- `usuarios.js` - Registro y gestión de usuarios
- `pagos.js` - Creación de órdenes de pago

## Tecnologías

- React 19
- React Router 7
- Tailwind CSS 4
- Vite 7

