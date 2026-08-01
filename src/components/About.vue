<script setup lang="ts">
import { Target, Wrench, Users, Trophy } from '@lucide/vue'

const features = [
  {
    icon: Target,
    title: 'Keynote Inspiratif',
    description: 'Dengarkan langsung dari tech leaders ternama Jawa Timur dan internasional.',
  },
  {
    icon: Wrench,
    title: 'Hands-on Workshop',
    description: 'Praktik langsung dengan tools dan teknologi terbaru di industri.',
  },
  {
    icon: Users,
    title: 'Networking',
    description: 'Terhubung dengan ribuan developer, engineer, dan tech enthusiast.',
  },
  {
    icon: Trophy,
    title: 'Hackathon',
    description: 'Ikuti kompetisi hackathon dengan total hadiah jutaan rupiah.',
  },
]
</script>

<template>
  <section id="about" class="py-24 relative bg-gray-50 dark:bg-transparent">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <p class="text-sm font-semibold text-[#18bcbc] tracking-wider uppercase mb-3">Tentang JDD</p>
        <h2 class="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-4">
          Event Tech Terbesar
          <br />
          <span class="bg-gradient-to-r from-[#18bcbc] to-[#0b3a4c] bg-clip-text text-transparent">di Jawa Timur</span>
        </h2>
        <p class="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Jatim Developer Day hadir untuk ke-8 kalinya. Bergabunglah dengan komunitas developer terbesar di Jawa Timur dan dapatkan pengalaman belajar yang tak terlupakan.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="feature in features" :key="feature.title"
          class="group p-6 bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 rounded-2xl hover:border-[#18bcbc]/30 hover:shadow-lg hover:shadow-[#18bcbc]/5 transition-all duration-300">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#18bcbc]/10 to-[#0b3a4c]/10 flex items-center justify-center mb-4">
            <component :is="feature.icon" class="w-6 h-6 text-[#18bcbc]" />
          </div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
