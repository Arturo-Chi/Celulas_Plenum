/*
Pasando a la parte de programación con los atributos hay dos maneras de interctuar con los atributos
y también establecerles valores

*/

//La primera es mediante la notación del punto:
//Haciendo la prueba con el documento HTML Principal, probemos seleccionar su atributo LANG
let language = document.documentElement.lang
console.log(language)

//los atributos de html son de una sola palabra

//La segunda manera es mediante el método getAtributte()

let lange = document.documentElement.getAttribute("lang")
console.log(lange)

//Puede parecer que ambos funcionan de la misma manera, pero hagamos una prueba
//Accedamos al dato del enlace del documento

/**
 * Usamos el selector mediante clases
 */

console.log(document.querySelector(".link-dom").href);
//Si analizamos, en este caso nos está devolviendo todo el enlace en conjunto el de live server

//Pero si hacemos esto:
console.log(document.querySelector(".link-dom").getAttribute("href"))
//Solamente no trajo el valor que realmente estaba escrito en el atributo


//Podríamos decir entonces que es más conveniente usar el getAtribute


//Ahora, ¿Cómo establecemos nuevos valores a los atributos?
//Pues con la NOTACIÓN DE PUNTO podemos hacer algo como:

document.documentElement.lang = "en"
console.log(document.documentElement)

//Aunque en nuestro documento original ya tenemos que lang es "es", después de esa línea se da el cambio

//Ahora, con los MÉTODOS, usamos setAttribute
document.documentElement.setAttribute("lang", "es-MX")
//Recibe dos parámetros, el nombre del atributo y el nuevo valor

console.log(document.documentElement)

//Podemos guardar en variables los elementos del DOM
//Tanto con const o lent

//const es una constante, sin embargo, en el caso de arreglos y objetos no se validará que algo cambié dentro de la estructura
//Lo mismo aplica para los elementos del DOM

const $linkDOM = document.querySelector(".link-dom");

//Por eso, cuando guardemos una variable que sea de algún elemento del DOM lo mejor es usar const
//De manera adicional, al momento de declararlas, lo mejor es usar también el símbolo de dolar

//Por ejemplo, const $linkDOM = document.querySelector(".link-dom")


//Pruebas de cambios de valores en los atributos
$linkDOM.setAttribute("target","_blank");
//También podemos cambiar el valor de href:

//$linkDOM.setAttribute("href", "https://github.com/");

//IMPORTANTE: Atributo imprescindible en seguridad
$linkDOM.setAttribute("rel", "noopener");

//PARA VALIDAR SI EXISTE UN ATRIBUTO
console.log($linkDOM.hasAttribute("rel"))

//PARA ELIMINAR ATIBUTOS:
$linkDOM.removeAttribute("rel")

console.log($linkDOM.hasAttribute("rel"))

console.log(document.body);



//DATA ATRIBUTES
/**
 * Para los data atributes también podemos usar
 * notación de punto
 * getAttribute
 * removeAttirbute
 * hasAttribute
 */

console.log($linkDOM.getAttribute("data-description"))

//Recordemos que los data Atributes son los atributos que nosotros definimos
//JS los almacena a todos ellos, una propia estructura llamada dataset

console.log($linkDOM.dataset)
/*De estos podemos usar los atributos que contengan
* accediendo a ellos mediante la notación del punto
* con el nombre especificado después de "data-"
*/

console.log($linkDOM.dataset.description);

//Ahora para establecer nuevos valores usamos setAttribute() =
$linkDOM.setAttribute("data-description", "Modelo de Objetos del Documento")

console.log($linkDOM.getAttribute("data-description"))
console.log($linkDOM.dataset)

console.log("Hello", $linkDOM.dataset.name)