import { digitalClock, alarm } from "./reloj.js";

const d = document;


d.addEventListener("DOMContentLoaded", (e)=>{
    digitalClock(".reloj", "#iniciar-reloj", "#detener-reloj");
    alarm("#iniciar-alarma", "#detener-alarma")
});