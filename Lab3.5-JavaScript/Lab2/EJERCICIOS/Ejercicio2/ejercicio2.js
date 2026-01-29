

const menu = document.querySelector(".menu")
function buttonPressd(){
    if(menu.classList.contains("is-active")){
        menu.classList.remove("is-active")
    }else{
        menu.classList.add("is-active")
    }
}


