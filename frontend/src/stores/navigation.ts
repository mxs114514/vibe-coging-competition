// 导航状态管理

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export type ModalType = 'fridge' | 'table' | 'recipe' | 'cart' | null

export const useNavigationStore = defineStore('navigation', () => {
  // 当前打开的遮罩层
  const currentModal = ref<ModalType>(null)

  // 是否显示遮罩层
  const modalVisible = computed(() => currentModal.value !== null)

  // 打开遮罩层
  const openModal = (modal: ModalType) => {
    currentModal.value = modal
  }

  // 关闭遮罩层
  const closeModal = () => {
    currentModal.value = null
  }

  return {
    currentModal,
    modalVisible,
    openModal,
    closeModal,
  }
})
