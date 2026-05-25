document.addEventListener('DOMContentLoaded', () => {

    /* Detección de móvil*/
    const esMobil = () => window.innerWidth <= 768;

    /* Referencias DOM */
    const visor      = document.getElementById('visor');
    const svgFrente  = document.getElementById('svg-frente');
    const svgEspalda = document.getElementById('svg-espalda');
    const btnFrente  = document.getElementById('btn-frente');
    const btnEspalda = document.getElementById('btn-espalda');

    /* Desktop */
    const tarjetaBienvenida = document.getElementById('tarjeta-bienvenida');
    const panelDetalles     = document.getElementById('panel-detalles');
    const elNombre    = document.getElementById('nombre-musculo');
    const elLatin     = document.getElementById('nombre-latin');
    const listaFns    = document.getElementById('lista-funciones');
    const listaEjs    = document.getElementById('lista-ejercicios');
    const btnVolver   = document.getElementById('btn-volver-desktop');

    /* Móvil */
    const panelMovil   = document.getElementById('panel-movil');
    const overlayMovil = document.getElementById('overlay-movil');
    const mNombre      = document.getElementById('m-nombre');
    const mLatin       = document.getElementById('m-latin');
    const mFunciones   = document.getElementById('m-funciones');
    const mEjercicios  = document.getElementById('m-ejercicios');
    const btnCerrar    = document.getElementById('btn-cerrar-movil');

    /* Etiqueta flotante */
    const etiquetaMusculo = document.getElementById('etiqueta-musculo');
    const etiquetaNombre  = document.getElementById('etiqueta-nombre');

    /* Todos los paths musculares */
    const todosLosMusculos = document.querySelectorAll('.musculo');

    /*UTILIDADES DE DATOS*/
    function rellenarEjercicios(contenedor, texto) {
        contenedor.innerHTML = '';
        if (!texto) return;
        texto.split('|').forEach(ej => {
            const txt = ej.trim();
            const li  = document.createElement('li');
            const m   = txt.match(/^([^(]+?)\s*(\(.+\))?$/);
            if (m) {
                const s = document.createElement('strong');
                s.textContent = m[1].trim();
                li.appendChild(s);
                if (m[2]) {
                    const sp = document.createElement('span');
                    sp.textContent = ' ' + m[2];
                    li.appendChild(sp);
                }
            } else {
                li.textContent = txt;
            }
            contenedor.appendChild(li);
        });
    }

    function rellenarLista(contenedor, texto) {
        contenedor.innerHTML = '';
        if (!texto) return;
        texto.split('|').forEach(fn => {
            const li = document.createElement('li');
            li.textContent = fn.trim();
            contenedor.appendChild(li);
        });
    }

    /*PANELS*/
    function mostrarDesktop(musculo) {
        if (esMobil()) return;
        elNombre.textContent = musculo.dataset.nombre || 'Músculo';
        elLatin.textContent  = musculo.dataset.latin || '';
        rellenarLista(listaFns, musculo.dataset.funciones);
        rellenarEjercicios(listaEjs, musculo.dataset.ejercicios);
        panelDetalles.classList.add('visible');
        tarjetaBienvenida.classList.add('oculto');
    }

    function ocultarDesktop() {
        if (esMobil()) return;
        panelDetalles.classList.remove('visible');
        tarjetaBienvenida.classList.remove('oculto');
    }

    function mostrarMovil(musculo) {
        if (!esMobil()) return;
        mNombre.textContent = musculo.dataset.nombre || 'Músculo';
        mLatin.textContent  = musculo.dataset.latin || '';
        rellenarLista(mFunciones, musculo.dataset.funciones);
        rellenarEjercicios(mEjercicios, musculo.dataset.ejercicios);
        panelMovil.classList.add('abierto');
        overlayMovil.classList.add('visible');
    }

    function ocultarMovil() {
        panelMovil.classList.remove('abierto');
        overlayMovil.classList.remove('visible');
        todosLosMusculos.forEach(m => m.classList.remove('activo', 'resaltado'));
        etiquetaMusculo.classList.remove('visible');
    }

    function limpiarActivos() {
        todosLosMusculos.forEach(m => m.classList.remove('activo', 'resaltado'));
        etiquetaMusculo.classList.remove('visible');
    }

    /*EVENTOS MÚSCULOS NORMALES*/
    todosLosMusculos.forEach(musculo => {
        musculo.addEventListener('mouseenter', () => {
            const grupo = musculo.dataset.grupo;
            if(grupo) {
                document.querySelectorAll(`.musculo[data-grupo="${grupo}"]`)
                        .forEach(m => m.classList.add('resaltado'));
            } else {
                musculo.classList.add('resaltado');
            }
        });

        musculo.addEventListener('mouseleave', () => {
            const grupo = musculo.dataset.grupo;
            if(grupo) {
                document.querySelectorAll(`.musculo[data-grupo="${grupo}"]:not(.activo)`)
                        .forEach(m => m.classList.remove('resaltado'));
            } else {
                if(!musculo.classList.contains('activo')) musculo.classList.remove('resaltado');
            }
        });

        musculo.addEventListener('click', (e) => {
            
            limpiarActivos();
            const grupo = musculo.dataset.grupo;
            if(grupo) {
                document.querySelectorAll(`.musculo[data-grupo="${grupo}"]`)
                        .forEach(m => m.classList.add('activo'));
            } else {
                musculo.classList.add('activo');
            }

            if(musculo.dataset.nombre) {
                etiquetaNombre.textContent = musculo.dataset.nombre;
                etiquetaMusculo.classList.add('visible');
            }

            if (esMobil()) mostrarMovil(musculo);
            else mostrarDesktop(musculo);
        });
    });

    btnVolver.addEventListener('click', () => { ocultarDesktop(); limpiarActivos(); });
    btnCerrar.addEventListener('click', ocultarMovil);
    overlayMovil.addEventListener('click', ocultarMovil);

    function cambiarVista(frente) {
        limpiarActivos();
        ocultarDesktop();
        ocultarMovil();

        if (frente) {
            svgFrente.classList.add('activa');
            svgEspalda.classList.remove('activa');
            btnFrente.classList.add('btn-activo');
            btnEspalda.classList.remove('btn-activo');
        } else {
            svgEspalda.classList.add('activa');
            svgFrente.classList.remove('activa');
            btnEspalda.classList.add('btn-activo');
            btnFrente.classList.remove('btn-activo');
        }
    }

    btnFrente.addEventListener('click',  () => cambiarVista(true));
    btnEspalda.addEventListener('click', () => cambiarVista(false));
});
