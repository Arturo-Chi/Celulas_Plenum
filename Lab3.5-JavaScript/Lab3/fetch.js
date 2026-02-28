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
   btns.forEach(el => {
        el.addEventListener("click", e=>{
            d.querySelector('input[name="nombre"]').value = el.dataset.nombre
            d.querySelector('input[name="id"]').value = el.dataset.id
        })
    });
}
function deleteEvents(btns){
   btns.forEach(el => {
        el.addEventListener("click", async e=>{
            console.log(el.dataset.id)
             const options = {
                    method:"DELETE",
                    headers: {
                        "Content-type": "application/json; charset=utf-8"
                    },
                    body:null
            }
            let res = await fetch(`${url}/${el.dataset.id}`, options),
            json = await res.json()
            console.log(json)
        })
    });
}


const loadTable = (json) =>{
    json.forEach(el => {
        console.log(el.nombre, el.id)
        $template.querySelector(".id").textContent = el.id
        $template.querySelector(".nombre").textContent = el.nombre
        
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
        
        nextId = Math.max(...json.map(r => r.id))+1;
        d.querySelector('input[name="nextid"]').value = nextId
        console.log(json)
        loadTable(json)

    } catch (error) {
        let message =  error.statusText || "Ocurrió un error"
        $table.insertAdjacentHTML("afterend",`<p><b>Error ${error.status} :${error}</b></p>`)
    }
}


d.addEventListener("DOMContentLoaded", getAll);

//Operaciones de POST, PUT y DELETE
//Para PUT y DELETE usaramos delegación de eventos en el formulario

d.addEventListener("submit", async e =>{
    if(e.target === $form){
        e.preventDefault()//Metodo de autoprocesamiento
        if(!e.target.id.value){
            //POST

            try {
                //Esta vez si va a a llevar opciones
                const options = {
                    method:"POST",
                    headers: {
                        "Content-type": "application/json; charset=utf-8"
                    },
                    body:JSON.stringify({
                        nombre: e.target.nombre.value,
                        id: e.target.nextid.value
                    })
                }
                let response = await fetch(url, options)
                json = await response.json()
            } catch (error) {
                console.error(error)
            }

        }else{
            //PUT
            const options = {
                    method:"PUT",
                    headers: {
                        "Content-type": "application/json; charset=utf-8"
                    },
                    body:JSON.stringify({
                        nombre: e.target.nombre.value
                    })
            }
            let res = await fetch(`${url}/${e.target.id.value}`, options),
            json = await res.json()
            console.log(json)

        }


    }
});