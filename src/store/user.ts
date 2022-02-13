// 引入 defineStore 进行状态定义
import { defineStore } from "pinia";

// 定义 user 状态，Pinia 中没有 module 概念，全部都通过自己定义的 id 来进行模块化引入
const useUser = defineStore("user", {
  // state 定义状态
  state: () => {
    return {
      name: "achens",
    };
  },
  // getters 定义计算属性
  getters: {
    getName: (state) => "你好！" + state.name,
  },
  // actions 定义方法，同步、异步方法都在这里定义，Pinia 中没有 mutations 概念
  actions: {
    get(value: String | Number) {
      // Pinia 中使用 this.xxx 来修改 state
      console.log(this.name, value);
    },
  },
});

// 导出
export default useUser;
