import { resolve } from 'node:path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// @ts-ignore
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'
import * as packageJson from './package.json'
// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      include: ['src/lib/'],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'lib/index.ts'),
      name: 'Reactivous',
      formats: ['es', 'umd'],
      fileName: (format) => `reactivous.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}))