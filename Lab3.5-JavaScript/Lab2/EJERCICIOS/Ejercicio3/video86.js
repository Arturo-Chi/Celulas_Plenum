
//Cuenta regresiva
//Aqui trabajaremos el ejercicio de la cuenta regresiva

const d = document;
export default function countdown(id, limit, message){
    const $countdown = d.getElementById(id);
    const date = new Date(limit).getTime();

    let countTempo = setInterval(() => {
        let now = new Date().getTime();
        let limitTime = date-now, days, hours, minutes, seconds;
        //Dentro del intervalo debemos detectar la fecha actual, el momento actual
        //console.log(date, now, limitTime, seconds)
        //Deben de hacer operaciones para calcular el tiempo hasta la fecha dada

        //Cuantos milisegundos hay en un día?
        /*
        1 segundo -> 1000 milisegundos
        1 minuto = 60 segundos 
        1 hora = 60 minutos
        1 día = 24 horas

        
        */
        days = Math.floor(limitTime/(1000*60*60*24));
        hours = (
            "0"+Math.floor((limitTime%(1000*60*60*24))/(1000*60*60))
        ).slice(-2)
        minutes = (
            "0"+Math.floor((limitTime%(1000*60*60))/(1000*60))
        ).slice(-2)
        seconds = (
            "0"+Math.floor((limitTime%(1000*60))/(1000))
        ).slice(-2)



        $countdown.innerHTML = `<h3>${days} D: ${hours} H: ${minutes} M: ${seconds} S</h3>`

    }, 1000);
}

//Para hacer operaciones con fechas es importante realizarlo con milisegundos.

