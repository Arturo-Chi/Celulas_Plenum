//Responsive Slider
//carruzel de imágenes que sea responsivo
const d = document;

export default function carrusel(){

    const $slides = d.querySelectorAll(".slider-slide")
    const longi = $slides.length
    const $btnPrev = d.querySelector(".slider-btns .prev"), $btnNext = d.querySelector(".slider-btns .next");
    let index = 0;

    d.addEventListener("click", e => {
        if(e.target === $btnPrev){
            
            console.log($btnPrev)
            e.preventDefault();
            $slides[index].classList.remove("active");
            index--;

            if(index<0){
                index = longi-1;

            }
            $slides[index].classList.add("active")
        }
        if(e.target === $btnNext){
            e.preventDefault();
            $slides[index].classList.remove("active");
            index++;

            if(index>=longi){
                index = 0;

            }
            $slides[index].classList.add("active")
        }
    } );
}