document.addEventListener("DOMContentLoaded", () => {

    const inicio =
        document.getElementById("inicio");

    const entrar =
        document.getElementById("entrar");

    const jardin =
        document.getElementById("jardin");

    const estrellas =
        document.getElementById("estrellas");

    const jardinFlores =
        document.getElementById("jardinFlores");

    const abrirCarta =
        document.getElementById("abrirCarta");

    const cerrarCarta =
        document.getElementById("cerrarCarta");

    const pantallaCarta =
        document.getElementById("pantallaCarta");


    /* para crear las estrellas */

    function crearEstrellas() {

        for (let i = 0; i < 100; i++) {

            const estrella =
                document.createElement("span");

            estrella.className =
                "estrella";

            estrella.style.left =
                Math.random() * 100 + "%";

            estrella.style.top =
                Math.random() * 70 + "%";

            estrella.style.setProperty(
                "--duracion",
                (2 + Math.random() * 4) + "s"
            );

            estrella.style.setProperty(
                "--retraso",
                (Math.random() * 5) + "s"
            );

            estrellas.appendChild(estrella);
        }
    }


    /* creacion de la flor*/

    function crearFlor(numero) {

        const flor =
            document.createElement("div");

        flor.className =
            "flor";


        /* TALLO */

        const tallo =
            document.createElement("div");

        tallo.className =
            "tallo";

        flor.appendChild(tallo);


        /* HOJAS */

        const posiciones = [
            ["izquierda", "h1"],
            ["derecha", "h2"],
            ["izquierda", "h3"],
            ["derecha", "h4"]
        ];


        posiciones.forEach((datos, index) => {

            const hoja =
                document.createElement("div");

            hoja.classList.add(
                "hoja",
                datos[0],
                datos[1]
            );

            hoja.style.setProperty(
                "--rotacion",
                datos[0] === "izquierda"
                    ? "25deg"
                    : "-25deg"
            );

            hoja.style.animationDelay =
                (1 + index * .25 + numero * .15) + "s";

            flor.appendChild(hoja);

        });


        /* CABEZA */

        const cabeza =
            document.createElement("div");

        cabeza.className =
            "cabeza";


        /* PÉTALOS */

        for (let i = 0; i < 6; i++) {

            const petalo =
                document.createElement("div");

            petalo.className =
                "petalo";

            cabeza.appendChild(petalo);
        }


        /* CENTRO */

        const centro =
            document.createElement("div");

        centro.className =
            "centro";

        cabeza.appendChild(centro);

        flor.appendChild(cabeza);

        jardinFlores.appendChild(flor);
    }


    /* creacion de las flores en general */

    function crearJardin() {

        crearEstrellas();

        for (let i = 0; i < 6; i++) {

            crearFlor(i);

        }
    }


    /* entrar */

    entrar.addEventListener("click", () => {

        inicio.classList.add("oculto");

        setTimeout(() => {

            jardin.classList.add("activo");

            crearJardin();

        }, 700);

    });


    /* abrir la carta */

    abrirCarta.addEventListener(
        "click",
        () => {

            pantallaCarta.classList.add(
                "abierta"
            );

        }
    );


    /* cerrar */

    cerrarCarta.addEventListener(
        "click",
        () => {

            pantallaCarta.classList.remove(
                "abierta"
            );

        }
    );


    /* cerrar al tocar afuera */

    pantallaCarta.addEventListener(
        "click",
        (evento) => {

            if (
                evento.target === pantallaCarta
            ) {

                pantallaCarta.classList.remove(
                    "abierta"
                );

            }

        }
    );

});