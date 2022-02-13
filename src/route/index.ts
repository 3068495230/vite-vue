/*
 * @Author: achens
 * @Date: 2022-02-13 17:22:31
 * @LastEditTime: 2022-02-13 17:53:46
 * @LastEditors: Please set LastEditors
 * @Description:
 */
// 引入路由相关配置
import { createRouter, createWebHistory } from "vue-router";

// 定义路由所需要使用的接口配置
interface RoutesItem {
  path: string;
  component: any;
  name?: string;
  redirect?: string;
}

// 声明路由的 routes 配置文件
const routes: Array<RoutesItem> = [
  {
    // 根路径，也就是默认显示页面
    path: "/",
    // 重定向
    redirect: "/home",
    // 显示组件
    component: () => import("comps/HelloWorld.vue"),
  },
  {
    path: "/helloWorld",
    name: "helloWorld",
    component: () => import("comps/HelloWorld.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("comps/About.vue"),
  },
];

// 配置路由
const router = createRouter({
  // 使用 history 模式
  history: createWebHistory(),
  routes,
});

// 全局路由前置守卫
router.beforeEach((to, from) => {
  // 取出当前路由路径
  const { path: toPath } = to;
  //  取出目标路由路径
  const { path: fromPath } = from;
  // 判断当前路由是否和要去的目标路由相同
  if (toPath === fromPath) {
    // 如果相同，那就不进行跳转
    return false;
  }
});

export default router;
