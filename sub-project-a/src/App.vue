<!--
 * @Name: 名称
 * @Description: 描述
 * @Author: yangyu awarriorer@163.com
 * @Date: 2023-10-08 15:00:36
-->
<template>
  <div class="project-a page-con">
    <div class="header-con">
      <button
        v-for="(item, index) in routes"
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
const goRouter = (info: RouteRecordRaw) => {
  console.log(info)

  router.push({
    path: `${info.path}`
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
  background-color: yellow;
}

.render-body {
  width: 100%;
  height: 90vh;
  background-color: beige;
}
</style>
