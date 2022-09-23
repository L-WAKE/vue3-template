/*忽略报错*/
declare module '*.vue' {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>
  export default component
}

// interface ImportMetaEnv {
// 	readonly VITE_BASE_API: string
// }
// interface ImportMeta {
//   readonly env: ImportMetaEnv
// }