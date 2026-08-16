<template>
  <Section id="about">
    <SectionHeader
      number="01"
      label="The Vision"
      headline-class="font-montserrat text-4xl md:text-5xl lg:text-[3.5rem] font-black uppercase leading-[1.1] tracking-tight max-w-4xl"
      description-class="text-gray-300 text-base md:text-lg font-medium max-w-4xl leading-relaxed"
      description="Jatim Developer Day (JDD) 2026 bukan sekadar konferensi teknologi. Ini adalah ruang perjumpaan para inovator untuk merancang standar baru dalam arsitektur perangkat lunak, cloud scaling, dan kecerdasan buatan."
      class="relative z-30"
    >
      MENGHIDUPKAN EKOSISTEM
      <br class="hidden md:block" />
      DEVELOPER <span class="text-jd-cyan">JAWA TIMUR.</span>
    </SectionHeader>

    <!-- IMAGE COLLAGE SECTION -->
    <div class="relative w-full max-w-5xl mx-auto h-[350px] md:h-[500px] lg:h-[600px] mt-10">
      <!-- CENTER MAIN IMAGE (Video Player Thumbnail) -->
      <div class="absolute inset-0 md:inset-x-16 md:inset-y-8 lg:inset-x-32 lg:inset-y-0 z-10 reveal-scale">
        <div class="w-full h-full bg-[#111111] rounded-3xl overflow-hidden relative border border-gray-800 shadow-2xl group cursor-pointer">
          <div class="absolute inset-0 flex items-center justify-center bg-gray-800/40 text-gray-500 font-semibold text-sm backdrop-blur-[2px]">
            [ Gambar Utama / Video ]
          </div>

          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg class="w-8 h-8 md:w-10 md:h-10 text-black ml-1 md:ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- TOP LEFT IMAGE -->
      <div class="absolute -left-4 md:-left-8 top-0 md:-top-4 w-32 md:w-56 lg:w-64 h-40 md:h-64 lg:h-72 z-0 hidden sm:block reveal-left" style="transition-delay: 0.1s">
        <div class="w-full h-full bg-gray-900 rounded-3xl border border-gray-700 overflow-hidden shadow-xl">
          <div class="w-full h-full flex items-center justify-center text-xs text-gray-600 bg-gray-800">
            [ Kiri Atas ]
          </div>
        </div>
      </div>

      <!-- BOTTOM LEFT IMAGE -->
      <div class="absolute left-0 md:-left-12 lg:-left-20 bottom-4 md:-bottom-8 lg:bottom-4 w-40 md:w-72 lg:w-80 h-28 md:h-44 lg:h-52 z-20 hidden sm:block reveal-left" style="transition-delay: 0.2s">
        <div class="w-full h-full bg-gray-900 rounded-2xl md:rounded-3xl border border-gray-600 overflow-hidden shadow-2xl">
          <div class="w-full h-full flex items-center justify-center text-xs text-gray-600 bg-gray-800">
            [ Kiri Bawah ]
          </div>
        </div>
      </div>

      <!-- TOP RIGHT IMAGE -->
      <div class="absolute -right-4 md:-right-8 top-8 md:top-4 lg:-top-12 w-36 md:w-60 lg:w-72 h-48 md:h-64 lg:h-80 z-0 hidden sm:block reveal-right" style="transition-delay: 0.1s">
        <div class="w-full h-full bg-gray-900 rounded-3xl border border-gray-700 overflow-hidden shadow-xl">
          <div class="w-full h-full flex items-center justify-center text-xs text-gray-600 bg-gray-800">
            [ Kanan Atas ]
          </div>
        </div>
      </div>

      <!-- BOTTOM RIGHT IMAGE -->
      <div class="absolute right-0 md:-right-10 lg:-right-16 bottom-12 md:bottom-4 lg:bottom-12 w-44 md:w-72 lg:w-80 h-24 md:h-40 lg:h-48 z-20 hidden sm:block reveal-right" style="transition-delay: 0.2s">
        <div class="w-full h-full bg-gray-900 rounded-2xl md:rounded-3xl border border-gray-600 overflow-hidden shadow-2xl transform translate-y-4">
          <div class="w-full h-full flex items-center justify-center text-xs text-gray-600 bg-gray-800">
            [ Kanan Bawah ]
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup>
import Section from './ui/Section.vue'
import SectionHeader from './ui/SectionHeader.vue'
</script>