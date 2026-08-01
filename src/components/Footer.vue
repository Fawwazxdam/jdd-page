<script setup lang="ts">
import { Globe2, Mail, MessageCircle, Hash } from '@lucide/vue'

const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: 'Website', href: '#', icon: Globe2 },
  { name: 'Email', href: '#', icon: Mail },
  { name: 'Discord', href: '#', icon: MessageCircle },
  { name: 'Hashtag', href: '#', icon: Hash },
]

const footerLinks = [
  {
    title: 'Event',
    links: ['Tentang', 'Pembicara', 'Jadwal', 'Tiket'],
  },
  {
    title: 'Komunitas',
    links: ['Discord', 'Forum', 'Blog', 'Newsletter'],
  },
  {
    title: 'Bantuan',
    links: ['FAQ', 'Kontak', 'Panduan', 'Kode Etik'],
  },
]
</script>

<template>
  <footer class="border-t border-gray-200 dark:border-white/5 pt-16 pb-8 bg-gray-50 dark:bg-transparent">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div class="col-span-2 md:col-span-1">
          <a href="#" class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-gradient-to-br from-[#18bcbc] to-[#0b3a4c] rounded-lg flex items-center justify-center font-black text-sm text-white">
              J
            </div>
            <span class="font-bold text-lg tracking-tight text-gray-900 dark:text-white">JDD 2026</span>
          </a>
          <p class="text-sm text-gray-500 leading-relaxed">
            Konferensi teknologi terbesar untuk developer Jawa Timur.
          </p>
          <div class="flex items-center gap-3 mt-4">
            <a v-for="social in socialLinks" :key="social.name" :href="social.href"
              class="w-9 h-9 rounded-lg bg-gray-200 dark:bg-white/5 flex items-center justify-center text-gray-500 hover:bg-[#18bcbc] hover:text-white transition-all duration-300">
              <component :is="social.icon" class="w-4 h-4" />
            </a>
          </div>
        </div>

        <div v-for="group in footerLinks" :key="group.title">
          <h4 class="font-semibold text-sm text-gray-900 dark:text-white mb-4">{{ group.title }}</h4>
          <ul class="space-y-2">
            <li v-for="link in group.links" :key="link">
              <a href="#" class="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200 dark:border-white/5">
        <p class="text-sm text-gray-400">&copy; {{ currentYear }} Jatim Developer Day. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
