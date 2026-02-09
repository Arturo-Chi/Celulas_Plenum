const d = document;


export default function scrollSpy(){
    const $sections = d.querySelectorAll("section[data-scroll-spy]")

    const callback = (entries) => {
        //console.log("entries", entries)
        entries.forEach((entry) => {
            //console.log(entry, "entry")
            const id = entry.target.getAttribute("id")
            //console.log(id)
            if (entry.isIntersecting) {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).
                classList.add("active");
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).
                classList.remove("active");
            }
        });
    }

    const observador = new IntersectionObserver(callback, {
        threshold:0.5
    })
    //console.log(observador)
    $sections.forEach(el => observador.observe(el))
}