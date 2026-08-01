import { ref, watch, onMounted } from 'vue'

const theme = ref<'light' | 'dark'>('dark')

export function useTheme() {
  const toggle = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  onMounted(() => {
    const saved = localStorage.getItem('jdd-theme') as 'light' | 'dark' | null
    if (saved) {
      theme.value = saved
    } else {
      theme.value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    applyTheme()
  })

  watch(theme, () => {
    applyTheme()
    localStorage.setItem('jdd-theme', theme.value)
  })

  const applyTheme = () => {
    document.documentElement.classList.toggle('dark', theme.value === 'dark')
    document.documentElement.classList.toggle('light', theme.value === 'light')
  }

  return { theme, toggle }
}
