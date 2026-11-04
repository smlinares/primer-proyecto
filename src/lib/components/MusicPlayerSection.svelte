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
                album: "Community Broadcasting: Winter Office Hours", 
                duration: "03:52", 
                year: "2023", 
                image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/3e/e2/70/3ee2705c-8c8e-2995-6599-a651ab9ea288/artwork.jpg/100x100bb.jpg",
                youtubeId: "n0A-YAWCdZc" 
            },
            { 
                id: 2, 
                title: "Comet", 
                artist: "The Midnight", 
                album: "Endless Summer (5 Year Anniversary Edition)", 
                duration: "05:17", 
                year: "2021", 
                image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/07/4d/be/074dbef3-cfb4-48e0-b70b-ef546b73f51f/196250187759_cover.jpg/100x100bb.jpg",
                youtubeId: "edaF3oWzqcY" 
            },
            {
                id: 3,
                title: "Cascade Nights",
                artist: "Hello Meteor",
                album: "The Department of Marine Sciences",
                duration: "04:00",
                year: "2022",
                image: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/52/cd/ad/52cdad9f-b2bc-f645-5d36-afc6d84636ab/artwork.jpg/100x100bb.jpg",
                youtubeId: "RRLRwBAdb44"
            },
            {
                id: 4,
                title: "Heart's In the Right Place",
                artist: "The American English",
                album: "Hearts In the Right Place - Single",
                duration: "05:07",
                year: "2024",
                image: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/08/e3/ac/08e3acd8-2893-b052-6e1f-946302354083/artwork.jpg/100x100bb.jpg",
                youtubeId: "hXTsGfEMY5c"
            },
            {
                id: 5,
                title: "Running In The Night",
                artist: "FM-84",
                album: "Atlas",
                duration: "04:30",
                year: "2016",
                image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/82/9a/7f/829a7f0d-7819-5e2a-7976-5a24e68450ae/872132121799_cover.jpg/100x100bb.jpg",
                youtubeId: "lB_XmsyiL-I"
            },
            {
                id: 6,
                title: "Because The Night",
                artist: "The Midnight",
                album: "Horror Show - EP",
                duration: "03:36",
                year: "2021",
                image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d6/e7/a0/d6e7a05a-e68e-0f57-7977-da3c57a053ef/5054429148398.png/100x100bb.jpg",
                youtubeId: "Oatqp_fWssY"
            },
            {
                id: 7,
                title: "Out Of Time",
                artist: "Kalax",
                album: "III",
                duration: "04:55",
                year: "2019",
                image: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/89/35/7e/89357e03-5347-8e8c-d1c9-88f935b6263d/artwork.jpg/100x100bb.jpg",
                youtubeId: "em1Ar8iq3d8"
            }
        ];
    }

    const playlistPromise = fetchPlaylist();

    let currentTrackId = $state(1);
    let isPlaying = $state(false);
    let isLooping = $state(false);
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
        player?.playVideo();
    }

    function onPlayerStateChange(event: any) {
        if (event.data === 1) {
            isPlaying = true;
            isTrackLoading = false;
        } else if (event.data === 0 && isLooping) {
            player.seekTo(0, true);
            player.playVideo();
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

    function toggleLoop() {
        isLooping = !isLooping;
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
            <div class="lg:col-span-5 lg:min-h-[475px] rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 shadow-xl flex flex-col items-center text-center relative overflow-hidden">
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
                <div class="my-8 relative w-56 h-56 sm:w-64 sm:h-64 rounded-full border border-slate-700/80 shadow-2xl shadow-black/60 flex items-center justify-center overflow-hidden {isPlaying ? 'animate-[spin_8s_linear_infinite]' : ''}"
                    style="background: repeating-radial-gradient(circle at center, #252832 0px, #101218 2px, #080a0f 4px, #1a1d25 5px, #0b0d12 8px);">
                    <div class="absolute inset-0 rounded-full pointer-events-none" style="background: radial-gradient(circle at 35% 28%, rgb(255 255 255 / 0.12), transparent 34%), linear-gradient(135deg, rgb(255 255 255 / 0.04), transparent 48%, rgb(0 0 0 / 0.35));"></div>
                    <div class="absolute inset-3 rounded-full border border-white/10 pointer-events-none"></div>
                    <div class="absolute inset-6 rounded-full border border-white/5 pointer-events-none"></div>

                    <div class="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-[3px] border-slate-300/70 shadow-[0_0_18px_rgba(0,0,0,0.8)] ring-1 ring-black/80">
                        {#if currentTrack?.image}
                            <img src={currentTrack.image.replace('/100x100bb.jpg', '/600x600bb.jpg')} alt={`${currentTrack.title} album cover`} class="w-full h-full object-cover" />
                        {/if}
                    </div>
                    <div aria-hidden="true" class="absolute z-20 w-2 h-2 rounded-full bg-[#050609] border border-slate-300/70 shadow-[0_0_0_2px_rgba(0,0,0,0.55)]"></div>
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

                <div class="space-y-2 max-h-95 overflow-y-auto pr-1">
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
                    <button
                        onclick={toggleLoop}
                        aria-label={isLooping ? 'Desactivar repetición' : 'Repetir canción'}
                        aria-pressed={isLooping}
                        title={isLooping ? 'Desactivar repetición' : 'Repetir canción'}
                        class="transition-colors cursor-pointer {isLooping ? 'text-cyan-400' : 'text-slate-500 hover:text-white'}"
                    >
                        <Icon icon="lucide:repeat-1" width="20" />
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