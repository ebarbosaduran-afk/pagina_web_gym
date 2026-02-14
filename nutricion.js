
const tarjetas = document.querySelectorAll(".tarjeta");

const observador = new IntersectionObserver(
    (entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.15 } 
);

tarjetas.forEach(tarjeta => observador.observe(tarjeta));



const formulario = document.getElementById("form-calculadora");
const zonaResultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

  
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const edad = parseFloat(document.getElementById("edad").value);
    const genero = document.getElementById("genero").value;
    const actividad = parseFloat(document.getElementById("actividad").value);

    
    if (isNaN(peso) || isNaN(altura) || isNaN(edad)) {
        alert("Por favor, rellena todos los campos correctamente.");
        return;
    }

  
    let tmb;
    if (genero === "hombre") {
        tmb = (10 * peso) + (6.25 * altura) - (5 * edad) + 5;
    } else {
        tmb = (10 * peso) + (6.25 * altura) - (5 * edad) - 161;
    }

   
    const mantenimiento = Math.round(tmb * actividad);
    
 
    const definicion = mantenimiento - 400; 
    const volumen = mantenimiento + 300;


    zonaResultado.style.display = "block";
    zonaResultado.style.marginTop = "25px";
    
    zonaResultado.innerHTML = `
        <div class="caja-resultado" style="border-left: 4px solid #9fffd8;">
            <div class="titulo-res">Mantenimiento (Ni subir ni bajar)</div>
            <div class="valor-res">${mantenimiento} kcal</div>
        </div>
        
        <div class="caja-resultado" style="border-left: 4px solid #ff6b6b;">
            <div class="titulo-res" style="color: #ff6b6b;">Objetivo: Definición</div>
            <div class="valor-res">${definicion} kcal</div>
            <p style="font-size: 0.85em; color: #888;">Déficit moderado para proteger el músculo.</p>
        </div>

        <div class="caja-resultado" style="border-left: 4px solid #4ecdc4;">
            <div class="titulo-res" style="color: #4ecdc4;">Objetivo: Volumen</div>
            <div class="valor-res">${volumen} kcal</div>
            <p style="font-size: 0.85em; color: #888;">Superávit ligero para minimizar grasa.</p>
        </div>
    `;
});