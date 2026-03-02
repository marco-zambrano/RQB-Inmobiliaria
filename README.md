# RQB 593 - Bienes Raíces Premium

Landing page para inmobiliaria RQB 593, construido con Next.js 16, TypeScript y TailwindCSS.

## Tecnologías

- **Next.js 16.1.6** - Framework React con App Router
- **TypeScript** - Tipado estático
- **TailwindCSS** - Framework de estilos
- **Supabase** - Base de datos y autenticación
- **Radix UI** - Componentes accesibles

## Configuración para Producción

### Variables de Entorno
Copia `.env.example` a `.env.local` y configura:
```bash
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
```

### Instalación y Build
```bash
# Instalar dependencias
npm install
# o
pnpm install

# Build para producción
npm run build

# Iniciar servidor de producción
npm start
```

## Consideraciones de Seguridad

- Las variables de entorno con `NEXT_PUBLIC_` son accesibles desde el cliente
- Configura Row Level Security (RLS) en Supabase
- Revisa los permisos de las claves anónimas

## Deploy

El proyecto está listo para deploy en plataformas como:
- Vercel
- Netlify
- Railway
- Cualquier plataforma compatible con Next.js

## Estructura del Proyecto

```
├── app/              # App Router de Next.js
├── components/       # Componentes React reutilizables
├── lib/             # Utilidades y configuraciones
├── public/          # Archivos estáticos
└── styles/          # Estilos globales
```
