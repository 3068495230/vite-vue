<!--
 * @Author: achens
 * @Date: 2022-02-13 17:46:33
 * @LastEditTime: 2022-02-13 17:54:59
 * @LastEditors: Please set LastEditors
 * @Description: 首页
-->
<script setup lang="ts"></script>

<template>
  <!-- logo 图标 -->
  <img alt="Vue logo" src="../assets/img/t01b3bc142b70ef7e0e.jpg" />
  <!-- 按钮组 -->
  <div class="button">
    <router-link to="/helloWorld">进入 HelloWorld</router-link>
    <router-link to="/about">进入 About</router-link>
  </div>
  <router-view></router-view>
</template>

<style scoped lang="scss">
img {
  display: block;
  margin: 0px auto;
}
div.button {
  width: 100%;
  height: 20px;
  margin: 0px 0px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    display: block;
    margin-left: 10px;
    background-color: orange;
    width: 60px;
    height: 15px;
    line-height: 15px;
    border-radius: 2px;
    color: white;
    transition: all 0.2s;
  }
  a:hover {
    width: 65px;
    height: 20px;
    line-height: 20px;
  }
}
</style>
