const suplementos = [
    {
        nombre: "Creatina Monohidrato",
        imagen: "imagenes/creatina.png",
        descripcion: "Incrementa las reservas de fosfocreatina muscular, mejorando la producción de ATP, la fuerza y el rendimiento en ejercicios de alta intensidad.",
        estudios: [
            { titulo: "Revisión sistemática – Sports Medicine", url: "https://pubmed.ncbi.nlm.nih.gov/28889805/" },
            { titulo: "Seguridad renal a largo plazo", url: "https://pubmed.ncbi.nlm.nih.gov/16685053/" }
        ],
        linkHSN: "https://www.hsnstore.com/marcas/raw-series/creatina-monohidrato-en-polvo-1kg?utm_source=hsnaffiliate&utm_medium=DECIBEL&utm_campaign=globerada_css-6985b471c862a"
    },
    {
        nombre: "Omega-3 (EPA y DHA)",
        imagen: "imagenes/omega3.png",
        descripcion: "Reduce la inflamación, mejora la salud cardiovascular y favorece la recuperación muscular y articular tras el ejercicio.",
        estudios: [
            { titulo: "Daño muscular inducido por ejercicio", url: "https://pubmed.ncbi.nlm.nih.gov/25688050/" },
            { titulo: "Salud cardiovascular", url: "https://pubmed.ncbi.nlm.nih.gov/28444290/" }
        ],
        linkHSN: "https://www.hsnstore.com/marcas/essential-series/omega-3-aceite-pescado-1000mg?srsltid=AfmBOoqRZu8C5NYcK24tKNt5xgVPJbxo27GU220bl5_3AQnkGeCo996L"
    },
    {
        nombre: "Vitamina D3",
        imagen: "imagenes/vitaminad3.png",
        descripcion: "Participa en la función muscular, ósea e inmunológica. Niveles adecuados se asocian con mejor rendimiento y recuperación.",
        estudios: [
            { titulo: "Vitamina D y rendimiento", url: "https://pubmed.ncbi.nlm.nih.gov/25356818/" },
            { titulo: "Déficit y deterioro físico", url: "https://pubmed.ncbi.nlm.nih.gov/32023065/" }
        ],
        linkHSN: "https://www.hsnstore.com/marcas/essential-series/vitamina-d3-4000ui-120-perlas?utm_source=hsnaffiliate&utm_medium=DECIBEL&utm_campaign=globerada_css-6985c760c76c0"
    },
    {
        nombre: "Ashwagandha (KSM-66)",
        imagen: "imagenes/ashwagandha.png",
        descripcion: "Adaptógeno que reduce el cortisol y mejora la fuerza, la masa muscular y la recuperación.",
        estudios: [
            { titulo: "Fuerza y masa muscular", url: "https://pubmed.ncbi.nlm.nih.gov/29618526/" },
            { titulo: "Estrés y rendimiento", url: "https://pubmed.ncbi.nlm.nih.gov/29262566/" }
        ],
        linkHSN: "https://www.hsnstore.com/marcas/essential-series/extracto-de-ashwagandha-ksm-66-12-1-300mg?srsltid=AfmBOopGOICC69z9t2ha3UhsCqNUk2e6TtlmT2sVua3jHj06socgXgZX"
    },
    {
        nombre: "Magnesio",
        imagen: "imagenes/magnesio.png",
        descripcion: "Mineral esencial para la función muscular y la producción de energía. El bisglicinato es la forma más recomendable.",
        estudios: [
            { titulo: "Función muscular", url: "https://pubmed.ncbi.nlm.nih.gov/27741618/" },
            { titulo: "Biodisponibilidad", url: "https://pubmed.ncbi.nlm.nih.gov/28904374/" }
        ],
        linkHSN: "https://www.hsnstore.com/marcas/raw-series/bisglicinato-de-magnesio-en-polvo"
    },
    {
        nombre: "Zinc y Colágeno",
        imagen: "imagenes/colageno.png",
        descripcion: "El zinc interviene en la síntesis proteica y función hormonal. El colágeno mejora la salud articular y tendinosa.",
        estudios: [
            { titulo: "Zinc y rendimiento", url: "https://pubmed.ncbi.nlm.nih.gov/24331691/" },
            { titulo: "Colágeno y articulaciones", url: "https://pubmed.ncbi.nlm.nih.gov/29372155/" }
        ],
        linkHSN: "https://www.hsnstore.com/marcas/essential-series/colageno-super-beauty?srsltid=AfmBOooTV3ip2scQG74FosbSlUgBnOJjeHi0OsDm-10Q450g1a0Evfyp"
    }
];

function renderizarSuplementos() {
    const container = document.getElementById('suplementos-container');
    
    suplementos.forEach(suplemento => {
        const section = document.createElement('section');
        section.className = 'suplemento';
        
        let estudiosHTML = suplemento.estudios
            .map(estudio => `<li><a href="${estudio.url}" target="_blank">${estudio.titulo}</a></li>`)
            .join('');
        
        section.innerHTML = `
            <img src="${suplemento.imagen}" alt="${suplemento.nombre}">
            <div class="suplemento-info">
                <h2>${suplemento.nombre}</h2>
                <p>${suplemento.descripcion}</p>
                <ul class="estudios">
                    ${estudiosHTML}
                </ul>
                <a href="${suplemento.linkHSN}" class="btn">VER EN HSN</a>
            </div>
        `;
        
        container.appendChild(section);
    });
}

