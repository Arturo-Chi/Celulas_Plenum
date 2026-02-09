
const d = document, w = window
//Video inteligente
///Intersection Observer y Visibility Changes
export default function smartVideo(){
    const $videos = d.querySelectorAll("video[data-smart-video]")
    console.log($videos)

    const cb = (entries) => {
        //Aplica eventos de pausa y play cuando se detecta el foco del video
        entries.forEach(entry => {
            if(entry.isIntersecting){
                
                entry.target.play();
            }else{
                entry.target.pause();
            }


            //Pausa el video cuando se pierde el foco de la pestaña del navegador
            w.addEventListener("visibilitychange", (e) => {
                d.visibilityState == "visible"
                ? entry.target.play() : entry.target.pause();
            })


        });
    }

    const observador = new IntersectionObserver(cb, {threshold: 0.5});


    $videos.forEach(el => observador.observe(el));
}