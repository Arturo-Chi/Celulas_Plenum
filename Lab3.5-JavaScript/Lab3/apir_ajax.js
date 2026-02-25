const d = document,
$table = d.querySelector(".crud-table"),
$form = d.querySelector(".crud-form"),
$title = d.querySelector(".crud-title"),
$template = d.querySelector(".crud-template").content

let $btnEditar, $btnEliminar;


const endpoints = [
    "http://localhost:3000/hermandad",
    "http://localhost:3000/penitentes",
    "http://localhost:3000/rezos",
    "http://localhost:3000/cuentas",
]

//Lo mejor al consultar elementos que tienen que agregarse al dom es cargar todos los
//Elementos en un fragmento de HTML para que al final se agreguen al final al DOM

d.addEventListener("DOMContentLoaded", async () => {
    console.log("EVENTO DEL CONTENT LOAD")
    let datos = await getDataFromApi()


    
    const $fragment = d.createDocumentFragment()
    
    datos.forEach(dato => {
        const clon = $template.cloneNode(true);;
        clon.querySelector(".id").textContent = dato.id
        clon.querySelector(".nombre").textContent = dato.nombre

        
        $fragment.appendChild(clon)
    });
    
  
    $table.querySelector("thead").appendChild($fragment)

    $btnEditar = d.querySelectorAll(".edit")
    console.log("Editar", $btnEditar)
    }
)



d.addEventListener("click", (e)=>{
    if(e.target = $btnEditar) {
        alert("editaaar")
        console.log("editar")
    }
});




async function getDataFromApi(){
    try {
        const url = endpoints[1];

        let response = await fetch(url);
        let json = await response.json();

        if(!response.ok) throw {
            status: response.status,
            statusText: response.statusText,

        }

        return json;

    } catch (error) {
        return `status: ${error.status} | message: ${error.message}`
    }



}
