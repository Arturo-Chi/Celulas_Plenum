//Responsive Slider


//
const d = document, n = navigator, w = window;


export default function sorteo(btn, cleanBtn, selector){
    let winner;
    let interval;

    const  getWinner =(selector) => {
        const $players = d.querySelectorAll(selector),
        random = Math.floor(Math.random() * $players.length);

        winner = $players[random];

        interval = setInterval(() => {
            let pivote = Math.floor(Math.random() * $players.length)
            $players[pivote].classList.add("ronding");
            setTimeout(() => {
                $players[pivote].classList.remove("ronding");
            }, 250);
        }, 500);
        return `JACKPOT! el ganador es: ${winner.textContent}`
    }

    d.addEventListener("click", e=>{
        if(e.target.matches(btn)){
            if (winner) winner.classList.remove("ronding")
            let resultado = getWinner(selector);
            setTimeout(() => {
                winner.classList.add("ronding")
            }, 4900);

            setTimeout(() => {
                alert(resultado)
                clearInterval(interval)
            }, 5000);
        }else if(e.target.matches(cleanBtn)){
            winner.classList.remove("ronding")
        }

    });
}


