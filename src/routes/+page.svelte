<script lang="ts">
    import Icon from "@iconify/svelte";
    import HistorySection from "../lib/components/HistorySection.svelte";
    import FuncionamientoSection from "../lib/components/FuncionamientoSection.svelte";
    import CulturaSection from "../lib/components/CulturaSection.svelte";
</script>

<div class="flex flex-col w-full bg-[#070A12] text-white overflow-x-hidden">
    <!-- Hero Section -->
    <section 
        id="hero-body" 
        class="relative w-full flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-10 sm:py-16 md:py-24"
    >
        <div class="mx-auto flex max-w-7xl flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
            <!-- Left Content Column -->
            <div class="flex max-w-xl flex-col items-center lg:items-start text-center lg:text-left gap-4 sm:gap-6">
                <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                    Un recorrido por la historia de la <span class="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Web</span>
                </h1>
                
                <p class="text-xs sm:text-base text-slate-400 leading-relaxed max-w-lg">
                    Desde el primer servidor en el CERN y la guerra de los navegadores, hasta los protocolos descentralizados y la evolución cultural que transformó la sociedad moderna.
                </p>
            </div>

            <!-- Right Image Column -->
            <div class="w-full max-w-xs sm:max-w-md lg:max-w-lg shrink-0">
                <div class="overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0F1420] shadow-2xl shadow-cyan-950/20">
                    <img 
                        src="/retro-setup.jpg" 
                        alt="Retro Computer Setup" 
                        class="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
            </div>
        </div>
    </section>

    <!-- Sections with Compact Mobile Spacing -->
    <div id="Historia" class="w-full py-6 sm:py-12 border-t border-slate-900">
        <HistorySection />
    </div>

    <div id="Funcionamiento" class="w-full py-6 sm:py-12 border-t border-slate-900">
        <FuncionamientoSection />
    </div>

    <div id="Cultura" class="w-full py-6 sm:py-12 border-t border-slate-900">
        <CulturaSection />
    </div>
</div>