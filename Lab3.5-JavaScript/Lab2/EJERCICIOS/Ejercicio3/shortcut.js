//Ejercicio3 
const d = document;


export function shortcuts(e){   
    //console.log(e.type)
    //console.log(e.key, e)
    //console.log("Se presiona control?: ", e.ctrlKey)
//
//
    //if(e.key === "a" && e.altKey){
    //    alert(`Haz presionado ${e.key} y ${e.key}`)
    //}
//
    //if(e.key === "c" && e.altKey){
    //    confirm(`Haz lanzado una confirmación`)
    //}
//
    //if(e.key === "p" && e.altKey){
    //    let hola = prompt(`Haz lanzado un prompt(aviso)`)
    //    console.log(hola.toString)
    //}

        /**
         * Existen 3 metodos principales con de mensajes en la ventana
         * alert()
         * confirm()
         * prompt()
         */
}


let x = 0, y = 0;
//Ejercicio 4
export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage)
    let flag = e.keyCode;
    //console.log(e.keyCode)
    console.log(e)

    switch (flag) {
        case 37:
            x--;  
            break;
        case 38:
            y--;
            break;
        case 39:
            x++;
            break;
        case 40:
            y++;
            break;
    
        default:
            //do nothing
            break;
    }

    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
}