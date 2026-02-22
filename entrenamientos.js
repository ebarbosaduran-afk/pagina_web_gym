const tarjetas = document.querySelectorAll(".tarjeta");

const tabla = document.querySelector(".contenedor-tabla");

const elementosAnimados = [...tarjetas];
if (tabla) elementosAnimados.push(tabla);

const observador = new IntersectionObserver(
    (entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
               
                if (entrada.target.classList.contains("contenedor-tabla")) {
                    entrada.target.style.opacity = "1";
                    entrada.target.style.transform = "translateY(0)";
                }
            }
        });
    },
    { threshold: 0.15 }
);


tarjetas.forEach(tarjeta => observador.observe(tarjeta));


if (tabla) {
    tabla.style.opacity = "0";
    tabla.style.transform = "translateY(30px)";
    tabla.style.transition = "all 0.6s ease";
    observador.observe(tabla);
}