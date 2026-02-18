const d = document;

export default function scrollSpy() {
  const d = document;
  const $sections = d.querySelectorAll("section[data-scroll-spy]");
  const $links = d.querySelectorAll("a[data-scroll-spy]");

  const cb = (entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute("id");

      const $link = d.querySelector(`a[href="#${id}"]`);

      if (!$link) return; // evita crash

      if (entry.isIntersecting) {
        $link.classList.add("active");
      } else {
        $link.classList.remove("active");
      }
    });
  };

  const observer = new IntersectionObserver(cb, {
    threshold: 0.5  // 50% visible
  });

  $sections.forEach(section => observer.observe(section));
}









/*

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
}¨*/