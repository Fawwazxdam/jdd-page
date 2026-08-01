<script setup lang="ts">
import { Calendar, MapPin, ArrowDown } from '@lucide/vue'

const eventDate = '15 - 17 Agustus 2026'
const eventLocation = 'Jakarta Convention Center'
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    <div class="absolute inset-0">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-[#18bcbc]/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1a4d8d]/20 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0b3a4c]/10 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 max-w-5xl mx-auto px-4 text-center">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-sm text-gray-600 dark:text-gray-300 mb-8">
        <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        Tiket Early Bird Tersedia
      </div>

      <h1 class="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight mb-6">
        <span class="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">Jatim</span>
        <br />
        <span class="bg-gradient-to-r from-[#18bcbc] via-[#1a4d8d] to-[#0b3a4c] bg-clip-text text-transparent">Developer Day</span>
      </h1>

      <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
        Konferensi teknologi terbesar untuk developer Jawa Timur.
        3 hari penuh insight, workshop, dan networking.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-10">
        <div class="flex items-center gap-2">
          <Calendar class="w-4 h-4" />
          {{ eventDate }}
        </div>
        <span class="hidden sm:block">•</span>
        <div class="flex items-center gap-2">
          <MapPin class="w-4 h-4" />
          {{ eventLocation }}
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#register"
          class="px-8 py-4 bg-gradient-to-r from-[#18bcbc] to-[#0b3a4c] rounded-full font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-[#18bcbc]/25 text-white">
          Daftar Sekarang
        </a>
        <a href="#speakers"
          class="px-8 py-4 border border-gray-300 dark:border-white/10 rounded-full font-semibold text-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-gray-600 dark:text-gray-300">
          Lihat Pembicara
        </a>
      </div>

      <div class="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
        <div>
          <div class="text-3xl font-black bg-gradient-to-r from-[#18bcbc] to-[#0b3a4c] bg-clip-text text-transparent">50+</div>
          <div class="text-sm text-gray-500 mt-1">Pembicara</div>
        </div>
        <div>
          <div class="text-3xl font-black bg-gradient-to-r from-[#18bcbc] to-[#0b3a4c] bg-clip-text text-transparent">3</div>
          <div class="text-sm text-gray-500 mt-1">Hari</div>
        </div>
        <div>
          <div class="text-3xl font-black bg-gradient-to-r from-[#18bcbc] to-[#0b3a4c] bg-clip-text text-transparent">3K+</div>
          <div class="text-sm text-gray-500 mt-1">Peserta</div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <ArrowDown class="w-6 h-6 text-gray-400 dark:text-gray-500" />
    </div>
  </section>
</template>
