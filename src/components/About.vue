<!--
 * @Author: achens
 * @Date: 2022-02-12 23:01:48
 * @LastEditTime: 2022-02-13 17:54:22
 * @LastEditors: Please set LastEditors
 * @Description: 关于组件
-->
<script setup lang="ts">
// 引入 storeToRefs 解构状态
import { storeToRefs } from "pinia";
// 引入需要使用的状态
import { user } from "../store/index";
// 拿出 state 和 getters
let { name, getName } = storeToRefs(user);
// 取出 actions 中的方法
let { get } = user;
</script>

<template>
  <h1>Vue3 + Ts + Sass + Pinia + Axios 开发环境</h1>
  <p>
    Pinia 中 state 的 Name：<span>{{ name }}</span> 状态
  </p>
  <p>
    Pinia 中 getters 的 getName：<span>{{ getName }}</span> 计算属性
  </p>
  <button @click="get('学习')">Pinia 中 actions 的 get 方法</button>
</template>

<style scoped lang="scss">
p {
  margin: 5px;
  span {
    color: #42b983;
  }
}
</style>
