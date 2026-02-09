const d = document



export function digitalClock(clock, play, stop){
    let clockTimer;
    d.addEventListener("click", e=> {
        if (e.target.matches(play)) {
            clockTimer = setInterval(() => {
                let clockhour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML =`<h3>${clockhour}</h3>`;
            }, 1000);
            e.target.disabled = true;
        }
        
        if(e.target.matches(stop)){
            clearInterval(clockTimer);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(play).disabled = false;
            
        }
    });
}


export function alarm(play, stop){
    const audio = new Audio("alarms/overclock.mp3");
    let alarmTempo;
    d.addEventListener("click", e=> {
        if(e.target.matches(play)){
            setTimeout(() => {
                alarmTempo = setInterval(() => {
                    audio.play() 
                    console.log()
                });
            }, 500);
            e.target.disabled = true;
            
        }

        if(e.target.matches(stop)){
            audio.pause();
            audio.currentTime = 0;
            clearInterval(alarmTempo)
            d.querySelector(play).disabled = false;
        }
   })
}

const hora = new Date().toLocaleTimeString();



