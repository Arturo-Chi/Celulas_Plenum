//Validaciones de formulario
const nameRx = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/;
const emailRx = /^[a-z0-9\.\-_]+@(gmail|outlook|hotmail)\.com$/;

//^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\$
//^.{1,255}$

const d = document;
export default function validation(){
    const $fields = d.querySelectorAll("#field")
    //console.log($fields)
    const [name, email, subject, comentary] = $fields;
    console.log("ESTE ES UN MENSAJE DE PRUEBA")
    

    d.addEventListener("keyup", (e) => {
        if(e.target === name){
            console.log(e.target.value)
            if(nameRx.test(e.target.value)){
                name.classList.add("valid")
            }else{
                name.classList.add("invalid")
            }
        }else if(e.target === email){
            let emailV = emailRx.test(e.target.value)
            if(emailV){
                console.log(emailV)
                console.log(e.target.value)
                email.classList.add("valid")
            }else{
                email.classList.add("valid")
                
            }
        }
        
    });
}