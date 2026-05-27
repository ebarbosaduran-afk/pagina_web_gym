window.addEventListener('scroll', () => {
    const encabezado = document.getElementById('cabecera-principal');
    if (window.scrollY > 50) {
        encabezado.classList.add('scrolled');
    } else {
        encabezado.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    /* Animación de aparición de cajas de información al hacer scroll */
    const cajasInfo = document.querySelectorAll('.caja-informacion');
    const observador = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
                observador.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.15
    });

    cajasInfo.forEach(caja => {
        observador.observe(caja);
    });
});

function desplazarHaciaContenido() {
    document.getElementById('zona-contenido').scrollIntoView({ behavior: 'smooth' });
}


function calcularRepeticionMaxima() {

    const peso = parseFloat(document.getElementById('campo-peso').value);
    const repeticiones = parseInt(document.getElementById('campo-repeticiones').value);

    const cajaResultado = document.getElementById('resultado-rm');
    const valorMostrar = document.getElementById('valor-rm');
    const descripcionMostrar = document.getElementById('descripcion-rm');


    if (!peso || !repeticiones || peso <= 0 || repeticiones <= 0) {
        alert("Por favor, introduce valores válidos para peso y repeticiones.");
        return;
    }

    if (repeticiones > 15) {
        alert("Para resultados precisos, inténtalo con un número menor a 15 repeticiones.");
    }


    const repeticionMaxima = peso * (1 + (0.0333 * repeticiones));

    valorMostrar.textContent = Math.round(repeticionMaxima) + " kg";
    valorMostrar.style.color = "#00d4aa";

    descripcionMostrar.textContent = "Este es tu 1 RM estimado (Repetición Máxima). Úsalo para planificar tus porcentajes de intensidad.";


    cajaResultado.classList.remove('oculto');
}

const formularioOpinion = document.getElementById('formulario-opinion');
if (formularioOpinion) {
    formularioOpinion.addEventListener('submit', function (evento) {
        evento.preventDefault();
        alert('¡Gracias por tu valoración! Seguiremos mejorando FitPeak para llevar tu físico al siguiente nivel.');
        this.reset();
    });
}
