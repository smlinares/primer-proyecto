<script lang="ts">
    import Icon from "@iconify/svelte";

    const historyData = {
        web1: {
            id: "web1",
            badgeText: "Read-Only (Lectura)",
            badgeTime: "1991 - 2004",
            title: "Web 1.0: La Web de la Información & Solo Lectura",
            description: "Difusión estática de documentos hipervinculados y presencia digital básica.",
            architecture: "Servidores web estáticos (Apache, NGINX), archivos HTML planos, hojas de estilo CSS1/2 incipientes y scripts CGI/Perl en el servidor.",
            userRole: "Consumidor pasivo: los internautas leían páginas creadas por administradores («webmasters») y corporaciones.",
            identity: "Sin autenticación transversal; cuentas aisladas por servidor de correo POP3 o foros locales (BBS/Usenet).",
            monetization: "Banners publicitarios estáticos, directorios pagados y suscripciones a proveedores de acceso (ISP).",
            techs: ["HTML 2.0 / 3.2", "HTTP / 1.0", "Módems Dial-up (56k)", "Directorios Yahoo! / Altavista", "GeoCities & AngelFire"],
            platforms: ["CERN info.cern.ch", "Netscape Navigator", "GeoCities", "Craigslist inicial", "Britannica Online"],
            impact: "Democratizó el acceso universal a la información enciclopédica y técnica rompiendo las barreras geográficas físicas."
        },
        web2: {
            id: "web2",
            badgeText: "Read-Write (Lectura y Escritura)",
            badgeTime: "2004 - 2014+",
            title: "Web 2.0: La Web Social, Participativa & de Plataformas",
            description: "Contenido generado por usuarios (UGC), interactividad en tiempo real y redes de conexión social global.",
            architecture: "Páginas dinámicas con AJAX / XMLHttpRequest, APIs RESTful, Single-Page Applications (SPAs), computación en la nube masiva (AWS/GCP) y bases de datos relacionales y NoSQL.",
            userRole: "Creador y participante activo, a la vez producto: los usuarios publican contenido, mientras las plataformas extraen y monetizan sus datos conductuales.",
            identity: "Federación corporativa centralizada (OAuth mediante «Iniciar sesión con Google / Facebook / Apple»).",
            monetization: "Publicidad programática dirigida por hipervigilancia, modelos SaaS por suscripción y economía de la atención algorítmica.",
            techs: ["AJAX & JavaScript V8", "APIs REST / JSON", "Bases NoSQL (MongoDB, Redis)", "Smartphones & Responsive Web", "Cloud Hosting"],
            platforms: ["Wikipedia", "YouTube", "Facebook / Meta", "Twitter (X)", "Reddit", "GitHub"],
            impact: "Transformó a la humanidad en una comunidad interconectada en tiempo real, pero concentró el poder y los datos en un puñado de corporaciones monopolísticas."
        }
    };

    let activeTab: keyof typeof historyData = $state('web1');
    let current = $derived(historyData[activeTab]);
</script>

<div class="min-h-screen bg-[#070A12] px-8 py-12 text-white font-sans">
    <div class="mx-auto flex max-w-7xl flex-col gap-8">
        
        <!-- Header Section -->
        <div class="flex flex-col gap-3">
            <div>
                <span class="inline-block rounded-md border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 font-mono text-xs font-semibold tracking-wider text-cyan-400">
                    01 / CRONOLOGÍA & GENERACIONES
                </span>
            </div>
            <h2 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Historia
            </h2>
        </div>

        <div class="flex gap-8">
            <!-- Sidebar / Filter Buttons -->
            <aside class="flex w-80 shrink-0 flex-col gap-4">
                <div class="flex items-center justify-between text-xs font-mono tracking-wider text-cyan-400 uppercase">
                    <span>Filtrar por generación</span>
                    <span class="text-slate-500">4 vistas</span>
                </div>

                <div class="flex flex-col gap-3">
                    <!-- Web 1.0 Button -->
                    <button 
                        onclick={() => activeTab = 'web1'}
                        class="group flex flex-col gap-2 rounded-xl border p-4 text-left transition-all cursor-pointer {activeTab === 'web1' ? 'border-cyan-400 bg-[#0F1420] shadow-lg shadow-cyan-950/20' : 'border-slate-800/80 bg-[#0B0F19]/60 hover:border-slate-700 hover:bg-[#0F1420]'}"
                    >
                        <div class="flex items-center justify-between">
                            <span class="rounded bg-cyan-950/90 px-2 py-0.5 font-mono text-[10px] font-semibold text-cyan-400 border border-cyan-800/40">Read-Only</span>
                            <span class="font-mono text-xs text-slate-400">1991 - 2004</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <Icon icon="lucide:globe" class="text-cyan-400" width="18" />
                                <span class="font-bold text-white">Web 1.0</span>
                            </div>
                            <Icon icon="lucide:chevron-right" class="text-slate-500 transition-transform group-hover:translate-x-0.5" width="16" />
                        </div>
                        <p class="text-xs text-slate-400 leading-relaxed">
                            La web estática: documentos hipervinculados, CERN, GeoCities y directorios.
                        </p>
                    </button>

                    <!-- Web 2.0 Button -->
                    <button 
                        onclick={() => activeTab = 'web2'}
                        class="group flex flex-col gap-2 rounded-xl border p-4 text-left transition-all cursor-pointer {activeTab === 'web2' ? 'border-cyan-400 bg-[#0F1420] shadow-lg shadow-cyan-950/20' : 'border-slate-800/80 bg-[#0B0F19]/60 hover:border-slate-700 hover:bg-[#0F1420]'}"
                    >
                        <div class="flex items-center justify-between">
                            <span class="rounded bg-indigo-950/90 px-2 py-0.5 font-mono text-[10px] font-semibold text-indigo-400 border border-indigo-800/40">Read-Write</span>
                            <span class="font-mono text-xs text-slate-400">2004 - 2014+</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <Icon icon="lucide:users" class="text-slate-400" width="18" />
                                <span class="font-bold text-slate-200">Web 2.0</span>
                            </div>
                            <Icon icon="lucide:chevron-right" class="text-slate-500 transition-transform group-hover:translate-x-0.5" width="16" />
                        </div>
                        <p class="text-xs text-slate-400 leading-relaxed">
                            La web social: AJAX/SPAs, contenido de usuarios (UGC) y plataformas cloud.
                        </p>
                    </button>
                </div>
            </aside>

            <!-- Main Content Area -->
            <main class="flex flex-1 flex-col gap-6 rounded-2xl border border-slate-800/80 bg-[#0B0F19] p-8 shadow-2xl">
                <div class="flex flex-col gap-3">
                    <div class="flex items-center justify-between">
                        <span class="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                            FICHA TÉCNICA • {current.id === 'web1' ? 'WEB 1.0' : 'WEB 2.0'}
                        </span>
                        <span class="rounded-full border border-cyan-800/40 bg-cyan-950/60 px-3 py-1 font-mono text-xs font-medium text-cyan-300">
                            {current.badgeTime} • {current.badgeText}
                        </span>
                    </div>
                    <h3 class="text-3xl font-extrabold tracking-tight text-white">
                        {current.title}
                    </h3>
                    <p class="text-sm text-slate-400">
                        {current.description}
                    </p>
                </div>

                <!-- Feature Cards Grid -->
                <div class="grid grid-cols-2 gap-4">
                    <div class="flex flex-col gap-2 rounded-xl border border-slate-800/80 bg-[#121826]/70 p-5">
                        <div class="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase">
                            <Icon icon="lucide:cpu" width="16" />
                            <span>Arquitectura Técnica</span>
                        </div>
                        <p class="text-xs leading-relaxed text-slate-300">{current.architecture}</p>
                    </div>

                    <div class="flex flex-col gap-2 rounded-xl border border-slate-800/80 bg-[#121826]/70 p-5">
                        <div class="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase">
                            <Icon icon="lucide:user" width="16" />
                            <span>Rol del Usuario</span>
                        </div>
                        <p class="text-xs leading-relaxed text-slate-300">{current.userRole}</p>
                    </div>

                    <div class="flex flex-col gap-2 rounded-xl border border-slate-800/80 bg-[#121826]/70 p-5">
                        <div class="flex items-center gap-2 font-mono text-xs text-amber-400 uppercase">
                            <Icon icon="lucide:key-round" width="16" />
                            <span>Identidad & Acceso</span>
                        </div>
                        <p class="text-xs leading-relaxed text-slate-300">{current.identity}</p>
                    </div>

                    <div class="flex flex-col gap-2 rounded-xl border border-slate-800/80 bg-[#121826]/70 p-5">
                        <div class="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase">
                            <Icon icon="lucide:shield" width="16" />
                            <span>Monetización & Silos</span>
                        </div>
                        <p class="text-xs leading-relaxed text-slate-300">{current.monetization}</p>
                    </div>
                </div>

                <!-- Tags Section -->
                <div class="grid grid-cols-2 gap-6 pt-2">
                    <div class="flex flex-col gap-3">
                        <span class="font-mono text-xs tracking-wider text-slate-400 uppercase">Tecnologías Insignia</span>
                        <div class="flex flex-wrap gap-2 font-mono text-xs">
                            {#each current.techs as tech}
                                <span class="rounded-lg border border-slate-800 bg-[#121826] px-3 py-1.5 text-cyan-300">{tech}</span>
                            {/each}
                        </div>
                    </div>

                    <div class="flex flex-col gap-3">
                        <span class="font-mono text-xs tracking-wider text-slate-400 uppercase">Plataformas Históricas</span>
                        <div class="flex flex-wrap gap-2 font-mono text-xs">
                            {#each current.platforms as platform}
                                <span class="rounded-lg border border-slate-800 bg-[#121826] px-3 py-1.5 text-slate-300">{platform}</span>
                            {/each}
                        </div>
                    </div>
                </div>

                <!-- Bottom Banner -->
                <div class="mt-2 rounded-xl border border-slate-800/80 bg-[#121826]/50 p-4">
                    <p class="text-xs leading-relaxed text-slate-300">
                        <span class="font-bold text-cyan-400">Impacto Sociocultural:</span> {current.impact}
                    </p>
                </div>
            </main>
        </div>
    </div>
</div>