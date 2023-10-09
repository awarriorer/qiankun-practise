<template>
    <div class="sub-con" id="sub-project-con">
        <h1>111</h1>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, nextTick, watch } from 'vue'
import { loadMicroApp } from 'qiankun'
import { config } from './qiankunCfg.ts'
import { useRoute } from 'vue-router'

const route = useRoute()
// 当前实例
let microApp: any = null
// 当前激活的项目
let activeApp:any = {}

function findAppCfg(path: string) {
    const app = config.find((item:any) => {
        const index = path.indexOf(item.activeRule)

        return index === 0
    })

    return app
}

// 加载APP
async function startLoadApp(path: string) {
    await nextTick()

    const cfg = findAppCfg(path)

    if (!cfg) {
        return
    }

    if (activeApp.name === cfg.name) {
        return
    }

    activeApp = cfg

    await appDestroy()
    await nextTick()

    console.log('创建实例')

    microApp = loadMicroApp(cfg, {
        sandbox: {
            strictStyleIsolation: false,
            experimentalStyleIsolation: true
        }
    })

    console.log('microApp', microApp)
}

// 监听路由变化
watch(route, (to) => {
    startLoadApp(to.path)
})

// 渲染完成
onMounted(async () => {
    await nextTick()

    // 第一次加载APP
    startLoadApp(route.path)
})

// 销毁实例
async function appDestroy() {
    if (microApp) {
        console.log('销毁')
        await microApp.unmount()
        microApp = null
    }
}

onUnmounted(() => {
    appDestroy()
})

</script>

<style scoped>
.sub-con {
    width: 100%;
    height: 100%;
}
</style>