// 主题管理（深色/浅色模式）

import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  // 从本地存储读取主题设置，默认为浅色模式
  const isDark = ref<boolean>(
    localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )

  // 切换主题
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  // 设置主题
  const setTheme = (dark: boolean) => {
    isDark.value = dark
  }

  // 监听主题变化，应用到 DOM 和本地存储
  watch(
    isDark,
    (newValue) => {
      if (newValue) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    },
    { immediate: true }
  )

  return {
    isDark,
    toggleTheme,
    setTheme,
  }
})
