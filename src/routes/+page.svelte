<script>
    import Icon from "@iconify/svelte";

</script>
<div
    id="hero-body"
    class="bg-[#0C0716] px-24 py-12 text-white flex gap-10 items-center"
>
    <div id="hero-content" class="justify-center flex-1 items-center text-base">
        <h1 id="welcome-text" class="font-bold text-white text-2xl font-title">
            Un recorrido por la Web
        </h1>
        <p id="welcome-paragraph" class="text-gray-400 py-4 text-justify">
            Desde el primer servidor en el CERN y la guerra de los navegadores,
            hasta los protocolos descentralizados y la evolución cultural que
            transformó la sociedad moderna. Bienvenido a Netizen, un sitio web
            dedicado a explorar la historia de la Web y su impacto en la
            sociedad. A través de este recorrido, descubrirás cómo la Web ha
            evolucionado desde sus inicios hasta convertirse en una herramienta
            fundamental en nuestras vidas.
        </p>
    </div>

    <div id="hero-image" class=" flex-1">
        <img id="welcome-image" src="\retro-setup.jpg" alt="" class="" />
    </div>
</div>

<div id="history-section" class="bg-[#0C0716] px-24 py-12 text-white">
    <h2 id="history-title" class="font-bold text-white text-2xl font-title">
        Historia
    </h2>

    <div id="parentview-2" class="flex">
        <!-- Filter buttons container -->
        <div
            id="filter-container"
            class="flex flex-col flex-1 items-start justify-start gap-4 py-6"
        >
            <div class="flex items-center gap-2">
                <Icon icon="mdi:web" width="24" height="24" />
                <button id="filter-button-1" class="max-w-xl p-5 bg-[#10091E] border border-[#231b33] rounded-xl">Web 1.0</button>
            </div>

            <div class="flex items-center gap-2">
                <Icon icon="mdi:contact" width="24" height="24" />
                <button id="filter-button-2" class="max-w-xl p-5 bg-[#10091E] border border-[#231b33] rounded-xl">Web 2.0</button>
            </div>

            <button id="filter-button-3" class="max-w-xl p-5 bg-[#10091E] border border-[#231b33] rounded-xl">Web 3.0</button>
        </div>

        <!-- Content container -->
        <div id="content-container" class="flex flex-col flex-3">
            <div id="title-description">
                <h1 id="title">
                    Web 1.0: La Web de la Información y Solo Lectura
                </h1>
                <span id="description"
                    >Difusión estática de documentos hipervinculados y presencia
                    digital básica</span
                >
            </div>

            <div id="content-cards">
                <div>
                    <h2>Arquitectura Técnica</h2>
                    <p>
                        Servidores web estáticos (Apache, NGINX), archivos HTML
                        planos, hojas de estilo CSS1/2 incipientes y scripts
                        CGI/Perl en el servidor
                    </p>
                </div>

                <div>
                    <h2>Rol del Usuario</h2>
                    <p>
                        Consumidor pasivo: los internautas leían páginas creadas
                        por administradores («webmasters») y corporaciones
                    </p>
                </div>

                <div>
                    <h2>Identidad y Acceso</h2>
                    <p>
                        Sin autenticación transversal; cuentas aisladas por
                        servidor de correo POP3 o foros locales (BBS/Usenet)
                    </p>
                </div>

                <div>
                    <h2>Monetización y Silos</h2>
                    <p>
                        Banners publicitarios estáticos, directorios pagados y
                        suscripciones a proveedores de acceso (ISP)
                    </p>
                </div>
            </div>

            <div id="lower-content">
                <span>Plataformas Históricas</span>
                <span>info.cern.ch</span>
                <span>Netscape Navigator</span>
                <span>GeoCities</span>
                <span>Craiglist</span>
                <span>Britannica Online</span>
            </div>
        </div>
    </div>
</div>
