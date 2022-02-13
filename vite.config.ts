/*
 * @Author: achens
 * @Date: 2022-02-12 23:01:48
 * @LastEditTime: 2022-02-13 18:37:13
 * @LastEditors: Please set LastEditors
 * @Description: Vite 配置文件
 */
// 导入 Vite 配置函数进行项目配置
import { defineConfig } from "vite";
// 导入 Vue 插件
import vue from "@vitejs/plugin-vue";
// 引入路径处理
import path from "path";

// 导出 Vite 配置文件
export default defineConfig({
  // 插件配置
  plugins: [vue()],
  // 使 Vite 打开网络地址
  server: {
    host: "0.0.0.0",
  },
  // 别名配置
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      comps: path.resolve(__dirname, "src/components"),
      apis: path.resolve(__dirname, "src/api"),
      views: path.resolve(__dirname, "src/view"),
      utils: path.resolve(__dirname, "src/util"),
      routes: path.resolve(__dirname, "src/route"),
      styles: path.resolve(__dirname, "src/styles"),
      plugins: path.resolve(__dirname, "src/plugin"),
      stores: path.resolve(__dirname, "src/store"),
    },
  },
  // sass 配置
  css: {
    preprocessorOptions: {
      scss: {
        // 指定文件，sass 变量获取他内容附加给 css 预处理器
        // 相当于给所有使用 sass 的组件传递全局数据
        additionalData: `
        $injectedColor: orange;
          `,
      },
    },
  },
  // 跨域配置
  server: {
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: " http://localhost:3068",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
