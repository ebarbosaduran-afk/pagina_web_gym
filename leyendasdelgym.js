// 1. ANIMACIÓN DE LAS TARJETAS (Necesario por tu CSS)
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.sw-card');
    
    // Añadir la clase 'visible' con un pequeño retraso entre cada una
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 200); // 200ms de diferencia entre cada tarjeta
    });
});

// 2. LÓGICA DEL FORMULARIO
document.getElementById('form-leyendas').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que se recargue la página

    const objetivo = document.getElementById('objetivo').value;
    const tiempo = document.getElementById('tiempo').value;
    
    let mensaje = "";

    // Lógica simple
    if (objetivo === 'estetica') {
        mensaje = "Tu referente es ARNOLD. Enfócate en el volumen y la proporción.";
    } else if (objetivo === 'fuerza') {
        mensaje = "Tu referente es RONNIE COLEMAN. ¡A levantar pesado (Light Weight Baby)!";
    } else if (objetivo === 'ciencia' || tiempo === 'bajo') {
        mensaje = "Tu referente es MIKE MENTZER. Entrena Heavy Duty: poco tiempo, máxima intensidad.";
    } else {
        mensaje = "Te recomendamos empezar con un enfoque híbrido.";
    }

    alert(mensaje);
});