//Filtros de búsqueda
const d = document, w = window, n = navigator;

export default function searchFilter(input, selector){
    d.addEventListener("keyup", e=> {

        if(e.key === "Escape"){
            e.target.value =""
        }

        if(e.target.matches(input)){
            console.log(e.target.value) 
            d.querySelectorAll(selector).forEach(el => {
                (el.textContent.toLowerCase().includes(e.target.value)) ?
                 el.classList.remove("filter") : el.classList.add("filter")
            })
        }
    });
}

//console.log(e.target.value) //Hace que se vaya autocompletando la palabra que se escriba dentro del panel de busqueda