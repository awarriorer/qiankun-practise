/*
 * @Name: 入口文件
 * @Description: 入口文件
 * @Author: yangyu awarriorer@163.com
 * @Date: 2023-10-08 19:34:33
 */
import { createApp } from 'vue'
import type { App } from 'vue'
import './style.css'
import MainApp from './App.vue'
import router from './router/index'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/es/helper'

let app: App | null
function render(container: string) {
  app = createApp(MainApp)

  app.use(router)
  app.mount(container)
}


// 不在乾坤
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render('#app')
}

renderWithQiankun({
    mount(props: any) {
      render(props.container || '#sub-project-con')
    },
    bootstrap() {
      console.log("bootstrap");
    },
    unmount() {
      app?.unmount();
      app = null
    },
    update(props: any) {
      console.log(props)
    }
})
    