

class Validation {

   
    static #contieneInvalido(arreglo, tipo){
        const invalido = (elemento) => typeof elemento !== tipo;
        return arreglo.some(invalido);
    }   

    static validarArreglos(arreglo = undefined, tipo){
        if(!arreglo) return console.warn("No se especificó un arreglo a validar");
        if(!(arreglo instanceof Array)) return new Error("No es un arreglo")
        this.tipo = tipo || "number";

        return Validation.#contieneInvalido(arreglo, tipo);
    }
}


class Pelicula{
    static movie_genres = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary","Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];

    constructor(data = undefined){
        if(typeof data !== "object") throw new Error("El valor de entrada debe de ser un objeto, no "+typeof data)
        if(data instanceof Array) throw new Error("La entrada no puede ser una lista");

        this.setId = data.id;
        this.setTitle = data.title;
        this.setDirector = data.director;
        this.setYear = data.year;
        this.setCountries = data.countries;
        this.setGenres = data.genres;
        this.setRating = data.rating;
    }

    set setId(id = undefined){
        if(!id) return console.warn("No se especificó un id")
        if(typeof id !== "string") throw new Error("El tipo de dato del id es incorrecto")
        
        const regExpId = /^[a-z]{2}\d{7}$/i;
        if(!regExpId.test(id)) console.warn("El id no tiene el formato de 2 letras y 7 dígitos")
        
        this.id = id;
    }

    set setTitle(title = undefined){
        if(!title) return console.warn("No se especificó un title")
        if(typeof title !== "string") throw new Error("El tipo de dato del title es incorrecto");
        if(title.length > 100) return console.warn("La longitud del titulo debe ser menor a los 100 caracteres");

        this.title = title;
    }
    
    set setDirector(director = undefined){
        if(!director) return console.warn("No se especificó un nombre del director")
        if(typeof director !== "string") throw new Error("El tipo de dato del nombre del director es incorrecto");
        if(director.length > 50) return console.warn("El nombre del director no debe de superar los 50 caracteres");

        this.director = director;
    }

    set setYear(year = undefined){
        if(!year) return console.warn("No se especificó el año de la película")
        if(typeof year !== "number" || isNaN(year)) throw new Error("El tipo de dato en año es incorrecto");
        let numberToString = year;
        let cadenaYear = numberToString.toString();
        const regExpYear = /^\d{4}$/;
        if(!regExpYear.test(cadenaYear)) return console.warn("El año especificado, se encuentra fuera de rango");

        this.year = year;
    }
    set setCountries(countries = undefined){
        if(Validation.validarArreglos(countries, "string")) throw new Error("El arreglo contiene datos no correspondientes");
        this.countries = countries;
    }

    set setGenres(genres = undefined){
        if(Validation.validarArreglos(genres, "string")) throw new Error("El arreglo tiene datos inválidos");
        if(!Pelicula.#esGenero(genres)) console.warn("Uno de los géneros en la lista es incorrecto")

        this.genres = genres;
        
    }

    set setRating(rating = undefined){
        if(isNaN(rating) || typeof rating !== "number") throw new Error("El tipo de dato de la calificación es incorrecto");
        if(rating > 10 || rating <0) console.warn("El rango de la calificación es de 0 - 10")
        let numberToString = rating;
        let cadenaRating = numberToString.toString();
        const regExpRating = /\d{1}\.\d{1}/

        if(!regExpRating.test(cadenaRating)) return console.warn("El rating solo debe llevar un dígito después del punto")
        this.rating = rating;
    
    }

    getfichaTecnica(){
        return `ID: ${this.id}\nTítulo: ${this.title}\nDirector: ${this.director}\nAño: ${this.year}\nPaíses: ${this.countries}\nGéneros: ${this.genres}\nCalificación: ${this.rating}`;
    }

    static generosAceptados(){
        console.log(this.movie_genres);
    }
    static #esGenero(listaGeneros){
        const existeGenero = (elemento) => Pelicula.movie_genres.includes(elemento);
        return listaGeneros.every(existeGenero);
    }

}



//Al instanciar una clase esta siempre debe de ser const:
//las clase recibirá un objeto al momento de instanciarse;

/*
 id -> 9 caracteres, 2 letras, 7 números
 title < 100 caracteres de longitud
 director < 50 caracteres de longitud
 year -> numero entero de 4 digitos
 country -> introducidos en forma de arreglo
 gender -> introducidos en forma de arreglo
 que los generos introducidos estén dentro de los generos aceptados
 Método estático que devuelva los géneros aceptados
 rating -> número entre 0 y 10, puede ser decimal de una posición
 método que devuelva la ficha técnica

 A partir de un arreglo con la información de 3 películas genera instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

 Géneros aceptados = Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western




*/


const data = {
    id:"YZ1234567",
    title:"Titanes del Pacífico",
    director: "Guillermo del Toro",
    year: 2014,
    countries: ["Canadá", "EEUU"],
    genres:["Action", "Adventure"],
    rating: 9.8
};





let arregloPeliculas = [
    {
        id:"tt3027834",
        title: "Frankenstein",
        director: "Guillermo del Toro",
        year: 2025,
        countries: ["EEUU", "UK"],
        genres: ["Drama", "Fantasy", "Horror"],
        rating: 7.5,
    },
    {
        id:"tr1768940",
        title:"The Velocipastor",
        director:"Brendan Steere",
        year: 2018,
        countries: ["Ukraine", "EEUU"],
        genres: ["Action","Adventure","Comedy"],
        rating: 5.1,
    },
    {      
        id: "te5312678",
        title: "Back to the Future",
        director: "Robert Zemeckis",
        year: 1985,
        countries: ["EEUU"],
        genres: ["Adventure", "Comedy", "Sci-Fi"],
        rating: 8.5,
    }

]

const pelicula = new Pelicula(data);
console.log(pelicula.getfichaTecnica())
Pelicula.generosAceptados();


(function(data){
    if(!data) throw new Error("No hay ninguna entrada")
    try {
        for (const element of data) {
            let pelicula = new Pelicula(element);
            console.log(pelicula.getfichaTecnica());
        }
    } catch (error) {
        console.log(error);
    }

})(arregloPeliculas);

