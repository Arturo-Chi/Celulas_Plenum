const d = document,
$template = d.querySelector(".template").content,
$fragment = d.createDocumentFragment(),
$flags = d.querySelectorAll("a")

const url = "http://localhost:3000/pages"

const getHome = async ()=>{
    try {
        let response = await fetch(url),
        json = await response.json()

         if(!response.ok) throw {
            status: response.status,
            statusText: response.statusText
        }

        $template.querySelector(".title").textContent = json[0].title
        $template.querySelector(".content").textContent = json[0].content
        let clon = d.importNode($template, true)
        d.querySelector(".container").appendChild(clon)


        $flags.forEach(f =>{
            f.addEventListener("click", e=>{
                e.preventDefault()
                console.log(f.dataset.id)
                petitionGet(f.dataset.id)
            })
        });

    } catch (error) {
        console.log(error)
    }
}

const petitionGet = async (id) => {
    try {

        let response = await fetch(`${url}/${id}`),
        json = await response.json()
        console.log(json)

         if(!response.ok) throw {
            status: response.status,
            statusText: response.statusText
        }

        d.querySelector(".title").textContent = json.title
        d.querySelector(".content").textContent = json.content
        

    } catch (error) {
        console.log(error)
    }
}

d.addEventListener("DOMContentLoaded", getHome)




