<!--
 * @Author: achens
 * @Date: 2022-02-12 23:01:48
 * @LastEditTime: 2022-02-13 17:51:29
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
<script setup lang="ts">
import { ref, onMounted } from "vue";
import service from "../util/axios";

onMounted(() => {
  service.get("list").then((res) => {
    console.log(res);
  });
});

const count = ref(0);
</script>

<template>
  <h1>Vue3 + Ts + Sass + Pinia + Axios 开发环境</h1>
  <p>
    当前模板地址：<a href="https://github.com/3068495230/vite-vue">GitHub</a>
  </p>
  <p>
    当前模板开发记录：<a
      href="https://www.yuque.com/docs/share/9d19518e-23ad-4e36-b3ed-26f69e185cfb?#"
      target="_blank"
      >语雀</a
    >
  </p>
  <p>
    作者：<a href="https://www.yuque.com/xiaochens" target="_blank">achens</a>
  </p>
  <button type="button" @click="count++">计数器：count is: {{ count }}</button>
</template>

<style scoped lang="scss">
p {
  margin: 5px;
  a {
    color: #42b983;
  }
}
</style>
