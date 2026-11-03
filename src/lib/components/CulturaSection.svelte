<script lang="ts">
	import Icon from "@iconify/svelte";
	import { popExhibits, pillarsData, essaysData } from "#lib/culturaData.ts";

	// Component State
	let activeSubTab = $state<"pop" | "pillars" | "essays">("pop");
	let selectedPopId = $state<string>(popExhibits[0].id);
	let selectedPillarId = $state<string>(pillarsData[0].id);

	let currentPop = $derived(popExhibits.find(e => e.id === selectedPopId) || popExhibits[0]);
	let currentPillar = $derived(pillarsData.find(p => p.id === selectedPillarId) || pillarsData[0]);

	// Modal States
	let zoomModalOpen = $state(false);
	let zoomData = $state({ src: "", alt: "", title: "" });

	let essayModalOpen = $state(false);
	let selectedEssay = $state(essaysData[0]);

	function openZoom(src: string, alt: string, title: string) {
		zoomData = { src, alt, title };
		zoomModalOpen = true;
	}

	function openEssay(id: string) {
		const found = essaysData.find(e => e.id === id);
		if (found) {
			selectedEssay = found;
			essayModalOpen = true;
		}
	}
</script>

<section class="py-6 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto">
	<div class="min-h-screen bg-[#070A12] px-8 py-12 text-white font-sans">
	<div class="mx-auto flex max-w-7xl flex-col gap-8">
		<!-- Header Section -->
		<div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2 pb-6 border-b border-slate-800">
			<div>
				<div class="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 px-2.5 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/50">
					<span>03</span>
					<span class="text-slate-500">/</span>
					<span>CULTURA DIGITAL & MEMORIA COLECTIVA</span>
				</div>
				<h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
					Cultura Digital & Memoria Colectiva
				</h2>
				<p class="text-sm text-slate-300 leading-relaxed font-light max-w-2xl">
					Crónicas fotográficas, fenómenos de masas y pilares fundacionales de la primera generación en línea (1988–2004).
				</p>
			</div>
		</div>

		<!-- TAB 1: Cultura Pop & Fotos -->
		{#if activeSubTab === 'pop'}
			<section class="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
				<!-- Left Column: Topic Selector -->
				<div class="md:col-span-4 lg:col-span-4">
					<div class="sticky top-6 space-y-2">
						<div class="flex items-center justify-between px-1 mb-2">
							<span class="text-xs font-mono text-cyan-400 uppercase tracking-wider">TEMAS POPULARES</span>
						</div>
						<div class="space-y-2">
							{#each popExhibits as ex}
								<button
									onclick={() => selectedPopId = ex.id}
									class="p-3 rounded-xl border text-left transition-all w-full cursor-pointer {selectedPopId === ex.id
										? 'bg-[#121c2e] border-cyan-400 text-white shadow-md shadow-cyan-950/30'
										: 'bg-[#121826]/70 border-slate-800/80 hover:border-slate-700 hover:bg-[#121826]'}"
								>
									<div class="flex items-center justify-between mb-0.5 font-mono text-[11px]">
										<span class={selectedPopId === ex.id ? 'text-cyan-400 font-bold' : 'text-slate-400'}>{ex.era}</span>
										<span class="text-[9px] px-1.5 py-0.2 rounded {selectedPopId === ex.id ? 'bg-cyan-950 text-cyan-300' : 'text-slate-500'}">FOTO</span>
									</div>
									<h4 class="font-bold text-sm mb-0.5 {selectedPopId === ex.id ? 'text-white' : 'text-slate-200'}">{ex.shortName}</h4>
									<p class="text-[11px] text-slate-400 line-clamp-1 font-light">{ex.tagline}</p>
								</button>
							{/each}
						</div>
					</div>
				</div>

				<!-- Right Column: Detail Card -->
				<div class="md:col-span-8 lg:col-span-8">
					<div class="rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 shadow-xl space-y-5">
						<div>
							<div class="flex flex-wrap items-center justify-between gap-2 text-xs font-mono mb-2">
								<span class="px-2 py-0.5 rounded border text-[11px] {currentPop.badgeColor}">{currentPop.badge}</span>
								<span class="text-slate-400 text-xs">Época: <span class="text-white font-medium">{currentPop.era}</span></span>
							</div>
							<h3 class="text-xl sm:text-2xl font-bold text-white mb-1">{currentPop.title}</h3>
							<p class="text-xs text-cyan-300 font-mono font-light">{currentPop.tagline}</p>
						</div>

						<!-- Photo Preview Box -->
						<div>
							<button 
								type="button"
								onclick={() => openZoom(currentPop.image, currentPop.imageAlt, currentPop.title)}
								class="w-full text-left relative rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 cursor-pointer group hover:border-cyan-400/60 transition-all duration-300 shadow-lg"
							>
								<img src={currentPop.image} alt={currentPop.imageAlt} class="w-full h-56 sm:h-72 md:h-80 object-cover object-center group-hover:scale-[1.01] transition-transform duration-500" />
							</button>
							<div class="flex items-center justify-between text-[11px] font-mono text-slate-400 px-1 pt-2">
								<span class="text-slate-300 font-light truncate max-w-[80%]">{currentPop.imageAlt}</span>
							</div>
						</div>

						<!-- Narrative Paragraphs -->
						<div class="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
							<p class="text-slate-200 font-normal">{currentPop.summary}</p>
							{#each currentPop.historicalNarrative as paragraph}
								<p>{paragraph}</p>
							{/each}
						</div>

						<!-- Iconic Artifacts -->
						<div>
							<div class="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">ARTEFACTOS DE ÉPOCA</div>
							<div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
								{#each currentPop.iconicArtifacts as art}
									<div class="p-2.5 rounded-lg bg-[#121826]/60 border border-slate-800/80 flex flex-col justify-between">
										<div class="flex items-center justify-between mb-0.5">
											<span class="text-xs font-semibold text-slate-200">{art.name}</span>
											<span class="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">{art.category}</span>
										</div>
										<p class="text-[11px] text-slate-400 leading-snug font-light">{art.desc}</p>
									</div>
								{/each}
							</div>
						</div>

						<!-- Legacy Takeaway -->
						{#if currentPop.legacyTakeaway}
							<div class="p-4 rounded-xl bg-[#121826]/80 border border-cyan-800/40">
								<div class="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1.5">
									<span>{currentPop.legacyTakeaway.title}</span>
								</div>
								<p class="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">{currentPop.legacyTakeaway.impact}</p>
							</div>
						{/if}
					</div>
				</div>
			</section>

		<!-- TAB 2: Pilares Técnicos -->
		{:else if activeSubTab === 'pillars'}
			<section class="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
				<div class="md:col-span-4 lg:col-span-4">
					<div class="sticky top-6 space-y-2">
						<div class="flex items-center justify-between px-1 mb-2">
							<span class="text-xs font-mono text-cyan-400 uppercase tracking-wider">PROTOCOLOS FUNDACIONALES</span>
							<span class="text-[11px] font-mono text-slate-400">4 Pilares</span>
						</div>
						<div class="space-y-2">
							{#each pillarsData as pil}
								<button
									onclick={() => selectedPillarId = pil.id}
									class="p-3 rounded-xl border text-left transition-all w-full cursor-pointer {selectedPillarId === pil.id
										? 'bg-[#121c2e] border-cyan-400 text-white shadow-md shadow-cyan-950/30'
										: 'bg-[#121826]/70 border-slate-800/80 hover:border-slate-700 hover:bg-[#121826]'}"
								>
									<div class="flex items-center justify-between mb-0.5 font-mono text-[11px]">
										<span class={selectedPillarId === pil.id ? 'text-cyan-400 font-medium' : 'text-slate-400'}>{pil.period}</span>
									</div>
									<h4 class="font-bold text-sm mb-0.5 {selectedPillarId === pil.id ? 'text-white' : 'text-slate-200'}">{pil.shortName}</h4>
									<p class="text-[11px] text-slate-400 line-clamp-1 font-light">{pil.badge}</p>
								</button>
							{/each}
						</div>
					</div>
				</div>

				<div class="md:col-span-8 lg:col-span-8">
					<div class="rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 shadow-xl space-y-5">
						<div>
							<div class="flex items-center justify-between text-xs font-mono mb-2">
								<span class="text-cyan-300 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/60 text-[11px]">{currentPillar.badge}</span>
								<span class="text-slate-400 text-xs font-medium">Época: {currentPillar.period}</span>
							</div>
							<h3 class="text-xl sm:text-2xl font-bold text-white mb-1">{currentPillar.title}</h3>
							<p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mt-2">{currentPillar.summary}</p>
						</div>

						<div class="grid grid-cols-3 divide-x divide-slate-800 bg-[#121826]/70 border border-slate-800/80 rounded-xl p-3 text-center">
							{#each currentPillar.stats as st}
								<div class="px-2">
									<div class="text-[10px] text-slate-400 font-mono mb-0.5 truncate">{st.label}</div>
									<div class="text-xs sm:text-sm font-bold text-white truncate">{st.value}</div>
								</div>
							{/each}
						</div>

						<div class="border-l-2 border-cyan-400 pl-3.5 py-1">
							<p class="text-xs sm:text-sm text-slate-200 italic font-light leading-relaxed">{currentPillar.pullQuote}</p>
						</div>

						<div>
							<div class="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">HITOS CRUCIALES</div>
							<div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
								{#each currentPillar.milestones as m}
									<div class="p-2.5 rounded-lg bg-[#121826]/60 border border-slate-800/80 flex flex-col justify-between">
										<span class="text-xs font-mono text-cyan-400 font-bold mb-0.5">{m.year}</span>
										<div class="text-xs font-semibold text-white mb-0.5">{m.name}</div>
										<p class="text-[11px] text-slate-400 leading-snug font-light">{m.desc}</p>
									</div>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</section>

		<!-- TAB 3: Ensayos -->
		{:else if activeSubTab === 'essays'}
			<section class="grid grid-cols-1 md:grid-cols-2 gap-4">
				{#each essaysData as essay}
					<div class="p-5 rounded-xl border border-slate-800 bg-[#0B0F19] hover:border-slate-700 transition-all flex flex-col justify-between">
						<div>
							<div class="flex items-center justify-between text-xs font-mono mb-2">
								<div class="flex items-center gap-2">
									<span class="text-cyan-400 font-medium">{essay.category}</span>
									<span class="text-slate-600">·</span>
									<span class="text-slate-400">{essay.date}</span>
								</div>
								<span class="text-slate-400 text-[11px]">{essay.readTime}</span>
							</div>
							<h4 class="text-base sm:text-lg font-semibold text-white mb-2 leading-snug">{essay.title}</h4>
							<p class="text-xs text-slate-300 leading-relaxed font-light mb-4 line-clamp-2">{essay.excerpt}</p>
						</div>
						<div class="pt-3 border-t border-slate-800 flex items-center justify-between">
							<div class="flex items-center gap-1.5">
								{#each essay.relatedTags.slice(0, 2) as tag}
									<span class="text-[11px] font-mono text-slate-400">#{tag}</span>
								{/each}
							</div>
							<button 
								type="button"
								onclick={() => openEssay(essay.id)}
								class="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer bg-transparent border-0 p-0"
							>
								<span>Leer ensayo →</span>
							</button>
						</div>
					</div>
				{/each}
			</section>
		{/if}
	</div>
</div>

<!-- Zoom Modal Backdrop -->
{#if zoomModalOpen}
	<div 
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md outline-none" 
		onclick={() => zoomModalOpen = false}
		onkeydown={(e) => e.key === 'Escape' && (zoomModalOpen = false)}
	>
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<div 
			role="document"
			class="relative max-w-4xl w-full bg-[#121826] border border-slate-700 rounded-2xl overflow-hidden shadow-2xl" 
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => e.stopPropagation()}
		>
			<div class="flex items-center justify-between p-4 border-b border-slate-800 bg-[#070A12]">
				<div>
					<h4 class="text-sm font-semibold text-white">{zoomData.title}</h4>
					<p class="text-xs font-mono text-cyan-400">Documento Visual Archival</p>
				</div>
				<button type="button" onclick={() => zoomModalOpen = false} class="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white cursor-pointer">✕</button>
			</div>
			<div class="p-3 bg-black/60 flex items-center justify-center max-h-[75vh] overflow-hidden">
				<img src={zoomData.src} alt={zoomData.alt} class="max-h-[70vh] w-auto object-contain rounded-lg">
			</div>
			<div class="p-4 border-t border-slate-800 bg-[#070A12] text-xs font-mono text-slate-300">
				<span>{zoomData.alt}</span>
			</div>
		</div>
	</div>
{/if}

<!-- Essay Reader Modal Backdrop -->
{#if essayModalOpen}
	<div 
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md outline-none" 
		onclick={() => essayModalOpen = false}
		onkeydown={(e) => e.key === 'Escape' && (essayModalOpen = false)}
	>
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<div 
			role="document"
			class="relative max-w-3xl w-full max-h-[90vh] bg-[#121826] border border-slate-700 rounded-2xl overflow-hidden shadow-2xl flex flex-col" 
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => e.stopPropagation()}
		>
			<div class="flex items-center justify-between p-5 border-b border-slate-800 bg-[#070A12]">
				<div>
					<span class="text-xs font-mono text-cyan-400 uppercase tracking-wider">{selectedEssay.category} · {selectedEssay.readTime}</span>
					<h3 class="text-xl font-bold text-white mt-1">{selectedEssay.title}</h3>
				</div>
				<button type="button" onclick={() => essayModalOpen = false} class="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white cursor-pointer">✕</button>
			</div>
			<div class="p-6 overflow-y-auto space-y-4 text-sm text-slate-300 font-light leading-relaxed">
				{#each selectedEssay.fullContent as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>
		</div>
	</div>
{/if}
</section>