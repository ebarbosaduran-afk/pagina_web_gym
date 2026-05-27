document.addEventListener('DOMContentLoaded', () => {
    /* Efecto de scroll en el header */
    const encabezado = document.getElementById('cabecera-principal');
    if (encabezado) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                encabezado.classList.add('scrolled');
            } else {
                encabezado.classList.remove('scrolled');
            }
        });
    }

    /* Animación de aparición de suplementos al hacer scroll */
    const suplementos = document.querySelectorAll('.suplemento');
    const observer = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
                observador.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    });

    suplementos.forEach(suplemento => {
        observer.observe(suplemento);
    });
});
