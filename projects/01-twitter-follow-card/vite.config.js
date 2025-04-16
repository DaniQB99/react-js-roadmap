import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

/* Vite es un bundler y un servidor de desarrollo ultrarrápido para proyectos frontend, especialmente con React,
   Vue, Svelte y otros frameworks modernos.

Se usa para:

🚀 1. Desarrollo más rápido
Hot Module Replacement (HMR): Recarga solo los cambios en los archivos sin reiniciar toda la app.

Servidor de desarrollo instantáneo: No necesita compilar todo el código antes de arrancar.

📦 2. Construcción optimizada
Usa esbuild para transpilar TypeScript y JSX mucho más rápido que Webpack.

Genera un código final más ligero y optimizado para producción.

⚙️ 3. Soporte nativo para ES Modules
Usa importaciones de módulos en el navegador, sin necesidad de empaquetar todo en un solo archivo enorme.

🛠 4. Configuración sencilla y extensible
Funciona con casi cero configuración.

Usa plugins de Rollup para personalizar la build.

🔌 5. Integración con frameworks modernos
Integra con frameworks modernos como React, Vue, Svelte, Solid, Angular, y muchos más.

🔍 6. Herramientas de desarroll y depuración
Herramientas de depuración integradas para encontrar errores y mejorar la experiencia de desarrollo.

📦 7. Herramientas de build
Herramientas de build integradas para optimizar el código y generar un código final optimizado.

🔒 8. Seguridad
Soporte para HTTPS y otras características de seguridad.

📦 9. Extensible
Soporte para plugins de build y plugins de desarrollo.

🔄 10. Actualizaciones rápida y segura
Actualizaciones automáticas y seguras para garantizar que tus dependencias estén actualizadas.
t
🎯 Instalación y configuración:
   - npm create vite@latest my-app --template react-ts
   - cd my-app
   - npm install
   - npm run dev

 */

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
