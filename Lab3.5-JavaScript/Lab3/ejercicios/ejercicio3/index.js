const d = document,
$fileInput = d.querySelector("input#upload-btn"),
$btnUpload = d.querySelector(".btn")



//Delegación de eventos
//d.addEventListener("click", e=>{
//    if(e.target===$btnUpload){
//        e.preventDefault()
//        
//        
//        $fileInput.click()
//    }
//})
const get = async(file) =>{
    let n = await file.arrayBuffer()
    console.log(await n)
}

const uploader = (file) =>{
    
    console.log(file)
    let xhr = new XMLHttpRequest()

    //nuevo tipo de objeto
    let formdata = new FormData()
    formdata.append("file", file)

    xhr.addEventListener("readystatechange", e=>{
        if (xhr.readyState !== 4) return;
        if (xhr.status >= 200 && xhr.status <300) {
           console.log("cd", xhr.responseText)
        } else {
            let message = xhr.statusText || "Ocurrió un error"
            console.log(message)
        }
    })

    xhr.open("POST", "assets/loader.php")
    xhr.setRequestHeader("enctype", "multipart/form-data")
    xhr.send(formdata)  
}


$fileInput.addEventListener("change", e=>{
    if(e.target === $fileInput){
        //console.log(e.target.files)   
        const files = Array.from(e.target.files);
        files.forEach(f=> {
            uploader(f)
        });
    }

    
    //get(archivo)
})


//subirlo a servidor
