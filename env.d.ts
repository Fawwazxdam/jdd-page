/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL?: string
  readonly VITE_EVENT_DATE?: string
  readonly VITE_APP_TYPE?: 'landingpage' | 'speakers'
  readonly VITE_SPEAKER_FORM_URL?: string
  readonly VITE_MEDIA_PARTNER_FORM_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
