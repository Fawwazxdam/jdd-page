<script setup lang="ts">
import { Sparkles, Star, Gem } from '@lucide/vue'

const tiers = [
  {
    label: 'Platinum',
    color: 'from-gray-600 to-gray-800 dark:from-gray-200 dark:to-gray-400',
    sponsors: ['Google', 'Microsoft', 'AWS', 'Gojek'],
  },
  {
    label: 'Gold',
    color: 'from-amber-600 to-yellow-700 dark:from-amber-400 dark:to-yellow-600',
    sponsors: ['Tokopedia', 'Shopee', 'DANA', 'Bank Jago'],
  },
  {
    label: 'Silver',
    color: 'from-slate-500 to-slate-700 dark:from-slate-300 dark:to-slate-500',
    sponsors: ['Kominfo', 'Djarum Foundation', 'IDCamp'],
  },
]

const tickets = [
  { name: 'Early Bird', price: 'Rp 250.000', color: 'text-green-500', icon: Sparkles },
  { name: 'Regular', price: 'Rp 450.000', color: 'text-gray-700 dark:text-gray-300', icon: Star },
  { name: 'VIP', price: 'Rp 750.000', color: 'text-[#18bcbc]', icon: Gem },
]
</script>

<template>
  <section id="sponsors" class="py-24 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <p class="text-sm font-semibold text-[#18bcbc] tracking-wider uppercase mb-3">Sponsor</p>
        <h2 class="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-4">
          Didukung oleh
          <span class="bg-gradient-to-r from-[#18bcbc] to-[#0b3a4c] bg-clip-text text-transparent">Perusahaan Terkemuka</span>
        </h2>
      </div>

      <div class="space-y-12">
        <div v-for="tier in tiers" :key="tier.label" class="text-center">
          <p :class="`text-sm font-semibold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent mb-6 uppercase tracking-wider`">
            {{ tier.label }} Sponsor
          </p>
          <div class="flex flex-wrap justify-center gap-6">
            <div v-for="sponsor in tier.sponsors" :key="sponsor"
              class="px-8 py-5 bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-xl hover:border-[#18bcbc]/30 hover:shadow-md transition-all duration-300">
              <span class="text-lg font-bold text-gray-700 dark:text-gray-300">{{ sponsor }}</span>
            </div>
          </div>
        </div>
      </div>

      <div id="register" class="mt-24 text-center p-12 bg-gradient-to-br from-[#18bcbc]/10 to-[#0b3a4c]/10 border border-[#18bcbc]/20 rounded-3xl">
        <h3 class="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-4">Siap Bergabung?</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
          Jangan lewatkan kesempatan untuk belajar dan networking di event tech terbesar tahun ini.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div v-for="ticket in tickets" :key="ticket.name"
            class="px-6 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:shadow-lg transition-all duration-300">
            <div class="flex items-center justify-center gap-2 mb-1">
              <component :is="ticket.icon" class="w-4 h-4 text-[#18bcbc]" />
              <p class="text-sm text-gray-500">{{ ticket.name }}</p>
            </div>
            <p :class="`text-2xl font-black ${ticket.color}`">{{ ticket.price }}</p>
          </div>
        </div>
        <a href="#"
          class="inline-block mt-8 px-10 py-4 bg-gradient-to-r from-[#18bcbc] to-[#0b3a4c] rounded-full font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-[#18bcbc]/25 text-white">
          Beli Tiket Sekarang
        </a>
      </div>
    </div>
  </section>
</template>
