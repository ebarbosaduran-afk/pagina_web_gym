window.addEventListener('scroll', () => {
    const encabezado = document.getElementById('cabecera-principal');
    if (window.scrollY > 50) {
        encabezado.classList.add('scrolled');
    } else {
        encabezado.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.sw-card');
    
  
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 200); 
    });
});


document.getElementById('form-leyendas').addEventListener('submit', function(e) {
    e.preventDefault();

    const objetivo = document.getElementById('objetivo').value;
    let mensaje = "";

    if (objetivo === 'estetica') {
        mensaje = "Tu referente es ARNOLD. Enfócate en el volumen y la proporción.";
    } else if (objetivo === 'fuerza') {
        mensaje = "Tu referente es RONNIE COLEMAN. ¡A levantar pesado (Light Weight Baby)!";
    } else if (objetivo === 'intensidad') {
        mensaje = "Tu referente es TOM PLATZ. ¡Intensidad extrema y sentadillas pesadas!";
    } else {
        mensaje = "Te recomendamos empezar con un enfoque híbrido.";
    }

    alert(mensaje);
});
