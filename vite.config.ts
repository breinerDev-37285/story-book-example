import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'


const source_path = resolve(__dirname, 'src', 'app')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "components": resolve( source_path, 'components' ),
      "interfaces": resolve( source_path, 'interfaces' ),
    }
  }
})
