const d = document,
$table = d.querySelector(".crud-table"),
$form = d.querySelector(".crud-form"),
$title = d.querySelector(".crud-title"),
$template = d.querySelector(".crud-template").content,
$fragment = d.createDocumentFragment()

let $btnEditar, $btnDelete;
let nextId;

const ajax = (options) =>{
    let {url, method, success, error, data} = options
    const xhr = new XMLHttpRequest

    xhr.addEventListener("readystatechange", (e)=>{
        if (xhr.readyState !== 4) return;
        if (xhr.status >= 200 && xhr.status ,300) {
                let json = JSON.parse(xhr.responseText)
                success(json)
        } else {
            let message = xhr.statusText || "Ocurrió un error"
            error(message)
        }
    })

    xhr.open(method || "GET", url)
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8")
    xhr.send(JSON.stringify(data))

}

const editEvents = (btns) => {
    btns.forEach(el => {
        el.addEventListener("click", e=>{
            d.querySelector('input[name="nombre"]').value = el.dataset.name
            d.querySelector('input[name="id"]').value = el.dataset.id
        })
    });
}

const deleteEvents = (deleteBtns) =>{
    deleteBtns.forEach(el => {
        el.addEventListener("click", e=>{
            console.log(el.dataset.id)
        })
    });
}

const getAll = () =>{
    ajax({
        url: "http://localhost:3000/penitentes",
        method:"GET",
        success: (res) => {
            console.log("response",res)
            d.querySelector('input[name="id"]').value = res.length+1
            nextId = res.length

            res.forEach(element => {

                $template.querySelector(".id").textContent = `-   ${element.id}   -`
                $template.querySelector(".nombre").textContent = element.nombre;
                
                //Para identificar mejor a los botones por cada uno de los datos del servidor usamos data-attributes
                $template.querySelector(".edit").dataset.id = element.id
                $template.querySelector(".edit").dataset.name = element.nombre
                
                $template.querySelector(".delete").dataset.id = element.id        
                
                let $clone = d.importNode($template, true)
                $fragment.appendChild($clone)

            });
            $table.querySelector("tbody").appendChild($fragment)
            
            $btnEditar = d.querySelectorAll(".edit")
            $btnDelete = d.querySelectorAll(".delete")

            editEvents($btnEditar)
            deleteEvents($btnDelete)

           
            
        },
        error: (err) =>{console.log(err)},
        data: null

    })
}

const register = () =>{
    ajax({
        url: "http://localhost:3000/penitentes",
        method:"POST",
        success: (res) => {
            console.log(res)
            let totales= d.querySelector('input[name="id"]')
            totales.value, totales.textContent = res.length+1

        },
        error: (err) =>{
            
            console.warn(err)
        },
        data: null

    })
}

const edit = ()=>{};
const del = ()=>{};
const create = ()=>{};




d.addEventListener("DOMContentLoaded", getAll)
d.addEventListener("submit", e=>{
    if (e.target === $form) {
        e.preventDefault()
        if (e.target.id.value) {
            //POST
            ajax({
                url: "http://localhost:3000/penitentes",
                method: "POST",
                success: (res)=>{
                    location.reload()
                },
                error: ()=>{
                    $form.insertAdjacentHTML("afterend",`<p><b>${err}</b></p>`)
                },
                data : {
                    id: d.querySelector('input["name=id"]').value,
                    nombre: d.querySelector('input[""name=nombre]').value 
                }

            })
        }else{
            //PUT
        }
    }
})
