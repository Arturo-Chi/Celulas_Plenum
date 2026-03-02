
const d = document,
$table = d.querySelector(".crud-table"),
$form = d.querySelector(".crud-form"),
$title = d.querySelector(".crud-title"),
$template = d.querySelector(".crud-template").content,
$fragment = d.createDocumentFragment()

let $btnEditar, $btnDelete;
let nextId;

const url = "http://localhost:3000/penitentes"

function editEvents(btns){
   btns.forEach(el => {
        el.addEventListener("click", e=>{
            d.querySelector('input[name="nombre"]').value = el.dataset.nombre
            d.querySelector('input[name="id"]').value = el.dataset.id
            console.log("editar")
        })
    });
}
function deleteEvents(btns){
   btns.forEach(el => {
        el.addEventListener("click", async e=>{
            console.log("eliminar")
            let res = await axios(`${url}/${el.dataset.id}`, {
                method: "delete",
                headers: {
                    "Content-type": "application/json; charset=utf-8" 
                },
                data: null
            }) 
            
            let json= res.json()
        })
    });
}


const getAll = async () => {
    try {
        let res = await axios.get(url)
        //json = await res.data
        console.log(res.headers) 
        console.log(res.request) 
        console.log(res) //-> De esto lo que nos interesa es el data
        console.log(res.statusText)
        
        let json = res.data
        nextId = Math.max(...json.map(obj =>{
            return Number(obj.id)+1
        }))

        json.forEach(element => {
            //console.log(element)

            $template.querySelector(".id").textContent = element.id
            $template.querySelector(".nombre").textContent = element.nombre

            $template.querySelector(".edit").dataset.nombre = element.nombre
            $template.querySelector(".edit").dataset.id = element.id
            $template.querySelector(".delete").dataset.id = element.id

            let $row = d.importNode($template, true)
            $fragment.appendChild($row)
        });

        $table.querySelector("tbody").appendChild($fragment)
        editEvents(d.querySelectorAll(".edit"))
        deleteEvents(d.querySelectorAll(".delete"))
        d.querySelector('input[name="nextid"]').value = nextId
      
        
    } catch (error) {
        console.log("Objeto de error", error.response.statusText)
        console.log("Objeto de error", error.status)
        console.log("Objeto de error", error.message)

    
    }
}





d.addEventListener("DOMContentLoaded", getAll)
d.addEventListener("submit", async e => {
    if(e.target === $form){
        if(!e.target.id.value){
           e.preventDefault()
            let res = await axios(url, {
                method: "post",
                headers: {
                    "Content-type": "application/json; charset=utf-8" 
                },
                data: {
                    id : e.target.nextid.value,
                    nombre: e.target.nombre.value
                }
            }) 
            
            let json= res.json()
            //Vamos a hacer un post

            //try {
            //    let response = await axios.post(url, {
            //        id : d.querySelector('input [name="nextid"]').value,
            //        nombre: d.querySelector('input [name="nombre"]').value
            //    })
            //    console.log("Esto es del post", response)
            //} catch (error) {
            //    console.log(error)
            //}

        }else{
            //Vamos a hacer un Put
            let res = await axios(`${url}/${e.target.id .value}`, {
                method: "put",
                headers: {
                    "Content-type": "application/json; charset=utf-8" 
                },
                data: {
                    nombre: e.target.nombre.value
                }
            }) 
            
            let json= res.json()
        }



    }
})

/**CASO DE ÉXITO*
 * 
 * 
 * 
 * 
 * 
 * 
 */



/*CASO DE ERROR*
 *he {message: 'Request failed with status code 404', name: 'AxiosError', code: 'ERR_BAD_REQUEST', config: {…}, request: XMLHttpRequest, …}
code
: 
"ERR_BAD_REQUEST"
config
: 
{transitional: {…}, adapter: Array(3), transformRequest: Array(1), transformResponse: Array(1), timeout: 0, …}
message
: 
"Request failed with status code 404"
name
: 
"AxiosError"
request
: 
XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
response
: 
{data: 'Not Found', status: 404, statusText: 'Not Found', headers: r, config: {…}, …}
status
: 
404
stack
: 
"AxiosError: Request failed with status code 404\n    at Xe (https://cdn.jsdelivr.net/npm/axios@1.13.2/dist/axios.min.js:2:32059)\n    at XMLHttpRequest.y (https://cdn.jsdelivr.net/npm/axios@1.13.2/dist/axios.min.js:2:37068)\n    at e.<anonymous> (https://cdn.jsdelivr.net/npm/axios@1.13.2/dist/axios.min.js:2:49484)\n    at p (https://cdn.jsdelivr.net/npm/axios@1.13.2/dist/axios.min.js:2:3448)\n    at Generator.<anonymous> (https://cdn.jsdelivr.net/npm/axios@1.13.2/dist/axios.min.js:2:4779)\n    at Generator.throw (https://cdn.jsdelivr.net/npm/axios@1.13.2/dist/axios.min.js:2:3858)\n    at p (https://cdn.jsdelivr.net/npm/axios@1.13.2/dist/axios.min.js:2:9996)\n    at u (https://cdn.jsdelivr.net/npm/axios@1.13.2/dist/axios.min.js:2:10235)"
[[Prototype]]
: 
 * 
 * 
 * 
 * 
 */