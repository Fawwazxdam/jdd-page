<template>
  <div class="bg-background font-sans text-on-background min-h-screen">
    <header
      class="fixed top-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
    >
      <div
        class="h-20 max-w-[1280px] mx-auto px-margin-desktop flex items-center justify-between gap-gutter"
      >
        <div class="flex items-center gap-stack-sm">
          <img
            alt="JDD 2026 Logo"
            class="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuArxAMvOZj8tlylhrgMg4XOINHkUtvE8KC7rm5bBJ5HbNSNDPUzLZ2EF3wkYniy6XHPWq693cocheAl_gs0JH3HogtpCQe4hKewnkGqlfgVCTYkpuPWb_L_D0Ch0Ny0KHvzX5wfBgVW4H3XSweeoinLja8Pffk2IQuYwvkgsmnav-taGFexCS7oFc-qujKLfWqWbzeuu95ySeoAxlZ1zOrBqaA9sCPbt3A8iQkvCrcX6kLJob7nr8BL"
          />
          <span class="font-headline-md text-headline-md text-tertiary"
            >JDD 2026</span
          >
        </div>

        <nav class="hidden lg:flex items-center gap-stack-lg">
          <a
            aria-current="page"
            class="transition-colors uppercase tracking-widest text-primary font-bold text-label-bold"
            href="#about"
            >About</a
          >
          <a
            class="text-on-surface-variant font-label-bold text-label-bold hover:text-primary transition-colors uppercase tracking-widest"
            href="#speakers"
            >Speakers</a
          >
          <a
            class="text-on-surface-variant font-label-bold text-label-bold hover:text-primary transition-colors uppercase tracking-widest"
            href="#agenda"
            >Agenda</a
          >
          <a
            class="text-on-surface-variant font-label-bold text-label-bold hover:text-primary transition-colors uppercase tracking-widest"
            href="#tickets"
            >Tickets</a
          >
          <a
            class="text-on-surface-variant font-label-bold text-label-bold hover:text-primary transition-colors uppercase tracking-widest"
            href="#gallery"
            >Gallery</a
          >
          <a
            class="text-on-surface-variant font-label-bold text-label-bold hover:text-primary transition-colors uppercase tracking-widest"
            href="#sponsors"
            >Sponsors</a
          >
          <a
            class="text-on-surface-variant font-label-bold text-label-bold hover:text-primary transition-colors uppercase tracking-widest"
            href="#location"
            >Location</a
          >
        </nav>

        <div class="flex items-center gap-stack-md">
          <button
            class="bg-accent text-on-accent px-stack-lg py-stack-sm rounded-lg font-label-bold text-label-bold hover:brightness-110 transition-all shadow-sm"
          >
            REGISTER NOW
          </button>
          <div
            class="w-8 h-8 rounded-full bg-secondary flex items-center justify-center cursor-pointer"
          >
            <span
              class="material-symbols-outlined text-on-secondary text-[18px]"
              >person</span
            >
          </div>
        </div>
      </div>
    </header>

    <main class="w-full pt-20 bg-background">
      <div class="flex flex-col w-full">
        <!-- Hero Section -->
        <section
          class="relative w-full px-margin-desktop py-stack-lg md:py-32 flex flex-col gap-bento-gap overflow-hidden"
        >
          <div
            class="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-150 h-150 bg-primary/10 rounded-full blur-[120px] pointer-events-none"
          ></div>
          <div
            class="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-100 h-100 bg-secondary/10 rounded-full blur-[80px] pointer-events-none"
          ></div>

          <div
            class="relative z-10 flex flex-col lg:flex-row items-end justify-between gap-stack-lg border-b border-outline-variant pb-stack-lg"
          >
            <div class="max-w-4xl">
              <span
                class="font-mono-label text-mono-label text-primary uppercase tracking-[0.2em] mb-stack-sm block reveal"
                >JDD 2026 • Java Digital Day</span
              >
              <h1
                class="font-display-lg text-display-lg text-tertiary leading-[0.95] reveal"
              >
                SEA OF <span class="text-accent italic">TECH</span
                ><br />TALENT. GOES TO PASURUAN
              </h1>
            </div>
            <div class="flex flex-col items-end text-right reveal-right">
              <div
                class="flex items-center gap-stack-sm text-secondary mb-stack-sm"
              >
                <span class="material-symbols-outlined text-[32px]"
                  >calendar_today</span
                >
                <span class="font-headline-lg text-headline-lg"
                  >25 OCTOBER 2026</span
                >
              </div>
              <p
                class="font-body-lg text-on-surface-variant max-w-xs uppercase tracking-wider"
              >
                The premier developer ecosystem gathering in East Java.
              </p>
            </div>
          </div>

          <!-- Countdown Component -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-bento-gap">
            <div
              class="bg-surface-container-lowest shadow-sm p-stack-lg rounded-2xl flex flex-col items-center justify-center group hover:shadow-md transition-shadow border border-surface-container reveal-scale"
            >
              <span class="font-display-lg text-display-lg text-primary">{{
                days
              }}</span>
              <span
                class="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest"
                >Days</span
              >
            </div>
            <div
              class="bg-surface-container-lowest shadow-sm p-stack-lg rounded-2xl flex flex-col items-center justify-center group hover:shadow-md transition-shadow border border-surface-container reveal-scale"
              style="transition-delay: 0.1s"
            >
              <span class="font-display-lg text-display-lg text-primary">{{
                hours
              }}</span>
              <span
                class="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest"
                >Hours</span
              >
            </div>
            <div
              class="bg-surface-container-lowest shadow-sm p-stack-lg rounded-2xl flex flex-col items-center justify-center group hover:shadow-md transition-shadow border border-surface-container reveal-scale"
              style="transition-delay: 0.2s"
            >
              <span class="font-display-lg text-display-lg text-primary">{{
                minutes
              }}</span>
              <span
                class="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest"
                >Minutes</span
              >
            </div>
            <div
              class="bg-surface-container-lowest shadow-sm p-stack-lg rounded-2xl flex flex-col items-center justify-center group hover:shadow-md transition-shadow border border-accent/20 reveal-scale"
              style="transition-delay: 0.3s"
            >
              <span class="font-display-lg text-display-lg text-accent">{{
                seconds
              }}</span>
              <span
                class="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest text-accent"
                >Seconds</span
              >
            </div>
          </div>
        </section>

        <!-- Main Bento Grid -->
        <section
          class="px-margin-desktop py-stack-lg grid grid-cols-12 gap-bento-gap max-w-[1280px] mx-auto w-full"
        >
          <!-- About Card -->
          <div
            class="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-2xl shadow-sm p-stack-lg flex flex-col md:flex-row gap-stack-lg overflow-hidden relative group border border-surface-container reveal-left"
          >
            <div class="flex-1 flex flex-col justify-between z-10">
              <div>
                <span
                  class="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full font-label-bold text-[12px] uppercase tracking-wider mb-stack-md"
                  >The Vision</span
                >
                <h2
                  class="font-headline-xl text-headline-xl text-tertiary mb-stack-md"
                >
                  ABOUT JDD 2026
                </h2>
                <p class="font-body-lg text-on-surface-variant mb-stack-lg">
                  Empowering the next generation of Indonesian developers
                  through collaborative technical excellence. JDD 2026 brings
                  together the brightest minds in Backend, Cloud, and Software
                  Engineering for a day of intensive learning and networking.
                </p>
              </div>
              <button
                class="bg-accent text-on-accent w-fit px-stack-lg py-4 rounded-lg font-label-bold text-label-bold hover:brightness-110 transition-all shadow-md active:scale-95 uppercase tracking-widest"
              >
                BELI SEKARANG
              </button>
            </div>
            <div class="flex-1 min-h-[300px] relative">
              <div
                class="absolute inset-0 bg-gradient-to-tr from-surface-container-lowest via-transparent to-transparent z-10"
              ></div>
              <img
                alt="Tech Vision"
                class="absolute inset-0 w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK50sFLsUxDCKnaFyL9MIp0hIpXRHc68uXJUObzVJzTyk-Hjrd5dvZ5lGZulVIYgxQjJitl_PtoRbd8aefijJagBK7C5VTfr1oKlke36oSy6slFGfVvyHlXmc2j1dZIdvz00cwqL-N3vqIArQwTfnfKoD_iaD61ItOn5n4--IqGbzwvHpmXpb7gaeMQPxGAH6BTvlLhStbf9rr_UboBncAla3bFMaidm3HEn-BuYXI93P-i9q0aWLe"
              />
            </div>
          </div>

          <!-- Flashback Gallery -->
          <div
            class="col-span-12 lg:col-span-4 bg-surface-container-lowest rounded-2xl shadow-sm p-stack-lg flex flex-col gap-stack-md border border-surface-container reveal-right"
          >
            <div class="flex justify-between items-center">
              <h2 class="font-headline-md text-headline-md text-tertiary">
                FLASHBACK JDD 2025
              </h2>
              <span class="material-symbols-outlined text-primary"
                >history</span
              >
            </div>
            <div class="grid grid-cols-2 grid-rows-2 gap-stack-sm h-full">
              <div
                class="bg-surface-container rounded-lg overflow-hidden relative group"
              >
                <img
                  alt="JDD 2025 Keynote"
                  class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA623O8UwENvDy7xLCSr-JL3cYVWd2gyFLiuP49YS2u6ZicHVInRehnB_AuAnABuBEPi4uk1BzCZ122tvi3yQMm96c4W46HsrXTJwQjd-3TMt2QGDX7OiC5CwLONyN0HBoKr1XDxnFYumgMNCYI5HMWYAj-Vt-LBhulXUa1YuGZrEkVE8qtDLyOP5UOZSrvVtYydlXSIuelYnBQXZEFbnWey9lWa7VvZiFgIzju-RMmUY8O38-XhrAF"
                />
              </div>
              <div
                class="bg-surface-container rounded-lg overflow-hidden relative group"
              >
                <img
                  alt="JDD 2025 Session"
                  class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuUXO2lObHZDP8wUilxH0cCPy4pgs4OoXVwNbzgzboluAwqmGJHOv6cvXrk52sj2RJErUPUCLNInGhHLmeKgRTl_VTUugzndH5PDigsbm_1Ptxr_XmKX15QM-qgzBak5tP3CQk0LKHkHjZ7sxm8osStK5y2ooHymDIrI7hkqZ3wAxyvyut6Er_0N6LisSVBK4_N5trrQKuLSi8asNFGfUtV_DrgShz1HL-k0wBtSVvtz7BblWATjdf"
                />
              </div>
              <div
                class="col-span-2 bg-surface-container rounded-lg overflow-hidden relative group"
              >
                <img
                  alt="JDD 2025 Networking"
                  class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB6Ub3UPzneuleshMVhHMVmL5u-ifj71TEkSvHgNK_dVOmnPfNzibf6in27-P6QomrcUKjjBYRRDg2FvuM1-5zrPP9jRgr8qaQoH5egXSKu5_ARVchctcfJI8iI1OAul4iCLk6eIZkyXYz3NN-Q2rUpNyb-1SVTYE00vy2azuhtsHUGZ-aWEGJfUdRdSAy_159DbDVALeRgZfjXDNd6H89HWIqAsUrbbDvpulRtheX53P5HlXANn3A"
                />
                <div
                  class="absolute inset-0 flex items-center justify-center bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                >
                  <span
                    class="font-label-bold text-on-primary uppercase tracking-widest"
                    >Relive the Success</span
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Headliners -->
          <div class="col-span-12 flex flex-col gap-stack-md mt-stack-lg reveal">
            <div class="flex items-center gap-stack-md">
              <h2 class="font-headline-xl text-headline-xl text-tertiary">
                MEET OUR HEADLINERS
              </h2>
              <div class="h-[2px] flex-grow bg-outline-variant"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-bento-gap">
              <!-- Speaker 1 -->
              <div
                class="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-surface-container"
              >
                <div class="h-80 relative overflow-hidden">
                  <img
                    alt="Ainun Najib"
                    class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-Pvmj8g9u5KzgbUZlOOEsYAhR2Y2T4sDQIrQ4gXPPEvzc5tg8_7l4S254eyDsEF6UMlYaHfBL_nf3If99s8c4QNx0tWixAF6OX39rdHvfYx96qQjahqxhrAkrs5PP6bkZ1oli7eJbmFHcea3iYcSCVdSq-KRVj53N-buA8uBBSP5t2FPEyMRGPPIwKQWgxg2MXmmpIv3-QTxSV7PnjyHqyNZRBuot-9R_TGgxrBtIuVOC_DNkFM9r"
                  />
                  <div
                    class="absolute bottom-0 left-0 w-full p-stack-md bg-gradient-to-t from-accent/80 to-transparent"
                  >
                    <p
                      class="text-on-primary font-label-bold text-label-bold tracking-widest uppercase"
                    >
                      Keynote Speaker
                    </p>
                  </div>
                </div>
                <div class="p-stack-lg border-t border-surface-container">
                  <h3
                    class="font-headline-md text-headline-md text-tertiary mb-1"
                  >
                    Ainun Najib
                  </h3>
                  <p class="font-body-md text-on-accent font-bold">Tech Leader</p>
                </div>
              </div>

              <!-- Speaker 2 -->
              <div
                class="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden group hover:-translate-y-2 transition-all duration-300 border-b-4 border-secondary border-x border-t border-surface-container"
              >
                <div class="h-80 relative overflow-hidden">
                  <img
                    alt="Zain Fathoni"
                    class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDLU_1TCQ_U2oDL5d77Xvfuo-cheqOI673EocyoekDjAVpsEjqucvGPrY57aObgIYngt5pV-CS9Uwp58uid45547UiXXSQlHgmi3An-nbtgDoPUG55SJcttl5cKhYOIdhJl5WyrgqXHhnAHw3qCOR_loaZvayCGMQ8WcqfNum0vRnXjBa8QoA0SEpZWYRJZ9qJuyOE6seVFIItRezdWRWJ02GTtNLvEOU_R9E3NXUoGDc5xmOkVwbp"
                  />
                  <div
                    class="absolute bottom-0 left-0 w-full p-stack-md bg-gradient-to-t from-secondary/80 to-transparent text-on-secondary"
                  >
                    <p
                      class="font-label-bold text-label-bold tracking-widest uppercase"
                    >
                      Core Contributor
                    </p>
                  </div>
                </div>
                <div class="p-stack-lg border-t border-surface-container">
                  <h3
                    class="font-headline-md text-headline-md text-tertiary mb-1"
                  >
                    Zain Fathoni
                  </h3>
                  <p class="font-body-md text-secondary font-bold">
                    Software Engineer
                  </p>
                </div>
              </div>

              <!-- Speaker 3 -->
              <div
                class="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-surface-container"
              >
                <div class="h-80 relative overflow-hidden">
                  <img
                    alt="Listiarso Wastuargo"
                    class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuClAgCZO5Z3RLI1sSjiqSHDpSP0ZgdNbalCnuY2dwJWsQLJgIY3jcYWjUh1JB_z2Maj20cQ6u1xAMXk5_AMtU2WtEDIBexOh0jXzkQE1dGd3kQkQmuZGbrgLwf-91V9XmvUISStli0djiv0QRuBpeG7Yj6PsgTEwZSnI2bV1bHCi9w_BqSWDSFH4X9wB3ORIfjH6hQbA3GdD8YN5bspUcgripICh2bIPOh2DwNyj6hD2oguXHrzA0nV"
                  />
                  <div
                    class="absolute bottom-0 left-0 w-full p-stack-md bg-gradient-to-t from-tertiary/80 to-transparent"
                  >
                    <p
                      class="text-on-primary font-label-bold text-label-bold tracking-widest uppercase"
                    >
                      Industry Expert
                    </p>
                  </div>
                </div>
                <div class="p-stack-lg border-t border-surface-container">
                  <h3
                    class="font-headline-md text-headline-md text-tertiary mb-1"
                  >
                    Listiarso Wastuargo
                  </h3>
                  <p class="font-body-md text-primary font-bold">
                    Tech Professional
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Agenda Section -->
          <div
            class="col-span-12 flex flex-col gap-stack-md mt-stack-lg reveal"
            id="agenda"
          >
            <div class="flex items-center gap-stack-md">
              <h2 class="font-headline-xl text-headline-xl text-tertiary">
                EVENT AGENDA
              </h2>
              <div class="h-[2px] flex-grow bg-outline-variant"></div>
            </div>

            <!-- Day Tabs -->
            <div class="flex gap-stack-sm">
              <button
                v-for="(day, idx) in agendaDays"
                :key="idx"
                @click="activeAgendaDay = idx"
                :class="[
                  'px-stack-lg py-stack-sm rounded-lg font-label-bold text-label-bold uppercase tracking-widest transition-all border',
                  activeAgendaDay === idx
                    ? 'bg-accent text-on-accent border-accent shadow-md'
                    : 'bg-surface-container-lowest text-on-surface-variant border-surface-container hover:border-accent/40'
                ]"
              >
                {{ day.label }}
              </button>
            </div>

            <!-- Agenda Timeline -->
            <div class="flex flex-col gap-stack-md">
              <div
                v-for="(event, idx) in agendaDays[activeAgendaDay].events"
                :key="idx"
                class="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden border border-surface-container hover:shadow-md hover:border-primary/20 transition-all group"
              >
                <div class="flex flex-col md:flex-row">
                  <!-- Time Block -->
                  <div
                    class="md:w-48 shrink-0 bg-surface-container px-stack-lg py-stack-md flex items-center gap-stack-sm border-b md:border-b-0 md:border-r border-surface-container"
                  >
                    <span
                      class="material-symbols-outlined text-primary text-[20px]"
                      >schedule</span
                    >
                    <span
                      class="font-label-bold text-label-bold text-primary tracking-wider"
                      >{{ event.time }}</span
                    >
                  </div>
                  <!-- Content Block -->
                  <div class="flex-1 p-stack-lg flex flex-col md:flex-row md:items-center gap-stack-md">
                    <div class="flex-1">
                      <div class="flex items-center gap-stack-sm mb-1">
                        <span
                          class="inline-block px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-widest"
                          :class="
                            event.type === 'keynote'
                              ? 'bg-accent/10 text-accent'
                              : event.type === 'workshop'
                              ? 'bg-secondary/10 text-secondary'
                              : event.type === 'talk'
                              ? 'bg-tertiary/10 text-tertiary'
                              : 'bg-surface-container-high text-on-surface-variant'
                          "
                        >
                          {{ event.type }}
                        </span>
                      </div>
                      <h3
                        class="font-headline-md text-headline-md text-tertiary"
                      >
                        {{ event.title }}
                      </h3>
                      <p class="font-body-md text-on-surface-variant mt-1">
                        {{ event.speaker }}
                      </p>
                    </div>
                    <div
                      class="flex items-center gap-stack-sm text-on-surface-variant shrink-0"
                    >
                      <span
                        class="material-symbols-outlined text-[18px]"
                        >location_on</span
                      >
                      <span class="font-body-md text-sm">{{
                        event.room
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Sponsors Section (Full Width) -->
        <section class="px-margin-desktop py-stack-lg w-full reveal" id="sponsors">
          <div class="flex flex-col gap-stack-lg">
            <div class="flex items-center gap-stack-md">
              <h2 class="font-headline-xl text-headline-xl text-tertiary">
                OUR SPONSORS
              </h2>
              <div class="h-0.5 grow bg-outline-variant"></div>
            </div>

            <!-- Platinum Tier -->
            <div class="flex flex-col gap-stack-md">
              <div class="flex items-center gap-stack-sm">
                <span class="material-symbols-outlined text-accent text-[20px]">diamond</span>
                <span class="font-label-bold text-label-bold text-accent uppercase tracking-widest">Platinum Sponsor</span>
              </div>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-bento-gap">
                <div
                  v-for="sponsor in platinumSponsors"
                  :key="sponsor.name"
                  class="bg-surface-container-lowest rounded-2xl shadow-sm p-stack-lg flex flex-col items-center justify-center gap-stack-sm border border-surface-container hover:border-accent/30 hover:shadow-md transition-all group"
                >
                  <div class="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <span class="material-symbols-outlined text-tertiary text-[28px] group-hover:text-accent transition-colors">{{ sponsor.icon }}</span>
                  </div>
                  <span class="font-label-bold text-label-bold text-tertiary text-center">{{ sponsor.name }}</span>
                </div>
              </div>
            </div>

            <!-- Gold Tier -->
            <div class="flex flex-col gap-stack-md">
              <div class="flex items-center gap-stack-sm">
                <span class="material-symbols-outlined text-secondary text-[20px]">token</span>
                <span class="font-label-bold text-label-bold text-secondary uppercase tracking-widest">Gold Sponsor</span>
              </div>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-bento-gap">
                <div
                  v-for="sponsor in goldSponsors"
                  :key="sponsor.name"
                  class="bg-surface-container-lowest rounded-2xl shadow-sm p-stack-lg flex flex-col items-center justify-center gap-stack-sm border border-surface-container hover:border-secondary/30 hover:shadow-md transition-all group"
                >
                  <div class="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                    <span class="material-symbols-outlined text-tertiary text-[24px] group-hover:text-secondary transition-colors">{{ sponsor.icon }}</span>
                  </div>
                  <span class="font-body-md text-on-surface-variant text-center font-semibold">{{ sponsor.name }}</span>
                </div>
              </div>
            </div>

            <!-- Silver Tier -->
            <div class="flex flex-col gap-stack-md">
              <div class="flex items-center gap-stack-sm">
                <span class="material-symbols-outlined text-on-surface-variant text-[20px]">circle</span>
                <span class="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest">Silver Sponsor</span>
              </div>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-bento-gap">
                <div
                  v-for="sponsor in silverSponsors"
                  :key="sponsor.name"
                  class="bg-surface-container-lowest rounded-2xl shadow-sm px-stack-lg py-stack-md flex items-center justify-center gap-stack-sm border border-surface-container hover:border-outline/30 hover:shadow-md transition-all group"
                >
                  <span class="material-symbols-outlined text-on-surface-variant text-[20px] group-hover:text-tertiary transition-colors">{{ sponsor.icon }}</span>
                  <span class="font-body-md text-on-surface-variant font-semibold">{{ sponsor.name }}</span>
                </div>
              </div>
            </div>

            <!-- Become a Sponsor CTA -->
            <div class="bg-surface-container rounded-2xl p-stack-lg flex flex-col md:flex-row items-center justify-between gap-stack-md border border-outline-variant">
              <div>
                <h3 class="font-headline-md text-headline-md text-tertiary">Interested in sponsoring?</h3>
                <p class="font-body-md text-on-surface-variant mt-1">Reach 1,000+ developers and tech leaders in East Java.</p>
              </div>
              <button class="bg-accent text-on-accent px-stack-lg py-stack-sm rounded-lg font-label-bold text-label-bold hover:brightness-110 transition-all uppercase tracking-widest shadow-sm whitespace-nowrap">
                BECOME A SPONSOR
              </button>
            </div>
          </div>
        </section>

        <!-- Location & Tickets Grid -->
        <section class="px-margin-desktop py-stack-lg grid grid-cols-12 gap-bento-gap max-w-[1280px] mx-auto w-full">
          <!-- Location (Pasuruan) -->
          <div
            class="col-span-12 lg:col-span-5 bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden flex flex-col border border-surface-container reveal-left"
          >
            <div class="w-full h-64 bg-surface-container relative group">
              <iframe
                allowfullscreen=""
                class="w-full h-full grayscale hover:grayscale-0 transition-all duration-500 border-none"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126526.4714101484!2d112.83605387405103!3d-7.656005877843818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7c8e7e1f44a3d%3A0xb35a0f6797a22839!2sPasuruan%2C%20Pasuruan%20City%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1715800000000!5m2!1sen!2sid"
              ></iframe>
              <div
                class="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"
              ></div>
            </div>
            <div class="p-stack-lg flex flex-col gap-stack-sm">
              <div class="flex items-center justify-between">
                <h2
                  class="font-headline-md text-headline-md text-tertiary uppercase tracking-tighter"
                >
                  PASURUAN, INDONESIA
                </h2>
                <span class="material-symbols-outlined text-accent fill"
                  >location_on</span
                >
              </div>
              <p class="font-body-md text-on-surface-variant">
                The Heritage Convention Center<br />Jl. Pahlawan No. 1, Pasuruan
                City.<br />Historic venue in the heart of East Java.
              </p>
            </div>
          </div>

          <!-- Tickets -->
          <div
            class="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-bento-gap reveal-right"
          >
            <!-- Regular Ticket -->
            <div
              class="bg-surface-container-lowest rounded-2xl shadow-sm p-stack-lg flex flex-col border-l-4 border-accent border-y border-r border-surface-container"
            >
              <div class="mb-stack-lg">
                <span
                  class="font-label-bold text-label-bold text-accent uppercase tracking-widest mb-2 block"
                  >Flash Sale</span
                >
                <h3 class="font-headline-lg text-headline-lg text-tertiary">
                  REGULAR
                </h3>
                <p
                  class="font-display-lg text-[40px] text-on-surface-variant font-extrabold"
                >
                  Rp 35.000
                </p>
              </div>
              <ul class="flex flex-col gap-3 mb-stack-lg flex-grow">
                <li
                  class="flex items-center gap-2 text-on-surface-variant font-body-md"
                >
                  <span
                    class="material-symbols-outlined text-accent text-[20px]"
                    >check_circle</span
                  >
                  1 Full Day Access
                </li>
                <li
                  class="flex items-center gap-2 text-on-surface-variant font-body-md"
                >
                  <span
                    class="material-symbols-outlined text-accent text-[20px]"
                    >check_circle</span
                  >
                  Lunch & Coffee Break
                </li>
                <li
                  class="flex items-center gap-2 text-on-surface-variant font-body-md"
                >
                  <span
                    class="material-symbols-outlined text-accent text-[20px]"
                    >check_circle</span
                  >
                  Digital Certificate
                </li>
              </ul>
              <button
                class="w-full bg-accent text-on-accent py-4 rounded-lg font-label-bold text-label-bold hover:brightness-110 transition-all uppercase tracking-widest shadow-md"
              >
                BELI SEKARANG
              </button>
            </div>

            <!-- Bundling Ticket -->
            <div
              class="bg-surface-container-lowest rounded-2xl shadow-sm p-stack-lg flex flex-col border-l-4 border-secondary border-y border-r border-surface-container"
            >
              <div class="mb-stack-lg">
                <span
                  class="font-label-bold text-label-bold text-secondary uppercase tracking-widest mb-2 block"
                  >Best Value</span
                >
                <h3 class="font-headline-lg text-headline-lg text-tertiary">
                  BUNDLING
                </h3>
                <p
                  class="font-display-lg text-[40px] text-on-surface-variant font-extrabold"
                >
                  Rp 185.000
                </p>
              </div>
              <ul class="flex flex-col gap-3 mb-stack-lg flex-grow">
                <li
                  class="flex items-center gap-2 text-on-surface-variant font-body-md"
                >
                  <span
                    class="material-symbols-outlined text-secondary text-[20px]"
                    >check_circle</span
                  >
                  Everything in Regular
                </li>
                <li
                  class="flex items-center gap-2 text-on-surface-variant font-body-md"
                >
                  <span
                    class="material-symbols-outlined text-secondary text-[20px]"
                    >check_circle</span
                  >
                  Exclusive JDD T-Shirt
                </li>
                <li
                  class="flex items-center gap-2 text-on-surface-variant font-body-md"
                >
                  <span
                    class="material-symbols-outlined text-secondary text-[20px]"
                    >check_circle</span
                  >
                  VIP Seating & Swag Kit
                </li>
              </ul>
              <button
                class="w-full bg-secondary text-on-secondary py-4 rounded-lg font-label-bold text-label-bold hover:brightness-110 transition-all uppercase tracking-widest shadow-md"
              >
                BELI SEKARANG
              </button>
            </div>
          </div>
        </section>

        <!-- Newsletter -->
        <section class="px-margin-desktop py-stack-lg reveal-scale">
          <div
            class="w-full bg-tertiary rounded-2xl md:rounded-[32px] p-stack-lg md:p-20 text-center relative overflow-hidden flex flex-col items-center"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"
            ></div>
            <div class="relative z-10 max-w-2xl">
              <h2
                class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary mb-stack-md leading-none"
              >
                DON'T MISS THE WAVE.
              </h2>
              <p class="font-body-lg text-outline-variant mb-stack-lg">
                Join 1,000+ developers in the biggest tech event of 2026. Early
                bird slots are almost gone.
              </p>
              <div
                class="flex flex-col md:flex-row gap-stack-md justify-center"
              >
                <input
                  class="px-stack-lg py-4 rounded-lg bg-white/10 border border-white/20 text-on-primary placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-accent w-full md:w-80"
                  placeholder="Enter your email for updates"
                  type="email"
                />
                <button
                  class="bg-accent text-on-accent px-stack-lg py-4 rounded-lg font-label-bold text-label-bold hover:brightness-110 transition-all uppercase tracking-widest"
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <footer class="w-full bg-tertiary mt-stack-lg">
      <div class="max-w-[1280px] mx-auto px-margin-desktop">
        <!-- Top Footer -->
        <div class="py-stack-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-stack-lg border-b border-white/10">
          <!-- Brand -->
          <div class="flex flex-col gap-stack-md">
            <div class="flex items-center gap-stack-sm">
              <img
                alt="JDD 2026 Logo"
                class="h-7 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuArxAMvOZj8tlylhrgMg4XOINHkUtvE8KC7rm5bBJ5HbNSNDPUzLZ2EF3wkYniy6XHPWq693cocheAl_gs0JH3HogtpCQe4hKewnkGqlfgVCTYkpuPWb_L_D0Ch0Ny0KHvzX5wfBgVW4H3XSweeoinLja8Pffk2IQuYwvkgsmnav-taGFexCS7oFc-qujKLfWqWbzeuu95ySeoAxlZ1zOrBqaA9sCPbt3A8iQkvCrcX6kLJob7nr8BL"
              />
              <span class="font-headline-md text-headline-md text-on-primary"
                >JDD 2026</span
              >
            </div>
            <p class="font-body-md text-outline-variant leading-relaxed">
              The premier developer conference in East Java. Building the future of tech together.
            </p>
            <div class="flex gap-stack-sm">
              <a href="#" class="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center hover:bg-accent transition-colors">
                <span class="material-symbols-outlined text-on-primary text-[18px]">public</span>
              </a>
              <a href="#" class="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center hover:bg-accent transition-colors">
                <span class="material-symbols-outlined text-on-primary text-[18px]">group</span>
              </a>
              <a href="#" class="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center hover:bg-accent transition-colors">
                <span class="material-symbols-outlined text-on-primary text-[18px]">chat</span>
              </a>
              <a href="#" class="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center hover:bg-accent transition-colors">
                <span class="material-symbols-outlined text-on-primary text-[18px]">mail</span>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="flex flex-col gap-stack-md">
            <h4 class="font-label-bold text-label-bold text-accent uppercase tracking-widest">Event</h4>
            <ul class="flex flex-col gap-stack-sm">
              <li><a href="#about" class="font-body-md text-outline-variant hover:text-accent transition-colors">About JDD</a></li>
              <li><a href="#speakers" class="font-body-md text-outline-variant hover:text-accent transition-colors">Speakers</a></li>
              <li><a href="#agenda" class="font-body-md text-outline-variant hover:text-accent transition-colors">Agenda</a></li>
              <li><a href="#sponsors" class="font-body-md text-outline-variant hover:text-accent transition-colors">Sponsors</a></li>
              <li><a href="#location" class="font-body-md text-outline-variant hover:text-accent transition-colors">Venue & Location</a></li>
            </ul>
          </div>

          <!-- Resources -->
          <div class="flex flex-col gap-stack-md">
            <h4 class="font-label-bold text-label-bold text-accent uppercase tracking-widest">Resources</h4>
            <ul class="flex flex-col gap-stack-sm">
              <li><a href="#" class="font-body-md text-outline-variant hover:text-accent transition-colors">Code of Conduct</a></li>
              <li><a href="#" class="font-body-md text-outline-variant hover:text-accent transition-colors">Speaker Guidelines</a></li>
              <li><a href="#" class="font-body-md text-outline-variant hover:text-accent transition-colors">Press Kit</a></li>
              <li><a href="#" class="font-body-md text-outline-variant hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="flex flex-col gap-stack-md">
            <h4 class="font-label-bold text-label-bold text-accent uppercase tracking-widest">Contact</h4>
            <ul class="flex flex-col gap-stack-sm">
              <li class="flex items-center gap-2">
                <span class="material-symbols-outlined text-accent text-[16px]">mail</span>
                <a href="mailto:hello@jddconf.id" class="font-body-md text-outline-variant hover:text-accent transition-colors">hello@jddconf.id</a>
              </li>
              <li class="flex items-center gap-2">
                <span class="material-symbols-outlined text-accent text-[16px]">location_on</span>
                <span class="font-body-md text-outline-variant">Pasuruan, East Java</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="material-symbols-outlined text-accent text-[16px]">calendar_today</span>
                <span class="font-body-md text-outline-variant">25-26 October 2026</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom Footer -->
        <div class="py-stack-md flex flex-col md:flex-row justify-between items-center gap-stack-md">
          <div class="font-body-md text-outline-variant text-sm">
            &copy; 2026 Jatim Developer Day. All rights reserved.
          </div>
          <button
            @click="scrollToTop"
            class="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center hover:bg-accent transition-colors cursor-pointer"
          >
            <span class="material-symbols-outlined text-on-primary text-[20px]">arrow_upward</span>
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Agenda State
const activeAgendaDay = ref(0);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Sponsors Data
const platinumSponsors = [
  { name: "Google", icon: "code" },
  { name: "Microsoft", icon: "laptop" },
  { name: "AWS", icon: "cloud" },
  { name: "Gojek", icon: "local_taxi" },
];

const goldSponsors = [
  { name: "Tokopedia", icon: "storefront" },
  { name: "Shopee", icon: "shopping_bag" },
  { name: "DANA", icon: "account_balance_wallet" },
  { name: "Bank Jago", icon: "bank" },
];

const silverSponsors = [
  { name: "Kominfo", icon: "gavel" },
  { name: "Djarum Foundation", icon: "favorite" },
  { name: "IDCamp", icon: "school" },
];

const agendaDays = [
  {
    label: "Day 1 - Oct 25",
    events: [
      {
        time: "08:00 - 09:00",
        title: "Registration & Welcome Coffee",
        speaker: "Event Team",
        room: "Main Lobby",
        type: "registration",
      },
      {
        time: "09:00 - 10:00",
        title: "Opening Keynote: The Future of Software Engineering in Indonesia",
        speaker: "Ainun Najib",
        room: "Grand Hall",
        type: "keynote",
      },
      {
        time: "10:15 - 11:15",
        title: "Microservices Architecture at Scale: Lessons from Production",
        speaker: "Zain Fathoni",
        room: "Grand Hall",
        type: "talk",
      },
      {
        time: "11:30 - 12:30",
        title: "Cloud Native Deep Dive: Kubernetes & Beyond",
        speaker: "Listiarso Wastuargo",
        room: "Grand Hall",
        type: "talk",
      },
      {
        time: "12:30 - 13:30",
        title: "Lunch Break & Networking",
        speaker: "All Attendees",
        room: "Dining Area",
        type: "break",
      },
      {
        time: "13:30 - 15:00",
        title: "Workshop: Building Resilient Distributed Systems",
        speaker: "Ainun Najib",
        room: "Workshop Room A",
        type: "workshop",
      },
      {
        time: "13:30 - 15:00",
        title: "Workshop: DevOps & CI/CD Best Practices",
        speaker: "Zain Fathoni",
        room: "Workshop Room B",
        type: "workshop",
      },
      {
        time: "15:15 - 16:15",
        title: "Panel Discussion: Open Source Ecosystem in East Java",
        speaker: "All Headliners",
        room: "Grand Hall",
        type: "talk",
      },
      {
        time: "16:30 - 17:30",
        title: "Lightning Talks: Community Showcase",
        speaker: "Community Speakers",
        room: "Grand Hall",
        type: "talk",
      },
      {
        time: "17:30 - 19:00",
        title: "Networking Session & Day 1 Closing",
        speaker: "Event Team",
        room: "Main Lobby",
        type: "break",
      },
    ],
  },
  {
    label: "Day 2 - Oct 26",
    events: [
      {
        time: "08:00 - 09:00",
        title: "Morning Coffee & Networking",
        speaker: "All Attendees",
        room: "Main Lobby",
        type: "break",
      },
      {
        time: "09:00 - 10:00",
        title: "Keynote: AI/ML in Production Systems",
        speaker: "Zain Fathoni",
        room: "Grand Hall",
        type: "keynote",
      },
      {
        time: "10:15 - 11:15",
        title: "Modern Frontend Architecture & Performance",
        speaker: "Listiarso Wastuargo",
        room: "Grand Hall",
        type: "talk",
      },
      {
        time: "11:30 - 12:30",
        title: "Security First: Building Secure by Default",
        speaker: "Ainun Najib",
        room: "Grand Hall",
        type: "talk",
      },
      {
        time: "12:30 - 13:30",
        title: "Lunch Break",
        speaker: "All Attendees",
        room: "Dining Area",
        type: "break",
      },
      {
        time: "13:30 - 15:30",
        title: "Hackathon: Build Solutions for Jawa Timur",
        speaker: "All Participants",
        room: "Workshop Room A & B",
        type: "workshop",
      },
      {
        time: "15:30 - 16:30",
        title: "Hackathon Demo & Judging",
        speaker: "Panel Juri",
        room: "Grand Hall",
        type: "talk",
      },
      {
        time: "16:30 - 17:30",
        title: "Closing Ceremony & Awards",
        speaker: "Event Team",
        room: "Grand Hall",
        type: "keynote",
      },
    ],
  },
];

// State reaktif untuk countdown timer
const days = ref("00");
const hours = ref("00");
const minutes = ref("00");
const seconds = ref("00");

let timerInterval = null;
const targetDate = new Date("October 25, 2026 09:00:00").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    days.value = "00";
    hours.value = "00";
    minutes.value = "00";
    seconds.value = "00";
    clearInterval(timerInterval);
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  days.value = d.toString().padStart(2, "0");
  hours.value = h.toString().padStart(2, "0");
  minutes.value = m.toString().padStart(2, "0");
  seconds.value = s.toString().padStart(2, "0");
};

onMounted(() => {
  updateCountdown();
  timerInterval = setInterval(updateCountdown, 1000);

  // Scroll reveal
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => {
    observer.observe(el);
  });
});

onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval); // Bersihkan interval saat komponen dihancurkan
  }
});
</script>
