module.exports = {
  plugins: {
    // 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
    autoprefixer: {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8",
      ],
    },
    "postcss-px-to-viewport": {
      // 要转化的单位
      unitToConvert: "px",
      // UI设计稿的宽度
      viewportWidth: 375,
      // 转换后的精度，即小数点位数
      unitPrecision: 6,
      // 指定转换的 css 属性的单位，* 代表全部 css 属性的单位都进行转换
      propList: ["*"],
      // 指定需要转换成的视窗单位，默认 vw
      viewportUnit: "vw",
      // 指定字体需要转换成的视窗单位，默认 vw
      fontViewportUnit: "vw",
      // 指定不转换为视窗单位的类名
      selectorBlackList: ["wrap"],
      // 设置小于或等于 1px 则不进行转换。默认值1。
      minPixelValue: 1,
      // 是否在媒体查询的 css 代码中也进行转换，默认 false
      mediaQuery: true,
      // 是否转换后直接更换属性值
      replace: true,
      // 设置忽略文件，用正则做目录名匹配
      exclude: [/node_modules/],
      // 是否处理横屏情况
      landscape: false,
    },
  },
};
