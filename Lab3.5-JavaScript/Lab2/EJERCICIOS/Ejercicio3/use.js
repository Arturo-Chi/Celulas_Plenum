import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./shortcut.js";

const d = document;


d.addEventListener("DOMContentLoaded", (e)=>{
    digitalClock(".reloj", "#iniciar-reloj", "#detener-reloj");
    alarm("#iniciar-alarma", "#detener-alarma")
 
});

d.addEventListener("keydown", (e) => {
    //shortcuts(e)
    moveBall(e, ".ball", ".stage")
});


/** Reglas de los eventos de teclado
 * keydown, cuando solamente oprimes una tecla
 * keyup, se ejecuta después de que se suelta a la tecla
 * keypress, se ejecuta mientras la tecla se mantiene presionada
 */

//Las principales combinaciones de teclas se dan con ctrl, shift y alt