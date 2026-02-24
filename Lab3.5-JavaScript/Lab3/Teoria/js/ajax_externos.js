//Mecanismos con Librerías Externas

const d = document;

//Video 109
(()=>{
    const $axios = d.getElementById("axios");
    const $fragment = d.createDocumentFragment();

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then( res =>{
        console.log(res)
        console.log(res.data)

        let json = res.data
        json.forEach(el => {
            const $li = d.createElement("li")
            $li.innerHTML = `${el.name} ----------- ${el.email}`
            $fragment.appendChild($li)
        });
        $axios.appendChild($fragment)
    })
    .catch( (err)=>{
        console.log(err)
        $axios.innerHTML = `Error ${err.status}: ${err.message}`
    })
    .finally( () => console.log("finally de axios"))

    //En este formato, trabajando con AXIOS, obtendremos como respuesta un objeto:
    // {data: Array(10), status: 200, statusText: '', headers: r, config: {…}, …}
    //Para acceder a los datos, debemos a acceder a su propiedad data que es una lista de objetos JSON

    //AXIOS Ya da un manejo de errores de manera predeterminada
    //Regresando datos como el código de error, mensaje de error, etc



    /**A comparación de la programnación que habiams hecho con fetch
     * En este caso solo tuvimos que usar un then, a diferencia del primero en donde tuvimos que usar dos de ellos
     * 
     * 
     */

})();


//Video 110

(()=>{
     const $axios = d.getElementById("axiosAsync")
     const $fragment = d.createDocumentFragment();

    /**Para la vericicación de acxios con progranmaocipon asincrina con await, se usa: */
    //axios.get("https://jsonplaceholder.typicode.com/users");
    //Normalmente la ejecución de axios la realizamos con la línea anterior.

    
    async function getData(){
        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/users")
            let json = res.data

            console.log("BLOQUE DE TRY", json, res)

            json.forEach(el => {
                const $li = d.createElement("li")
                $li.innerHTML = `${el.name} ----------- ${el.email}`
                $fragment.appendChild($li)
            });
            $axios.appendChild($fragment)

        } catch (error) {
            console.log(error)
        }
    }


    getData()
})();


//Video 111