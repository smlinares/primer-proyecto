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
        },
        web3: {
            id: "web3",
            badgeText: "Read-Write-Own (Lectura, Escritura y Propiedad)",
            badgeTime: "2014 - Presente",
            title: "Web 3.0: La Web Semántica, Descentralizada & Soberana",
            description: "Soberanía digital individual, protocolos abiertos sin intermediarios, redes semánticas federadas e inteligencia distribuida.",
            architecture: "Sistemas entre pares (P2P), redes distribuidas (Blockchains, DAGs), almacenamiento inmutable (IPFS, Arweave), protocolos federados (ActivityPub / Fediverso, Matrix) y agentes autónomos de IA.",
            userRole: "Propietario soberano y copropietario: los usuarios controlan sus claves criptográficas, su identidad, sus datos y participan en la gobernanza comunitaria (DAOs).",
            identity: "Identidad Autosoberana (SSI/DID), firmas criptográficas asimétricas y autenticación mediante billeteras («Sign-in with Ethereum / Keypair»).",
            monetization: "Tokens nativos de protocolo, micropagos sin fricción, contratos inteligentes programables y monetización directa creador-comunidad sin peajes del 30%.",
            techs: ["Smart Contracts & Solidity", "IPFS & Libp2p", "Protocolo ActivityPub (W3C)", "Pruebas de Conocimiento Cero (ZKP)", "Identificadores Descentralizados (DID)", "Agentes IA en el Edge"],
            platforms: ["Ethereum & Solana", "Mastodon / Bluesky (ATProto)", "IPFS & Filecoin", "Uniswap / Aave", "Lens Protocol / Farcaster"],
            impact: "Devuelve el espíritu original libertario y abierto de los pioneros de ARPANET y la Web 1.0, incorporando la interactividad social moderna sin depender de monopolios de vigilancia."
        }
    };

    let activeTab = $state<keyof typeof historyData | 'matrix'>('web1');
    let current = $derived(activeTab !== 'matrix' ? historyData[activeTab] : null);
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

                    <!-- Web 3.0 Button -->
                    <button 
                        onclick={() => activeTab = 'web3'}
                        class="group flex flex-col gap-2 rounded-xl border p-4 text-left transition-all cursor-pointer {activeTab === 'web3' ? 'border-cyan-400 bg-[#0F1420] shadow-lg shadow-cyan-950/20' : 'border-slate-800/80 bg-[#0B0F19]/60 hover:border-slate-700 hover:bg-[#0F1420]'}"
                    >
                        <div class="flex items-center justify-between">
                            <span class="rounded bg-amber-950/90 px-2 py-0.5 font-mono text-[10px] font-semibold text-amber-400 border border-amber-800/40">Read-Write-Own</span>
                            <span class="font-mono text-xs text-slate-400">2014 - Presente</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <Icon icon="lucide:cpu" class="text-slate-400" width="18" />
                                <span class="font-bold text-slate-200">Web 3.0</span>
                            </div>
                            <Icon icon="lucide:chevron-right" class="text-slate-500 transition-transform group-hover:translate-x-0.5" width="16" />
                        </div>
                        <p class="text-xs text-slate-400 leading-relaxed">
                            La web descentralizada: protocolos P2P, blockchains, identidad SSI y agentes IA.
                        </p>
                    </button>

                    <!-- Matriz Comparativa Button -->
                    <button 
                        onclick={() => activeTab = 'matrix'}
                        class="group flex flex-col gap-2 rounded-xl border p-4 text-left transition-all cursor-pointer {activeTab === 'matrix' ? 'border-cyan-400 bg-[#0F1420] shadow-lg shadow-cyan-950/20' : 'border-slate-800/80 bg-[#0B0F19]/60 hover:border-slate-700 hover:bg-[#0F1420]'}"
                    >
                        <div class="flex items-center justify-between">
                            <span class="rounded bg-emerald-950/90 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-400 border border-emerald-800/40">Tabla Sintética</span>
                            <span class="font-mono text-xs text-slate-400">Comparativa</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <Icon icon="lucide:layout-grid" class="text-slate-400" width="18" />
                                <span class="font-bold text-slate-200">Matriz Comparativa</span>
                            </div>
                            <Icon icon="lucide:chevron-right" class="text-slate-500 transition-transform group-hover:translate-x-0.5" width="16" />
                        </div>
                        <p class="text-xs text-slate-400 leading-relaxed">
                            Contraste tabular de las 6 dimensiones fundamentales entre Web 1.0, 2.0 y 3.0.
                        </p>
                    </button>
                </div>
            </aside>

            <!-- Main Content Area -->
            <main class="flex flex-1 flex-col gap-6 rounded-2xl border border-slate-800/80 bg-[#0B0F19] p-8 shadow-2xl">
                {#if activeTab === 'matrix'}
                    <!-- Matriz Comparativa View -->
                    <div class="flex flex-col gap-6">
                        <div class="flex items-center justify-between">
                            <span class="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                                MATRIZ COMPARATIVA DE GENERACIONES
                            </span>
                            <span class="rounded-full border border-cyan-800/40 bg-cyan-950/60 px-3 py-1 font-mono text-xs font-medium text-cyan-300">
                                Web 1.0 vs 2.0 vs 3.0
                            </span>
                        </div>

                        <div class="overflow-x-auto rounded-xl border border-slate-800/80 bg-[#121826]/70">
                            <table class="w-full text-left text-xs text-slate-300">
                                <thead class="border-b border-slate-800 font-mono text-slate-400 uppercase">
                                    <tr>
                                        <th class="p-4">Dimensión</th>
                                        <th class="p-4 text-cyan-400">Web 1.0</th>
                                        <th class="p-4 text-indigo-400">Web 2.0</th>
                                        <th class="p-4 text-amber-400">Web 3.0</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-slate-800/60">
                                    <tr>
                                        <td class="p-4 font-mono font-medium text-white">Modelo de Interacción</td>
                                        <td class="p-4 text-cyan-300">Read-Only (Lectura)</td>
                                        <td class="p-4 text-indigo-300">Read-Write (Escritura)</td>
                                        <td class="p-4 text-amber-300">Read-Write-Own (Propiedad)</td>
                                    </tr>
                                    <tr>
                                        <td class="p-4 font-mono font-medium text-white">Rol Usuario</td>
                                        <td class="p-4">Consumidor pasivo de páginas web.</td>
                                        <td class="p-4">Creador activo (UGC) y producto de datos.</td>
                                        <td class="p-4">Propietario soberano y copartícipe DAO.</td>
                                    </tr>
                                    <tr>
                                        <td class="p-4 font-mono font-medium text-white">Infraestructura</td>
                                        <td class="p-4">Servidores web estáticos (HTML/CGI).</td>
                                        <td class="p-4">Cloud masivo (AWS/GCP), APIs REST y NoSQL.</td>
                                        <td class="p-4">Redes P2P, Blockchains, IPFS y Fediverso.</td>
                                    </tr>
                                    <tr>
                                        <td class="p-4 font-mono font-medium text-white">Datos & Silos</td>
                                        <td class="p-4">Alojamiento descentralizado básico.</td>
                                        <td class="p-4">Monopolios en silos («Jardines vallados»).</td>
                                        <td class="p-4">Registros criptográficos abiertos y federados.</td>
                                    </tr>
                                    <tr>
                                        <td class="p-4 font-mono font-medium text-white">Identidad</td>
                                        <td class="p-4">Sin login transversal; cuentas aisladas.</td>
                                        <td class="p-4">OAuth corporativo («Iniciar con Google»).</td>
                                        <td class="p-4">Identidad Autosoberana (DID / Criptografía).</td>
                                    </tr>
                                    <tr>
                                        <td class="p-4 font-mono font-medium text-white">Monetización</td>
                                        <td class="p-4">Banners estáticos y acceso por ISP.</td>
                                        <td class="p-4">Publicidad por vigilancia algorítmica.</td>
                                        <td class="p-4">Tokens nativos, microtransacciones y dApps.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                {:else if current}
                    <!-- Web 1.0 / 2.0 / 3.0 View -->
                    <div class="flex flex-col gap-3">
                        <div class="flex items-center justify-between">
                            <span class="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                                FICHA TÉCNICA • {current.id === 'web1' ? 'WEB 1.0' : current.id === 'web2' ? 'WEB 2.0' : 'WEB 3.0'}
                            </span>
                            <span class="rounded-full border border-cyan-800/40 bg-cyan-950/60 px-3 py-1 font-mono text-xs font-medium text-cyan-300">
                                {current.badgeTime} {current.badgeText}
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
                {/if}
            </main>
        </div>
    </div>
</div>