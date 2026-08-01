<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
const activeDay = ref(0)

const navLinks = [
  { label: 'Tentang', href: '#about' },
  { label: 'Jadwal', href: '#schedule' },
  { label: 'Pembicara', href: '#speakers' },
  { label: 'Lokasi', href: '#location' },
]

const days = ['Hari 1 - 15 Mar', 'Hari 2 - 16 Mar']

const schedule = ref([
  [
    { time: '08:00 - 09:00', main: { title: 'Registrasi & Pembukaan', speaker: 'Panitia' }, workshop: { title: 'Workshop Persiapan', speaker: 'Tim DevOps' }, community: { title: 'Sarapan & Networking', speaker: '' } },
    { time: '09:00 - 10:00', main: { title: 'Keynote Pembukaan', speaker: 'Dr. Ahmad Fauzi' }, workshop: { title: 'React Advanced', speaker: 'Sarah Chen' }, community: { title: 'Meetup Flutter', speaker: 'Eko Prasetyo' } },
    { time: '10:30 - 12:00', main: { title: 'Masa Depan Web Dev', speaker: 'Budi Santoso' }, workshop: { title: 'Kubernetes Deep Dive', speaker: 'Rizki Ramadhan' }, community: { title: 'Open Source di Indonesia', speaker: 'Panel Komunitas' } },
    { time: '13:00 - 14:30', main: { title: 'AI/ML untuk Developer', speaker: 'Dr. Dewi Lestari' }, workshop: { title: 'Bangun API dengan Go', speaker: 'Andi Wijaya' }, community: { title: 'Women in Tech', speaker: 'Sari Dewi' } },
    { time: '15:00 - 16:30', main: { title: 'Cloud Native Architecture', speaker: 'Rendra Kusuma' }, workshop: { title: 'TypeScript Best Practices', speaker: 'Maya Putri' }, community: { title: 'Startup Pitch', speaker: 'Various Startups' } },
    { time: '17:00 - 18:00', main: { title: 'Penutupan Hari 1', speaker: 'Panitia' }, workshop: { title: 'Hackathon Kickoff', speaker: 'Tim Hackathon' }, community: { title: 'Sosial Sore', speaker: '' } }
  ],
  [
    { time: '08:00 - 09:00', main: { title: 'Welcome Day 2', speaker: 'Panitia' }, workshop: { title: 'Hackathon Berlanjut', speaker: 'Peserta' }, community: { title: 'Kopi Pagi', speaker: '' } },
    { time: '09:00 - 10:00', main: { title: 'Mobile Dev Trends', speaker: 'Kevin Tan' }, workshop: { title: 'GraphQL Workshop', speaker: 'Linda Hartono' }, community: { title: 'Komunitas Vue.js', speaker: 'Dedi Kurniawan' } },
    { time: '10:30 - 12:00', main: { title: 'DevOps & SRE', speaker: 'Fajar Nugroho' }, workshop: { title: 'Rust untuk Web Dev', speaker: 'Arif Hidayat' }, community: { title: 'Data Engineering', speaker: 'Indra Sakti' } },
    { time: '13:00 - 14:30', main: { title: 'Keamanan Aplikasi Modern', speaker: 'Bayu Pratama' }, workshop: { title: 'Full Stack Nuxt', speaker: 'Rina Wulandari' }, community: { title: 'GameDev Indonesia', speaker: 'Panel Game Dev' } },
    { time: '15:00 - 16:00', main: { title: 'Final Hackathon', speaker: 'Peserta' }, workshop: { title: 'Workshop Karir', speaker: 'HR Leaders' }, community: { title: 'Lightning Talks', speaker: 'Anggota Komunitas' } },
    { time: '16:00 - 17:00', main: { title: 'Penutupan & Awards', speaker: 'Panitia' }, workshop: { title: 'Sesi Terima Kasih', speaker: '' }, community: { title: 'Foto Bersama', speaker: 'Seluruh Peserta' } }
  ]
])

const speakers = ref([
  { name: 'Dr. Ahmad Fauzi', role: 'Keynote Speaker', company: 'Kemendikbud' },
  { name: 'Sarah Chen', role: 'Frontend Lead', company: 'Gojek' },
  { name: 'Budi Santoso', role: 'CTO', company: 'Tokopedia' },
  { name: 'Dr. Dewi Lestari', role: 'Peneliti AI', company: 'Google Indonesia' },
  { name: 'Rizki Ramadhan', role: 'Cloud Architect', company: 'AWS' },
  { name: 'Maya Putri', role: 'TypeScript Champion', company: 'Microsoft' },
  { name: 'Eko Prasetyo', role: 'Flutter GDE', company: 'Traveloka' },
  { name: 'Kevin Tan', role: 'Mobile Lead', company: 'Shopee' }
])
</script>

<template>
  <div class="min-h-screen bg-cream font-montserrat overflow-x-hidden">
    <!-- Navbar -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-[#18bcbc]/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center gap-3">
            <!-- Play button logo from jddold.html -->
            <svg width="20" height="18" viewBox="0 0 15 14" fill="none" class="w-6 h-6">
              <path d="M13 6.13397C13.6667 6.51888 13.6667 7.48113 13 7.86603L5.5 12.1962C4.83333 12.5811 4 12.0999 4 11.3301V2.66987C4 1.90007 4.83333 1.41895 5.5 1.80385L13 6.13397Z" fill="#18bcbc"/>
            </svg>
            <!-- Logo Image Placeholder: ganti dengan <img src="/logo.png" alt="JDD 2026" class="h-8"> -->
            <span class="text-sm text-[#0b3a4c] font-extrabold tracking-wide uppercase hidden sm:block">JDD 2026</span>
          </div>
          <div class="hidden md:flex items-center gap-8">
            <a v-for="link in navLinks" :key="link.href" :href="link.href"
              class="text-sm font-semibold text-[#0b3a4c]/70 hover:text-[#18bcbc] transition-colors uppercase tracking-wider">
              {{ link.label }}
            </a>
            <a href="#register"
              class="px-6 py-2.5 bg-gradient-to-r from-[#18bcbc] to-[#0b3a4c] text-white rounded-full font-bold text-sm hover:shadow-lg hover:shadow-[#18bcbc]/30 transition-all uppercase tracking-wider">
              Daftar
            </a>
          </div>
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2">
            <svg class="w-6 h-6 text-[#0b3a4c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div v-if="mobileMenuOpen" class="md:hidden bg-cream border-t border-[#18bcbc]/10">
        <div class="px-4 py-3 space-y-3">
          <a v-for="link in navLinks" :key="link.href" :href="link.href"
            @click="mobileMenuOpen = false"
            class="block text-[#0b3a4c]/70 hover:text-[#18bcbc] font-semibold py-2 uppercase tracking-wider text-sm">
            {{ link.label }}
          </a>
          <a href="#register" @click="mobileMenuOpen = false"
            class="block bg-gradient-to-r from-[#18bcbc] to-[#0b3a4c] text-white px-5 py-2.5 rounded-full font-bold text-center uppercase tracking-wider text-sm">
            Daftar
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-cream">
      <!-- Animated gradient orbs -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#18bcbc]/10 blur-3xl animate-pulse"></div>
        <div class="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#1a4d8d]/10 blur-3xl animate-pulse" style="animation-delay: 2s"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#18bcbc]/5 blur-3xl"></div>

        <!-- Mascot Placeholder: ganti dengan ilustrasi/karakter maskot (480x600 px) -->
        <div class="absolute right-8 top-1/4 w-56 h-72 border-2 border-dashed border-[#18bcbc]/30 rounded-3xl bg-white/30 backdrop-blur-sm flex items-center justify-center hidden lg:flex">
          <div class="text-center">
            <svg class="w-12 h-12 mx-auto text-[#18bcbc]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <p class="text-sm font-bold text-[#18bcbc]/50 mt-3">Maskot</p>
            <p class="text-xs text-[#18bcbc]/30 mt-1">480 x 600 px</p>
          </div>
        </div>

        <!-- Graphic Accent Placeholders -->
        <div class="absolute left-12 top-1/3 w-20 h-20 border-2 border-dashed border-[#1a4d8d]/20 rounded-xl bg-[#1a4d8d]/5 flex items-center justify-center rotate-12 hidden lg:flex">
          <p class="text-xs font-bold text-[#1a4d8d]/30">Graphic</p>
        </div>
        <div class="absolute right-1/3 bottom-1/4 w-24 h-16 border-2 border-dashed border-[#18bcbc]/20 rounded-lg bg-[#18bcbc]/5 flex items-center justify-center -rotate-6 hidden lg:flex">
          <p class="text-xs font-bold text-[#18bcbc]/30">Graphic</p>
        </div>
      </div>

      <!-- Grid overlay -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none" style="background-image: linear-gradient(#18bcbc 1px, transparent 1px), linear-gradient(90deg, #18bcbc 1px, transparent 1px); background-size: 60px 60px;"></div>

      <div class="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div class="mb-8 inline-flex items-center gap-2 bg-[#18bcbc]/10 px-4 py-2 rounded-full border border-[#18bcbc]/20">
          <span class="w-2 h-2 bg-[#18bcbc] rounded-full animate-ping"></span>
          <span class="text-[#0b3a4c] font-bold text-xs uppercase tracking-widest">15-16 Maret 2026 • Pasuruan, Jawa Timur</span>
        </div>

        <!-- Main Logo - large play button from jddold.html -->
        <div class="mb-8 flex justify-center">
          <div class="relative">
            <div class="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-br from-[#18bcbc] to-[#0b3a4c] flex items-center justify-center shadow-2xl shadow-[#18bcbc]/30 animate-pulse-glow">
              <svg viewBox="0 0 15 14" fill="none" class="w-16 h-16 sm:w-20 sm:h-20 ml-2">
                <path d="M13 6.13397C13.6667 6.51888 13.6667 7.48113 13 7.86603L5.5 12.1962C4.83333 12.5811 4 12.0999 4 11.3301V2.66987C4 1.90007 4.83333 1.41895 5.5 1.80385L13 6.13397Z" fill="white"/>
              </svg>
            </div>
            <div class="absolute -inset-4 bg-[#18bcbc]/20 rounded-[2rem] blur-xl -z-10"></div>
          </div>
        </div>

        <h1 class="font-garet text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#0b3a4c] mb-2 leading-none tracking-tight">
          JDD 2026
        </h1>
        <p class="text-lg sm:text-xl text-[#18bcbc] font-bold mb-4 uppercase tracking-[0.3em]">Jatim Developer Day</p>
        <p class="text-[#0b3a4c]/60 text-base sm:text-lg mb-10 max-w-2xl mx-auto font-medium">
          Jatim Developer Day (JDD) adalah acara tahunan komunitas teknologi yang bertujuan untuk memfasilitasi kolaborasi antara komunitas, akademisi, pemerintah, dan industri teknologi di Jawa Timur, guna mendorong inovasi dan pertumbuhan sektor digital.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#register"
            class="group bg-gradient-to-r from-[#18bcbc] to-[#0b3a4c] text-white px-10 py-4 rounded-full font-garet font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:shadow-[#18bcbc]/40 hover:-translate-y-1">
            <span class="flex items-center gap-2">
              Daftar Sekarang
              <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
              </svg>
            </span>
          </a>
          <a href="#schedule"
            class="group border-2 border-[#0b3a4c] text-[#0b3a4c] px-10 py-4 rounded-full font-garet font-bold text-lg hover:bg-[#0b3a4c] hover:text-white transition-all">
            <span class="flex items-center gap-2">
              Lihat Jadwal
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
              </svg>
            </span>
          </a>
        </div>
      </div>

      <!-- Bottom wave -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" class="w-full">
          <path d="M0,60 C360,90 720,30 1080,60 C1260,75 1380,45 1440,60 L1440,80 L0,80 Z" fill="white" opacity="0.9"/>
        </svg>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 bg-[#18bcbc]/10 px-4 py-1.5 rounded-full mb-4 border border-[#18bcbc]/20">
            <span class="text-[#18bcbc] font-bold text-xs uppercase tracking-widest">Tentang</span>
          </div>
          <h2 class="font-garet text-4xl md:text-5xl font-black text-[#0b3a4c] mb-4">Tentang JDD 2026</h2>
          <p class="text-[#0b3a4c]/60 text-lg max-w-3xl mx-auto font-medium">
            Jatim Developer Day (JDD) adalah acara tahunan komunitas teknologi yang bertujuan untuk memfasilitasi kolaborasi antara komunitas, akademisi, pemerintah, dan industri teknologi di Jawa Timur, guna mendorong inovasi dan pertumbuhan sektor digital.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="group bg-cream p-8 rounded-2xl border border-[#18bcbc]/10 hover:border-[#18bcbc]/40 hover:shadow-xl hover:shadow-[#18bcbc]/10 transition-all">
            <div class="w-14 h-14 bg-gradient-to-br from-[#18bcbc] to-[#0b3a4c] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#18bcbc]/20">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 class="font-garet text-xl font-black text-[#0b3a4c] mb-3">100+ Sesi</h3>
            <p class="text-[#0b3a4c]/60">Jelajahi topik terkini di web, mobile, AI/ML, cloud, dan DevOps.</p>
          </div>
          <div class="group bg-cream p-8 rounded-2xl border border-[#18bcbc]/10 hover:border-[#18bcbc]/40 hover:shadow-xl hover:shadow-[#18bcbc]/10 transition-all">
            <div class="w-14 h-14 bg-gradient-to-br from-[#1a4d8d] to-[#0b3a4c] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#1a4d8d]/20">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="font-garet text-xl font-black text-[#0b3a4c] mb-3">50+ Pembicara</h3>
            <p class="text-[#0b3a4c]/60">Belajar dari pakar industri, maintainer open-source, dan tech leaders.</p>
          </div>
          <div class="group bg-cream p-8 rounded-2xl border border-[#18bcbc]/10 hover:border-[#18bcbc]/40 hover:shadow-xl hover:shadow-[#18bcbc]/10 transition-all">
            <div class="w-14 h-14 bg-gradient-to-br from-[#0b3a4c] to-[#1a4d8d] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#0b3a4c]/20">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="font-garet text-xl font-black text-[#0b3a4c] mb-3">Workshop Hands-on</h3>
            <p class="text-[#0b3a4c]/60">Dapatkan pengalaman praktis dengan live coding, hackathon, dan lab interaktif.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="h-1 bg-gradient-to-r from-[#18bcbc] via-[#1a4d8d] to-[#0b3a4c] opacity-20"></div>

    <!-- Schedule Section -->
    <section id="schedule" class="py-20 bg-cream">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 bg-[#18bcbc]/10 px-4 py-1.5 rounded-full mb-4 border border-[#18bcbc]/20">
            <span class="text-[#18bcbc] font-bold text-xs uppercase tracking-widest">Jadwal</span>
          </div>
          <h2 class="font-garet text-4xl md:text-5xl font-black text-[#0b3a4c] mb-4">Jadwal Acara</h2>
          <p class="text-[#0b3a4c]/60 text-lg max-w-3xl mx-auto font-medium">Dua hari penuh dengan talks inspiratif, workshop, dan networking.</p>
        </div>

        <div class="flex justify-center mb-10">
          <div class="inline-flex bg-white rounded-xl p-1.5 shadow-md border border-[#18bcbc]/10">
            <button v-for="(day, index) in days" :key="index" @click="activeDay = index"
              :class="[
                'px-6 py-3 rounded-lg font-garet font-bold text-sm transition-all uppercase tracking-wider',
                activeDay === index 
                  ? 'bg-gradient-to-r from-[#18bcbc] to-[#0b3a4c] text-white shadow-lg shadow-[#18bcbc]/30' 
                  : 'text-[#0b3a4c]/60 hover:text-[#0b3a4c]'
              ]">
              {{ day }}
            </button>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-xl border border-[#18bcbc]/10 overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="bg-gradient-to-r from-[#0b3a4c] to-[#1a4d8d]">
                  <th class="px-6 py-4 text-left font-garet font-bold text-white text-sm uppercase tracking-wider">Waktu</th>
                  <th class="px-6 py-4 text-left font-garet font-bold text-white text-sm uppercase tracking-wider">Hall Utama</th>
                  <th class="px-6 py-4 text-left font-garet font-bold text-white text-sm uppercase tracking-wider">Workshop</th>
                  <th class="px-6 py-4 text-left font-garet font-bold text-white text-sm uppercase tracking-wider">Komunitas</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(slot, index) in schedule[activeDay]" :key="index"
                  class="border-b border-[#18bcbc]/10 hover:bg-[#18bcbc]/5 transition-colors">
                  <td class="px-6 py-5 font-garet font-bold text-[#18bcbc] whitespace-nowrap">{{ slot.time }}</td>
                  <td class="px-6 py-5">
                    <div class="font-bold text-[#0b3a4c]">{{ slot.main.title }}</div>
                    <div class="text-sm text-[#0b3a4c]/50 font-medium">{{ slot.main.speaker }}</div>
                  </td>
                  <td class="px-6 py-5">
                    <div class="font-bold text-[#0b3a4c]">{{ slot.workshop.title }}</div>
                    <div class="text-sm text-[#0b3a4c]/50 font-medium">{{ slot.workshop.speaker }}</div>
                  </td>
                  <td class="px-6 py-5">
                    <div class="font-bold text-[#0b3a4c]">{{ slot.community.title }}</div>
                    <div class="text-sm text-[#0b3a4c]/50 font-medium">{{ slot.community.speaker }}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="h-1 bg-gradient-to-r from-[#18bcbc] via-[#1a4d8d] to-[#0b3a4c] opacity-20"></div>

    <!-- Speakers Section -->
    <section id="speakers" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 bg-[#18bcbc]/10 px-4 py-1.5 rounded-full mb-4 border border-[#18bcbc]/20">
            <span class="text-[#18bcbc] font-bold text-xs uppercase tracking-widest">Pembicara</span>
          </div>
          <h2 class="font-garet text-4xl md:text-5xl font-black text-[#0b3a4c] mb-4">Pembicara Unggulan</h2>
          <p class="text-[#0b3a4c]/60 text-lg max-w-3xl mx-auto font-medium">Belajar dari para ahli terbaik di industri.</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(speaker, index) in speakers" :key="index"
            class="group bg-cream rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-[#18bcbc]/10 hover:border-[#18bcbc]/30">
            <div class="relative mb-5">
              <div class="w-28 h-28 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-[#18bcbc]/20 to-[#1a4d8d]/20 flex items-center justify-center border-4 border-[#18bcbc]/20 shadow-lg group-hover:scale-105 transition-transform group-hover:border-[#18bcbc]/40">
                <svg class="w-14 h-14 text-[#18bcbc]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
            <div class="text-center">
              <h3 class="font-garet font-bold text-lg text-[#0b3a4c] mb-1">{{ speaker.name }}</h3>
              <p class="text-[#18bcbc] font-bold text-sm mb-2 uppercase tracking-wider">{{ speaker.role }}</p>
              <p class="text-[#0b3a4c]/50 text-sm font-medium">{{ speaker.company }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Location Section -->
    <section id="location" class="py-20 bg-cream">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 bg-[#18bcbc]/10 px-4 py-1.5 rounded-full mb-4 border border-[#18bcbc]/20">
            <span class="text-[#18bcbc] font-bold text-xs uppercase tracking-widest">Lokasi</span>
          </div>
          <h2 class="font-garet text-4xl md:text-5xl font-black text-[#0b3a4c] mb-4">Lokasi di Pasuruan</h2>
          <p class="text-[#0b3a4c]/60 text-lg max-w-3xl mx-auto font-medium">Bergabunglah bersama kami di kota Pasuruan, Jawa Timur.</p>
        </div>

        <div class="grid lg:grid-cols-2 gap-10 items-start">
          <div class="rounded-2xl overflow-hidden shadow-xl border border-[#18bcbc]/20">
            <div class="aspect-video bg-gradient-to-br from-[#0b3a4c] to-[#1a4d8d] flex items-center justify-center relative">
              <div class="absolute inset-0 opacity-10">
                <svg viewBox="0 0 100 100" class="w-full h-full">
                  <pattern id="grid-tech" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#18bcbc" stroke-width="0.5"/>
                  </pattern>
                  <rect width="100" height="100" fill="url(#grid-tech)"/>
                </svg>
              </div>
              <div class="text-center relative z-10">
                <div class="w-20 h-20 bg-[#18bcbc] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#18bcbc]/40 animate-bounce">
                  <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <p class="text-white font-garet font-bold text-xl">Pasuruan Convention Center</p>
                <p class="text-white/70 font-medium">Jawa Timur, Indonesia</p>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="bg-white rounded-2xl p-8 shadow-md border border-[#18bcbc]/10">
              <h3 class="font-garet font-bold text-xl text-[#0b3a4c] mb-4">Detail Venue</h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="w-10 h-10 bg-[#18bcbc]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-5 h-5 text-[#18bcbc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-bold text-[#0b3a4c]">Pasuruan Convention Center</p>
                    <p class="text-[#0b3a4c]/50 text-sm font-medium">Jl. Raya Bangil No.1, Bangil, Pasuruan</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-10 h-10 bg-[#1a4d8d]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-5 h-5 text-[#1a4d8d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-bold text-[#0b3a4c]">Jam Acara</p>
                    <p class="text-[#0b3a4c]/50 text-sm font-medium">Hari 1: 08:00 - 18:00 WIB</p>
                    <p class="text-[#0b3a4c]/50 text-sm font-medium">Hari 2: 08:00 - 17:00 WIB</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-r from-[#18bcbc] to-[#1a4d8d] rounded-2xl p-8 text-white shadow-xl">
              <h3 class="font-garet font-bold text-xl mb-3">Cara Menuju Lokasi</h3>
              <ul class="space-y-3 text-white/90 font-medium">
                <li class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  15 menit dari Surabaya naik mobil
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  Akses langsung dari tol Jakarta-Surabaya
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  Parkir gratis untuk 500+ kendaraan
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Register Section -->
    <section id="register" class="py-20 bg-gradient-to-br from-[#0b3a4c] to-[#1a4d8d] relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 left-0 w-96 h-96 bg-[#18bcbc]/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div class="absolute inset-0 opacity-[0.04]" style="background-image: linear-gradient(#18bcbc 1px, transparent 1px), linear-gradient(90deg, #18bcbc 1px, transparent 1px); background-size: 40px 40px;"></div>
      </div>

      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 class="font-garet text-4xl md:text-5xl font-black text-white mb-4">Siap Bergabung?</h2>
        <p class="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
          Jangan lewatkan konferensi developer terbesar di Jawa Timur.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#"
            class="group bg-[#18bcbc] text-white px-10 py-4 rounded-full font-garet font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:shadow-[#18bcbc]/40 hover:-translate-y-1">
            <span class="flex items-center gap-2">
              Daftar Sekarang
              <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
              </svg>
            </span>
          </a>
          <a href="#"
            class="border-2 border-white/30 text-white px-10 py-4 rounded-full font-garet font-bold text-lg hover:bg-white hover:text-[#0b3a4c] transition-all">
            Info Lebih Lanjut
          </a>
        </div>
        <p class="text-white/50 text-sm mt-6 font-medium">Termasuk: Makan siang, snack, swag bag, dan sertifikat</p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#0b3a4c] text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-10">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <svg width="20" height="18" viewBox="0 0 15 14" fill="none" class="w-8 h-8">
                <path d="M13 6.13397C13.6667 6.51888 13.6667 7.48113 13 7.86603L5.5 12.1962C4.83333 12.5811 4 12.0999 4 11.3301V2.66987C4 1.90007 4.83333 1.41895 5.5 1.80385L13 6.13397Z" fill="#18bcbc"/>
              </svg>
              <span class="font-garet font-bold text-xl">JDD 2026</span>
            </div>
            <p class="text-white/60 text-sm font-medium">Konferensi Developer Terbesar di Jawa Timur</p>
          </div>
          <div>
            <h4 class="font-garet font-bold text-lg mb-4">Navigasi</h4>
            <ul class="space-y-3 text-white/60 text-sm font-medium">
              <li><a href="#about" class="hover:text-[#18bcbc] transition-colors">Tentang JDD</a></li>
              <li><a href="#schedule" class="hover:text-[#18bcbc] transition-colors">Jadwal</a></li>
              <li><a href="#speakers" class="hover:text-[#18bcbc] transition-colors">Pembicara</a></li>
              <li><a href="#register" class="hover:text-[#18bcbc] transition-colors">Daftar</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-garet font-bold text-lg mb-4">Sumber Daya</h4>
            <ul class="space-y-3 text-white/60 text-sm font-medium">
              <li><a href="#" class="hover:text-[#18bcbc] transition-colors">Kode Etik</a></li>
              <li><a href="#" class="hover:text-[#18bcbc] transition-colors">Panduan Venue</a></li>
              <li><a href="#" class="hover:text-[#18bcbc] transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-garet font-bold text-lg mb-4">Kontak</h4>
            <ul class="space-y-3 text-white/60 text-sm font-medium">
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#18bcbc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@jatimdevday.com
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm font-medium">
          <p>&copy; 2026 Jatim Developer Day. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(24, 188, 188, 0.3); }
  50% { box-shadow: 0 0 40px rgba(24, 188, 188, 0.6); }
}
.animate-pulse-glow {
  animation: pulse-glow 3s ease-in-out infinite;
}
</style>