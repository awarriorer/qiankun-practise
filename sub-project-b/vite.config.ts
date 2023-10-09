/*
 * @Name: 名称
 * @Description: 描述
 * @Author: yangyu awarriorer@163.com
 * @Date: 2023-10-08 15:00:36
 */
import { defineConfig, mergeConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
import postcssSelectorNamespace from 'postcss-selector-namespace'
import type { UserConfigExport } from 'vite'

// https://vitejs.dev/config/
const baseCfg:UserConfigExport = {
  plugins: [
    vue(),
    qiankun('vue3sub', {
      useDevMode: true
    })
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
              return '.project-a'
          }
        })
      ]
    }
  },
  server: {
    port: 3001, //启动端口
    host: '0.0.0.0',
    open: false,
    cors: true,
    hmr: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
}

const devCfg:UserConfigExport = {
  base: '/project-b'
}

const buildCfg:UserConfigExport = {
  base: 'http://sub.gg.com/project-b'
}

export default defineConfig(({ command }) => {
  // 服务模式
  if (command === 'serve') {
    return mergeConfig(baseCfg, devCfg)
  }

  // 构建模式
  return mergeConfig(baseCfg, buildCfg)
})
