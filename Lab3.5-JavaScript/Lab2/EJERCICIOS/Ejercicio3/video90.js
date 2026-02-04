//CONTINUACIÓN DE EJERCICIOS CON API Localstorage

//Responsive Web Design
/**
 * Fue muy criticado por adquirir ciertas prácticas como ocultar contenidos visualmente
 * 
 * Hay un libro muy interesante de buenas prácticas en el responsive design
 * Responsible Responsive Design - Scott Jehl
 * 
 */

let titulo= "Responsive tester";

const d = document;
const w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent){
    let breakpoint = w.matchMedia(mq);
     
    const responsive = (e) => {
        if(e.matches){
            d.getElementById(id).innerHTML = desktopContent
        }else{
            d.getElementById(id).innerHTML = mobileContent
        }
        console.log("MEDIA QUERY ", e.matches)
    }
    breakpoint.addListener(responsive)
    responsive(breakpoint);

    
}

