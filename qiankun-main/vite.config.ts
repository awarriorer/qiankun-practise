/*
 * @Name: 名称
 * @Description: 描述
 * @Author: yangyu awarriorer@163.com
 * @Date: 2023-10-08 15:00:03
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssSelectorNamespace from 'postcss-selector-namespace'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  css: {
    postcss: {
      plugins: [
        postcssSelectorNamespace({
          namespace(css) {
              // 不需要添加命名空间的文件
              if (css.includes('unNamespace')) return '';
              return '.main-project'
          }
        })
      ]
    }
  },
  server: {
    port: 2000, //启动端口
    host: '0.0.0.0',
    open: false,
    cors: true,
    hmr: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})
