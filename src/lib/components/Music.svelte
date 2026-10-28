
<script>
    const { track, index } = $props()
    const currentTrackId = ''

</script>
<button
    // onclick={() => selectTrack(track.id)}
    class="w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer {currentTrackId ===
    track.id
        ? 'bg-[#121c2e] border-cyan-400/80 text-white shadow-md'
        : 'bg-[#121826]/70 border-slate-800/80 hover:border-slate-700 hover:bg-[#121826]'}"
>
    <div class="flex items-center gap-3.5">
        <span
            class="font-mono text-xs font-bold {currentTrackId === track.id
                ? 'text-cyan-400'
                : 'text-slate-500'}"
        >
            0{index}
        </span>
        <div>
            <div
                class="font-semibold text-sm {currentTrackId === track.id
                    ? 'text-cyan-200'
                    : 'text-slate-200'}"
            >
                {track.title}
            </div>
            <div class="text-[11px] text-slate-400 font-light">
                {track.artist.name}}
            </div>
        </div>
    </div>
    <span class="font-mono text-xs text-slate-400">{track.duration}</span>
</button>
