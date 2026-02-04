//Modo oscuro de cualquier sitio web
//Cuando sea normal debe tener un ícono de luna, cuando esté en el modo oscuro debe cambiar a un sol


const d = document;
const ls = localStorage;

export default function darkTheme(btn, classDark){
    //Nos vamos a ayudar de un atributte, commo data-dark
    //Sera como el ejercicio anterior de agregar y quitar una clase de una etiqueta de html
    const $btnDark = d.querySelector(btn);
    const $selectors = d.querySelectorAll("[data-dark]")

    //console.log($selectors)
    let moon ="🌙", sun="☀️";

    const lightMode = () =>{
        $selectors.forEach((el) => el.classList.remove(classDark))
        $btnDark.textContent = moon;
        ls.setItem("theme", "light")
    };
    const darkMode = () =>{
        $selectors.forEach((el) => el.classList.add(classDark))
        $btnDark.textContent = sun;
        ls.setItem("theme", "dark")
    };

    d.addEventListener("click", e=> {
    
        if(e.target.matches(btn)){
            if($btnDark.textContent === moon){
                darkMode();
            }else{
                lightMode(); 
            }
        }
    })


    //Refactorización para el localStorage
    //Asi no funciona por que se está invocando dentro de un evento del mismo tipo
    d.addEventListener("DOMContentLoaded", e=>{
        console.log(ls.getItem("theme"))
        if(ls.getItem("theme") === null){
            ls.setItem("theme", "light");
        }


        if (ls.getItem("theme" === "light")) {
            lightMode();
        }

        if (ls.getItem("theme" === "dark")) {
            darkMode();
        }


        //De este modo se guardará dentro del localstorage la última configuraciónn que e haya quedado en nuestro sitio

    });
}