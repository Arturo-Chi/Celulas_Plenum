const d = document,
$table = d.querySelector(".crud-table"),
$form = d.querySelector(".crud-form"),
$title = d.querySelector(".crud-title"),
$template = d.querySelector(".crud-template").content

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

    console.log("datos", datos)
    console.log("table", $table)
    console.log("form", $form)
    
    console.log("template", $template)
    
    const $fragment = d.createDocumentFragment()
    
    datos.forEach(dato => {
        const clon = $template.cloneNode(true);;
        clon.querySelector(".id").textContent = dato.id
        clon.querySelector(".nombre").textContent = dato.nombre

        
        $fragment.appendChild(clon)
    });
    
    console.log("FRAGMENTO LISTO", $fragment)
    console.log("Contenido", $table.querySelector("thead"))

    $table.querySelector("thead").appendChild($fragment)
    }
)





async function getDataFromApi(){
    try {
        const url = endpoints[1];

        let response = await fetch(url);
        let json = await response.json();
        //console.log(url)
        //console.log(json)
        
        if(!response.ok) throw {
            status: response.status,
            statusText: response.statusText,

        }

        return json;
        /***
        json.forEach(o => {
          console.log(`${o.id} ---- ${o.nombre}`)
        }); 
         */
        


    } catch (error) {
        return `status: ${error.status} | message: ${error.message}`
    }



}
