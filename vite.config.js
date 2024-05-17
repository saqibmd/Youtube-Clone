/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */
import { defineConfig, loadEnv  } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible'


// https://vitejs.dev/config/

export default defineConfig({
  envPrefix : "REACT_APP_",
  plugins: [react(), envCompatible()],
})

