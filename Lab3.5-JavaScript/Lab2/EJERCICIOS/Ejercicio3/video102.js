

//Validaciones de formulario
const nameRx = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/;
const emailRx = /^[a-z0-9\.\-_]+@(gmail|outlook|hotmail)\.com$/;

//^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\$
//^.{1,255}$

const d = document;
/*export default function validation(){
    const $fields = d.querySelectorAll("#field")
   
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
}*/


export default function formValidation(){
    const $form = d.querySelector(".validation-form");
    const $inputs = d.querySelectorAll(".validation-form [required]");
    //console.log("Entradas del formulario")
    
    $inputs.forEach((input) => {
      
        //console.log(input)
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("validation-error", "none")
        input.insertAdjacentElement("afterend", $span);
       
    });

    d.addEventListener("keyup",(e) => {
        if(e.target.matches(".validation-form [required]")){
            let $input = e.target,
            pattern = $input.pattern || $input.dataset.pattern;
        
            if (pattern && $input.value!=="") {
                let regex = new RegExp(pattern);
                //console.log($input.value)
                !regex.exec($input.value)
                ? d.getElementById($input.name).classList.add("now-active")
                : d.getElementById($input.name).classList.remove("now-active"); 
            }
        }
    });


    d.addEventListener("submit", (e)=>{
        e.preventDefault();
        const $loader = d.querySelector(".loader");
        const $response = d.querySelector(".response");
        $loader.classList.remove("none")
        setTimeout(
            () =>{
                $loader.classList.add("none");2
                $response.classList.remove("none")
                $form.reset();
            }, 2000
        );
    });
}