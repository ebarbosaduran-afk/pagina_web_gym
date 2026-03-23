// Efecto de scroll en el header (igual que el resto de páginas)
window.addEventListener('scroll', () => {
    const encabezado = document.getElementById('cabecera-principal');
    if (window.scrollY > 50) {
        encabezado.classList.add('scrolled');
    } else {
        encabezado.classList.remove('scrolled');
    }
});

// Animación de aparición de tarjetas al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
    const tarjetas = document.querySelectorAll('.tarjeta-mito');

    // Estado inicial: ocultas y desplazadas hacia abajo
    tarjetas.forEach((tarjeta, indice) => {
        tarjeta.style.opacity = '0';
        tarjeta.style.transform = 'translateY(50px)';
        tarjeta.style.transition = `opacity 0.6s ease-out ${indice % 2 * 0.15}s, transform 0.6s ease-out ${indice % 2 * 0.15}s`;
    });

    // Observer para detectar cuando entran en pantalla
    const observer = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.style.opacity = '1';
                entrada.target.style.transform = 'translateY(0)';
                observador.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    tarjetas.forEach(tarjeta => {
        observer.observe(tarjeta);
    });
});
