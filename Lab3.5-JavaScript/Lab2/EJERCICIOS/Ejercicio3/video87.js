//BOTÓN DE SCROLL TOP
//Usados en sitios donde el scroll es muy amplio
const d = document;
const w = window;

export default function scrollTopButton(btn){
    //Detectar el scroll y a que distancia queremos que el elemento se muestre
      
    const $btn = d.querySelector(btn)

    w.addEventListener("scroll", (e) => {
        //Hay dos propiedades para detectar la distancia que se ha separado la barra del scroll
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        //console.log(scrollTop)
        if(scrollTop > 600){
            //Para manipular clases de un elemento html
            $btn.classList.remove("hidden")
        }else{
            $btn.classList.add("hidden")
        }

        console.log(w.pageYOffset, d.documentElement.scrollTop)

    })
    d.addEventListener("click", e=> {
        if (e.target.matches(btn)) {
            w.scrollTo({
                behavior: "smooth",
                top: 0

            })
        }
    })

}