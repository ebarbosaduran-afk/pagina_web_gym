
const cards = document.querySelectorAll(".sw-card");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.2 }
);

cards.forEach(card => observer.observe(card));

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = form.querySelector("input").value.trim();
    const valoracion = form.querySelector("select").value;
    const comentario = form.querySelector("textarea").value.trim();

    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres");
        return;
    }

    const datos = {
        nombre,
        valoracion,
        comentario,
        fecha: new Date().toLocaleDateString()
    };

    localStorage.setItem("valoracionFitPeak", JSON.stringify(datos));

    alert("¡Gracias por tu valoración! 💪");

    form.reset();
});


   
window.addEventListener("load", () => {
    setTimeout(() => {
        alert("Bienvenido a FitPeak");
    }, 800);
});



