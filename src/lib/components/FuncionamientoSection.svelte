<script lang="ts">
	import Icon from "@iconify/svelte";

	const modulesData = {
		tcpip: {
			id: "tcpip",
			tag: "RED & TRANSPORTE",
			title: "Conmutación & TCP/IP",
			shortDesc: "Paquetes, 3-way handshake y modelo de 4 capas.",
			icon: "lucide:network",
			paradigmTag: "PARADIGMA DE TRANSMISIÓN",
			authors: "Paul Baran (1964) & Donald Davies",
			mainTitle: "Conmutación de Circuitos vs Conmutación de Paquetes",
			mainDescription:
				"La decisión fundacional que hizo posible internet fue abandonar el modelo telefónico de línea fija dedicada y adoptar paquetes autónomos e independientes capaces de enrutarse dinámicamente sobre una red descentralizada."
		},
		dns: {
			id: "dns",
			tag: "SISTEMA DE NOMBRES",
			title: "DNS (7 Pasos)",
			shortDesc: "Resolución jerárquica de nombres de dominio.",
			icon: "lucide:server",
			paradigmTag: "SISTEMA DE NOMBRES DE DOMINIO (RFC 1034 / 1035)",
			authors: "Paul Mockapetris (1983)",
			mainTitle: "La Libreta de Direcciones Distribuida de Internet",
			mainDescription:
				"DNS es una base de datos jerárquica y mundialmente replicada que traduce nombres de dominio legibles por humanos (como netizen.org) en direcciones IP numéricas (IPv4 de 32 bits e IPv6 de 128 bits) que los enrutadores comprenden. Sin DNS, la navegación dependería de memorizar secuencias numéricas."
		},
		html: {
			id: "html",
			tag: "ESTÁNDARES WEB",
			title: "HTML & ECMAScript",
			shortDesc: "Evolución W3C, WHATWG y estándares TC39.",
			icon: "lucide:code-xml",
			paradigmTag: "GOBERNANZA DE LA WEB ABIERTA",
			authors: "W3C • WHATWG • ECMA TC39",
			mainTitle: "La Tríada de Estándares del Cliente Web",
			mainDescription:
				"La web moderna descansa sobre la separación de responsabilidades: HTML define el significado semántico y la estructura del documento, CSS gobierna la composición geométrica visual, y ECMAScript (JavaScript) implementa la reactividad y la lógica de ejecución del cliente."
		}
	};

	let activeTab = $state<keyof typeof modulesData>("tcpip");
	let current = $derived(modulesData[activeTab]);

	// DNS 7 Steps state & data
	let activeDnsStep = $state(1);

	const dnsSteps = [
		{
			step: 1,
			title: "Inspección de Caché Local",
			subtitle: "Navegador Web & Sistema Operativo",
			badge: "Caché Local / TTL",
			actor: "Navegador Web & Sistema Operativo",
			heading: "Inspección de Caché Local",
			description:
				"Al ingresar una URL, el navegador examina secuencialmente su propia caché en memoria (Chrome/Firefox DNS cache), el servicio de resolución del sistema operativo (nscd, systemd-resolved o DNS Client de Windows) y el archivo local de mapeo estático 'hosts'.",
			mechanism: "Si el registro existe y su TTL no ha expirado, la IP se resuelve en 0 milisegundos con cero tráfico hacia la red.",
			traffic: "Tráfico: GET / → chrome://net-internals/#dns → OS getaddrinfo"
		},
		{
			step: 2,
			title: "Petición Recursiva al Resolver",
			subtitle: "Resolver DNS Recursivo (ISP / Anycast)",
			badge: "UDP / 53 • DoH",
			actor: "Resolver DNS Recursivo (ISP / Anycast)",
			heading: "Petición Recursiva al Servidor DNS del Proveedor",
			description:
				"Si la caché local falla, el sistema operativo envía una consulta UDP (puerto 53) al Resolver recursivo configurado (ej. 1.1.1.1, 8.8.8.8 o el servidor DHCP del proveedor de internet). El Resolver asume la responsabilidad de completar la búsqueda en nombre del cliente.",
			mechanism: "El Resolver mantiene su propia caché masiva optimizada por algoritmos de frecuencia de acceso (LRU), reduciendo las consultas externas.",
			traffic: "Tráfico: Consulta recursiva UDP hacia el IP del DNS Resolver"
		},
		{
			step: 3,
			title: "Consulta Iterativa a Servidores Raíz",
			subtitle: "Servidor de Nombres Raíz (Root Server '.')",
			badge: "DNS ROOT SERVERS",
			actor: "Servidor de Nombres Raíz (Root Server '.')",
			heading: "Consulta a los 13 Clusters de Servidores Raíz",
			description:
				"El Resolver recursivo interroga a uno de los 13 servidores raíz mundiales (gestionados por IANA/ICANN). El servidor raíz no conoce la IP final de netizen.org, pero lee el sufijo y responde con la dirección exacta de los servidores de Nombres de Dominio de Nivel Superior (.org).",
			mechanism: "Los servidores raíz operan mediante direccionamiento Anycast, enrutando al nodo físico más cercano geográficamente.",
			traffic: "Tráfico: Respuesta iterativa con delegación al servidor TLD .org"
		},
		{
			step: 4,
			title: "Búsqueda en Servidores TLD",
			subtitle: "Servidor de Dominio de Nivel Superior (TLD)",
			badge: "TLD NAMESERVER (.ORG)",
			actor: "Servidor de Dominio de Nivel Superior (TLD)",
			heading: "Consulta al Servidor Autorizado del TLD (.org)",
			description:
				"El Resolver dirige una nueva consulta iterativa al servidor TLD encargado de la extensión '.org'. Este servidor examina el registro del dominio y devuelve la dirección del servidor de nombres específico asignado al dominio netizen.org.",
			mechanism: "Los TLDs mantienen el registro de todas las entidades registradas bajo su extensión específica a nivel global.",
			traffic: "Tráfico: Consulta UDP hacia los nombres de servidores autoritativos del dominio"
		},
		{
			step: 5,
			title: "Resolución en Servidor Autoritativo",
			subtitle: "Servidor de Nombres Autoritativo (Authoritative DNS)",
			badge: "DNS AUTHORITATIVE",
			actor: "Servidor de Nombres Autoritativo (Authoritative DNS)",
			heading: "Consulta al Servidor Propietario del Dominio",
			description:
				"El último paso de consulta externa llega al servidor autoritativo configurado por el administrador de netizen.org (ej. Cloudflare DNS, AWS Route 53). Este servidor posee la base de datos real con los registros de recursos (A, AAAA, CNAME).",
			mechanism: "Devuelve el registro tipo A (IPv4) o AAAA (IPv6) junto con el tiempo de vida (TTL) configurado para el dominio.",
			traffic: "Tráfico: Respuesta final con la dirección IP del servidor web de destino"
		},
		{
			step: 6,
			title: "Respuesta al Cliente y Propagación de Caché",
			subtitle: "Resolver Recursivo → Navegador Cliente",
			badge: "CACHE PROPAGATION",
			actor: "Resolver Recursivo → Navegador Cliente",
			heading: "Entrega de la IP y Almacenamiento Temporal",
			description:
				"El Resolver recursivo recibe la IP final, la almacena en su propia caché respetando estrictamente el TTL indicado por el servidor autoritativo, y reenvía la respuesta IP de vuelta al sistema operativo del usuario.",
			mechanism: "A partir de este instante, cualquier nueva pestaña o usuario cercano obtendrá la IP directamente del caché sin repetir los pasos 3 al 5.",
			traffic: "Tráfico: Paquete de respuesta DNS de vuelta al cliente final"
		},
		{
			step: 7,
			title: "Apertura de Socket & Handshake de Transporte",
			subtitle: "Navegador Cliente ⇄ Servidor Web de Destino",
			badge: "TCP ESTABLISHED & TLS",
			actor: "Navegador Cliente ⇄ Servidor Web de Destino",
			heading: "Establecimiento del Canal de Comunicación",
			description:
				"Con la dirección IP numérica en su poder, el navegador inicia el apretón de manos TCP (Three-Way Handshake) y posteriormente la negociación criptográfica TLS (Handshake HTTPS) para asegurar el intercambio de peticiones HTTP.",
			mechanism: "Se inaugura el túnel cifrado extremo a extremo sobre el cual se cargarán los recursos gráficos, estilos y datos de la aplicación web.",
			traffic: "Tráfico: SYN → SYN-ACK → ACK + ClientHello TLS 1.3"
		}
	];

	let currentDnsStepData = $derived(dnsSteps[activeDnsStep - 1]);

	// Standards Organizations Data
	const standardsOrgs = [
		{
			name: "W3C & WHATWG",
			desc: "Estandarizan HTML, CSS, DOM, Web Accessibility (WCAG) y APIs web de plataforma."
		},
		{
			name: "ECMA TC39",
			desc: "Comité técnico que evoluciona el estándar ECMA-262 (JavaScript) con cadencia anual."
		},
		{
			name: "IETF",
			desc: "Define los protocolos fundamentales de transporte y aplicación (HTTP/1.1, HTTP/2, HTTP/3, TLS)."
		}
	];

	// HTML Evolution Timeline Data
	const htmlTimeline = [
		{
			version: "HTML 2.0",
			year: "1995",
			author: "IETF (RFC 1866)",
			desc: "Primera especificación canónica formal de la web. Estandarizó la estructura básica de documentos, hipervínculos, listas y formularios interactivos con método POST.",
			impact: "Transformó la web de un visualizador de texto estático en una plataforma bidireccional interactiva capaz de recibir datos."
		},
		{
			version: "HTML 3.2",
			year: "1997",
			author: "W3C Recommendation",
			desc: "Consenso formal del recién fundado W3C para cerrar la brecha tras la Primera Guerra de Navegadores; incorporó tablas complejas, alineación de texto y applets de Java.",
			impact: "Permitió por primera vez maquetar cuadrículas y columnas en sitios web mediante tablas anidadas antes de la madurez de CSS."
		},
		{
			version: "HTML 4.01",
			year: "1999",
			author: "W3C Recommendation",
			desc: "Separación estricta entre estructura y diseño visual; delegó todo el estilizado a CSS e introdujo tipos de documento Strict, Transitional y Frameset.",
			impact: "El estándar que rigió la era dorada de la Web 1.0 y Web 2.0 durante más de una década."
		},
		{
			version: "XHTML 1.0",
			year: "2000",
			author: "W3C Recommendation",
			desc: "Reformulación de HTML 4 como una aplicación XML estricta; exigió cierre obligatorio de todas las etiquetas (<br />), comillas en atributos y sintaxis en minúsculas.",
			impact: "Generó una división en la comunidad: su rigidez con el 'Error Fatal XML' chocó con la tolerancia a fallos que hizo exitosa a la web real."
		},
		{
			version: "HTML5",
			year: "2014",
			author: "WHATWG & W3C",
			desc: "Revolución multimedia sin plugins propietarios (muerte de Flash): etiquetas nativas <video> y <audio>, lienzo <canvas> 2D/3D, WebSockets, Web Storage y semántica moderna.",
			impact: "Convirtió al navegador en un sistema operativo universal capaz de ejecutar videojuegos 3D, aplicaciones de ofimática y streaming sin extensiones."
		},
		{
			version: "HTML Living Standard",
			year: "Continuo",
			author: "WHATWG (Apple, Google, Mozilla, Microsoft)",
			desc: "Modelo de desarrollo continuo sin versiones numeradas monolíticas; los motores de navegación implementan y refinan APIs en tiempo real con pruebas cruzadas Web Platform Tests.",
			impact: "Garantiza evolución ágil, eliminación de fricciones entre navegadores y compatibilidad retrospectiva perpetua."
		}
	];

	// ECMAScript Evolution Timeline Data
	const ecmascriptTimeline = [
		{
			version: "ES1 (ECMA-262)",
			year: "1997",
			author: "Ecma International",
			desc: "Primera formalización internacional del lenguaje desarrollado en 10 días por Brendan Eich en Netscape Communications bajo el nombre de Mocha/JavaScript.",
			impact: "Evitó que Microsoft fragmentara la web con su dialecto propietario JScript en Internet Explorer."
		},
		{
			version: "ES3",
			year: "1999",
			author: "Ecma International",
			desc: "El estándar clásico que dominó la Web 1.0: añadió expresiones regulares formales, bloques estructurados try/catch/finally y sentencias switch.",
			impact: "Sostuvo el nacimiento de la revolución AJAX (2005) y bibliotecas pioneras como Prototype y jQuery."
		},
		{
			version: "ES5",
			year: "2009",
			author: "Ecma International",
			desc: "Modo Estricto ('use strict'), objeto JSON nativo (parse/stringify), métodos funcionales de matrices (map, filter, reduce, forEach) y descriptores de propiedad.",
			impact: "Estabilizó la ingeniería de software en JavaScript y permitió el nacimiento del ecosistema Node.js en el servidor."
		},
		{
			version: "ES6 / ES2015",
			year: "2015",
			author: "Ecma TC39",
			desc: "La refundación moderna de JavaScript: ámbito léxico (let/const), funciones flecha (=>), clases nativas, Promesas para asincronía, módulos ES (import/export) y desestructuración.",
			impact: "El salto evolutivo más trascendente del ecosistema web; base de React, Vue, Angular y el toolchain moderno (Vite/Rollup)."
		},
		{
			version: "ES2017 (ES8)",
			year: "2017",
			author: "Ecma TC39",
			desc: "Estandarizó las palabras clave async y await sobre Promesas, eliminando el infierno de callbacks y facilitando la escritura de código concurrente limpio.",
			impact: "Revolucionó el manejo de operaciones de I/O en la red y APIs del navegador con sintaxis secuencial y legible."
		},
		{
			version: "ES Moderno (2020-2024)",
			year: "Continua",
			author: "Ecma TC39 (Anual)",
			desc: "Encadenamiento opcional (?.), coalescencia nula (??), enteros arbitrarios BigInt, Promise.allSettled, Array.prototype.at, Object.hasOwn y Top-Level Await.",
			impact: "Proceso riguroso de 5 etapas (Stage 0 a Stage 4) con propuestas impulsadas por la comunidad y evaluadas por ingenieros de todos los motores (V8, SpiderMonkey, JavaScriptCore)."
		}
	];

	// Critical Rendering Path Data
	const criticalRenderingPath = [
		{
			step: "01",
			title: "Parsing HTML",
			desc: "Convierte bytes en tokens, tags y construye el árbol del DOM (Document Object Model)."
		},
		{
			step: "02",
			title: "Parsing CSS",
			desc: "Procesa las hojas de estilo y calcula la cascada de reglas para crear el árbol CSSOM."
		},
		{
			step: "03",
			title: "Render Tree",
			desc: "Fusiona DOM y CSSOM conteniendo únicamente los nodos visibles en pantalla."
		},
		{
			step: "04",
			title: "Layout & Paint",
			desc: "Calcula coordenadas exactas (reflow) y la GPU rasteriza los píxeles (composite)."
		}
	];
</script>

<div class="min-h-screen bg-[#070A12] px-8 py-12 text-white font-sans">
	<div class="mx-auto flex max-w-7xl flex-col gap-8">
		<!-- Header Section -->
		<div class="flex flex-col gap-3">
			<div>
				<span
					class="inline-block rounded-md border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 font-mono text-xs font-semibold tracking-wider text-cyan-400"
				>
					02 / ARQUITECTURA & PROTOCOLOS
				</span>
			</div>
			<h2 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
				Funcionamiento de la Red
			</h2>
			<p class="text-sm sm:text-base text-slate-400 max-w-3xl">
				Los tres pilares técnicos de internet: conmutación de paquetes sobre TCP/IP, resolución DNS y estándares cliente.
			</p>
		</div>

		<div class="flex gap-8">
			<!-- Sidebar / Module Filter Buttons -->
			<aside class="flex w-80 shrink-0 flex-col gap-4">
				<div class="flex items-center justify-between text-xs font-mono tracking-wider text-cyan-400 uppercase">
					<span>Módulos Técnicos</span>
					<span class="text-slate-500">3 Módulos</span>
				</div>

				<div class="flex flex-col gap-3">
					{#each Object.values(modulesData) as mod}
						<button
							onclick={() => (activeTab = mod.id as keyof typeof modulesData)}
							class="group flex flex-col gap-2 rounded-xl border p-4 text-left transition-all cursor-pointer {activeTab === mod.id
								? 'border-cyan-400 bg-[#0F1420] shadow-lg shadow-cyan-950/20'
								: 'border-slate-800/80 bg-[#0B0F19]/60 hover:border-slate-700 hover:bg-[#0F1420]'}"
						>
							<div class="flex items-center justify-between">
								<span class="font-mono text-[10px] font-semibold uppercase text-cyan-400 tracking-wider">
									{mod.tag}
								</span>
								<Icon
									icon={mod.icon}
									class={activeTab === mod.id ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-400'}
									width="18"
								/>
							</div>
							<div class="flex flex-col gap-1">
								<span class="font-bold text-white text-base">{mod.title}</span>
								<p class="text-xs text-slate-400 leading-relaxed">{mod.shortDesc}</p>
							</div>
						</button>
					{/each}
				</div>
			</aside>

			<!-- Main Content Panel -->
			<main class="flex flex-1 flex-col gap-6 rounded-2xl border border-slate-800/80 bg-[#0B0F19] p-8 shadow-2xl">
				<!-- Paradigm Header -->
				<div class="flex flex-col gap-3">
					<div class="flex items-center justify-between">
						<span class="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase">
							{current.paradigmTag}
						</span>
						<span class="font-mono text-xs text-slate-400">
							{current.authors}
						</span>
					</div>
					<h3 class="text-3xl font-extrabold tracking-tight text-white">
						{current.mainTitle}
					</h3>
					<p class="text-sm text-slate-300 leading-relaxed">
						{@html current.mainDescription.replace('HTML', '<strong class="text-white font-semibold">HTML</strong>').replace('CSS', '<strong class="text-white font-semibold">CSS</strong>').replace('ECMAScript (JavaScript)', '<strong class="text-white font-semibold">ECMAScript (JavaScript)</strong>')}
					</p>
				</div>

				{#if activeTab === 'tcpip'}
					<!-- 1. Conmutación de Circuitos vs Conmutación de Paquetes -->
					<div class="grid grid-cols-2 gap-6 pt-2">
						<div class="flex flex-col gap-4 rounded-xl border border-red-900/30 bg-[#160B13]/60 p-6">
							<div class="flex items-center justify-between">
								<span class="font-bold text-rose-400 text-sm">Modelo Telefónico (Circuitos)</span>
								<span class="rounded bg-rose-950/80 px-2 py-0.5 font-mono text-[10px] font-semibold text-rose-400 border border-rose-800/40">
									PSTN
								</span>
							</div>
							<ul class="flex flex-col gap-3 text-xs leading-relaxed text-slate-300">
								<li class="flex items-start gap-2">
									<span class="text-rose-400 text-base leading-none">•</span>
									<div><strong class="text-white font-semibold">Ruta fija y exclusiva: </strong>Se reserva un canal físico dedicado de extremo a extremo durante toda la comunicación.</div>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-rose-400 text-base leading-none">•</span>
									<div><strong class="text-white font-semibold">Punto único de fallo: </strong>Si un nodo intermedio se corta o satura, la llamada colapsa instantáneamente.</div>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-rose-400 text-base leading-none">•</span>
									<div><strong class="text-white font-semibold">Ineficiencia de ancho de banda: </strong>Los silencios en la conversación mantienen la línea ocupada sin transferir datos útiles.</div>
								</li>
							</ul>
						</div>

						<div class="flex flex-col gap-4 rounded-xl border border-cyan-800/40 bg-[#081825]/60 p-6">
							<div class="flex items-center justify-between">
								<span class="font-bold text-cyan-400 text-sm">Arquitectura Internet (Paquetes)</span>
								<span class="rounded bg-cyan-950/80 px-2 py-0.5 font-mono text-[10px] font-semibold text-cyan-400 border border-cyan-800/40">
									TCP / IP
								</span>
							</div>
							<ul class="flex flex-col gap-3 text-xs leading-relaxed text-slate-300">
								<li class="flex items-start gap-2">
									<span class="text-cyan-400 text-base leading-none">•</span>
									<div><strong class="text-white font-semibold">Fragmentación autónoma: </strong>Los mensajes se dividen en datagramas con cabeceras IP que indican origen, destino y secuencia.</div>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-cyan-400 text-base leading-none">•</span>
									<div><strong class="text-white font-semibold">Enrutamiento adaptativo: </strong>Cada paquete puede viajar por rutas físicas distintas, esquivando nodos caídos o congestionados.</div>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-cyan-400 text-base leading-none">•</span>
									<div><strong class="text-white font-semibold">Multiplexación estadística: </strong>Millones de usuarios comparten simultáneamente los mismos cables con máxima eficiencia.</div>
								</li>
							</ul>
						</div>
					</div>

					<!-- 2. El Apretón de Manos TCP (Three-Way Handshake) -->
					<div class="flex flex-col gap-5 mt-6 pt-6 border-t border-slate-800/80">
						<div class="flex items-center justify-between">
							<span class="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase">
								CONEXIÓN CONFIABLE FULL-DUPLEX (RFC 793)
							</span>
							<span class="font-mono text-xs text-slate-400">
								Capa de Transporte
							</span>
						</div>
						<div class="flex flex-col gap-2">
							<h4 class="text-2xl font-extrabold tracking-tight text-white">
								El Apretón de Manos TCP (Three-Way Handshake)
							</h4>
							<p class="text-sm text-slate-300 leading-relaxed">
								A diferencia de UDP que transmite datagramas sin garantía de recepción, TCP establece una conexión lógica confiable y bidireccional mediante un protocolo de 3 pasos antes de intercambiar cualquier byte de datos de aplicación (HTTP/TLS). Este proceso synchroniza números de secuencia iniciales (ISN) y reserva búferes en ambos extremos.
							</p>
						</div>

						<!-- 3 Steps Grid -->
						<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
							<!-- Paso 01 -->
							<div class="flex flex-col justify-between gap-3 rounded-xl border border-slate-800/80 bg-[#121826]/80 p-5">
								<div class="flex flex-col gap-2">
									<div class="flex items-center justify-between font-mono text-[10px]">
										<span class="text-cyan-400 font-bold uppercase">PASO 01</span>
										<span class="text-slate-400">Cliente → Servidor</span>
									</div>
									<div class="flex flex-col">
										<span class="font-bold text-white text-sm">SYN (Sincronización)</span>
										<span class="font-mono text-[11px] text-cyan-300 mt-0.5">Bandera: SYN = 1 • Seq = X</span>
									</div>
								</div>
								<p class="text-xs text-slate-300 leading-relaxed">
									El cliente genera un Número de Secuencia Inicial aleatorio (ISN = X) y solicita la apertura del canal. El socket del cliente pasa al estado <strong class="text-cyan-400 font-mono">SYN_SENT</strong>.
								</p>
							</div>

							<!-- Paso 02 -->
							<div class="flex flex-col justify-between gap-3 rounded-xl border border-slate-800/80 bg-[#121826]/80 p-5">
								<div class="flex flex-col gap-2">
									<div class="flex items-center justify-between font-mono text-[10px]">
										<span class="text-indigo-400 font-bold uppercase">PASO 02</span>
										<span class="text-slate-400">Servidor → Cliente</span>
									</div>
									<div class="flex flex-col">
										<span class="font-bold text-white text-sm">SYN-ACK (Acuse & Sinc)</span>
										<span class="font-mono text-[11px] text-indigo-300 mt-0.5">SYN = 1, ACK = 1 • Ack = X+1, Seq = Y</span>
									</div>
								</div>
								<p class="text-xs text-slate-300 leading-relaxed">
									El servidor confirma la recepción del paquete del cliente (Ack = X+1) y envía su propio número de secuencia aleatorio (Seq = Y). Pasa al estado <strong class="text-indigo-400 font-mono">SYN_RCVD</strong>.
								</p>
							</div>

							<!-- Paso 03 -->
							<div class="flex flex-col justify-between gap-3 rounded-xl border border-slate-800/80 bg-[#121826]/80 p-5">
								<div class="flex flex-col gap-2">
									<div class="flex items-center justify-between font-mono text-[10px]">
										<span class="text-emerald-400 font-bold uppercase">PASO 03</span>
										<span class="text-slate-400">Cliente → Servidor</span>
									</div>
									<div class="flex flex-col">
										<span class="font-bold text-white text-sm">ACK (Confirmación)</span>
										<span class="font-mono text-[11px] text-emerald-300 mt-0.5">Bandera: ACK = 1 • Ack = Y+1</span>
									</div>
								</div>
								<p class="text-xs text-slate-300 leading-relaxed">
									El cliente confirma la recepción del número de secuencia del servidor. Ambos sockets alcanzan el estado <strong class="text-emerald-400 font-mono">ESTABLISHED</strong> y el flujo de datos queda inaugurado.
								</p>
							</div>
						</div>

						<!-- Info callout box -->
						<div class="rounded-xl border border-slate-800/80 bg-[#121826]/50 p-4">
							<p class="text-xs leading-relaxed text-slate-300">
								<span class="font-bold text-cyan-400">¿Por qué son necesarios exactamente 3 pasos y no 2?</span> Si bastaran 2 pasos, un paquete SYN duplicado o demorado en la red podría llegar al servidor después de cerrada una sesión previa, provocando que el servidor abriera una conexión fantasma y asignara memoria innecesariamente. El tercer acuse confirma que el cliente sigue activo y sincroniza inequívocamente ambas direcciones.
							</p>
						</div>
					</div>

					<!-- 3. El Modelo TCP/IP de 4 Capas -->
					<div class="flex flex-col gap-5 mt-6 pt-6 border-t border-slate-800/80">
						<div class="flex items-center justify-between">
							<span class="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase">
								MODELO DE CAPAS ESTANDARIZADO
							</span>
							<span class="font-mono text-xs text-slate-400">
								RFC 1122
							</span>
						</div>
						<div class="flex flex-col gap-2">
							<h4 class="text-2xl font-extrabold tracking-tight text-white">
								El Modelo TCP/IP de 4 Capas
							</h4>
							<p class="text-sm text-slate-300 leading-relaxed">
								El principio de diseño «End-to-End» (extremo a extremo) dicta que la inteligencia de la red reside en los dispositivos terminales, mientras que los routers intermedios simplemente transportan paquetes sin inspeccionar su contenido.
							</p>
						</div>

						<!-- 4 Layer Cards Grid -->
						<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
							<!-- L4 -->
							<div class="flex flex-col justify-between gap-4 rounded-xl border border-slate-800/80 bg-[#121826]/80 p-5">
								<div class="flex flex-col gap-3">
									<div class="flex items-center justify-between">
										<span class="rounded bg-cyan-950/80 px-2 py-0.5 font-mono text-[10px] font-semibold text-cyan-400 border border-cyan-800/40">L4</span>
										<span class="font-mono text-[10px] text-slate-400">HTTP</span>
									</div>
									<div class="flex flex-col gap-1">
										<span class="font-bold text-white text-base">Capa de Aplicación</span>
										<p class="text-xs text-slate-300 leading-relaxed">
											Define protocolos de red de alto nivel, serialización de datos y formatos procesados directamente por las aplicaciones del usuario.
										</p>
									</div>
								</div>
								<div class="pt-3 border-t border-slate-800/60">
									<p class="font-mono text-[11px] text-cyan-300 leading-relaxed">
										Traduce la interacción del usuario en protocolos estructurados.
									</p>
								</div>
							</div>

							<!-- L3 -->
							<div class="flex flex-col justify-between gap-4 rounded-xl border border-slate-800/80 bg-[#121826]/80 p-5">
								<div class="flex flex-col gap-3">
									<div class="flex items-center justify-between">
										<span class="rounded bg-indigo-950/80 px-2 py-0.5 font-mono text-[10px] font-semibold text-indigo-400 border border-indigo-800/40">L3</span>
										<span class="font-mono text-[10px] text-slate-400">TCP</span>
									</div>
									<div class="flex flex-col gap-1">
										<span class="font-bold text-white text-base">Capa de Transporte</span>
										<p class="text-xs text-slate-300 leading-relaxed">
											Gestiona los canales de comunicación entre equipos. TCP garantiza entrega ordenada y confiable mediante un handshake de 3 vías y control de flujo; UDP transmite datagramas de baja latencia sin conexión.
										</p>
									</div>
								</div>
								<div class="pt-3 border-t border-slate-800/60">
									<p class="font-mono text-[11px] text-indigo-300 leading-relaxed">
										El handshake SYN → SYN-ACK → ACK asegura la confiabilidad.
									</p>
								</div>
							</div>

							<!-- L2 -->
							<div class="flex flex-col justify-between gap-4 rounded-xl border border-slate-800/80 bg-[#121826]/80 p-5">
								<div class="flex flex-col gap-3">
									<div class="flex items-center justify-between">
										<span class="rounded bg-amber-950/80 px-2 py-0.5 font-mono text-[10px] font-semibold text-amber-400 border border-amber-800/40">L2</span>
										<span class="font-mono text-[10px] text-slate-400">IPv4</span>
									</div>
									<div class="flex flex-col gap-1">
										<span class="font-bold text-white text-base">Capa de Internet</span>
										<p class="text-xs text-slate-300 leading-relaxed">
											Administra el direccionamiento lógico y el enrutamiento de paquetes a través de redes independientes heterogéneas. Empaqueta los datos con cabeceras de origen y destino.
										</p>
									</div>
								</div>
								<div class="pt-3 border-t border-slate-800/60">
									<p class="font-mono text-[11px] text-amber-300 leading-relaxed">
										La conmutación de paquetes permite un enrutamiento dinámico y tolerante a fallos.
									</p>
								</div>
							</div>

							<!-- L1 -->
							<div class="flex flex-col justify-between gap-4 rounded-xl border border-slate-800/80 bg-[#121826]/80 p-5">
								<div class="flex flex-col gap-3">
									<div class="flex items-center justify-between">
										<span class="rounded bg-emerald-950/80 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-400 border border-emerald-800/40">L1</span>
										<span class="font-mono text-[10px] text-slate-400">Ethernet (802.3)</span>
									</div>
									<div class="flex flex-col gap-1">
										<span class="font-bold text-white text-base">Capa de Enlace / Interfaz de Red</span>
										<p class="text-xs text-slate-300 leading-relaxed">
											Controla el entramado físico de hardware, direccionamiento MAC y la transmisión de señales eléctricas u ópticas sobre cobre, fibra o radiofrecuencia.
										</p>
									</div>
								</div>
								<div class="pt-3 border-t border-slate-800/60">
									<p class="font-mono text-[11px] text-emerald-300 leading-relaxed">
										Transfiere tramas de bits puras entre nodos de red contiguos.
									</p>
								</div>
							</div>
						</div>
					</div>

				{:else if activeTab === 'dns'}
					<!-- 4 Summary Cards Grid matching DNS -->
					<div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
						<div class="flex flex-col gap-1.5 rounded-xl border border-slate-800/80 bg-[#121826]/70 p-4">
							<span class="font-bold text-cyan-400 text-sm">Caché Local</span>
							<span class="font-mono text-[11px] text-slate-400">Navegador & SO</span>
						</div>
						<div class="flex flex-col gap-1.5 rounded-xl border border-slate-800/80 bg-[#121826]/70 p-4">
							<span class="font-bold text-cyan-400 text-sm">Resolutor Anycast</span>
							<span class="font-mono text-[11px] text-slate-400">1.1.1.1 / 8.8.8.8</span>
						</div>
						<div class="flex flex-col gap-1.5 rounded-xl border border-slate-800/80 bg-[#121826]/70 p-4">
							<span class="font-bold text-cyan-400 text-sm">13 Grupos Raíz</span>
							<span class="font-mono text-[11px] text-slate-400">a.root-servers.net</span>
						</div>
						<div class="flex flex-col gap-1.5 rounded-xl border border-slate-800/80 bg-[#121826]/70 p-4">
							<span class="font-bold text-cyan-400 text-sm">Autoritativo</span>
							<span class="font-mono text-[11px] text-slate-400">Registros A/AAAA</span>
						</div>
					</div>

					<!-- DNS 7 Pasos Interactive Section Layout -->
					<div class="flex flex-col gap-5 mt-4 pt-4 border-t border-slate-800/85">
						<div class="flex items-center justify-between">
							<span class="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase">
								PASOS DE LA CONSULTA
							</span>
							<span class="font-mono text-xs text-slate-400">
								{activeDnsStep} de 7
							</span>
						</div>

						<div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
							<!-- Left Column: Step Selector List (1 to 7) -->
							<div class="lg:col-span-6 flex flex-col gap-2">
								{#each dnsSteps as s}
									<button
										onclick={() => activeDnsStep = s.step}
										class="group flex items-center justify-between rounded-xl border p-3.5 text-left transition-all cursor-pointer {activeDnsStep === s.step
											? 'border-cyan-400 bg-[#121c2e] shadow-md shadow-cyan-950/30'
											: 'border-slate-800/80 bg-[#101522]/70 hover:border-slate-700 hover:bg-[#121826]'}"
									>
										<div class="flex items-center gap-3">
											<div class="w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold {activeDnsStep === s.step ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-cyan-400 border border-slate-700'}">
												{s.step}
											</div>
											<div class="flex flex-col">
												<span class="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors">{s.title}</span>
												<span class="font-mono text-[11px] text-slate-400">{s.subtitle}</span>
											</div>
										</div>
										<Icon icon="lucide:chevron-right" class="text-slate-500 transition-transform group-hover:translate-x-0.5" width="16" />
									</button>
								{/each}
							</div>

							<!-- Right Column: Detailed Active Step Card + Nav Controls -->
							<div class="lg:col-span-6 flex flex-col gap-4">
								<div class="flex flex-col gap-4 rounded-xl border border-cyan-800/40 bg-[#121826]/90 p-6">
									<div class="flex items-center justify-between">
										<span class="font-mono text-xs font-semibold text-cyan-400 uppercase">
											PASO {activeDnsStep < 10 ? '0' + activeDnsStep : activeDnsStep} / 07
										</span>
										<span class="rounded bg-cyan-950/80 px-2 py-0.5 font-mono text-[10px] font-semibold text-cyan-400 border border-cyan-800/40">
											{currentDnsStepData.badge}
										</span>
									</div>

									<div class="flex flex-col gap-1">
										<span class="font-mono text-xs text-slate-400 uppercase">Actor: {currentDnsStepData.actor}</span>
										<h4 class="text-xl font-extrabold tracking-tight text-white">
											{currentDnsStepData.heading}
										</h4>
									</div>

									<p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
										{currentDnsStepData.description}
									</p>

									<!-- Mechanism Box -->
									<div class="rounded-lg border border-slate-800/80 bg-[#0B0F19]/80 p-4 flex flex-col gap-2">
										<span class="font-mono text-[10px] font-semibold tracking-wider text-cyan-400 uppercase">
											MECANISMO TÉCNICO INTERNO
										</span>
										<p class="text-xs text-slate-300 leading-relaxed">
											{currentDnsStepData.mechanism}
										</p>
									</div>

									<!-- Traffic footer info -->
									<div class="pt-2 border-t border-slate-800/60 font-mono text-[11px] text-amber-300">
										{currentDnsStepData.traffic}
									</div>
								</div>

								<!-- Bottom Navigation Controls & Counter -->
								<div class="flex items-center justify-between pt-2 px-1">
									<button 
										onclick={() => activeDnsStep = activeDnsStep > 1 ? activeDnsStep - 1 : 7}
										class="font-mono text-xs text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1.5"
									>
										<Icon icon="lucide:arrow-left" width="14" />
										<span>Paso anterior</span>
									</button>

									<span class="font-mono text-xs text-slate-500">{activeDnsStep} de 7</span>

									<button 
										onclick={() => activeDnsStep = activeDnsStep < 7 ? activeDnsStep + 1 : 1}
										class="font-mono text-xs text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer flex items-center gap-1.5 font-semibold"
									>
										<span>Paso siguiente</span>
										<Icon icon="lucide:arrow-right" width="14" />
									</button>
								</div>
							</div>
						</div>
					</div>

				{:else if activeTab === 'html'}
					<!-- 1. Standards Organizations Grid -->
					<div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
						{#each standardsOrgs as org}
							<div class="flex flex-col gap-2 rounded-xl border border-slate-800/80 bg-[#121826]/80 p-5">
								<span class="font-mono text-xs font-bold text-cyan-400 uppercase">{org.name}</span>
								<p class="text-xs text-slate-300 leading-relaxed">{org.desc}</p>
							</div>
						{/each}
					</div>

					<!-- 2. Evolución de HTML (1995 - Presente) -->
					<div class="flex flex-col gap-5 mt-6 pt-6 border-t border-slate-800/80">
						<div class="flex items-center justify-between">
							<span class="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase">
								MARCADO DECLARATIVO & ESTRUCTURA
							</span>
							<Icon icon="lucide:file-code" class="text-cyan-400" width="18" />
						</div>

						<h4 class="text-2xl font-extrabold tracking-tight text-white">
							Evolución de HTML (1995 – Presente)
						</h4>

						<!-- HTML Evolution Grid (2x3) -->
						<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
							{#each htmlTimeline as item}
								<div class="flex flex-col justify-between gap-4 rounded-xl border border-slate-800/80 bg-[#121826]/80 p-5 transition-all hover:border-slate-700">
									<div class="flex flex-col gap-3">
										<div class="flex items-center justify-between">
											<span class="font-bold text-cyan-400 text-base">{item.version}</span>
											<span class="font-mono text-xs text-slate-400">{item.year}</span>
										</div>
										<div class="flex flex-col gap-2">
											<span class="font-mono text-[10px] text-slate-500 uppercase">{item.author}</span>
											<p class="text-xs text-slate-300 leading-relaxed">
												{item.desc}
											</p>
										</div>
									</div>
									<div class="pt-3 border-t border-slate-800/60">
										<p class="text-xs text-slate-400 leading-relaxed">
											<strong class="text-slate-200 font-semibold">Impacto:</strong> {item.impact}
										</p>
									</div>
								</div>
							{/each}
						</div>
					</div>

					<!-- 3. Evolución de ECMAScript / JavaScript (TC39) -->
					<div class="flex flex-col gap-5 mt-6 pt-6 border-t border-slate-800/80">
						<div class="flex items-center justify-between">
							<span class="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase">
								LÓGICA DEL CLIENTE & TIEMPO DE EJECUCIÓN
							</span>
							<Icon icon="lucide:cpu" class="text-cyan-400" width="18" />
						</div>

						<h4 class="text-2xl font-extrabold tracking-tight text-white">
							Evolución de ECMAScript / JavaScript (TC39)
						</h4>

						<!-- ECMAScript Evolution Grid (2x3) -->
						<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
							{#each ecmascriptTimeline as item}
								<div class="flex flex-col justify-between gap-4 rounded-xl border border-slate-800/80 bg-[#121826]/80 p-5 transition-all hover:border-slate-700">
									<div class="flex flex-col gap-3">
										<div class="flex items-center justify-between">
											<span class="font-bold text-cyan-400 text-base">{item.version}</span>
											<span class="font-mono text-xs text-slate-400">{item.year}</span>
										</div>
										<div class="flex flex-col gap-2">
											<span class="font-mono text-[10px] text-slate-500 uppercase">{item.author}</span>
											<p class="text-xs text-slate-300 leading-relaxed">
												{item.desc}
											</p>
										</div>
									</div>
									<div class="pt-3 border-t border-slate-800/60">
										<p class="text-xs text-slate-400 leading-relaxed">
											<strong class="text-slate-200 font-semibold">Impacto:</strong> {item.impact}
										</p>
									</div>
								</div>
							{/each}
						</div>
					</div>

					<!-- 4. El Camino Crítico de Renderizado (Critical Rendering Path) -->
					<div class="flex flex-col gap-5 mt-6 pt-6 border-t border-slate-800/80">
						<div class="flex items-center justify-between">
							<span class="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase">
								DEL CÓDIGO FUENTE A LOS PÍXELES
							</span>
							<span class="font-mono text-xs text-slate-400">
								Blink / Gecko / WebKit
							</span>
						</div>

						<div class="flex flex-col gap-2">
							<h4 class="text-2xl font-extrabold tracking-tight text-white">
								El Camino Crítico de Renderizado (Critical Rendering Path)
							</h4>
						</div>

						<!-- 4 Steps Critical Rendering Grid -->
						<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
							{#each criticalRenderingPath as crp}
								<div class="flex flex-col gap-3 rounded-xl border border-slate-800/80 bg-[#121826]/80 p-5">
									<span class="font-mono text-xs font-bold text-cyan-400">{crp.step}. {crp.title}</span>
									<p class="text-xs text-slate-300 leading-relaxed">
										{crp.desc}
									</p>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			</main>
		</div>
	</div>
</div>