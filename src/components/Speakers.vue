<script setup lang="ts">
import { Mic } from '@lucide/vue'

const speakers = [
  {
    name: 'Rudi Hartono',
    role: 'CTO at TechCorp',
    topic: 'Building Scalable Systems',
    avatar: 'RH',
    color: 'from-[#18bcbc] to-[#0b3a4c]',
  },
  {
    name: 'Sari Dewi',
    role: 'Lead Engineer at Gojek',
    topic: 'Microservices Architecture',
    avatar: 'SD',
    color: 'from-[#1a4d8d] to-[#0b3a4c]',
  },
  {
    name: 'Budi Santoso',
    role: 'VP Engineering at Tokopedia',
    topic: 'DevOps Best Practices',
    avatar: 'BS',
    color: 'from-[#0b3a4c] to-[#1a4d8d]',
  },
  {
    name: 'Maya Putri',
    role: 'Staff SRE at Shopee',
    topic: 'Cloud Native Development',
    avatar: 'MP',
    color: 'from-[#18bcbc] to-[#1a4d8d]',
  },
  {
    name: 'Andi Wijaya',
    role: 'Principal Developer at DANA',
    topic: 'Frontend Performance',
    avatar: 'AW',
    color: 'from-[#1a4d8d] to-[#18bcbc]',
  },
  {
    name: 'Rina Sari',
    role: 'Head of AI at Bank Jago',
    topic: 'AI/ML in Production',
    avatar: 'RS',
    color: 'from-[#0b3a4c] to-[#18bcbc]',
  },
]
</script>

<template>
  <section id="speakers" class="py-24 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <p class="text-sm font-semibold text-[#18bcbc] tracking-wider uppercase mb-3">Pembicara</p>
        <h2 class="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-4">
          Belajar dari
          <span class="bg-gradient-to-r from-[#18bcbc] to-[#0b3a4c] bg-clip-text text-transparent">Para Ahli</span>
        </h2>
        <p class="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Para tech leader dan engineer berpengalaman siap berbagi ilmu dan pengalaman mereka.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="speaker in speakers" :key="speaker.name"
          class="group p-6 bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 rounded-2xl hover:border-[#18bcbc]/30 hover:shadow-lg hover:shadow-[#18bcbc]/5 transition-all duration-300">
          <div class="flex items-center gap-4 mb-4">
            <div :class="`w-14 h-14 rounded-full bg-gradient-to-br ${speaker.color} flex items-center justify-center font-bold text-lg text-white`">
              {{ speaker.avatar }}
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-gray-900 dark:text-white">{{ speaker.name }}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ speaker.role }}</p>
            </div>
            <div class="w-10 h-10 rounded-full bg-[#18bcbc]/10 flex items-center justify-center">
              <Mic class="w-5 h-5 text-[#18bcbc]" />
            </div>
          </div>
          <div class="px-3 py-1.5 bg-gray-100 dark:bg-white/5 rounded-full text-xs text-gray-600 dark:text-gray-300 inline-block">
            {{ speaker.topic }}
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <p class="text-gray-500 text-sm">+40 pembicara lainnya akan diumumkan segera</p>
      </div>
    </div>
  </section>
</template>
