document.addEventListener('DOMContentLoaded', () => {
    
    
    const tarjetas = document.querySelectorAll('.tarjeta');


    tarjetas.forEach(tarjeta => {
        tarjeta.style.opacity = '0';
        tarjeta.style.transform = 'translateY(40px)';
        
        tarjeta.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    
    const observer = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            
            if (entrada.isIntersecting) {
                
                entrada.target.style.opacity = '1';
                entrada.target.style.transform = 'translateY(0)';
                
                
                observador.unobserve(entrada.target);
            }
        });
    }, {
      

        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px" 
    });

    tarjetas.forEach(tarjeta => {
        observer.observe(tarjeta);
    });
});