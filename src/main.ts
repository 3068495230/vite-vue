import { createApp } from "vue";
import App from "./App.vue";
// 引入路由
import router from "./route/index";
// 引入 Pinia
import { createPinia } from "pinia";

createApp(App).use(router).use(createPinia()).mount("#app");
