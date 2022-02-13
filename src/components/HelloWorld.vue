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
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped lang="scss">
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
