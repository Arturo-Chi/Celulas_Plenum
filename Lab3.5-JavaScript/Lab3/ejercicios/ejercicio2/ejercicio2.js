
const $elements = document.querySelectorAll("[data-include]")


const getEj2 = async (options) =>{
    let {url, success, error} = options
    try {

        let options = {
            method : "GET",
            headers:{
                "Content-type": "text/html; charset=utf-8"
            }
        }

        let response = await fetch(url, options);
        let parse = await response.text()

        if(!response.ok) throw {
            status: response.status,
            statusText: response.statusText
        }
        success(parse)
        console.log(parse)
    } catch (err) {
        //error(err)    
        console.log(err)
        let message = err.statusText || "Hubo un error"
        error(message)
    }
}


document.addEventListener("DOMContentLoaded", e=>{
    $elements.forEach(e => {
        console.log(e.dataset.include)
        getEj2({
            url : e.dataset.include,
            success: (html)=> e.innerHTML = html,
            error: (error)=> e.innerHTML = `<h1>${error}</h1>`
        })
    });
});

