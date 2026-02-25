/// <reference types="vite/client" />

// 1. 扩展 ImportMetaEnv 接口
interface ImportMetaEnv {
  // 在这里列出你所有以 VITE_ 开头的环境变量

  /** * API 请求的基础路径
   * @example 'https://api.myapp.com'
   */
  readonly VITE_API_URL: string

  /** * 应用的标题
   */
  readonly VITE_APP_TITLE: string

  /** * 某个功能的开关 (注意：.env 中的值总是字符串，即使是 "true")
   */
  readonly VITE_ENABLE_FEATURE_X: string

  // 更多自定义变量...
}

// 2. 扩展 ImportMeta 接口，将上面的 Env 绑定上去
interface ImportMeta {
  readonly env: ImportMetaEnv
}
