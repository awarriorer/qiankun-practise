<template>
  <div class="page-con">
    <div class="header-con">
      <button
        v-for="(item, index) in [...routes, ...renderRouter]"
        :key="index"
        @click="goRouter(item)"
      >
        {{ item.name }}
      </button>
    </div>
    <div class="render-body">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { routes } from '@/router/index'
import { useRouter, RouteRecordRaw } from 'vue-router'

const router = useRouter()
const renderRouter = [
  {
    path: '/sub-project/project-a',
    name: '子项目A',
  },
  {
    path: '/sub-project/project-b',
    name: '子项目B',
  },
]
const goRouter = (info: RouteRecordRaw | any) => {
  console.log(info)
  router.push({
    path: info.path
  })
}

</script>

<style scoped>
.page-con {
  width: 100vw;
  height: 100vh;
}

.header-con {
  width: 100%;
  height: 10vh;
  background-color: green;
}

.render-body {
  width: 100%;
  height: 90vh;
  background-color: beige;
}
</style>
