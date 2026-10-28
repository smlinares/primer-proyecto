<script lang="ts">
    import Icon from "@iconify/svelte";
    import HistorySection from "../lib/components/HistorySection.svelte";
    import FuncionamientoSection from "../lib/components/FuncionamientoSection.svelte";
    import CulturaSection from "../lib/components/CulturaSection.svelte";
    import MusicPlayerSection from "../lib/components/MusicPlayerSection.svelte";
</script>

<div class="flex flex-col bg-[#070A12] text-white">
    <!-- Hero Section -->
    <section 
        id="hero-body" 
        class="relative flex min-h-[calc(100vh-64px)] w-full items-center justify-between px-8 md:px-16 lg:px-24 py-12"
    >
        <div class="mx-auto flex max-w-7xl items-center justify-between gap-12 w-full">
            <!-- Left Content Column -->
            <div id="hero-content" class="flex max-w-xl flex-col gap-6">
                <h1 id="welcome-text" class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                    Un recorrido por la historia de la <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Web</span>
                </h1>
                
                <p id="welcome-paragraph" class="text-sm sm:text-base text-slate-400 leading-relaxed max-w-lg">
                    Desde el primer servidor en el CERN y la guerra de los navegadores, hasta los protocolos descentralizados y la evolución cultural que transformó la sociedad moderna.
                </p>
            </div>

            <!-- Right Image Column -->
            <div id="hero-image" class="w-full max-w-lg shrink-0">
                <div class="overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0F1420] shadow-2xl shadow-cyan-950/20">
                    <img 
                        id="welcome-image" 
                        src="/retro-setup.jpg" 
                        alt="Retro Computer Setup" 
                        class="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
            </div>
        </div>

        <!-- Bottom Animated Scroll Indicator -->
        <button 
            onclick={() => document.getElementById('Historia')?.scrollIntoView({ behavior: 'smooth' })}
            class="absolute bottom-6 left-1/2 -translate-x-1/2 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer animate-bounce"
            aria-label="Scroll down"
        >
            <Icon icon="lucide:chevron-down" width="24" height="24" />
        </button>
    </section>

    <!-- History Section Container -->
    <div id="Historia">
        <HistorySection />
    </div>

    <!-- Funcionamiento Section Container -->
    <div id="Funcionamiento">
        <FuncionamientoSection />
    </div>

    <!-- Cultura Section Container -->
    <div id="Cultura">
        <CulturaSection />
    </div>
</div>