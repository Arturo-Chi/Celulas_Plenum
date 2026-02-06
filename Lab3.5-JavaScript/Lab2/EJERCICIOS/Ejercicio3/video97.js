//Responsive Slider


//
const d = document, n = navigator, w = window;


export default function sorteo(btn, selector){
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector),
        random = Math.floor(Math.random() * $players.length),
        winner = $players[random];

        console.log($players, random, winner)
        return `El ganador es: ${winner.textContent}`
    }

    d.addEventListener("click", e=>{
        if(e.target.matches(btn)){
            let resultado = getWinner(selector);
            alert(resultado)
            console.log(resultado)
        }
    });
}