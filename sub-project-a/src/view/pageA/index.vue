<!--
 * @Name: 名称
 * @Description: 描述
 * @Author: yangyu awarriorer@163.com
 * @Date: 2023-10-08 16:23:52
-->
<template>
    <h1>我是sub-A pageA</h1>
    <img :src="getPath('/vue.svg')" />
    <div class="bg-img">
        背景图片
    </div>
</template>

<script lang="ts" setup>
import { getPath } from '@/utils/publicPath.ts'
</script>

<style scoped>

.bg-img {
    width: 200px;
    height: 200px;
    background-image: url('../../assets/vue.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: #555;
    color: #fff;
}

</style>