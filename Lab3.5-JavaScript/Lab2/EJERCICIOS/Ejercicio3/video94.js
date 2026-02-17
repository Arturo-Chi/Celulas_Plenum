//Detección de la webcam
const d = document, n = navigator;
export default function webcam(id){
    const $idwebcam = d.getElementById(id)
    if(n.mediaDevices.getUserMedia){
        n.mediaDevices
        .getUserMedia({video: true, audio:false})
        .then(stream => {
            console.log(stream)
            $idwebcam.srcObject= stream;
            $idwebcam.play();
        })
        .catch(err=>{
            $idwebcam.insertAdjacentHTML("beforebegin", 
                `<p><mark>Sucedió un error ${err}</mark></p>`);
           // console.log(err)
        }) 
    }
    
    
}
//console.log(n.MediaDevices.getUserMedia);
//Esta es una promesa