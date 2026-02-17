import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./shortcut.js";
import countdown from "./video86.js";
import scrollTopButton from "./video87.js";
import darkTheme from "./video88.js";
import responsiveMedia from "./video90.js";
import responsiveTester from "./video91.js";
import userDeviceInfo from "./video92.js";
import networkStatus from "./video93.js";
import webcam from "./video94.js";
import getGeolocation from "./video95.js";
import searchFilter from "./video96.js";
import carrusel from "./video98.js";
import scrollSpy from "./video100.js";
import smartVideo from "./video101.js";
import formValidation from "./video102.js";
import sorteo from "./video97.js";
import navigatorReader from "./video104.js";

const d = document;


d.addEventListener("DOMContentLoaded", (e)=>{
    digitalClock(".reloj", "#iniciar-reloj", "#detener-reloj");
    alarm("#iniciar-alarma", "#detener-alarma")
    countdown("countdown", "Aug 11, 2026 03:23:12 ", "Feliz cumpleaños!!!");
    scrollTopButton(".scroll-top-btn")
    responsiveMedia("youtube", 
        "(min-width: 1024px)",
        `<a href="https://www.youtube.com/watch?v=reZj2Xbt05Q" target="_blank" rel="noopener">Ver video</a>`,
         `<iframe width="560" height="315" src="https://www.youtube.com/embed/reZj2Xbt05Q?si=I0PRqo05SSFNZmWj" autoplay allowfullscreen></iframe>`
    );
    responsiveMedia("gmaps", "(min-width: 1024px)", `<a href="https://maps.app.goo.gl/JyxUCdR3cHwxX4aT9" target="_blank" rel="noopener">Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21601.7194209656!2d-87.08570717870506!3d20.627634852771212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e43b4494159ed%3A0xc669d5ec80685150!2sPaseo%20del%20Carmen%20Shopping%20Mall!5e0!3m2!1ses!2smx!4v1770227676045!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("responsive-tester")
    userDeviceInfo("user-device")
    webcam("webcam");
    getGeolocation("geolocation");
    searchFilter(".card-filter", ".card");
    sorteo("#winner-btn","#clean-btn" ,".player");
    carrusel();
    scrollSpy();
    smartVideo();
    //validation();
   formValidation();
});

d.addEventListener("keydown", (e) => {
    moveBall(e, ".ball", ".stage")
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
navigatorReader();

/** Reglas de los eventos de teclado
 * keydown, cuando solamente oprimes una tecla
 * keyup, se ejecuta después de que se suelta a la tecla
 * keypress, se ejecuta mientras la tecla se mantiene presionada
 */

