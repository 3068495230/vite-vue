module.exports = {
  // 定制格式化要求
  overrides: [
    {
      files: ".prettierrc",
      options: {
        parser: "json",
      },
    },
  ],
  // 一行最多 100 字符
  printWidth: 100,
  // 使用 4 个空格缩进
  tabWidth: 2,
  // 行尾需要有分号
  semi: false,
  // 使用单引号而不是双引号
  singleQuote: true,
  // 用制表符而不是空格缩进行
  useTabs: false,
  // 仅在需要时在对象属性两边添加引号
  quoteProps: "as-needed",
  // 在 JSX 中使用单引号而不是双引号
  jsxSingleQuote: false,
  // 末尾不需要逗号
  trailingComma: "none",
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // 将多行 HTML（HTML、JSX、Vue、Angular）元素反尖括号需要换行
  bracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号 avoid
  arrowParens: "always",
  // 每个文件格式化的范围是开头-结束
  rangeStart: 0,
  // 每个文件格式化的范围是文件的全部内容
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准 always
  proseWrap: "preserve",
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: "css",
  //（默认值）对于 .vue 文件，不缩进 <script> 和 <style> 里的内容
  vueIndentScriptAndStyle: false,
  // 换行符使用 lf 在Linux和macOS以及git存储库内部通用\n
  endOfLine: "lf",
  //（默认值）允许自动格式化内嵌的代码块
  embeddedLanguageFormatting: "auto",
};
