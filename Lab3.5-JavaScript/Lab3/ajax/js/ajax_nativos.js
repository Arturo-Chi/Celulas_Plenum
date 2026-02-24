/**VIDEO 106: OBJETO XMLHTTPREQUEST
 * 
 * Creamos una función  anónima autoejecutable
 * Mas tarde usaremos fetch y axios 
 * 
 * 
 * Al final se quiere que tengamos en un mismo archivo los ejercicios para poder determinar
 * Una comparativa entre peticiones con fetch, los objetos nativos y AXIOS como API externa
 */


(() => {
    console.log("------ XHR -------")
    const xhr = new XMLHttpRequest();
    //Este es el objeto especial
    
    const d = document;
    const $xhr = d.getElementById("xhr");
    const $fragment = d.createDocumentFragment();

    console.log(xhr)
    /**
     *Si hacemos algo como esto, obtendremos los siguientes datos
     * onabort
     * onerror
     * onload
     * onloaded
     * onloadstart
     * onprogress
     * onreadystatechange -> EL MAS IMPORTANTEE
     * ontimeout
     * 
     * estos y cada uno de ellos son eventos, el más importante es onreadystatechange
     *  SIN EMBARGO, HAY OTROS ELEMENTOS:
     * 
     * readyState - Estado de la petición
     * response - respuesta que va a devolver el servidor
     * responseText - Respuesta en formato textual
     * responseXML - Respuesta en formato XML
     * 
     * status - estado de la respuesta del servidor
     * statusText - Mensaje que llega con el código de respuesta
     * 
     * withCredentials - depende del acceso de la API que sea pública o privada
     * */


     /**Entonces, para poder usar nuestro xhr, es asignar un evento: readystatechange
      * 
      * se le puede asignar de dos formas:
      * 
      * xhr.onreadystatechange = (Se asigna una función)
      * 
      * xhr.addEventListener("readystatechange", función);
      */

    xhr.addEventListener("readystatechange", e =>{
        //if (xhr.readyState === 4) 
        //    console.log(xhr) 

        if (xhr.readyState !== 4) return; //Con esta linea como que se ignoran los casos en los que no se cumple con la condición
        //console.log(xhr)
       
        if(xhr.status >= 200 && xhr.status < 300) {
            //console.log("Estado de éxito")
            //console.log(xhr)
            //console.log(xhr.response)

            //JSON Tiene dos métodos:
            //PARSE, convierte una cadena JSON a Objetos de JS
            //Stringify, convierte Objetos de JS a cadena de JSON

            let json = JSON.parse(xhr.response)
            //console.log(json)

           json.forEach(el => {
                const $li = d.createElement("li")
                $li.innerHTML = `${el.name} - ${el.id}`
                $fragment.appendChild($li)
           });

           $xhr.appendChild($fragment)
            
        }else{ 
            //console.log("error")
        }
    });
    //Entonces necesita 2 instrucciones más:
    //Apertura de petición con open

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
    //Se compone de: (método HTTP, url (ENDPOINT) a la que se hará la petición)

    //Ahora sigue mandar la petición:
    xhr.send();


     /**REPASANDO LOS PASOS PARA HACER UNA Petición AJAX USANDO XMLTHTTPREQUEST
      * 1. Instancia
      * 2. Asignación de eventos
      * 3. Apertura con método y endpoint
      * 4. Envío de la petición
      */
})();


/**VIDEO 107: API FETCH
 * 
 */

(()=>{
    console.log("------ FETCH -------")
    const d = document
    const $fetch = d.getElementById("fetch")
    const $fragment = d.createDocumentFragment();

    //En este caso para fetch, no tenemos que hacer la instancia de XHR
    //Fetch funciona de la siguiente manera:

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(
        //La respuesta es un objeto que no podemos manipular textualmente  
            (res)=>{
                //console.log(res) La respuesta se encuentra en Body, que es un ReadableStream
                return (res.ok) ? res.json() : Promise.reject(res); // Este es un caso de error
                /**
                 * RES tiene varios métodos, los más destacables son:
                 * .json() - convierte el response en objetos JSON
                 * .text() - convierte el response en texto JSON
                 * 
                 */
                //Esta es la manera correcta de validar un error
            }
        )
        .then((json)=>{
            //console.log(`Este es el response de fetch:`)
            json.forEach(ob =>{
                const $li = d.createElement("li")
                $li.innerHTML = `${ob.name} -------`;
                $fragment.appendChild($li)
            });

            $fetch.appendChild($fragment)
        })
      
        .catch((error)=>{
            //console.log("Error, estamos en el fetch", error)
            let message = error.statusText || "Ocurrió un error"
            $fetch.innerHTML = `Error: ${error.status}: ${message}`;
            }
        )
        .finally(()=>{
            //console.log("Esto se ejecutará independientemente del resultado")
        }
            //A fuerza tiene que ejecutarse algo
        )
    
    /**
     * Ejecutamos la función fetch
     * Esta requiere de al menos 2 parámetros:
     * 
     * ENDPOINT o dirección del recurso
     * Objeto de opciones (método, cabeceras, cors) por defecto usa el método GET
     * 
     * ESTE MECANISMO DE FETCH TRABAJA CON PROMESAS
     * Por lo tanto la resultante de fecth nos devolverá un método then() para la siguiente iteración de código
     * PARA CAPTURAR ERRORES USAMOS CATCH
     * 
     * (Tiene el funcionamiento del if que usamos con XHR)
     * */
    
})();



/** VIDEO 108. API FETCH + ASYNC AWAIT
 * 
 */

(() => {
    
    const $async  = document.getElementById("async"),
    $fragment = document.createDocumentFragment();

    //Para este caso, usaremos nuevamente fetch, con la diferencia de que estará contenido dentro de una función asíncrona, BLOUE TRYCATCH
    async function getData(){
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/users");
            let json = await response.json();
            //console.log(json, response)

            //********** if(!response.ok) throw new Error(response.statusText);

            //LA MEJOR MANERA DE PERSONALIZAR UN ERROR ES:<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
            if(!response.ok) throw {
                status: response.status,
                statusText: response.statusText
            }
            //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

            json.forEach(ob =>{
                const $li = document.createElement("li")
                $li.innerHTML = `${ob.name} <><><><><><>`;
                $fragment.appendChild($li)
            });
            $async.appendChild($fragment)
        } catch (error) {
            console.log(error)
            let message = error.statusText || "Ocurrió un error"
            $async.innerHTML = `Error ${error.status}: ${message}`

        } finally{
            console.log("Este es el finally")
        }
    }

    getData()

    /**
     * DE ESTE MÉTODO PODEMOS VER QUE ES CÓDIGO MÁS LEGIBLE, SE ENTIENDE MÁS LO QUE SE ESTÁ REALIZANDO
     * SOLO QUE EN EL CASO DE ERRORES DEL CLIENTE TENEMOS QUE MANIPULARLO  DE ALGUNA MANERA
     * por ejemplo, al poner mal la url intencionalmente, si entrará al catch, pero no marcará error
     * 
     * Podríamos evualuar el estado ok de la petición y lanzar un error como en /****
     * Pero lo mejor es retornar un objeto con las propiedades status y status text de la response
     * Como en //<<<<<<<<<<<<<<<<<<<<<<<<<<
     * 
     * 
     */
})();


/** VIDEO 109. Librería AXIOS
 * 
 */


/** VIDEO 110. Librerías Axios + async await
 * 
 */


/** VIDEO 111. API REST: Introducción
 * 
 */


/** VIDEO 108. API FETCH + ASYNC AWAIT
 * 
 */