let bandera = false;
const menu = document.querySelector(".menu")
const element = document.querySelector(".btn");
function botonPresionado(){
    if(bandera === false){
        menu.style.display = "block";
        bandera = true;
    }else{
        menu.style.display = "none";
        bandera = false;
    }
}


console.log(element.get)
