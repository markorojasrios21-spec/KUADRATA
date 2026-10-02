import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
  // En el build SSR se empaquetan estas dependencias (sus entradas ESM no se resuelven bien desde Node puro).
  ssr: { noExternal: ['gsap', '@gsap/react', 'lenis', 'lucide-react'] },
})
