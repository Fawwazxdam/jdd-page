<script setup lang="ts">
import { useTheme } from '../composables/useTheme'
import { Menu, X, Sun, Moon } from '@lucide/vue'

const { theme, toggle } = useTheme()

const navLinks = [
  { label: 'Tentang', href: '#about' },
  { label: 'Pembicara', href: '#speakers' },
  { label: 'Jadwal', href: '#schedule' },
  { label: 'Sponsor', href: '#sponsors' },
]

const mobileMenuOpen = defineModel<boolean>('mobileMenuOpen', { default: false })
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <a href="#" class="flex items-center gap-2">
          <div class="w-8 h-8 bg-gradient-to-br from-[#18bcbc] to-[#0b3a4c] rounded-lg flex items-center justify-center font-black text-sm text-white">
            J
          </div>
          <span class="font-bold text-lg tracking-tight text-gray-900 dark:text-white">JDD</span>
        </a>

        <div class="hidden md:flex items-center gap-8">
          <a v-for="link in navLinks" :key="link.href" :href="link.href"
            class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
            {{ link.label }}
          </a>
          <button @click="toggle"
            class="p-2 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-500 dark:text-gray-400">
            <Sun v-if="theme === 'dark'" class="w-5 h-5" />
            <Moon v-else class="w-5 h-5" />
          </button>
          <a href="#register"
            class="px-5 py-2 bg-gradient-to-r from-[#18bcbc] to-[#0b3a4c] rounded-full text-sm font-semibold hover:opacity-90 transition-opacity text-white">
            Daftar Sekarang
          </a>
        </div>

        <div class="flex md:hidden items-center gap-2">
          <button @click="toggle"
            class="p-2 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-500 dark:text-gray-400">
            <Sun v-if="theme === 'dark'" class="w-5 h-5" />
            <Moon v-else class="w-5 h-5" />
          </button>
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-200 dark:border-white/5 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl">
      <div class="px-4 py-4 space-y-3">
        <a v-for="link in navLinks" :key="link.href" :href="link.href"
          @click="mobileMenuOpen = false"
          class="block text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2">
          {{ link.label }}
        </a>
        <a href="#register" @click="mobileMenuOpen = false"
          class="block text-center px-5 py-2.5 bg-gradient-to-r from-[#18bcbc] to-[#0b3a4c] rounded-full text-sm font-semibold text-white">
          Daftar Sekarang
        </a>
      </div>
    </div>
  </nav>
</template>
