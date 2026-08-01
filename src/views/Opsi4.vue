<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)

const targetDate = new Date('2026-10-25T00:00:00').getTime()
const timeLeft = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 })
let timer = null

const updateCountdown = () => {
  const now = Date.now()
  const diff = Math.max(0, targetDate - now)
  timeLeft.value = {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60)
  }
}

onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

const activeAgendaTab = ref('pagi')
const agendaTabs = [
  { key: 'pagi', label: 'Pagi - Keynote' },
  { key: 'siang1', label: 'Siang - LT #1' },
  { key: 'siang2', label: 'Siang - LT #2' },
  { key: 'workshop', label: 'Workshop' },
  { key: 'sore', label: 'Sore - Closing' }
]

const agenda = {
  pagi: [
    { time: '08.00', title: 'Open Registration', type: 'registrasi' },
    { time: '09.00-09.30', title: 'Opening Ceremony', type: 'acara' },
    { time: '09.30-09.40', title: 'Sponsor Stage - Zero One Group', speaker: 'Doni Rubiagatra', role: 'Partner & VP of Engineering at Zero One Group', type: 'sponsor' },
    { time: '09.40-10.20', title: 'Future AI Impact on Freedom, Work, and Humanity', speaker: 'Ainun Najib', role: 'Data & AI Practitioner', type: 'keynote' },
    { time: '10.20-10.40', title: 'Vibe Coding: Fast Delivery, Rapid Feedback', speaker: 'Ahmad Fatoni', role: 'Project Director at DOT Indonesia', type: 'keynote' },
    { time: '10.40-11.20', title: 'Be a 10% Engineer with AI', speaker: 'Zain Fathoni', role: 'Senior Front-End Engineer at Relay Commerce', type: 'keynote' },
    { time: '11.20-12.00', title: 'AI-Proof Your Software Engineering Job Search', speaker: 'Listiarso W', role: 'CROTO Metatech ID', type: 'keynote' },
    { time: '12.00-12.20', title: 'QnA Keynote Speakers', type: 'acara' },
    { time: '12.20-12.30', title: 'Sponsor Stage - Biznet Gio', type: 'sponsor' },
    { time: '12.30-13.30', title: 'Lunch & Pray', type: 'istirahat' }
  ],
  siang1: [
    { time: '13.30-13.50', title: 'What Companies Really Look for in IT Talent', speaker: 'Cynthia Cecilia', role: 'Co-founder of Jobhun', type: 'talk' },
    { time: '13.50-14.10', title: 'Intro Full-Text Search PostgreSQL', speaker: 'Miftahul Huda', role: 'Backend Developer & Co-Lead SurabayaDev', type: 'talk' },
    { time: '14.10-14.30', title: 'Unlocking the Power of PHP & Laravel', speaker: 'Rahmat R Putra', role: 'Software Engineer at SPE Solution', type: 'talk' },
    { time: '14.30-14.50', title: 'Skill Web Dev 2025: Tools & Tech yang Lagi Hype', speaker: 'Iskandar Sholeh', role: 'Sr. Spv. Application Development at PT Interbat', type: 'talk' },
    { time: '14.50-15.10', title: 'Meet AI at Your Flutter App', speaker: 'Yusuf Umar H', role: 'Senior Mobile Engineer (Flutter) at Wolkk', type: 'talk' }
  ],
  siang2: [
    { time: '13.30-13.50', title: 'Easy Deployment in Your VPS Using Coolify', speaker: 'Burhanuddin A', role: 'Software Engineer at Tabsquare', type: 'talk' },
    { time: '13.50-14.10', title: 'From Local to Global: Fortify Your Infrastructure', speaker: 'Yusron Andrian', role: 'Technical Lead at McEasy', type: 'talk' },
    { time: '14.10-14.30', title: 'Building 3D Interior Architectural Visualization with Three.js', speaker: 'Vicky Adi F', role: 'Frontend Engineer at Synapsis.id', type: 'talk' },
    { time: '14.30-14.50', title: 'Implementasi Monitoring Aplikasi Menggunakan Solusi Open Source', speaker: 'Islam Nurul Y', role: 'DevOps Engineer at SEVIMA', type: 'talk' },
    { time: '14.50-15.10', title: 'Introduction to Security Monitoring with Wazuh', speaker: 'Achmad Alif N', role: 'OpSec at SEVIMA', type: 'talk' }
  ],
  workshop: [
    { time: '13.30-15.00', title: 'Web Hacking for Beginners', speaker: 'Surabaya Hacker Link', role: 'Cyber Security Community', type: 'workshop' },
    { time: '13.30-15.00', title: 'The Art of Project Governance in Software Development', speaker: 'Grandys F. Prassida', role: 'Lecturer at Information System, UISI', type: 'workshop' },
    { time: '13.30-15.00', title: 'Design & Publish Landing Page in 90 Minutes with Framer', speaker: 'Iqbal Aqaba', role: 'Top 3% Upwork Talent', type: 'workshop' },
    { time: '13.30-15.00', title: 'Building AI Agents with RAG in n8n', speaker: 'Bagus Budi Cahyono', role: 'Senior Software Engineer at The Business Tailor', type: 'workshop' }
  ],
  sore: [
    { time: '15.00', title: 'Closing Ceremony', type: 'acara' }
  ]
}

const keynoteSpeakers = [
  { name: 'Ainun Najib', role: 'Data & AI Practitioner', topic: 'Future AI Impact on Freedom, Work, and Humanity' },
  { name: 'Zain Fathoni', role: 'Senior Front-End Engineer at Relay Commerce', topic: 'Be a 10% Engineer with AI' },
  { name: 'Listiarso W', role: 'CROTO Metatech ID', topic: 'AI-Proof Your Software Engineering Job Search' }
]

const lightningSpeakers = [
  { name: 'Surabaya Hacker Link', role: 'Cyber Security Community', type: 'komunitas' },
  { name: 'Bagus Budi Cahyono', role: 'Senior Software Engineer at The Business Tailor' },
  { name: 'Iqbal Aqaba', role: 'Top 3% Upwork Talent' },
  { name: 'Grandys F. Prassida', role: 'Lecturer at Information System, UISI' },
  { name: 'Cynthia Cecilia', role: 'Co-founder of Jobhun' },
  { name: 'Burhanuddin A', role: 'Software Engineer at Tabsquare' },
  { name: 'Yusron Andrian', role: 'Technical Lead at McEasy' },
  { name: 'Rahmat R Putra', role: 'Software Engineer at SPE Solution' },
  { name: 'Yusuf Umar H', role: 'Senior Mobile Engineer (Flutter) at Wolkk' },
  { name: 'Islam Nurul Y', role: 'DevOps Engineer at SEVIMA' },
  { name: 'Vicky Adi F', role: 'Frontend Engineer at Synapsis.id' },
  { name: 'Achmad Alif N', role: 'OpSec at SEVIMA' },
  { name: 'Iskandar Sholeh', role: 'Sr. Spv. Application Development at PT Interbat' },
  { name: 'Miftahul Huda', role: 'Backend Developer & Co-Lead SurabayaDev' }
]

const pricing = [
  {
    name: 'Regular',
    original: 'Rp50.000',
    price: 'Rp35.000',
    badge: 'Flash Sale',
    features: ['Snack', 'Lunch', 'e-Certificate', 'Sticker Pack Special JDD', 'Seminar, Workshop / Lightning Talks'],
    note: 'Tiket masuk perorangan'
  },
  {
    name: 'Special Bundling',
    original: 'Rp200.000',
    price: 'Rp185.000',
    badge: 'Flash Sale',
    features: ['All Regular Ticket Benefits Included', 'Kaos (ukuran sesuai permintaan)', 'Keychain', 'Pouch Special JDD'],
    note: 'Tiket masuk perorangan',
    highlight: true
  }
]
</script>

<template>
  <div class="min-h-screen bg-[#f0efe8] font-inter text-[#0b3a4c]">
    <nav class="fixed top-0 left-0 right-0 z-50 bg-[#f0efe8]/90 backdrop-blur-md border-b border-[#18bcbc]/10">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center gap-2">
            <!-- Logo Image Placeholder: ganti dengan <img src="/logo.png" alt="JDD 2026" class="h-7"> -->
            <svg width="18" height="16" viewBox="0 0 15 14" fill="none" class="w-5 h-5">
              <path d="M13 6.13397C13.6667 6.51888 13.6667 7.48113 13 7.86603L5.5 12.1962C4.83333 12.5811 4 12.0999 4 11.3301V2.66987C4 1.90007 4.83333 1.41895 5.5 1.80385L13 6.13397Z" fill="#18bcbc"/>
            </svg>
            <span class="font-garet font-bold text-sm tracking-tight text-[#0b3a4c]">JDD 2026</span>
          </div>
          <div class="hidden md:flex items-center gap-6">
            <a href="#tentang" class="text-sm text-[#0b3a4c]/60 hover:text-[#18bcbc] transition-colors font-medium">Tentang</a>
            <a href="#speaker" class="text-sm text-[#0b3a4c]/60 hover:text-[#18bcbc] transition-colors font-medium">Speaker</a>
            <a href="#agenda" class="text-sm text-[#0b3a4c]/60 hover:text-[#18bcbc] transition-colors font-medium">Agenda</a>
            <a href="#tiket" class="px-5 py-2 bg-gradient-to-r from-[#18bcbc] to-[#0b3a4c] text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#18bcbc]/25 transition-all">Beli Tiket</a>
          </div>
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2">
            <svg class="w-5 h-5 text-[#0b3a4c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
      <div v-if="mobileMenuOpen" class="md:hidden bg-[#f0efe8] border-t border-[#18bcbc]/10">
        <div class="px-4 py-3 space-y-2">
          <a href="#tentang" @click="mobileMenuOpen = false" class="block text-sm text-[#0b3a4c]/70 py-2">Tentang</a>
          <a href="#speaker" @click="mobileMenuOpen = false" class="block text-sm text-[#0b3a4c]/70 py-2">Speaker</a>
          <a href="#agenda" @click="mobileMenuOpen = false" class="block text-sm text-[#0b3a4c]/70 py-2">Agenda</a>
          <a href="#tiket" @click="mobileMenuOpen = false" class="block text-sm font-semibold text-[#18bcbc] py-2">Beli Tiket</a>
        </div>
      </div>
    </nav>

    <section class="pt-32 pb-20 px-4 sm:px-6 relative">
      <!-- Graphic Accent Placeholders: elemen dekoratif -->
      <div class="absolute left-8 top-40 w-24 h-24 border-2 border-dashed border-[#1a4d8d]/20 rounded-xl bg-[#1a4d8d]/5 flex items-center justify-center pointer-events-none rotate-12 hidden lg:flex">
        <p class="text-xs font-bold text-[#1a4d8d]/30">Graphic</p>
      </div>
      <div class="absolute right-12 bottom-20 w-20 h-20 border-2 border-dashed border-[#18bcbc]/20 rounded-lg bg-[#18bcbc]/5 flex items-center justify-center pointer-events-none -rotate-6 hidden lg:flex">
        <p class="text-xs font-bold text-[#18bcbc]/30">Graphic</p>
      </div>

      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center gap-2 bg-[#18bcbc]/10 px-3 py-1.5 rounded-full mb-6 border border-[#18bcbc]/20">
              <span class="w-1.5 h-1.5 bg-[#18bcbc] rounded-full animate-pulse"></span>
              <span class="text-xs font-semibold text-[#18bcbc] uppercase tracking-wider">Jatim Developer Day 2026</span>
            </div>
            <h1 class="font-garet text-5xl sm:text-6xl md:text-7xl font-black text-[#0b3a4c] leading-[1.05] mb-4">
              Sea of<br>
              <span class="text-[#18bcbc]">Tech Talent.</span>
            </h1>
            <div class="flex flex-wrap gap-3 mb-8">
              <a href="#tiket" class="group px-6 py-3 bg-gradient-to-r from-[#18bcbc] to-[#0b3a4c] text-white rounded-full font-semibold text-sm transition-all shadow-lg shadow-[#18bcbc]/20 hover:shadow-xl hover:shadow-[#18bcbc]/30 hover:-translate-y-0.5">
                <span class="flex items-center gap-2">
                  Daftar Sekarang
                  <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                  </svg>
                </span>
              </a>
              <a href="#" class="px-6 py-3 border-2 border-[#0b3a4c]/20 text-[#0b3a4c] rounded-full font-semibold text-sm hover:bg-[#0b3a4c] hover:text-white transition-all">
                Jadi Sponsorship
              </a>
            </div>
            <div class="text-sm text-[#0b3a4c]/50 font-medium">
              <span>25 Oktober 2025</span>
              <span class="mx-2">•</span>
              <span>Gresik, Indonesia</span>
              <span class="mx-2">•</span>
              <span>Dukungan Komunitas</span>
            </div>
          </div>

          <div class="flex flex-col gap-6">
            <!-- Countdown Card -->
            <div class="bg-white rounded-3xl p-8 shadow-xl shadow-[#18bcbc]/5 border border-[#18bcbc]/10 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-[#18bcbc]/5 rounded-full blur-2xl"></div>
              <div class="relative">
                <div class="text-center mb-6">
                  <p class="text-xs font-semibold text-[#18bcbc] uppercase tracking-widest mb-1">Hitung Mundur</p>
                  <p class="font-garet text-2xl font-bold text-[#0b3a4c]">JDD 2026 Dimulai</p>
                </div>
                <div class="grid grid-cols-4 gap-3 mb-6">
                  <div v-for="(val, key) in timeLeft" :key="key" class="text-center">
                    <div class="bg-gradient-to-b from-[#18bcbc]/5 to-[#0b3a4c]/5 rounded-2xl py-4 border border-[#18bcbc]/10">
                      <span class="font-garet text-3xl sm:text-4xl font-black text-[#18bcbc]">{{ String(val).padStart(2, '0') }}</span>
                    </div>
                    <p class="text-xs font-semibold text-[#0b3a4c]/50 uppercase tracking-wider mt-2">{{ key }}</p>
                  </div>
                </div>
                <div class="flex justify-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#18bcbc]/30 animate-pulse"></span>
                  <span class="w-1.5 h-1.5 rounded-full bg-[#18bcbc]/30 animate-pulse" style="animation-delay: 0.3s"></span>
                  <span class="w-1.5 h-1.5 rounded-full bg-[#18bcbc]/60 animate-pulse" style="animation-delay: 0.6s"></span>
                </div>
              </div>
            </div>

            <!-- Mascot Placeholder: ganti dengan ilustrasi/karakter maskot -->
            <div class="w-full h-48 border-2 border-dashed border-[#18bcbc]/30 rounded-3xl bg-gradient-to-br from-[#18bcbc]/5 to-[#0b3a4c]/5 flex items-center justify-center">
              <div class="text-center">
                <svg class="w-10 h-10 mx-auto text-[#18bcbc]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p class="text-sm font-bold text-[#18bcbc]/40 mt-2">Maskot</p>
                <p class="text-xs text-[#18bcbc]/25">480 x 600 px</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="tentang" class="py-20 px-4 sm:px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <span class="text-xs font-semibold text-[#18bcbc] uppercase tracking-widest">Tentang Acara</span>
          <h2 class="font-garet text-3xl sm:text-4xl font-black text-[#0b3a4c] mt-2 mb-4">Mengapa Anda Harus Menghadiri Jatim Developer Day</h2>
          <p class="text-[#0b3a4c]/60 max-w-2xl mx-auto">
            Jatim Developer Day adalah acara tahunan yang mengumpulkan talenta teknologi dari seluruh Jawa Timur. 
            Terbentuk pada tahun 2019 melalui kolaborasi komunitas IT se-Jawa Timur.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div class="bg-white rounded-2xl p-6 shadow-md shadow-[#18bcbc]/5 border border-[#18bcbc]/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#18bcbc]/10 hover:border-[#18bcbc]/30 transition-all group">
            <div class="w-10 h-10 bg-gradient-to-br from-[#18bcbc] to-[#0b3a4c] rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#18bcbc]/20">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
            </div>
            <h3 class="font-garet font-bold text-lg text-[#0b3a4c] mb-1">Seminar</h3>
            <p class="text-sm text-[#0b3a4c]/50">Sesi inspiratif dari para pemimpin industri teknologi.</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-md shadow-[#18bcbc]/5 border border-[#18bcbc]/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#18bcbc]/10 hover:border-[#18bcbc]/30 transition-all group">
            <div class="w-10 h-10 bg-gradient-to-br from-[#18bcbc] to-[#1a4d8d] rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#18bcbc]/20">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
            </div>
            <h3 class="font-garet font-bold text-lg text-[#0b3a4c] mb-1">Workshop</h3>
            <p class="text-sm text-[#0b3a4c]/50">Sesi hands-on untuk mengembangkan skill teknis Anda.</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-md shadow-[#18bcbc]/5 border border-[#18bcbc]/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#18bcbc]/10 hover:border-[#18bcbc]/30 transition-all group">
            <div class="w-10 h-10 bg-gradient-to-br from-[#1a4d8d] to-[#0b3a4c] rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#1a4d8d]/20">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="font-garet font-bold text-lg text-[#0b3a4c] mb-1">Lightning Talk</h3>
            <p class="text-sm text-[#0b3a4c]/50">Presentasi singkat padat dari para praktisi.</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-md shadow-[#18bcbc]/5 border border-[#18bcbc]/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#18bcbc]/10 hover:border-[#18bcbc]/30 transition-all group">
            <div class="w-10 h-10 bg-gradient-to-br from-[#0b3a4c] to-[#1a4d8d] rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#0b3a4c]/20">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 class="font-garet font-bold text-lg text-[#0b3a4c] mb-1">Networking</h3>
            <p class="text-sm text-[#0b3a4c]/50">Bangun koneksi dengan sesama pelaku teknologi.</p>
          </div>
        </div>

        <div class="bg-gradient-to-r from-[#18bcbc]/10 to-[#0b3a4c]/10 rounded-3xl p-8 md:p-10 border border-[#18bcbc]/20">
          <div class="max-w-3xl">
            <span class="text-xs font-semibold text-[#18bcbc] uppercase tracking-widest">Goal</span>
            <p class="font-garet text-2xl md:text-3xl font-black text-[#0b3a4c] mt-2 mb-4">
              "Jatim: <span class="text-[#18bcbc]">Sea of Tech Talent.</span>"
            </p>
            <p class="text-[#0b3a4c]/60 text-sm leading-relaxed">
              Melalui tema ini, besar harapan kami agar JDD 2025 dapat menjadi jembatan yang mempertemukan berbagai pihak 
              baik industri, akademisi, maupun profesional dalam satu ekosistem yang saling menguatkan. Bagi industri, momen 
              ini menjadi peluang untuk melihat bahwa Jawa Timur adalah gudangnya talenta IT yang berkualitas dan siap bersaing. 
              Bagi akademisi, ajang ini diharapkan menjadi refleksi atas kebutuhan dunia industri saat ini. Sementara bagi para 
              profesional, JDD bisa menjadi ajang personal branding dan memperluas koneksi antar sesama pelaku teknologi.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="speaker" class="py-20 px-4 sm:px-6 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <span class="text-xs font-semibold text-[#18bcbc] uppercase tracking-widest">Meet Our Speakers</span>
          <h2 class="font-garet text-3xl sm:text-4xl font-black text-[#0b3a4c] mt-2 mb-2">Pembicara Terhormat</h2>
          <p class="text-[#0b3a4c]/50 text-sm">dan Pemimpin Pemikiran Industri Kami</p>
        </div>

        <div class="grid md:grid-cols-3 gap-4 mb-16">
          <div v-for="s in keynoteSpeakers" :key="s.name" class="bg-[#f0efe8] rounded-2xl p-6 border border-[#18bcbc]/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#18bcbc]/10 hover:border-[#18bcbc]/30 transition-all">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-[#18bcbc]/20 to-[#0b3a4c]/10 flex items-center justify-center mb-4 border-2 border-[#18bcbc]/20">
              <span class="font-garet font-black text-lg text-[#18bcbc]">{{ s.name.charAt(0) }}</span>
            </div>
            <h3 class="font-garet font-bold text-[#0b3a4c]">{{ s.name }}</h3>
            <p class="text-sm text-[#18bcbc] font-medium mb-1">{{ s.role }}</p>
            <p class="text-xs text-[#0b3a4c]/40 italic">"{{ s.topic }}"</p>
          </div>
        </div>

        <div class="text-center mb-8">
          <span class="text-xs font-semibold text-[#18bcbc] uppercase tracking-widest">Our Parallel & Lightning Speakers</span>
          <h3 class="font-garet text-2xl font-bold text-[#0b3a4c] mt-2">Temui Pengembang dan Pelopor Teknologi Kami</h3>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          <div v-for="s in lightningSpeakers" :key="s.name" class="bg-[#f0efe8] rounded-xl p-4 border border-[#18bcbc]/10 hover:-translate-y-0.5 hover:shadow-md hover:border-[#18bcbc]/30 transition-all text-center group">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#18bcbc]/10 to-[#0b3a4c]/5 flex items-center justify-center mx-auto mb-2 group-hover:from-[#18bcbc]/30 group-hover:to-[#0b3a4c]/20 transition-all">
              <span class="font-garet font-bold text-sm text-[#18bcbc]">{{ s.name.charAt(0) }}</span>
            </div>
            <p class="font-semibold text-sm text-[#0b3a4c] leading-tight">{{ s.name }}</p>
            <p class="text-xs text-[#0b3a4c]/50 mt-1 leading-tight">{{ s.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="agenda" class="py-20 px-4 sm:px-6 bg-[#f0efe8]">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <span class="text-xs font-semibold text-[#18bcbc] uppercase tracking-widest">Agenda</span>
          <h2 class="font-garet text-3xl sm:text-4xl font-black text-[#0b3a4c] mt-2">Agenda Acara JDD Lengkap</h2>
        </div>

        <div class="flex flex-wrap justify-center gap-2 mb-8">
          <button v-for="tab in agendaTabs" :key="tab.key"
            @click="activeAgendaTab = tab.key"
            :class="[
              'px-4 py-2 rounded-full text-xs font-semibold transition-all tracking-wide',
              activeAgendaTab === tab.key
                ? 'bg-gradient-to-r from-[#18bcbc] to-[#0b3a4c] text-white shadow-md shadow-[#18bcbc]/20'
                : 'bg-white text-[#0b3a4c]/60 border border-[#18bcbc]/10 hover:border-[#18bcbc]/30'
            ]">
            {{ tab.label }}
          </button>
        </div>

        <div class="bg-white rounded-2xl shadow-xl shadow-[#18bcbc]/5 border border-[#18bcbc]/10 overflow-hidden">
          <div v-for="(item, i) in agenda[activeAgendaTab]" :key="i"
            class="flex items-start gap-4 px-6 py-4 border-b border-[#18bcbc]/5 last:border-0 hover:bg-[#18bcbc]/[0.02] transition-colors">
            <div class="min-w-[90px]">
              <span class="text-sm font-bold text-[#18bcbc]">{{ item.time }}</span>
            </div>
            <div class="flex-1 min-w-0">
              <p class="font-semibold text-[#0b3a4c] text-sm">{{ item.title }}</p>
              <p v-if="item.speaker" class="text-xs text-[#0b3a4c]/50 mt-0.5">{{ item.speaker }}</p>
              <p v-if="item.role" class="text-xs text-[#0b3a4c]/40 mt-0.5">{{ item.role }}</p>
            </div>
            <div>
              <span class="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                :class="{
                  'bg-[#18bcbc]/10 text-[#18bcbc]': item.type === 'keynote' || item.type === 'talk',
                  'bg-[#0b3a4c]/5 text-[#0b3a4c]': item.type === 'acara',
                  'bg-yellow-50 text-yellow-600': item.type === 'sponsor',
                  'bg-purple-50 text-purple-600': item.type === 'workshop',
                  'bg-gray-100 text-gray-400': item.type === 'istirahat' || item.type === 'registrasi'
                }">
                {{ item.type }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="tiket" class="py-20 px-4 sm:px-6 bg-white">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <span class="text-xs font-semibold text-[#18bcbc] uppercase tracking-widest">Tiket</span>
          <h2 class="font-garet text-3xl sm:text-4xl font-black text-[#0b3a4c] mt-2 mb-2">Dapatkan Akses Eksklusif</h2>
          <p class="text-[#0b3a4c]/50 text-sm">dengan Harga Terbaik!</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div v-for="item in pricing" :key="item.name"
            :class="[
              'rounded-2xl p-6 border transition-all hover:-translate-y-1 hover:shadow-xl',
              item.highlight 
                ? 'bg-gradient-to-br from-[#0b3a4c] to-[#1a4d8d] text-white border-[#0b3a4c] shadow-lg shadow-[#0b3a4c]/20' 
                : 'bg-[#f0efe8] border-[#18bcbc]/10 shadow-md shadow-[#18bcbc]/5'
            ]">
            <div class="mb-4">
              <div class="flex items-center justify-between mb-2">
                <h3 class="font-garet font-bold text-lg">{{ item.name }}</h3>
                <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-[#18bcbc]/20 text-[#18bcbc]">{{ item.badge }}</span>
              </div>
              <div class="flex items-baseline gap-2">
                <span class="text-3xl font-black font-garet">{{ item.price }}</span>
                <span class="text-sm line-through" :class="item.highlight ? 'text-white/50' : 'text-[#0b3a4c]/30'">{{ item.original }}</span>
              </div>
              <p class="text-xs mt-1" :class="item.highlight ? 'text-white/60' : 'text-[#0b3a4c]/50'">{{ item.note }}</p>
            </div>
            <ul class="space-y-2 mb-6">
              <li v-for="f in item.features" :key="f" class="flex items-start gap-2 text-sm">
                <svg class="w-4 h-4 mt-0.5 flex-shrink-0 text-[#18bcbc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
                {{ f }}
              </li>
            </ul>
            <a href="#" 
              :class="[
                'block text-center py-3 rounded-full font-semibold text-sm transition-all',
                item.highlight 
                  ? 'bg-[#18bcbc] text-white hover:bg-[#15a5a5] shadow-lg shadow-[#18bcbc]/20' 
                  : 'bg-gradient-to-r from-[#18bcbc] to-[#0b3a4c] text-white hover:shadow-lg hover:shadow-[#18bcbc]/20'
              ]">
              Beli Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-4 sm:px-6 bg-[#f0efe8]">
      <div class="max-w-4xl mx-auto text-center">
        <span class="text-xs font-semibold text-[#18bcbc] uppercase tracking-widest">Sponsor</span>
        <h2 class="font-garet text-2xl font-bold text-[#0b3a4c] mt-2 mb-8">Dukungan Sponsor Kami</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-white rounded-xl p-6 border border-[#18bcbc]/10 shadow-sm hover:shadow-md hover:border-[#18bcbc]/30 transition-all">
            <div class="w-full h-12 flex items-center justify-center text-xs font-bold text-[#0b3a4c]/50 uppercase tracking-wider">Zero One Group</div>
          </div>
          <div class="bg-white rounded-xl p-6 border border-[#18bcbc]/10 shadow-sm hover:shadow-md hover:border-[#18bcbc]/30 transition-all">
            <div class="w-full h-12 flex items-center justify-center text-xs font-bold text-[#0b3a4c]/50 uppercase tracking-wider">Biznet Gio</div>
          </div>
          <div class="bg-white rounded-xl p-6 border border-[#18bcbc]/10 shadow-sm hover:shadow-md hover:border-[#18bcbc]/30 transition-all">
            <div class="w-full h-12 flex items-center justify-center text-xs font-bold text-[#0b3a4c]/50 uppercase tracking-wider">Komunitas IT</div>
          </div>
          <div class="bg-white rounded-xl p-6 border border-[#18bcbc]/10 shadow-sm hover:shadow-md hover:border-[#18bcbc]/30 transition-all">
            <div class="w-full h-12 flex items-center justify-center text-xs font-bold text-[#0b3a4c]/50 uppercase tracking-wider">Media Partner</div>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-[#0b3a4c] text-white py-12 px-4 sm:px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div class="flex items-center gap-2 mb-3">
              <svg width="18" height="16" viewBox="0 0 15 14" fill="none" class="w-5 h-5">
                <path d="M13 6.13397C13.6667 6.51888 13.6667 7.48113 13 7.86603L5.5 12.1962C4.83333 12.5811 4 12.0999 4 11.3301V2.66987C4 1.90007 4.83333 1.41895 5.5 1.80385L13 6.13397Z" fill="#18bcbc"/>
              </svg>
              <span class="font-garet font-bold">JDD 2026</span>
            </div>
            <p class="text-white/40 text-xs">Jatim Developer Day</p>
          </div>
          <div>
            <h4 class="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">Navigasi</h4>
            <ul class="space-y-2 text-sm text-white/40">
              <li><a href="#tentang" class="hover:text-[#18bcbc] transition-colors">Tentang</a></li>
              <li><a href="#speaker" class="hover:text-[#18bcbc] transition-colors">Speaker</a></li>
              <li><a href="#agenda" class="hover:text-[#18bcbc] transition-colors">Agenda</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">Dukungan</h4>
            <ul class="space-y-2 text-sm text-white/40">
              <li><a href="#" class="hover:text-[#18bcbc] transition-colors">FAQ</a></li>
              <li><a href="#" class="hover:text-[#18bcbc] transition-colors">Term of Service</a></li>
              <li><a href="#" class="hover:text-[#18bcbc] transition-colors">Refund Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">Kontak</h4>
            <ul class="space-y-2 text-sm text-white/40">
              <li>info@jatimdevday.com</li>
            </ul>
          </div>
        </div>
        <div class="border-t border-white/10 pt-6 text-center text-xs text-white/30">
          <p>This Website supported by JDD Team &copy; 2026, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  </div>
</template>