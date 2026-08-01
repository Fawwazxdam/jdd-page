<script setup lang="ts">
import { ref } from 'vue'
import { Clock } from '@lucide/vue'

const activeDay = ref(1)

const days = [
  {
    day: 1,
    date: '15 Agustus',
    label: 'Workshop Day',
    events: [
      { time: '09:00 - 12:00', title: 'Workshop: Building Microservices with Go', speaker: 'Rudi Hartono' },
      { time: '13:00 - 16:00', title: 'Workshop: Cloud Native with Kubernetes', speaker: 'Maya Putri' },
      { time: '16:00 - 18:00', title: 'Workshop: Advanced TypeScript Patterns', speaker: 'Andi Wijaya' },
    ],
  },
  {
    day: 2,
    date: '16 Agustus',
    label: 'Conference Day',
    events: [
      { time: '09:00 - 10:00', title: 'Opening Keynote: The Future of Software Engineering', speaker: 'Rudi Hartono' },
      { time: '10:30 - 11:30', title: 'Microservices Architecture in 2026', speaker: 'Sari Dewi' },
      { time: '13:00 - 14:00', title: 'DevOps Best Practices at Scale', speaker: 'Budi Santoso' },
      { time: '14:30 - 15:30', title: 'AI/ML in Production Systems', speaker: 'Rina Sari' },
      { time: '16:00 - 17:00', title: 'Frontend Performance Optimization', speaker: 'Andi Wijaya' },
    ],
  },
  {
    day: 3,
    date: '17 Agustus',
    label: 'Hackathon & Closing',
    events: [
      { time: '09:00 - 15:00', title: 'Hackathon: Build Solutions for Jawa Timur', speaker: 'Semua Peserta' },
      { time: '15:30 - 16:30', title: 'Hackathon Demo & Judging', speaker: 'Panel Juri' },
      { time: '17:00 - 18:00', title: 'Closing Ceremony & Awards', speaker: 'Panitia JDD' },
    ],
  },
]
</script>

<template>
  <section id="schedule" class="py-24 relative bg-gray-50 dark:bg-transparent">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <p class="text-sm font-semibold text-[#18bcbc] tracking-wider uppercase mb-3">Jadwal</p>
        <h2 class="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-4">
          3 Hari
          <span class="bg-gradient-to-r from-[#18bcbc] to-[#0b3a4c] bg-clip-text text-transparent">Penuh Aktivitas</span>
        </h2>
      </div>

      <div class="flex flex-wrap justify-center gap-2 mb-12">
        <button v-for="d in days" :key="d.day" @click="activeDay = d.day"
          :class="[
            'px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300',
            activeDay === d.day
              ? 'bg-gradient-to-r from-[#18bcbc] to-[#0b3a4c] text-white shadow-lg shadow-[#18bcbc]/25'
              : 'bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-white/5'
          ]">
          Day {{ d.day }} — {{ d.label }}
        </button>
      </div>

      <div class="max-w-3xl mx-auto">
        <template v-for="d in days" :key="d.day">
          <div v-if="activeDay === d.day" class="space-y-4">
            <p class="text-center text-gray-500 text-sm mb-6">{{ d.date }}</p>
            <div v-for="(event, idx) in d.events" :key="idx"
              class="flex gap-6 p-5 bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 rounded-xl hover:border-[#18bcbc]/20 hover:shadow-md transition-all duration-300">
              <div class="flex items-center gap-2 text-sm text-gray-500 w-36 shrink-0 pt-0.5">
                <Clock class="w-4 h-4 text-[#18bcbc]" />
                {{ event.time }}
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-1">{{ event.title }}</h4>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ event.speaker }}</p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
