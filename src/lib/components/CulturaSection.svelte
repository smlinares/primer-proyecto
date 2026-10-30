<script lang="ts">
	import Icon from "@iconify/svelte";

	const popExhibits = [
		{
			id: "y2k",
			number: "01",
			title: "El Efecto 2000 & El Pánico del Milenio",
			shortName: "Efecto 2000 (Y2K)",
			tagline: "El bug de los dos dígitos que desató una histeria planetaria y transformó la ingeniería de sistemas",
			era: "1999 – 2000",
			badge: "HISTERIA GLOBAL & INFRAESTRUCTURA",
			badgeColor: "border-amber-500/40 text-amber-300 bg-amber-950/40",
			accentColor: "text-amber-400",
			image: "/y2k_panic_pc.jpg",
			summary: "A finales de los 90, la humanidad descubrió con espanto que la economía mundial dependía de sistemas informáticos construidos con fechas de dos dígitos (\"99\" en vez de \"1999\") para ahorrar preciados bytes en las memorias de cinta de los años 60 y 70. Lo que siguió fue una mezcla inolvidable de compras de pánico, búnkers suburbanos y la mayor auditoría preventiva de código de la historia humana.",
			historicalNarrative: [
				"Durante las décadas pioneras de la computación comercial, cuando 1 kilobyte de memoria magnética costaba cientos de dólares, programadores de mainframe truncaron los años a dos cifras (ej. \"74\" para 1974). Nadie anticipó que ese software de nóminas, banca y control logístico seguiría en producción al filo del año 2000, momento en que los relojes interpretarían \"00\" como el año 1900.",
				"A medida que se acercaba el cambio de siglo, los noticieros internacionales desataron una histeria sin precedentes: vaticinaban aviones comerciales perdiendo navegación satelital, bóvedas bancarias bloqueadas con intereses negativos de 100 años, reactores nucleares desincronizados y cortes masivos de redes eléctricas.",
				"El temor provocó compras compulsivas de comida deshidratada, garrafas de agua, generadores a gasolina y oro físico. En los bastidores, corporaciones y gobiernos desembolsaron más de $300,000 millones de dólares para reclutar de urgencia a veteranos programadores de COBOL y Fortran que auditaron línea por línea millones de archivos de software crítico en 120 países.",
				"Cuando el reloj marcó las 00:00:00 del 1 de enero de 2000 en Kiribati y sucesivamente en el resto del planeta, los sistemas continuaron operando con absoluta normalidad. No fue una exageración ni un engaño mediático: fue el triunfo silencioso de una movilización tecnológica colosal que sentó las bases de la resiliencia en la computación moderna."
			],
			iconicArtifacts: [
				{ name: "Disquete de Emergencia BIOS", category: "Software", desc: "Disquete magnético de 3.5 pulgadas con actualización de firmware para placas madre con chipsets antiguos." },
				{ name: "Manual de Supervivencia Y2K", category: "Editorial", desc: "Guías impresas de bolsillo vendidas por millones sobre cómo purificar agua y preservar alimentos." },
				{ name: "Generador a Gasolina Suburbano", category: "Hardware", desc: "Aparatos de combustión comprados en ferreterías temiendo colapsos prolongados en las redes eléctricas." },
				{ name: "Baterías y Linternas Milenio", category: "Hogar", desc: "Paquetes de pilas alcalinas D y C que se agotaron en los supermercados en noviembre de 1999." }
			],
			legacyTakeaway: {
				title: "Legado en la Ingeniería Contemporánea",
				impact: "El Efecto 2000 creó la disciplina moderna de gestión del riesgo informático, la auditoría continua de dependencias (DevSecOps), la redundancia multi-región y las estrategias de Disaster Recovery que hoy sostienen las plataformas en la nube."
			}
		},
		{
			id: "lan_party",
			number: "02",
			title: "La Fiebre de los Cybercafés & LAN Parties",
			shortName: "Cybercafés & LAN Parties",
			tagline: "Las catedrales nocturnas de la juventud conectada antes de la banda ancha doméstica",
			era: "1995 – 2003",
			badge: "MULTIJUGADOR & PLAZA PÚBLICA",
			badgeColor: "border-cyan-500/40 text-cyan-300 bg-cyan-950/40",
			accentColor: "text-cyan-400",
			image: "/lan_party_era.jpg",
			summary: "Antes de que la fibra óptica llegara a los hogares, conectarse a internet era costoso y solitario. Los cibercafés y las fiestas LAN se convirtieron en plazas públicas donde miles de jóvenes cargaban torres de acero y monitores CRT de 25 kilos en el maletero para tirar cables Ethernet cruzados, compartir archivos y competir toda la noche.",
			historicalNarrative: [
				"En la era del módem telefónico dial-up —con cobro por minuto medido y latencias intolerables de 300 milisegundos— jugar videojuegos de disparos o estrategia en tiempo real desde casa era frustrante. Los locales de cybercafé y las reuniones LAN ofrecían una revelación: conexión Ethernet local a 100 Mbps con latencias casi instantáneas de 5 milisegundos.",
				"Aquellas salas poco ventiladas e iluminadas por el brillo azul de los monitores fueron las incubadoras donde nació el fenómeno mundial de los esports. Títulos como Counter-Strike (desde las betas hasta la versión 1.6), StarCraft: Brood War, Quake III Arena y Age of Empires II crearon una cultura de camaradería física y competencia sin precedentes.",
				"Pero el cybercafé trascendió el videojuego: era el centro cívico digital de la época. Para estudiantes y profesionales sin PC en casa, era el único lugar con ancho de banda suficiente para imprimir tareas, chatear con familiares lejanos en mIRC o ICQ, y explorar carpetas compartidas de red de Windows repletas de música MP3 y videos en formato DivX.",
				"Las \"amanecidas\" de fin de semana —con promociones de 6 u 8 horas continúas por una tarifa plana— combinaban cafeína, pizzas frías y discos duros compartidos en un ritual colectivo irrepetible que definió la socialización previa a las redes sociales."
			],
			iconicArtifacts: [
				{ name: "Mouse de Bola Mecánica", category: "Periférico", desc: "Dispositivo que requería desenroscar periódicamente el anillo para raspar la mugre acumulada en los rodillos metálicos." },
				{ name: "Switch Ethernet 10/100", category: "Redes", desc: "Cajas metálicas con hileras de LEDs verdes que titilaban frenéticamente con el tráfico broadcast de la red local." },
				{ name: "Tarjeta 3dfx Voodoo2 / GeForce 256", category: "Hardware", desc: "Aceleradoras gráficas 3D que permitían ejecutar juegos en Glide y OpenGL con texturas filtradas y niebla volumétrica." },
				{ name: "Bobina de Cable UTP & Crimpadora", category: "Herramienta", desc: "Cables hechos a medida en el suelo de la habitación usando conectores RJ45 y esquemas de conexión T568B." }
			],
			legacyTakeaway: {
				title: "Legado en la Cultura Gamer y Comunidades",
				impact: "Las LAN parties sentaron las bases estructurales de los torneos profesionales de videojuegos (IEM, Major, The International), las plataformas de streaming en vivo como Twitch, y la arquitectura de servidores comunitarios que hoy emula Discord."
			}
		},
		{
			id: "msn_messenger",
			number: "03",
			title: "MSN Messenger, Zumbidos y la Identidad Digital",
			shortName: "MSN Messenger & Zumbidos",
			tagline: "El ritual diario después de clases y la invención del lenguaje social en tiempo real",
			era: "1999 – 2006",
			badge: "RED SOCIAL GENERACIONAL",
			badgeColor: "border-emerald-500/40 text-emerald-300 bg-emerald-950/40",
			accentColor: "text-emerald-400",
			image: "/msn_chat_era.jpg",
			summary: "Llegar de la escuela o el trabajo, encender la PC familiar y escuchar el dulce \"tururú\" de inicio de sesión de MSN Messenger fue el gran ritual social entre 1999 y 2006. Allí nació una compleja semiótica de emoticones animados, estados de ánimo poéticos y zumbidos desesperados que definió la primera identidad digital masiva.",
			historicalNarrative: [
				"MSN Messenger inauguró el concepto de \"presencia digital ambiental\". Por primera vez en la historia, no era necesario enviar un correo formal ni llamar por teléfono: sabías exactamente quién estaba disponible, quién estaba ocupado o quién fingía estar ausente simplemente mirando la lista de contactos.",
				"Los usuarios transformaron el campo del \"Nombre de pantalla\" (Nick) en un lienzo de expresión personal: se decoraban con intrincadas combinaciones de caracteres ASCII (`★·.·´¯`·.·★`), tipografías personalizadas y fragmentos líricos de Blink-182, Linkin Park, Evanescence o Green Day cargados de indirectas románticas o emocionales.",
				"La función \"¿Qué estoy escuchando?\", que se integraba automáticamente con Windows Media Player y Winamp, proyectaba los gustos musicales para impresionar al círculo de amistades en tiempo real.",
				"Y cuando una conversación se enfriaba o alguien tardaba en responder, existía el botón más polémico de la década: el \"Zumbido\" (Nudge), una función que sacudía violentamente la ventana del receptor con un efecto de sonido seco y vibración forzada, complementado con el truco clásico de cambiar repetidamente entre \"Desconectado\" y \"Conectado\" para forzar la aparición de la notificación azul en la pantalla de la persona deseada."
			],
			iconicArtifacts: [
				{ name: "Nokia 3310 con Carátula Xpress-on", category: "Móvil", desc: "Teléfono celular indestructible que reposaba junto al teclado para coordinar cuándo conectarse a la PC." },
				{ name: "Lámpara de Lava Neón", category: "Ambiente", desc: "Iluminación retrofuturista obligatoria en los dormitorios juveniles de la época." },
				{ name: "Webcam USB Circular (320x240)", category: "Periférico", desc: "Primeras cámaras web montadas sobre un clip en el monitor que transmitían video granulado a 15 fps." },
				{ name: "Packs de Letras MSN Plus!", category: "Software", desc: "Complemento de terceros que permitía textos con degradados de colores y comandos avanzados de chat." }
			],
			legacyTakeaway: {
				title: "Legado en la Comunicación Móvil",
				impact: "Los hábitos forjados en MSN Messenger migraron directamente a WhatsApp, Telegram, Instagram Stories y Slack: los indicadores de \"Escribiendo...\", los estados de disponibilidad, los emojis personalizados y la noción de conversación permanente en segundo plano."
			}
		},
		{
			id: "winamp_mp3",
			number: "04",
			title: "Winamp, la Fiebre MP3 & la Quema de CD-Rs",
			shortName: "Winamp & Quema de CD-Rs",
			tagline: "Cuando cada megabyte contaba y compilar 80 minutos de audio virgen era una obra de arte",
			era: "1997 – 2003",
			badge: "MÚSICA LIBRE & HARDWARE",
			badgeColor: "border-purple-500/40 text-purple-300 bg-purple-950/40",
			accentColor: "text-purple-400",
			image: "/winamp_burning_mp3.jpg",
			summary: "Antes de Spotify y del streaming infinito por suscripción, la música digital era un tesoro conquistado archivo por archivo. Winamp gobernaba las pantallas con sus ecualizadores neón y skins personalizables, mientras el software de grabación permitía crear el artefacto físico definitivo de la época: el CD-R grabado a mano con marcador indeleble.",
			historicalNarrative: [
				"La creación del algoritmo de compresión MPEG-1 Audio Layer III por el Instituto Fraunhofer redujo el tamaño de las pistas de audio de 50 megabytes a escasos 3 o 4 megabytes manteniendo una fidelidad acústica admirable. Para una generación habituada a los casetes de cinta magnética, esto representó una revolución tecnológica descomunal.",
				"Lanzado en 1997 por Justin Frankel y Dmitry Boldyrev (Nullsoft), Winamp se convirtió en el reproductor definitivo: consumía mínimos recursos de procesador, arrancaba al instante y presentaba una interfaz modular con ecualizador gráfico de 10 bandas, visualizaciones psicodélicas (MilkDrop) y una arquitectura abierta de \"skins\" que inspiró más de 30,000 diseños comunitarios.",
				"En paralelo, las redes P2P pioneras (Napster, Soulseek, Kazaa, eMule) permitían armar discografías completas tras semanas enteras de descargas a 4 KB/s. Todo desembocaba en el sagrado ritual del fin de semana: abrir Nero Burning ROM o Easy CD Creator, calcular cuidadosamente no rebasar los 700 MB u 80 minutos de capacidad, rogar para que la grabadora no sufriera un fatídico error de \"Buffer Underrun\" que convirtiera el disco en posavasos inservible, y quemar el CD a velocidad 2x o 4x.",
				"El disco se coronaba con una caligrafía meticulosa usando un marcador permanente Sharpie en la cara plateada para escucharlo luego en el Discman portátil dotado de sistema antichoque electrónico (ESP)."
			],
			iconicArtifacts: [
				{ name: "Bobina de CD-Rs Vírgenes (50 unidades)", category: "Soporte", desc: "Torre plástica cilíndrica de discos Memorex, Imation o Verbatim con tintes cianina plateados o dorados." },
				{ name: "Marcador Indeleble Sharpie Negro", category: "Herramienta", desc: "El instrumento oficial para titular a mano las canciones, fecha y remitente sobre el lomo del CD." },
				{ name: "Discman Portátil con Anti-Shock ESP", category: "Reproductor", desc: "Aparato que almacenaba 10 o 45 segundos en memoria intermedia para evitar que el láser saltara al caminar." },
				{ name: "Estuche Archivador con Cremallera", category: "Accesorio", desc: "Maletín acolchado de tela con fundas de plástico transparente para transportar 64, 96 o 128 discos en la mochila." }
			],
			legacyTakeaway: {
				title: "Legado en la Cultura y la Música Digital",
				impact: "El fenómeno de Winamp y los CD-Rs inventó el concepto de \"playlist\" curada por el propio usuario, impulsó la estandarización de metadatos ID3 (título, artista, año, carátula) y forzó la transición inevitable de las discográficas hacia la venta y transmisión digital."
			}
		},
		{
			id: "aol_dialup",
			number: "05",
			title: "El Asedio de CDs de AOL & La Sinfonía del Módem 56k",
			shortName: "Módem 56k & Diluvio AOL",
			tagline: "El chillido analógico de conexión y los millones de discos de prueba que tapizaron el mundo",
			era: "1993 – 2001",
			badge: "ACCESO DIAL-UP & TELEFONÍA",
			badgeColor: "border-rose-500/40 text-rose-300 bg-rose-950/40",
			accentColor: "text-rose-400",
			image: "/dialup_geocities_era.jpg",
			summary: "Conectarse a internet en los 90 era un evento físico ruidoso e inconfundible. El módem entonaba su sonata de tonos analógicos y estática sobre el par de cobre, mientras America Online ejecutaba la campaña de marketing directo más agresiva de la historia enviando latas y CDs gratis a prácticamente cada hogar del planeta.",
			historicalNarrative: [
				"El ritual de conexión de un módem dial-up de 33.6k o 56k —los tonos de marcado DTMF, el timbre de llamada lejana, el chillido agudo de respuesta y la tormenta de estática blanca del \"handshake\"— era la comprobación auditiva de que dos computadoras negociaban los límites físicos del ancho de banda sobre cables telefónicos pensados para la voz humana.",
				"La fragilidad de la conexión era legendaria: si alguien levantaba el auricular en otra habitación de la casa o entraba una llamada fija, la sesión se interrumpía instantáneamente con un chasquido. Gestores de descarga como GetRight y Go!Zilla se volvieron herramientas esenciales para evitar perder archivos descargados al 99%.",
				"Para que la población general se atreviera a entrar al ciberespacio, AOL orquestó una estrategia sin parangón: produjo y distribuyó más de mil millones de discos compactos y disquetes con \"500 horas de internet gratis\" o \"1000 horas gratis\". Llegaban dentro de revistas de tecnología, cajas de cereal, periódicos, vuelos comerciales y buzones postales.",
				"En 1998, se estima que AOL absorbió cerca del 50% de la capacidad de fabricación mundial de discos compactos. La frase sintetizada \"¡You've got mail!\" (\"Tienes un e-mail\"), grabada por Elwood Edwards, se convirtió en el saludo más emblemático de la cultura pop de finales del siglo XX."
			],
			iconicArtifacts: [
				{ name: "Módem US Robotics Sportster 56k", category: "Hardware", desc: "La icónica caja externa beige con sus LEDs frontales indicadores (CS, RS, CD, RD, SD, TR, MR)." },
				{ name: "Lata Metálica Coleccionable AOL", category: "Marketing", desc: "Estuches de aluminio cilíndricos con software de prueba que la gente reutilizaba para guardar tornillos o lápices." },
				{ name: "Microfiltro Telefónico RJ11", category: "Accesorio", desc: "Pequeño dispositivo plástico que separaba las frecuencias de voz del módem para mitigar interferencias." },
				{ name: "Cable Telefónico Espiralado Beige", category: "Conexión", desc: "Cables largos que cruzaban pasillos enteros desde la roseta telefónica principal hasta el ordenador." }
			],
			legacyTakeaway: {
				title: "Legado en la Adopción Masiva de Internet",
				impact: "La agresiva evangelización de AOL democratizó el acceso a la red para millones de personas que nunca habían usado una computadora, acelerando la inversión en tendidos de fibra óptica y redes DSL que sustituyeron definitivamente al cobre telefónico."
			}
		},
		{
			id: "geocities",
			number: "06",
			title: "GeoCities, Páginas Personales & El Folclor Web 1.0",
			shortName: "GeoCities & Folclor Web",
			tagline: "Cuando los internautas construían su propio rincón con GIFs de obreros, música MIDI y marquesinas",
			era: "1994 – 2004",
			badge: "ARQUITECTURA POPULAR & ARTESANÍA",
			badgeColor: "border-indigo-500/40 text-indigo-300 bg-indigo-950/40",
			accentColor: "text-indigo-400",
			image: "/retro-setup.jpg",
			summary: "Antes de los feeds homogeneizados y las redes sociales algorítmicas, internet era un vasto archipiélago de páginas artesanales. GeoCities organizó el ciberespacio en barrios temáticos donde millones de usuarios comunes aprendieron HTML autodidacta para levantar santuarios personales sin perseguir métricas corporativas.",
			historicalNarrative: [
				"Fundado en 1994 por David Bohnett y John Rezner, GeoCities democratizó el hospedaje web ofreciendo entre 1 y 2 megabytes de espacio gratuito estructurado como vecindarios temáticos: \"SiliconValley\" para informática, \"Area51\" para ciencia ficción y conspiraciones, \"Soho\" para artes visuales, \"Colosseum\" para deportes y \"Heartland\" para familias.",
				"Sin plantillas prediseñadas ni directrices de diseño corporativo, los usuarios inventaron un lenguaje visual espontáneo, caótico y lleno de vida: fondos estrellados repetidos en mosaico, tipografía Comic Sans en colores fluorescentes, texto titilante en etiquetas obsoletas como `<blink>` y `<marquee>`, e íconos animados de obreros cavando con la advertencia \"Página en Construcción\".",
				"Las páginas incorporaban archivos de música MIDI que sonaban automáticamente al cargar, barras separadoras de lava ardiente y el artefacto social por excelencia: el \"Contador de Visitas\" de dígitos mecánicos de WebCounter, seguido por un Libro de Visitas (Guestbook) donde navegantes desconocidos de cualquier rincón del mundo dejaban comentarios cariñosos.",
				"GeoCities demostró que internet no era solo una biblioteca militar o académica, sino un territorio popular habitado por personas comunes que deseaban compartir sus pasiones sin intermediarios comerciales."
			],
			iconicArtifacts: [
				{ name: "GIF Obrero \"Página en Construcción\"", category: "Gráfico", desc: "La animación universal que justificaba secciones vacías o enlaces que no conducían a ninguna parte." },
				{ name: "Contador de Visitas CGI Analógico", category: "Script", desc: "Mecanismo de rodillos numéricos que computaba cada recarga de página como una victoria de audiencia." },
				{ name: "Archivo Musical de Fondo .MID", category: "Audio", desc: "Arreglos instrumentales sintetizados de 15 kilobytes que reproducían éxitos pop de fondo en bucle infinito." },
				{ name: "Insignia \"Best Viewed With Netscape\"", category: "Distintivo", desc: "Botón de 88x31 píxeles que certificaba que la página utilizaba extensiones propietarias del navegador." }
			],
			legacyTakeaway: {
				title: "Legado en la Web Autogestionada (IndieWeb)",
				impact: "GeoCities fue el precursor directo de MySpace, Tumblr, Neocities y el movimiento contemporáneo de la IndieWeb: la convicción de que los usuarios deben poseer su propio espacio digital personal y experimentar visualmente sin someterse a algoritmos de monetización."
			}
		}
	];

	// Pillars Data (Pilares Técnicos)
	const pillarsData = [
		{
			id: "chat",
			title: "IRC & Mensajería Instantánea",
			shortName: "Presencia & Chat",
			period: "1988 – 1999",
			badge: "COMUNICACIÓN EN TIEMPO REAL",
			summary: "Antes de los algoritmos y redes centralizadas, la conexión humana ocurrió en protocolos abiertos. En 1988, Jarkko Oikarinen creó IRC con canales temáticos (#canal) y transferencias DCC. Hacia finales de los 90, el sonido \"Uh-oh!\" de ICQ y los mensajes de ausencia de AIM definieron la primera identidad virtual y la presencia digital ambiental.",
			pullQuote: "«Los mensajes de ausencia de AIM transformaron la computadora de un cálculo estático a una ventana ambiental hacia la conciencia humana.»",
			stats: [
				{ label: "Canales Temáticos", value: "#IRC 1988" },
				{ label: "Identificador Único", value: "UIN ICQ 1996" },
				{ label: "Usuarios Pico", value: "+195M en AIM" }
			],
			milestones: [
				{ year: "1988", name: "IRC (Jarkko Oikarinen)", desc: "Protocolo cliente-servidor con canales públicos y transferencias directas DCC." },
				{ year: "1993", name: "Septiembre Eterno", desc: "AOL abre Usenet a usuarios comerciales, transformando las normas de netiqueta." },
				{ year: "1996", name: "Mirabilis lanza ICQ", desc: "Asignación de UIN numérico y estados de presencia (online, away, invisible)." },
				{ year: "1997", name: "AOL Instant Messenger", desc: "Buddy Lists, sonido de puerta de enlace y mensajes de ausencia personalizados." }
			]
		},
		{
			id: "blogs",
			title: "Web Personal & Diarios Abiertos",
			shortName: "Blogs & GeoCities",
			period: "1994 – 1999",
			badge: "DEMOCRATIZACIÓN EDITORIAL",
			summary: "Justin Hall inauguró los diarios personales en Links.net (1994) subiendo código HTML por FTP. En 1997 Jorn Barger acuñó \"weblog\", y en octubre de 1998 Open Diary inventó la caja de comentarios, convirtiendo monólogos solitarios en las primeras comunidades dialógicas globales sin barreras editoriales.",
			pullQuote: "«Con la invención de los comentarios en Open Diary, la lectura en línea dejó de ser consumo pasivo para convertirse en diálogo colectivo.»",
			stats: [
				{ label: "Pionero Web", value: "Links.net 1994" },
				{ label: "Término Weblog", value: "Jorn Barger 1997" },
				{ label: "Comentarios", value: "Open Diary 1998" }
			],
			milestones: [
				{ year: "1994", name: "Links.net (Justin Hall)", desc: "Primer diario personal en línea escrito a mano en HTML y subido vía FTP." },
				{ year: "1997", name: "Término «Weblog»", desc: "Jorn Barger describe en Robot Wisdom el hábito de \"registrar la web\"." },
				{ year: "1998", name: "Open Diary & Feedback", desc: "Primera plataforma con comentarios interactivos al pie de cada entrada." },
				{ year: "1999", name: "Blogger & LiveJournal", desc: "Formularios web que permitieron publicar sin necesidad de saber programar código." }
			]
		},
		{
			id: "p2p",
			title: "La Cultura MP3 & Redes P2P",
			shortName: "MP3 & Redes P2P",
			period: "1993 – 2001",
			badge: "DESCENTRALIZACIÓN DISTRIBUIDA",
			summary: "La compresión MP3 redujo pistas de CD de 50MB a 4MB con fidelidad casi idéntica. En junio de 1999, Shawn Fanning (19 años) lanzó Napster, conectando millones de discos duros directamente entre sí y demostrando que la verdadera fortaleza del internet reside en los bordes descentralizados y no en grandes servidores centrales.",
			pullQuote: "«Napster demostró que los nodos interconectados albergan más capacidad de cómputo y memoria que cualquier servidor corporativo centralizado.»",
			stats: [
				{ label: "Compresión MP3", value: "11:1 Fraunhofer" },
				{ label: "Crecimiento Napster", value: "60M usuarios en 1 año" },
				{ label: "Enjambres P2P", value: "BitTorrent 2001" }
			],
			milestones: [
				{ year: "1993", name: "IUMA (Música Libre)", desc: "Estudiantes de UCSC crean el primer archivo en línea de música independiente." },
				{ year: "1999", name: "Napster (Shawn Fanning)", desc: "Directorio híbrido con transferencias descentralizadas entre clientes pares." },
				{ year: "2000", name: "Protocolo Gnutella", desc: "Búsquedas distribuidas sin servidores centrales, inmunes al cierre legal." },
				{ year: "2001", name: "BitTorrent (Bram Cohen)", desc: "Descarga simultánea desde múltiples fuentes dividiendo archivos en fragmentos." }
			]
		},
		{
			id: "flash",
			title: "La Era Vectorial de Flash",
			shortName: "Animación Flash & Virales",
			period: "1996 – 2004",
			badge: "MULTIMEDIA A 60 FPS",
			summary: "Antes de HTML5 y la banda ancha, el video tradicional saturaba las líneas telefónicas a 56k. Macromedia Flash resolvió el enigma comprimiendo escenas en fórmulas matemáticas vectoriales de cientos de kilobytes. Newgrounds y Homestar Runner crearon el primer humor viral interactivo y una economía creativa independiente.",
			pullQuote: "«Los vectores matemáticos de Flash permitieron dibujos a 60fps sobre un módem telefónico, democratizando los estudios de animación.»",
			stats: [
				{ label: "Tasa de Cuadros", value: "60 FPS fluido" },
				{ label: "Comunidad Creadora", value: "Newgrounds 1995" },
				{ label: "Peso Episodio", value: "<500 KB en dial-up" }
			],
			milestones: [
				{ year: "1995", name: "Newgrounds (Tom Fulp)", desc: "El primer portal de videojuegos y animaciones subidas por creadores independientes." },
				{ year: "1996", name: "Macromedia Flash 1.0", desc: "Adquisición de FutureSplash y despliegue masivo del reproductor SWF." },
				{ year: "1999", name: "Homestar Runner", desc: "La serie de los Brothers Chaps populariza la tira semanal Strong Bad Email." },
				{ year: "2004", name: "Madurez de ActionScript 2", desc: "De simples animaciones a videojuegos complejos y aplicaciones web interactivas." }
			]
		}
	];

	// Essays Data
	const essaysData = [
		{
			id: "usenet-to-aim",
			category: "Redes de Comunicación",
			readTime: "6 min de lectura",
			date: "Ensayo Archival · Oct 1998 / Presente",
			title: "De Usenet a AIM: Cómo los Primeros Protocolos de Chat Definieron la Presencia Digital",
			excerpt: "Antes de que emergieran las redes sociales centralizadas y los algoritmos, las comunidades digitales se forjaron sobre protocolos abiertos. Este ensayo examina la transición desde los grupos de noticias de Usenet hasta los indicadores de presencia en tiempo real de AOL Instant Messenger.",
			relatedTags: ["Usenet", "IRC", "ICQ", "AIM", "Mensajería Instantánea", "Septiembre Eterno"],
			fullContent: [
				"Antes de que las redes sociales centralizadas y los canales algorítmicos dictaran la vida digital, la conexión humana a través de redes informáticas se desarrolló sobre protocolos abiertos basados estrictamente en texto. Desarrollado en 1979 por Jim Ellis y Tom Truscott en la Universidad de Duke, Usenet funcionó como un sistema de discusión global distribuido, subdividido en grupos de noticias temáticos (como comp.lang.c o alt.folklore.computers).",
				"Históricamente, la cultura de Usenet fue preservada por usuarios académicos que transmitían la netiqueta establecida cada otoño con el ingreso de nuevas camadas de estudiantes universitarios a las terminales. Sin embargo, en septiembre de 1993, America Online (AOL) abrió el acceso directo a Usenet a toda su base masiva de usuarios comerciales. Esta afluencia repentina transformó irreversiblemente las normas comunitarias existentes, llevando a los veteranos de la red a acuñar el término 'Septiembre Eterno' (Eternal September)—la certeza de que la llegada de nuevos navegantes jamás se detendría.",
				"De forma paralela, creado por Jarkko Oikarinen en Finlandia en 1988, Internet Relay Chat (IRC) estableció la comunicación sincrónica multiusuario en tiempo real a través de redes cliente-servidor interconectadas. Organizado en canales precedidos por almohadillas (#canal), el IRC habilitó conversaciones instantáneas de texto, transferencias directas de archivos entre pares mediante protocolos DCC (Direct Client-to-Client) y automatización programática mediante bots.",
				"Hacia finales de la década de 1990 surgió el auge de los clientes comerciales de mensajería instantánea. La empresa israelí Mirabilis lanzó ICQ en noviembre de 1996, asignando a cada usuario un número de identificación numérico único (UIN) y creando indicadores centralizados de presencia: en línea, desconectado, ausente o invisible.",
				"AOL respondió en mayo de 1997 con AOL Instant Messenger (AIM). AIM popularizó la 'Buddy List' (lista de amigos), tipografías personalizables con colores vibrantes, efectos de sonido (el icónico crujido de puerta al iniciar o cerrar sesión) y los mensajes de ausencia. Estos mensajes se convirtieron en un medio prematuro de autoexpresión poética, letras de canciones y estados emocionales ambientales—anticipando los estados de perfil y biografías que más tarde definirían a redes contemporáneas como Twitter e Instagram.",
				"En su cúspide, AIM superó los 195 millones de usuarios registrados. Junto con la expansión global de MSN Messenger en 1999 integrado a Windows, estos clientes pioneros demostraron que la presencia—la conciencia de quién está conectado y disponible en este preciso instante—constituía la auténtica revolución de la computación interconectada."
			]
		},
		{
			id: "personal-publishing",
			category: "Publicación Personal",
			readTime: "7 min de lectura",
			date: "Ensayo Archival · May 1999 / Presente",
			title: "La Evolución de la Publicación Personal: De Diarios en Línea a Blogs",
			excerpt: "Este ensayo analiza el tránsito desde las páginas personales en crudo como Links.net de Justin Hall hasta herramientas de plataforma pioneras como Open Diary, LiveJournal y Blogger. Destaca cómo la incorporación de comentarios transformó los diarios privados en comunidades interactivas.",
			relatedTags: ["Links.net", "Weblog", "Open Diary", "LiveJournal", "Blogger", "GeoCities"],
			fullContent: [
				"El blog moderno evolucionó a partir de los diarios personales en línea mantenidos por los primeros exploradores de la web, quienes escribían código HTML a mano y subían sus archivos mediante comandos FTP. El estudiante de Swarthmore College, Justin Hall, es ampliamente reconocido como uno de los primeros blogueros; en agosto de 1994 lanzó Links.net, publicando reflexiones íntimas, reseñas y enlaces a rincones curiosos del ciberespacio.",
				"La terminología misma mutó rápidamente. En diciembre de 1997, Jorn Barger acuñó el término 'weblog' en su influyente sitio Robot Wisdom, describiendo su proceso de registrar y 'anotar la web' (logging the web) a medida que navegaba. En la primavera de 1999, el programador Peter Merholz dividió lúdicamente la palabra en 'we blog' en la barra lateral de su sitio Peterme.com, lo que pronto se consolidó en el sustantivo y verbo universal: 'blog'.",
				"Fundamentalmente, los primeros blogs eran diarios unidireccionales hasta octubre de 1998, cuando Bruce Ableson presentó Open Diary. Open Diary introdujo una innovación estructural decisiva: la sección de comentarios para lectores. Por primera vez, los visitantes podían responder directamente al pie de las entradas, transformando los soliloquios aislados en auténticos foros comunitarios participativos.",
				"El año 1999 desató el auge de las plataformas especializadas. Brad Fitzpatrick programó LiveJournal para mantenerse comunicado con sus compañeros de escuela, incorporando temas CSS personalizables, hilos de amigos y etiquetas de estado de ánimo. Simultáneamente, Pyra Labs (fundada por Evan Williams y Meg Hourihan) lanzó Blogger en agosto de 1999, abstrayendo toda la complejidad técnica y el marcado HTML detrás de un sencillo formulario web.",
				"Junto con las comunidades temáticas de Xanga y los vecindarios virtuales de GeoCities (SiliconValley, Hollywood, Area51), la publicación personal alcanzó la democratización total. Hacia mediados de la década de 2000, esta cultura individual de bitácoras escaló hacia medios digitales profesionales como Gizmodo, Gawker y TechCrunch, probando que los ciudadanos en red podían competir e incluso superar a los conglomerados editoriales tradicionales."
			]
		}
	];

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