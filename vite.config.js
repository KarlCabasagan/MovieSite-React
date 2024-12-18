import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'MovieSite',
        short_name: 'MovieSite',
        description: 'Shows information about movies',
        background_color: "#dcd6f7",
        theme_color: "#424874",
        icons: [
          {
            src: "/moviesite-logo.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      },
      registerType: 'autoUpdate',
      workbox: {
        cleanupOutdatedCaches: true,
      }
    })
  ],
  // build: {
  //   outDir: '../wwwroot/',
  //   emptyOutDir: true,
  // },
})
