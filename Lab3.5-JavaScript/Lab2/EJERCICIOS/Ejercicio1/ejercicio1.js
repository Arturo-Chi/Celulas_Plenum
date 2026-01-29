let bandera = false;

const menu = document.querySelector(".menu")
const element = document.querySelector(".btn")

function buttonPressed(){
    if(bandera === false){
        menu.style.display = "block"
        bandera = true;
    }else{
        menu.style.display = "none";
        bandera = false;
    }
}


//Segundo Intento
function buttonPressd(){
    if(menu.classList.contains("is-active")){
        menu.classList.remove("is-active")
    }else{
        menu.classList.add("is-active")
    }
}




