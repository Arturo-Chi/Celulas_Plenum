//No confundir una etiqueta html con un nodo
/*
Diferentes tipos de nodos
comentarios de html
etiquetas
textos para etiquetas

Para interactira con el html como desarrollador web no nos interesan muchos nodos 
Pues lo que nos interesa son los nodos de TIPO ELEMENTO y TIPO TEXTO

IMPORTANTE para el dom traversey

Entonces, que métodos tiene el DOM para poder capturar elementos del documento HTML en variables de JS
*/

//Que se usaban antes pero ahora es obsoleto
console.log(document.getElementsByTagName("li")) //HTMLCollection
console.log(document.getElementsByClassName("card"))//HTMLCollection
console.log(document.getElementsByName("nombre"))//NodeList
console.log(document.getElementById("menu"))//HTMLElement


//TODOS ESTOS YA HAN SIDO REEMPLAZADOS POR
console.log(document.querySelector("#menu"))
//Recibe como parametro un selector valido de css, un id, clase, etiqueta, tiene que especificar # si es id o . si es clase

//Internamente este método es más tardado en ejecución que los primeros, por eso aun se sigue usando GETELEMENTBYID

//Sin embargo, este primer método solo trae al primero de los elementos que cumpla con la identificador, para traer todos los del DOM usamos:

console.log(document.querySelectorAll("a").length)
console.log(document.querySelectorAll("a"))

document.querySelectorAll("a").forEach((el) => console.log(el))

//Con clases
console.log(document.querySelector(".card"))
console.log(document.querySelectorAll(".card"))
console.log(document.querySelectorAll(".card")[2]) //Así se aplica cuando queramos obtener un elemento en cierta posicion

//Podemos incluso ser más especfícicos al momento de hacer los queryselector
console.log(document.querySelector("#menu li"))
console.log(document.querySelectorAll("#menu li"))

//Con esto vamos a obtener los li que se encuentren dentro de algún contenedor con el id de menú



//No dejaremos de usar estos metodos a partir de ahora:

document.getElementById()
document.querySelector()
document.querySelectorAll()

//Video #63 siguiente