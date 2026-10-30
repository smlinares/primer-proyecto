<script lang="ts">
    import Icon from "@iconify/svelte";
    import { onMount, onDestroy } from "svelte";

    async function fetchPlaylist() {
        await new Promise(resolve => setTimeout(resolve, 1500));
        return [
            { 
                id: 1, 
                title: "Unauthorized Design", 
                artist: "Hello Meteor", 
                album: "Winter Office Hours", 
                duration: "04:12", 
                year: "2023", 
                image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60",
                youtubeId: "n0A-YAWCdZc" 
            },
            { 
                id: 2, 
                title: "Comet", 
                artist: "The Midnight", 
                album: "Endless Summer", 
                duration: "03:45", 
                year: "2021", 
                image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=60",
                youtubeId: "edaF3oWzqcY" 
            }
        ];
    }

    const playlistPromise = fetchPlaylist();

    let currentTrackId = $state(1);
    let isPlaying = $state(false);
    let isTrackLoading = $state(true); // Start as loading initially
    let volume = $state(80);
    let currentTime = $state(0);
    let duration = $state(0);
    
    let resolvedPlaylist = $state<any[]>([]);

    let currentTrack = $derived(
        resolvedPlaylist.find(t => t.id === currentTrackId) || resolvedPlaylist[0] || null
    );

    let player: any = null;
    let timer: any = null;

    onMount(async () => {
        resolvedPlaylist = await playlistPromise;

        if (!(window as any).YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            document.head.appendChild(tag);
        }

        (window as any).onYouTubeIframeAPIReady = () => {
            player = new (window as any).YT.Player('youtube-player', {
                height: '0',
                width: '0',
                videoId: resolvedPlaylist[0].youtubeId,
                playerVars: {
                    'playsinline': 1,
                    'controls': 0
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        };

        if ((window as any).YT && (window as any).YT.Player) {
            (window as any).onYouTubeIframeAPIReady();
        }

        timer = setInterval(() => {
            if (player && player.getCurrentTime && player.getDuration) {
                try {
                    currentTime = player.getCurrentTime() || 0;
                    duration = player.getDuration() || 0;
                } catch (e) {
                    // Ignore transient iframe read errors
                }
            }
        }, 500);
    });

    onDestroy(() => {
        if (timer) clearInterval(timer);
    });

    function onPlayerReady() {
        if (player && player.setVolume) {
            player.setVolume(volume);
        }
        isTrackLoading = false;
    }

    function onPlayerStateChange(event: any) {
        if (event.data === 1) {
            isPlaying = true;
            isTrackLoading = false;
        } else if (event.data === 2 || event.data === 0) {
            isPlaying = false;
            isTrackLoading = false;
        } else if (event.data === 3) {
            isTrackLoading = true;
        }
    }

    function togglePlay() {
        if (!player) return;
        const state = player.getPlayerState();
        if (state === 1) {
            player.pauseVideo();
            isPlaying = false;
        } else {
            player.playVideo();
            isPlaying = true;
        }
    }

    function selectTrack(id: number) {
        currentTrackId = id;
        const track = resolvedPlaylist.find(t => t.id === id);
        if (player && track) {
            isTrackLoading = true;
            player.loadVideoById(track.youtubeId);
            player.playVideo();
        }
    }

    function seekToPosition(e: MouseEvent) {
        if (!player || !duration) return;
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const percentage = clickX / width;
        const newTime = percentage * duration;
        
        player.seekTo(newTime, true);
        currentTime = newTime;
    }

    function handleVolumeChange(e: Event) {
        const target = e.target as HTMLInputElement;
        volume = Number(target.value);
        if (player && player.setVolume) {
            player.setVolume(volume);
        }
    }

    function formatTime(seconds: number) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    let progressPercentage = $derived(duration > 0 ? (currentTime / duration) * 100 : 0);
</script>

<div class="min-h-screen bg-[#070A12] px-8 py-12 text-white font-sans">
    <div class="mx-auto flex max-w-7xl flex-col gap-8">
        <!-- Hidden YouTube Player Container -->
        <div id="youtube-player" class="hidden"></div>

        <!-- Header Section -->
        <div class="flex flex-col gap-2 pb-6 border-b border-slate-800">
            <div class="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest px-2.5 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/50 w-fit">
                <span>YOUTUBE AUDIO ARCHIVE</span>
                <span class="text-slate-500">/</span>
                <span>EMBED API</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Reproductor de Música
            </h2>
        </div>

        <!-- Main Player Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <!-- Left Column: Vinyl & Current Track Details -->
            <div class="lg:col-span-5 rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 shadow-xl flex flex-col items-center text-center relative overflow-hidden">
                <!-- Centered Status Badge -->
                <div class="absolute top-4 left-1/2 -translate-x-1/2">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider border {isTrackLoading ? 'border-amber-500/40 text-amber-300 bg-amber-950/40 animate-pulse' : isPlaying ? 'border-emerald-500/40 text-emerald-300 bg-emerald-950/40' : 'border-rose-500/40 text-rose-300 bg-rose-950/40'}">
                        {isTrackLoading ? '● CARGANDO...' : isPlaying ? '● REPRODUCIENDO' : '● EN PAUSA'}
                    </span>
                </div>
                
                <div class="absolute top-4 right-4 text-xs font-mono text-slate-500">
                    {currentTrack?.year || ''}
                </div>

                <!-- Vinyl Record Artwork -->
                <div class="my-8 relative w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-slate-950 border-4 border-slate-800/80 shadow-2xl flex items-center justify-center {isPlaying ? '[animation:spin_8s_linear_infinite]' : ''}">
                    <div class="absolute inset-2 rounded-full border border-slate-800/60"></div>
                    <div class="absolute inset-8 rounded-full border border-slate-800/40"></div>
                    <div class="absolute inset-20 rounded-full border border-slate-800/20"></div>
                    
                    <div class="w-24 h-24 rounded-full overflow-hidden border-2 border-cyan-500/50 shadow-inner">
                        {#if currentTrack?.image}
                            <img src={currentTrack.image} alt={currentTrack.title} class="w-full h-full object-cover" />
                        {/if}
                    </div>
                </div>

                <div class="space-y-1.5 w-full">
                    <h3 class="text-xl font-bold text-white tracking-wide">{currentTrack?.title || ''}</h3>
                    <p class="text-sm text-cyan-400 font-mono">{currentTrack?.artist || ''}</p>
                    {#if currentTrack?.album}
                        <p class="text-xs text-slate-400 font-light mt-1">Álbum: <span class="text-slate-300">{currentTrack.album}</span></p>
                    {/if}
                </div>
            </div>

            <!-- Right Column: Playlist wrapped in {#await} -->
            <div class="lg:col-span-7 rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 shadow-xl space-y-4">
                <div class="flex items-center justify-between pb-3 border-b border-slate-800/80">
                    <div class="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                        <Icon icon="boxicons:music" width="16" />
                        <span>Lista de Canciones (Playlist)</span>
                    </div>
                    {#await playlistPromise}
                        <span class="text-xs font-mono text-slate-500">...</span>
                    {:then playlist}
                        <span class="text-xs font-mono text-slate-500">{playlist.length} Temas</span>
                    {/await}
                </div>

                <div class="space-y-2 max-h-[380px] overflow-y-auto pr-1">
                    {#await playlistPromise}
                        <div class="py-12 text-center">
                            <p class="text-cyan-400 font-mono animate-pulse text-sm">Cargando Lista de Canciones...</p>
                        </div>
                    {:then playlist}
                        {#each playlist as track, index}
                            <button
                                onclick={() => selectTrack(track.id)}
                                class="w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer {currentTrackId === track.id
                                    ? 'bg-[#121c2e] border-cyan-400/80 text-white shadow-md'
                                    : 'bg-[#121826]/70 border-slate-800/80 hover:border-slate-700 hover:bg-[#121826]'}"
                            >
                                <div class="flex items-center gap-3.5">
                                    <span class="font-mono text-xs font-bold {currentTrackId === track.id ? 'text-cyan-400' : 'text-slate-500'}">
                                        {index + 1}
                                    </span>
                                    <div>
                                        <div class="font-semibold text-sm {currentTrackId === track.id ? 'text-cyan-200' : 'text-slate-200'}">
                                            {track.title}
                                        </div>
                                        <div class="text-[11px] text-slate-400 font-light">
                                            {track.artist}
                                        </div>
                                    </div>
                                </div>
                                <span class="font-mono text-xs text-slate-400">{track.duration}</span>
                            </button>
                        {/each}
                    {:catch error}
                        <div class="py-12 text-center">
                            <p class="text-rose-400 font-mono text-sm">Error al cargar: {error.message}</p>
                        </div>
                    {/await}
                </div>
            </div>
        </div>

        <!-- Bottom Persistent Player Controls Bar -->
        <div class="rounded-2xl border border-slate-800 bg-[#0B0F19] p-5 shadow-xl flex flex-col gap-3">
            <!-- Progress Bar -->
            <div class="w-full flex items-center gap-4">
                <span class="text-xs font-mono text-slate-400">{formatTime(currentTime)}</span>
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div 
                    class="relative flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden cursor-pointer"
                    onclick={seekToPosition}
                >
                    <div class="absolute top-0 left-0 h-full bg-white rounded-full pointer-events-none" style="width: {progressPercentage}%;"></div>
                </div>
                <span class="text-xs font-mono text-slate-400">{currentTrack?.duration || '00:00'}</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 items-center pt-1 gap-4">
                <div class="hidden sm:block"></div>

                <!-- Center Playback Controls -->
                <div class="flex items-center gap-4 justify-center">
                    <button 
                        onclick={() => selectTrack(currentTrackId > 1 ? currentTrackId - 1 : resolvedPlaylist.length)} 
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
                        onclick={() => selectTrack(currentTrackId < resolvedPlaylist.length ? currentTrackId + 1 : 1)} 
                        class="text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                        <Icon icon="lucide:skip-forward" width="20" />
                    </button>
                </div>

                <!-- Right Volume Control -->
                <div class="hidden sm:flex items-center gap-2 w-32 justify-self-end">
                    <Icon icon="lucide:volume-2" class="text-slate-400 shrink-0" width="18" />
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={volume} 
                        oninput={handleVolumeChange} 
                        class="w-full accent-cyan-400 cursor-pointer h-1 bg-slate-800 rounded-lg" 
                    />
                </div>
            </div>
        </div>
    </div>
</div>