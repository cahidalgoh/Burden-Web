window.addEventListener("scroll", function () {
    const nav = document.querySelector("header");
    const mainTitle = document.querySelector("h1");
    const topBarHeight = document.querySelector(".top-bar").offsetHeight;
    /*
    window.scrollY  
        Es la cantidad de píxeles que has desplazado la página hacia abajo.
        Ejemplo: si bajas 100px, window.scrollY vale 100.

    document.querySelector(".top-bar")
        Selecciona el primer elemento en el DOM que tenga la clase .top-bar. En este caso, es la franja negra superior de contacto.

    .offsetHeight  
        Devuelve la altura total del elemento seleccionado en píxeles, incluyendo padding y bordes.
        Ejemplo: si .top-bar mide 60px de alto, offsetHeight vale 60.
    
    
    La condición compara cuánto el usuario ha hecho scroll con la altura de la franja superior:
    Si el scroll (scrollY) es mayor que la altura de .top-bar, significa que ya has pasado esa franja negra.
    En ese momento, el código dentro del if se ejecuta (por ejemplo, añadir la clase .full-width al header para que se expanda y ocupe todo el ancho).

    Por ejemplo: Supongamos que .top-bar mide 50px de alto:

        ScrollY = 0 → aún no has bajado nada → condición falsa.

        ScrollY = 30 → todavía estás dentro de la franja → condición falsa.

        ScrollY = 60 → ya pasaste la franja → condición verdadera → el header se expande.
    */
    
    // Solo aplica si la pantalla es al menos de 1160px
    if (window.innerWidth >= 1160) {
        if (window.scrollY > topBarHeight) {
            nav.classList.add("full-width");
            mainTitle.classList.add("img-size");
        } else { 
            nav.classList.remove("full-width");
            mainTitle.classList.remove("img-size");
        }
    } else {
        // En pantallas pequeñas, aseguramos que no se aplique
        nav.classList.remove("full-width");
        mainTitle.classList.remove("img-size");
    }

    // if (window.innerWidth < 800) {
    //     mainTitle.classList.remove("img-size");
    //     console.log("Dispositivo móvil");
    // }


});

window.addEventListener("resize", function() {
    // console.log("Nuevo ancho:", window.innerWidth);
    // console.log("Nuevo alto:", window.innerHeight);
    if (window.innerWidth < 800) {
        mainTitle.classList.remove("img-size");
    }


});