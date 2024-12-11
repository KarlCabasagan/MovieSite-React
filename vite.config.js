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
      workbox: {
        runtimeCaching: [{
          urlPattern: ({ url }) => {
            return url.href === 'https://streaming-availability.p.rapidapi.com/shows/top';
          },
          handler: "CacheFirst",
          options: {
            cacheName: "shows-cache",
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }]
      }
    })
  ],
  build: {
    outDir: '../wwwroot/',
    emptyOutDir: true,
  },
})
