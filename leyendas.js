
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
    const tiempo = document.getElementById('tiempo').value;
    
    let mensaje = "";

    
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
