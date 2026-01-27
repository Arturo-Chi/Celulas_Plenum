//Estilos y variable css


const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM)

//Para el caso de los styles, lo más común es acceder a ellos la notación del punto
console.log($linkDOM.style)
//Al imprimir este atributo no muestra todas las propiedades válidades dentro de CSS
//La mayoría aparecen vacías, exceptuando las que definimos en el html

console.log($linkDOM.getAttribute("style"))
//Esta segundo forma de acceso, solo nos muestra lo que tenemos escrito en el html

//Si queremos acceder a una propiedad en especial aplicamos:
console.log($linkDOM.style.backgroundColor)
//Obviando el uso de Camel Case


//Ahora, la ventana, también tiene una forma de mostrarnos el CSS que tiene
//Son más que nada ComputedStyle
console.log(window.getComputedStyle($linkDOM))

//Este nos da un resultado un tanto diferente, donde le indica una clave numérica a la propiedad de css
//En este caso, las propiedades que no hayamos modificados aparecen con valores por defecto que el navegador asigna
//Posteriormente a mostrar los indices y propiedades

//Datos que aparecen en el panel de DevTools, sección styles
//En Properties podemos ver la cadena de herencias dentro de 

//PARA ACCEDER A UNA PROPIEDAD EXACTA HACEMOS
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"))

//AHORA, PARA ESTABLECER VALORES:
$linkDOM.style.setProperty("text-decoration", "none")
$linkDOM.style.setProperty("display", "block")

//Lo mismo con notación punto:
$linkDOM.style.width= "50%";
$linkDOM.style.textAlign= "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = "0.5rem";

//Para verificar:

console.log($linkDOM.getAttribute("style"));
console.log(window.getComputedStyle($linkDOM))


//Variables CSS - Custom Properties
//Creemos unas variables, de ejemplo en el html

//Lo primero ahora es saber como podemos acceder a ellas
//Sabemos que esta en la etiqueta root

const $html = document.documentElement;
//const $body = document.querySelector("body")
const $body = document.body

console.log($body)


let varDarkColor = getComputedStyle($html).getPropertyValue(--dark-color)