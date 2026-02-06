//RESPONSIVE TESTER
const d = document;

export default function responsiveTester(form){
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener("submit", e => {
        if(e.target === $form){
            e.preventDefault();
            //alert("Formulario enviado")
            tester = window.open(
                $form.direccion.value,
                "tester",
                `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`
            );
        }
    }) 
}


//Haskell
/**
 * Programación funcional con haskell
 * manual de ejercicios para realizar
 * palabras reservadas, paradigma funcional, comandos
 * PLYF2026
 *
 * 6 equipos de 6
 * 
 * 
 * hacer un mall con todas las tiendas departamentelas habidas y por haber
 * 
 * */