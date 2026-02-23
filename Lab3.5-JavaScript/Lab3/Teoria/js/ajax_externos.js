//Mecanismos con Librerías Externas

const d = document;

(()=>{
    const $axios = d.getElementById("axios");
    const $fragment = d.createDocumentFragment();

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then( res =>{
        console.log(res)
        console.log(res.data)
    })
    .catch( (err)=>{
        console.log(err)
    })
    .finally( () => console.log("finally de axios"))

    //En este formato, trabajando con AXIOS, obtendremos como respuesta un objeto:
    // {data: Array(10), status: 200, statusText: '', headers: r, config: {…}, …}
    //Para acceder a los datos, debemos a acceder a su propiedad data
})();