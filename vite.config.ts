import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import sassDts from 'vite-plugin-sass-dts'
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '') as ImportMetaEnv
  console.log(env.MODE)
  return {
    css: {
      // modules: {
      //   localsConvention: 'camelCaseOnly', // 开启驼峰转换：.base-btn -> styles.baseBtn
      // },
    },
    plugins: [react(), sassDts()],
  }
})
