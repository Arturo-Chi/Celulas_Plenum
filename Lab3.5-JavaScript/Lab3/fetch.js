const d = document,
$table = d.querySelector(".crud-table"),
$form = d.querySelector(".crud-form"),
$title = d.querySelector(".crud-title"),
$template = d.querySelector(".crud-template").content,
$fragment = d.createDocumentFragment()

let $btnEditar, $btnDelete;
let nextId;

const url = "http://localhost:3000/penitentes"
//fetch puede recibir dos parámetros
//la url de la api a la que estamos consultando
//opciones de método, cors, etc

function editEvents(btns){
    btns.forEach(b => {
        b.addEventListener("click", e=>{
            alert("editando")
        });
    });
}
function deleteEvents(btns){
    btns.forEach(b => {
        b.addEventListener("click", e=>{
            alert("borrar")
        });
    });
}


const loadTable = (json) =>{
    json.forEach(el => {
        $template.querySelector(".id").textContent = el.id
        $template.querySelector(".nombre").textContent = el.nombre
        
        
        //carga de atributos data
        $template.querySelector(".edit").dataset.id = el.id
        $template.querySelector(".edit").dataset.nombre = el.nombre

        $template.querySelector(".delete").dataset.id = el.id

        let $row = d.importNode($template, true)
        $fragment.appendChild($row)
        
    });

    $table.querySelector("tbody").appendChild($fragment)
    editEvents(d.querySelectorAll(".edit"))
    deleteEvents(d.querySelectorAll(".delete"))

}

function fecthingTime(){

}


const getAll = async () => {
    //alert("Hola mundo")
    try {
        let response = await fetch(url)
        let json = await response.json();


        //Si vamos a usar un dato que usa await entonces en sus demás implementaciones dentro del código también se le debe de poner await

        if(!response.ok) throw {
            status: response.status,
            statusText: response.statusText
        }
    
        console.log(json)
        loadTable(json)

    } catch (error) {
        let message =  error.statusText || "Ocurrió un error"
        $table.insertAdjacentHTML("afterend",`<p><b>Error ${error.status} :${message}</b></p>`)
    }
}


d.addEventListener("DOMContentLoaded", getAll);