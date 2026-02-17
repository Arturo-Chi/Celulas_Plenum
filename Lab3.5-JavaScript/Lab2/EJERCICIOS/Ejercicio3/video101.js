
const d = document, w = window
//Video inteligente
///Intersection Observer y Visibility Changes
export default function smartVideo(){
    const $videos = d.querySelectorAll("video[data-smart-video]")
    const cb = (entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                
                entry.target.play();
            }else{
                entry.target.pause();
            }
            w.addEventListener("visibilitychange", (e) => {
                d.visibilityState == "visible"
                ? entry.target.play() : entry.target.pause();
            })
        });
    }
    const observador = new IntersectionObserver(cb, {threshold: 0.5});
    $videos.forEach(el => observador.observe(el));
}