<!-- 购物车遮罩层 -->
<script setup lang="ts">
import { useNavigationStore } from '@/stores/navigation'

const navigationStore = useNavigationStore()
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-end md:items-center justify-center">
    <!-- 背景遮罩 -->
    <div class="absolute inset-0 bg-black/70 transition-opacity" @click="navigationStore.closeModal()"></div>

    <!-- 遮罩层内容 -->
    <div
      class="relative bg-white dark:bg-gray-800 w-full md:w-4/5 lg:w-3/5 max-h-[85vh] rounded-t-2xl md:rounded-2xl shadow-2xl animate-slide-up md:animate-fade-in overflow-hidden">
      <!-- 标题栏 -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100">🛒 购物清单</h2>
        <button @click="navigationStore.closeModal()"
          class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- 内容区域 -->
      <div class="p-6 overflow-y-auto max-h-[calc(85vh-80px)]">
        <div class="text-center text-gray-600 dark:text-gray-400 py-12">
          <p class="text-lg">购物车功能开发中...</p>
          <p class="text-sm mt-2">即将支持购物清单管理功能</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes slide-up {
  from {
    transform: translateY(100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-slide-up {
  animation: slide-up 0.3s ease-out;
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style>
