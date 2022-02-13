import { defineStore } from "pinia";

const useStudy = defineStore("useStudy", {
  state: () => {
    return {
      study: "学习",
    };
  },
  getters: {},
  actions: {
    studyValue(value: String) {
      console.log(this.study + value);
    },
  },
});

export default useStudy;
