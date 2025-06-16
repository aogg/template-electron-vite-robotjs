import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        '@main': resolve('src/main/src')
      }
    },
    // build: {
    //   rollupOptions: {
    //     output: {
    //       chunkFileNames: '[name]-[hash].js', // 自定义输出文件名
    //       entryFileNames: '[name]-[hash].js', // 自定义入口文件名
    //       assetFileNames: '[name]-[hash][extname]', // 自定义资产文件名
    //     }
    //   },
    //   outDir: 'out/main' // 输出目录
    // }
  
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [vue()]
  }
})
