/*
DOM -> Document Object Model
Es la API que nos permite manejar HTML con JS

*/

/*
console.log("Elementos del Documento");
console.log(window.document);

let texto = "Hola soy Arturo"
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto)
*/

/*
Esto se trata de una introducción al DOM y algunos conceptos principales
*/

console.log("Elementos del Documento")
//Ya habíamos visto antes que el elemento padre de los navegadores es el objeto Window
//Y que de ella cuelgan todas las APIS

console.log(window.document)
console.log(document)

//Esta API en particular posee ciertas propiedades y elementos a los que podemos acceder mediante la notación de punto

console.log(document.head) //Devuelve la parte head del documeto HTML
console.log(document.body) //Devuelve escrito en el body
console.log(document.HTML) //Esto no existe, para obtener la etiqueta html usamos
console.log(document.documentElement) //Solamente nos trae el tipo de document

//Acceder al tipo de documento
console.log(document.doctype)
console.log(document.characterSet)
console.log(document.title)

//Si el documento HTML tuviera enlaces
// Todos los elementos que podamos obtener con el DOM son colecciones, se identifican con corchetes OJO, no se deben confundir con arreglos, ya que no lo son, y tampoco se pueden usar los métodos habituales de los arreglos

/*
1. Primero hay que guardar la colección dentro de un arreglo para usar los métodos
2. El único método que si comparten es el .forEach
*/
console.log(document.links)
console.log(document.images)
console.log(document.forms) //Accede a formularios dentro de la página
console.log(document.styleSheets) //Colección de las hojas de estilos
console.log(document.scripts) 


//Mapeo de selección del usuario
console.log(document.getSelection().toString()) 
//Esto al principio no va a cargar, se puede complementar con el setTimeOut

setTimeout(() => {
    console.log(document.getSelection().toString()) 
}, 3000);

document.writeln("<h2>Hola Mundo, esta es una prueba de resistencia XDDXDXDXDX</h2>");

document.write("<h2>XDDDDDD</h2>")