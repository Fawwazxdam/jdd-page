<script setup>
import { ref } from 'vue'
import { useTheme } from '../composables/useTheme'

const { theme, toggle } = useTheme()
const mobileMenuOpen = ref(false)
const activeDay = ref(0)

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Location', href: '#location' },
]

const days = ['Day 1 - Mar 15', 'Day 2 - Mar 16']

const schedule = ref([
  [
    { time: '08:00 - 09:00', main: { title: 'Registration & Welcome', speaker: 'Event Team' }, workshop: { title: 'Setup Workshop', speaker: 'DevOps Team' }, community: { title: 'Breakfast & Networking', speaker: '' } },
    { time: '09:00 - 10:00', main: { title: 'Opening Keynote', speaker: 'Dr. Ahmad Fauzi' }, workshop: { title: 'React Advanced Patterns', speaker: 'Sarah Chen' }, community: { title: 'Flutter Community Meetup', speaker: 'Eko Prasetyo' } },
    { time: '10:30 - 12:00', main: { title: 'The Future of Web Development', speaker: 'Budi Santoso' }, workshop: { title: 'Kubernetes Deep Dive', speaker: 'Rizki Ramadhan' }, community: { title: 'Open Source in Indonesia', speaker: 'Community Panel' } },
    { time: '13:00 - 14:30', main: { title: 'AI/ML for Developers', speaker: 'Dr. Dewi Lestari' }, workshop: { title: 'Building APIs with Go', speaker: 'Andi Wijaya' }, community: { title: 'Women in Tech Talk', speaker: 'Sari Dewi' } },
    { time: '15:00 - 16:30', main: { title: 'Cloud Native Architecture', speaker: 'Rendra Kusuma' }, workshop: { title: 'TypeScript Best Practices', speaker: 'Maya Putri' }, community: { title: 'Startup Pitch Session', speaker: 'Various Startups' } },
    { time: '17:00 - 18:00', main: { title: 'Day 1 Closing', speaker: 'Event Team' }, workshop: { title: 'Hackathon Kickoff', speaker: 'Hackathon Team' }, community: { title: 'Evening Social', speaker: '' } }
  ],
  [
    { time: '08:00 - 09:00', main: { title: 'Day 2 Welcome', speaker: 'Event Team' }, workshop: { title: 'Hackathon Continues', speaker: 'Participants' }, community: { title: 'Morning Coffee', speaker: '' } },
    { time: '09:00 - 10:00', main: { title: 'Mobile Development Trends', speaker: 'Kevin Tan' }, workshop: { title: 'GraphQL Workshop', speaker: 'Linda Hartono' }, community: { title: 'Vue.js Community', speaker: 'Dedi Kurniawan' } },
    { time: '10:30 - 12:00', main: { title: 'DevOps & SRE Best Practices', speaker: 'Fajar Nugroho' }, workshop: { title: 'Rust for Web Developers', speaker: 'Arif Hidayat' }, community: { title: 'Data Engineering Talk', speaker: 'Indra Sakti' } },
    { time: '13:00 - 14:30', main: { title: 'Security in Modern Apps', speaker: 'Bayu Pratama' }, workshop: { title: 'Full Stack with Nuxt', speaker: 'Rina Wulandari' }, community: { title: 'GameDev Indonesia', speaker: 'Game Dev Panel' } },
    { time: '15:00 - 16:00', main: { title: 'Hackathon Finals', speaker: 'Participants' }, workshop: { title: 'Career Workshop', speaker: 'HR Leaders' }, community: { title: 'Lightning Talks', speaker: 'Community Members' } },
    { time: '16:00 - 17:00', main: { title: 'Closing Ceremony & Awards', speaker: 'Event Team' }, workshop: { title: 'Thank You Session', speaker: '' }, community: { title: 'Photo Session', speaker: 'All Attendees' } }
  ]
])

const speakers = ref([
  { name: 'Dr. Ahmad Fauzi', role: 'Keynote Speaker', company: 'Ministry of Education' },
  { name: 'Sarah Chen', role: 'Frontend Lead', company: 'Gojek' },
  { name: 'Budi Santoso', role: 'CTO', company: 'Tokopedia' },
  { name: 'Dr. Dewi Lestari', role: 'AI Researcher', company: 'Google Indonesia' },
  { name: 'Rizki Ramadhan', role: 'Cloud Architect', company: 'AWS' },
  { name: 'Maya Putri', role: 'TypeScript Champion', company: 'Microsoft' },
  { name: 'Eko Prasetyo', role: 'Flutter GDE', company: 'Traveloka' },
  { name: 'Kevin Tan', role: 'Mobile Lead', company: 'Shopee' }
])

const pricing = [
  { name: 'Early Bird', price: 'IDR 150,000', desc: 'Limited offer until Jan 31', highlight: false },
  { name: 'Regular', price: 'IDR 250,000', desc: 'Feb 1 - Mar 14, 2026', highlight: true },
  { name: 'VIP Pass', price: 'IDR 500,000', desc: 'Premium access + perks', highlight: false }
]
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 font-montserrat transition-colors duration-300">
    <!-- Navbar -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm shadow-sm border-b border-gray-200 dark:border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-br from-[#18bcbc] to-[#0b3a4c] rounded-xl flex items-center justify-center">
              <!-- Logo Placeholder: ganti SVG atau gambar logo di sini -->
              <span class="font-garet text-lg font-bold text-white">JD</span>
            </div>
            <span class="text-sm text-[#1a4d8d] dark:text-[#18bcbc] font-semibold hidden sm:block">Jatim Developer Day</span>
          </div>
          <div class="hidden md:flex items-center gap-8">
            <a v-for="link in navLinks" :key="link.href" :href="link.href"
              class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#18bcbc] transition-colors">
              {{ link.label }}
            </a>
            <button @click="toggle"
              class="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-400">
              <svg v-if="theme === 'dark'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
            <a href="#register"
              class="px-6 py-2.5 bg-gradient-to-r from-[#18bcbc] to-[#0b3a4c] text-white rounded-full font-semibold text-sm hover:opacity-90 transition-all shadow-md">
              Register
            </a>
          </div>
          <div class="flex md:hidden items-center gap-2">
            <button @click="toggle"
              class="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-400">
              <svg v-if="theme === 'dark'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5">
              <svg class="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div v-if="mobileMenuOpen" class="md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-white/5">
        <div class="px-4 py-3 space-y-3">
          <a v-for="link in navLinks" :key="link.href" :href="link.href"
            @click="mobileMenuOpen = false"
            class="block text-gray-600 dark:text-gray-400 hover:text-[#18bcbc] font-medium py-2">
            {{ link.label }}
          </a>
          <a href="#register" @click="mobileMenuOpen = false"
            class="block bg-gradient-to-r from-[#18bcbc] to-[#0b3a4c] text-white px-5 py-2.5 rounded-full font-semibold text-center">
            Register
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div class="absolute inset-0 overflow-hidden">
        <!-- Large circle -->
        <svg class="absolute top-20 left-10 w-72 h-72 text-[#18bcbc]/10 dark:text-[#18bcbc]/5" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="currentColor" />
        </svg>

        <!-- Mascot Placeholder: ganti dengan ilustrasi/karakter maskot (480x600 px) -->
        <div class="absolute right-6 top-1/4 w-56 h-72 border-2 border-dashed border-[#18bcbc]/30 rounded-3xl bg-gradient-to-br from-[#18bcbc]/5 to-[#0b3a4c]/5 flex items-center justify-center backdrop-blur-sm pointer-events-none hidden lg:flex">
          <div class="text-center">
            <svg class="w-12 h-12 mx-auto text-[#18bcbc]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <p class="text-sm font-bold text-[#18bcbc]/40 mt-3">Maskot</p>
            <p class="text-xs text-[#18bcbc]/25 mt-1">480 x 600 px</p>
          </div>
        </div>

        <!-- Graphic Accent Placeholder: ganti dengan elemen dekoratif/pattern -->
        <div class="absolute left-8 top-1/3 w-24 h-24 border-2 border-dashed border-[#1a4d8d]/20 rounded-xl bg-[#1a4d8d]/5 flex items-center justify-center pointer-events-none rotate-12 hidden lg:flex">
          <p class="text-xs font-bold text-[#1a4d8d]/30">Graphic</p>
        </div>
        <div class="absolute right-1/4 bottom-1/4 w-20 h-20 border-2 border-dashed border-[#18bcbc]/20 rounded-lg bg-[#18bcbc]/5 flex items-center justify-center pointer-events-none -rotate-6 hidden lg:flex">
          <p class="text-xs font-bold text-[#18bcbc]/30">Graphic</p>
        </div>

        <!-- Wave shape -->
        <svg class="absolute bottom-20 right-10 w-96 h-96 text-[#1a4d8d]/5 dark:text-[#1a4d8d]/10" viewBox="0 0 200 200">
          <path d="M0,100 Q50,50 100,100 T200,100 L200,200 L0,200 Z" fill="currentColor" />
        </svg>
        <!-- Triangle outline -->
        <svg class="absolute top-40 right-1/4 w-32 h-32 text-[#18bcbc]/20 dark:text-[#18bcbc]/10" viewBox="0 0 100 100">
          <polygon points="50,5 95,97.5 5,97.5" fill="none" stroke="currentColor" stroke-width="2" />
        </svg>
        <!-- Cloud shapes -->
        <svg class="absolute top-32 left-1/4 w-48 h-24 opacity-30 dark:opacity-20" viewBox="0 0 200 80">
          <ellipse cx="50" cy="50" rx="40" ry="25" fill="#18bcbc" opacity="0.3" />
          <ellipse cx="90" cy="45" rx="50" ry="30" fill="#1a4d8d" opacity="0.2" />
          <ellipse cx="140" cy="50" rx="35" ry="20" fill="#18bcbc" opacity="0.25" />
        </svg>
        <!-- Another cloud -->
        <svg class="absolute bottom-40 left-20 w-36 h-18 opacity-20 dark:opacity-10" viewBox="0 0 200 80">
          <ellipse cx="40" cy="50" rx="30" ry="20" fill="#0b3a4c" opacity="0.2" />
          <ellipse cx="80" cy="45" rx="40" ry="25" fill="#18bcbc" opacity="0.15" />
          <ellipse cx="120" cy="50" rx="30" ry="18" fill="#1a4d8d" opacity="0.2" />
        </svg>
        <!-- Small circle -->
        <svg class="absolute top-1/3 right-20 w-16 h-16 text-[#1a4d8d]/15 dark:text-[#1a4d8d]/10" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="3" />
        </svg>
        <!-- Diamond shape -->
        <svg class="absolute bottom-1/3 left-1/3 w-20 h-20 text-[#18bcbc]/15 dark:text-[#18bcbc]/10" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" stroke-width="3" transform="rotate(45 50 50)" />
        </svg>
      </div>

      <div class="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div class="mb-6 inline-flex items-center bg-[#18bcbc]/10 px-4 py-2 rounded-full">
          <span class="w-2 h-2 bg-[#18bcbc] rounded-full mr-2 animate-pulse"></span>
          <span class="text-[#1a4d8d] dark:text-[#18bcbc] font-medium text-sm">March 15-16, 2026 • Pasuruan, East Java</span>
        </div>
        <h1 class="font-garet text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
          JATIM DEVELOPER<br/>DAY 2026
        </h1>
        <p class="font-garet text-3xl sm:text-4xl md:text-5xl text-[#1a4d8d] dark:text-[#18bcbc] font-semibold mb-8">
          Goes to Pasuruan
        </p>
        <p class="text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Jatim Developer Day (JDD) adalah acara tahunan komunitas teknologi yang bertujuan untuk memfasilitasi kolaborasi antara komunitas, akademisi, pemerintah, dan industri teknologi di Jawa Timur, guna mendorong inovasi dan pertumbuhan sektor digital.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#register"
            class="bg-gradient-to-r from-[#18bcbc] to-[#0b3a4c] text-white px-8 py-4 rounded-full font-garet font-bold text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Register Now
          </a>
          <a href="#schedule"
            class="border-2 border-gray-900 dark:border-white/20 text-gray-900 dark:text-white px-8 py-4 rounded-full font-garet font-bold text-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all">
            View Schedule
          </a>
        </div>
      </div>

      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" class="w-full">
          <path d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,60 1440,80 L1440,120 L0,120 Z" class="fill-gray-50 dark:fill-gray-900" />
        </svg>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="font-garet text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Tentang JDD 2026</h2>
          <p class="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Jatim Developer Day (JDD) adalah acara tahunan komunitas teknologi yang bertujuan untuk memfasilitasi kolaborasi antara komunitas, akademisi, pemerintah, dan industri teknologi di Jawa Timur, guna mendorong inovasi dan pertumbuhan sektor digital.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-white/[0.02] p-8 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-[#18bcbc]/30 hover:shadow-xl hover:shadow-[#18bcbc]/5 transition-all">
            <div class="w-14 h-14 bg-gradient-to-br from-[#18bcbc] to-[#0b3a4c] rounded-xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="font-garet text-xl font-bold text-gray-900 dark:text-white mb-3">100+ Sessions</h3>
            <p class="text-gray-600 dark:text-gray-400">Explore cutting-edge topics in web, mobile, AI/ML, cloud, and DevOps.</p>
          </div>
          <div class="bg-white dark:bg-white/[0.02] p-8 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-[#18bcbc]/30 hover:shadow-xl hover:shadow-[#18bcbc]/5 transition-all">
            <div class="w-14 h-14 bg-gradient-to-br from-[#1a4d8d] to-[#0b3a4c] rounded-xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="font-garet text-xl font-bold text-gray-900 dark:text-white mb-3">50+ Speakers</h3>
            <p class="text-gray-600 dark:text-gray-400">Learn from industry experts, open-source maintainers, and tech leaders.</p>
          </div>
          <div class="bg-white dark:bg-white/[0.02] p-8 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-[#18bcbc]/30 hover:shadow-xl hover:shadow-[#18bcbc]/5 transition-all">
            <div class="w-14 h-14 bg-gradient-to-br from-[#0b3a4c] to-[#1a4d8d] rounded-xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 class="font-garet text-xl font-bold text-gray-900 dark:text-white mb-3">Hands-on Workshops</h3>
            <p class="text-gray-600 dark:text-gray-400">Get practical experience with live coding, hackathons, and interactive labs.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Schedule Section -->
    <section id="schedule" class="py-20 bg-white dark:bg-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="font-garet text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Event Schedule</h2>
          <p class="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Two days packed with inspiring talks, workshops, and networking.
          </p>
        </div>

        <div class="flex justify-center mb-10">
          <div class="inline-flex bg-gray-100 dark:bg-white/5 rounded-xl p-1">
            <button v-for="(day, index) in days" :key="index" @click="activeDay = index"
              :class="[
                'px-6 py-3 rounded-lg font-garet font-semibold transition-all',
                activeDay === index 
                  ? 'bg-gradient-to-r from-[#18bcbc] to-[#0b3a4c] text-white shadow-md' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              ]">
              {{ day }}
            </button>
          </div>
        </div>

        <div class="bg-gray-50 dark:bg-white/[0.02] rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-white/5">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="bg-gradient-to-r from-[#0b3a4c] to-[#1a4d8d]">
                  <th class="px-6 py-4 text-left font-garet font-semibold text-white">Time</th>
                  <th class="px-6 py-4 text-left font-garet font-semibold text-white">Main Hall</th>
                  <th class="px-6 py-4 text-left font-garet font-semibold text-white">Workshop Room</th>
                  <th class="px-6 py-4 text-left font-garet font-semibold text-white">Community Stage</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(slot, index) in schedule[activeDay]" :key="index"
                  class="border-b border-gray-200 dark:border-white/5 hover:bg-[#18bcbc]/5 dark:hover:bg-[#18bcbc]/5 transition-colors">
                  <td class="px-6 py-5 font-garet font-semibold text-[#1a4d8d] dark:text-[#18bcbc] whitespace-nowrap">{{ slot.time }}</td>
                  <td class="px-6 py-5">
                    <div class="font-semibold text-gray-900 dark:text-white">{{ slot.main.title }}</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">{{ slot.main.speaker }}</div>
                  </td>
                  <td class="px-6 py-5">
                    <div class="font-semibold text-gray-900 dark:text-white">{{ slot.workshop.title }}</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">{{ slot.workshop.speaker }}</div>
                  </td>
                  <td class="px-6 py-5">
                    <div class="font-semibold text-gray-900 dark:text-white">{{ slot.community.title }}</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">{{ slot.community.speaker }}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- Speakers Section -->
    <section id="speakers" class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="font-garet text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Featured Speakers</h2>
          <p class="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Learn from the best minds in the industry.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(speaker, index) in speakers" :key="index"
            class="group bg-white dark:bg-white/[0.02] rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-white/5 hover:border-[#18bcbc]/30">
            <div class="relative mb-5">
              <div class="w-28 h-28 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-[#18bcbc]/20 to-[#1a4d8d]/20 flex items-center justify-center border-4 border-white dark:border-gray-900 shadow-lg group-hover:scale-105 transition-transform">
                <svg class="w-14 h-14 text-[#18bcbc]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
            <div class="text-center">
              <h3 class="font-garet font-bold text-lg text-gray-900 dark:text-white mb-1">{{ speaker.name }}</h3>
              <p class="text-[#18bcbc] font-medium text-sm mb-2">{{ speaker.role }}</p>
              <p class="text-gray-500 dark:text-gray-400 text-sm">{{ speaker.company }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Location Section -->
    <section id="location" class="py-20 bg-white dark:bg-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="font-garet text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Location in Pasuruan</h2>
          <p class="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Join us in the beautiful city of Pasuruan, East Java.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-10 items-start">
          <div class="bg-gradient-to-br from-[#18bcbc]/10 to-[#1a4d8d]/10 rounded-2xl overflow-hidden shadow-lg border border-[#18bcbc]/20">
            <div class="aspect-video bg-gradient-to-br from-[#0b3a4c] to-[#1a4d8d] flex items-center justify-center relative">
              <div class="absolute inset-0 opacity-20">
                <svg viewBox="0 0 100 100" class="w-full h-full">
                  <pattern id="grid-dark" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" stroke-width="0.3" />
                  </pattern>
                  <rect width="100" height="100" fill="url(#grid-dark)" />
                </svg>
              </div>
              <div class="text-center relative z-10">
                <div class="w-20 h-20 bg-[#18bcbc] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce">
                  <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <p class="text-white font-garet font-bold text-xl">Pasuruan Convention Center</p>
                <p class="text-white/70">East Java, Indonesia</p>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="bg-gray-50 dark:bg-white/[0.02] rounded-2xl p-8 shadow-md border border-gray-200 dark:border-white/5">
              <h3 class="font-garet font-bold text-xl text-gray-900 dark:text-white mb-4">Venue Details</h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="w-10 h-10 bg-[#18bcbc]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-5 h-5 text-[#18bcbc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900 dark:text-white">Pasuruan Convention Center</p>
                    <p class="text-gray-500 dark:text-gray-400 text-sm">Jl. Raya Bangil No.1, Bangil, Pasuruan</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-10 h-10 bg-[#1a4d8d]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-5 h-5 text-[#1a4d8d] dark:text-[#18bcbc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900 dark:text-white">Event Hours</p>
                    <p class="text-gray-500 dark:text-gray-400 text-sm">Day 1: 08:00 - 18:00 WIB</p>
                    <p class="text-gray-500 dark:text-gray-400 text-sm">Day 2: 08:00 - 17:00 WIB</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-r from-[#18bcbc] to-[#1a4d8d] rounded-2xl p-8 text-white">
              <h3 class="font-garet font-bold text-xl mb-3">How to Get There</h3>
              <ul class="space-y-2 text-white/90">
                <li class="flex items-center">
                  <span class="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                  15 minutes from Surabaya by car
                </li>
                <li class="flex items-center">
                  <span class="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                  Direct access from Jakarta-Surabaya highway
                </li>
                <li class="flex items-center">
                  <span class="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                  Free parking for 500+ vehicles
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Register Section -->
    <section id="register" class="py-20 bg-gradient-to-br from-[#0b3a4c] to-[#1a4d8d] relative overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-0 left-0 w-96 h-96 bg-[#18bcbc]/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 class="font-garet text-4xl md:text-5xl font-bold text-white mb-6">Ready to Join?</h2>
        <p class="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
          Don't miss out on East Java's biggest developer conference.
        </p>
        
        <div class="grid sm:grid-cols-3 gap-6 mb-10">
          <div v-for="item in pricing" :key="item.name"
            :class="[
              'backdrop-blur-sm rounded-2xl p-6 border transition-all',
              item.highlight ? 'bg-white/15 border-[#18bcbc] scale-105 shadow-lg' : 'bg-white/10 border-white/20 hover:bg-white/15'
            ]">
            <div class="font-garet text-3xl font-bold text-[#18bcbc] mb-2">{{ item.name }}</div>
            <div class="text-white text-2xl font-bold mb-2">{{ item.price }}</div>
            <p class="text-white/60 text-sm">{{ item.desc }}</p>
          </div>
        </div>

        <a href="#"
          class="inline-block bg-[#18bcbc] text-white px-10 py-4 rounded-full font-garet font-bold text-lg hover:bg-[#15a5a5] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Register Now
        </a>
        <p class="text-white/60 text-sm mt-6">Includes: Lunch, snacks, swag bag, and certificate</p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 dark:bg-black text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-10">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-gradient-to-br from-[#18bcbc] to-[#0b3a4c] rounded-xl flex items-center justify-center">
                <span class="font-garet text-lg font-bold text-white">JD</span>
              </div>
              <span class="font-garet font-bold text-xl">JDD 2026</span>
            </div>
            <p class="text-white/70 text-sm">
              East Java's Premier Developer Conference
            </p>
          </div>
          <div>
            <h4 class="font-garet font-bold text-lg mb-4">Quick Links</h4>
            <ul class="space-y-3 text-white/70 text-sm">
              <li><a href="#about" class="hover:text-[#18bcbc] transition-colors">About JDD</a></li>
              <li><a href="#schedule" class="hover:text-[#18bcbc] transition-colors">Schedule</a></li>
              <li><a href="#speakers" class="hover:text-[#18bcbc] transition-colors">Speakers</a></li>
              <li><a href="#register" class="hover:text-[#18bcbc] transition-colors">Register</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-garet font-bold text-lg mb-4">Resources</h4>
            <ul class="space-y-3 text-white/70 text-sm">
              <li><a href="#" class="hover:text-[#18bcbc] transition-colors">Code of Conduct</a></li>
              <li><a href="#" class="hover:text-[#18bcbc] transition-colors">Venue Guide</a></li>
              <li><a href="#" class="hover:text-[#18bcbc] transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-garet font-bold text-lg mb-4">Contact</h4>
            <ul class="space-y-3 text-white/70 text-sm">
              <li class="flex items-center">
                <svg class="w-4 h-4 mr-3 text-[#18bcbc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@jatimdevday.com
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
          <p>&copy; 2026 Jatim Developer Day. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
