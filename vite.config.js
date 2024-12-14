import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        background_color: "#dcd6f7",
        theme_color: "#424874",
        icons: [
          {
            src: "/flowbite-logo.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      },
      registerType: 'autoUpdate',
    })
  ],
  // build: {
  //   outDir: '../wwwroot/',
  //   emptyOutDir: true,
  // },
})
