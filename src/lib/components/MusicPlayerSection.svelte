<script lang="ts">
    import Icon from "@iconify/svelte";
	import axios from "axios";
    import Music from "./Music.svelte";

	const resSong = axios.get("https://leonardoapi.vercel.app/api/tracks")

    const playlist = [
        { id: 1, title: "Unauthorized Design", artist: "Hello Meteor", album: "Winter Office Hours · Lofi Tape", duration: "04:12", year: "1998 / 2018", image: "/retro-setup.jpg" },
        { id: 2, title: "Resonance", artist: "HOME", album: "Odyssey", duration: "03:32", year: "2014", image: "/retro-setup.jpg" },
        { id: 3, title: "Caligula", artist: "Windows 96", album: "One Hundred Mornings", duration: "02:48", year: "2018", image: "/retro-setup.jpg" },
        { id: 4, title: "Nightcall", artist: "Kavinsky", album: "OutRun", duration: "04:19", year: "2010", image: "/retro-setup.jpg" },
        { id: 5, title: "Breeze Bay", artist: "Hello Meteor", album: "The Coastal Horizon", duration: "03:55", year: "2019", image: "/retro-setup.jpg" },
        { id: 6, title: "Brondzone", artist: "Com Truise", album: "In Decay", duration: "04:00", year: "2012", image: "/retro-setup.jpg" }
    ];

    let currentTrackId = $state(1);
    let isPlaying = $state(false);
    let volume = $state(80);
    let progress = $state(0);

    let currentTrack = $derived(playlist.find(t => t.id === currentTrackId) || playlist[0]);

    function togglePlay() {
        isPlaying = !isPlaying;
    }

    function selectTrack(id: number) {
        currentTrackId = id;
        isPlaying = true;
    }
</script>

<div class="min-h-screen bg-[#070A12] px-8 py-12 text-white font-sans">
    <div class="mx-auto flex max-w-7xl flex-col gap-8">
        <!-- Header Section -->
        <div class="flex flex-col gap-2 pb-6 border-b border-slate-800">
            <div class="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest px-2.5 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/50 w-fit">
                <span>AUDIO ARCHIVE</span>
                <span class="text-slate-500">/</span>
                <span>SYNTHWAVE & LOFI</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Reproductor Netizen
            </h2>
            <p class="text-sm text-slate-400 font-light max-w-xl">
                Sesiones sonoras, cintas de ambiente y frecuencias analógicas seleccionadas de la época dorada.
            </p>
        </div>

        <!-- Main Player Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <!-- Left Column: Vinyl & Current Track Details -->
            <div class="lg:col-span-5 rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 shadow-xl flex flex-col items-center text-center relative overflow-hidden">
                <div class="absolute top-4 left-4">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider border {isPlaying ? 'border-emerald-500/40 text-emerald-300 bg-emerald-950/40' : 'border-rose-500/40 text-rose-300 bg-rose-950/40'}">
                        {isPlaying ? '● REPRODUCIENDO' : '● EN PAUSA'}
                    </span>
                </div>
                <div class="absolute top-4 right-4 text-xs font-mono text-slate-500">
                    {currentTrack.year}
                </div>

                <!-- Vinyl Record Artwork -->
                <div class="my-8 relative w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-slate-950 border-4 border-slate-800/80 shadow-2xl flex items-center justify-center {isPlaying ? 'animate-spin-slow' : ''}">
                    <!-- Vinyl Grooves Illusion -->
                    <div class="absolute inset-2 rounded-full border border-slate-800/60"></div>
                    <div class="absolute inset-8 rounded-full border border-slate-800/40"></div>
                    <div class="absolute inset-14 rounded-full border border-slate-800/30"></div>
                    <div class="absolute inset-20 rounded-full border border-slate-800/20"></div>
                    
                    <!-- Center Label with Image -->
                    <div class="w-24 h-24 rounded-full overflow-hidden border-2 border-cyan-500/50 shadow-inner">
                        <img src={currentTrack.image} alt={currentTrack.title} class="w-full h-full object-cover" />
                    </div>
                </div>

                <!-- Track Metadata -->
                <div class="space-y-1.5 w-full">
                    <h3 class="text-xl font-bold text-white tracking-wide">{currentTrack.title}</h3>
                    <p class="text-sm text-cyan-400 font-mono">{currentTrack.artist}</p>
                    <p class="text-xs text-slate-400 font-light mt-1">Álbum: <span class="text-slate-300">{currentTrack.album}</span></p>
                </div>
            </div>

            <!-- Right Column: Playlist -->
            <div class="lg:col-span-7 rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 shadow-xl space-y-4">
                <div class="flex items-center justify-between pb-3 border-b border-slate-800/80">
                    <div class="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                        <Icon icon="boxicons:music" width="16" />
                        <span>Lista de Canciones (Playlist)</span>
                    </div>
                    <span class="text-xs font-mono text-slate-500">{playlist.length} Temas</span>
                </div>

                <div class="space-y-2 max-h-[380px] overflow-y-auto pr-1">

					{#await resSong}
						Cargando...
					{:then resList} 
						Cargado
						<!-- svelte-ignore block_empty -->
						{#each resList.data.tracks as track, index}
							<Music {track} {index} />

						{/each}
					{/await}

                </div>
            </div>
        </div>

        <!-- Bottom Persistent Player Controls Bar -->
        <div class="rounded-2xl border border-slate-800 bg-[#0B0F19] p-5 shadow-xl flex flex-col gap-3">
            <div class="w-full flex items-center gap-4">
                <span class="text-xs font-mono text-slate-400">00:00</span>
                <div class="relative flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden cursor-pointer">
                    <div class="absolute top-0 left-0 h-full bg-cyan-400 rounded-full" style="width: 35%;"></div>
                </div>
                <span class="text-xs font-mono text-slate-400">{currentTrack.duration}</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 items-center pt-1 gap-4">
                <!-- Left spacer to balance grid -->
                <div class="hidden sm:block"></div>

                <!-- Center Playback Controls -->
                <div class="flex items-center gap-4 justify-center">
                    <button class="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer">
                        <Icon icon="lucide:repeat" width="18" />
                    </button>
                    <button 
                        onclick={() => selectTrack(currentTrackId > 1 ? currentTrackId - 1 : playlist.length)} 
                        class="text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                        <Icon icon="lucide:skip-back" width="20" />
                    </button>
                    <button 
                        onclick={togglePlay}
                        class="w-11 h-11 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center hover:bg-cyan-300 transition-all cursor-pointer shadow-lg shadow-cyan-500/20"
                    >
                        <Icon icon={isPlaying ? "lucide:pause" : "lucide:play"} width="22" />
                    </button>
                    <button 
                        onclick={() => selectTrack(currentTrackId < playlist.length ? currentTrackId + 1 : 1)} 
                        class="text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                        <Icon icon="lucide:skip-forward" width="20" />
                    </button>
                    <button class="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer">
                        <Icon icon="lucide:shuffle" width="18" />
                    </button>
                </div>

                <!-- Right Volume Control -->
                <div class="hidden sm:flex items-center gap-2 w-32 justify-self-end">
                    <Icon icon="lucide:volume-2" class="text-slate-400 shrink-0" width="18" />
                    <input type="range" min="0" max="100" bind:value={volume} class="w-full accent-cyan-400 cursor-pointer h-1 bg-slate-800 rounded-lg" />
                </div>
            </div>
        </div>
    </div>
</div>