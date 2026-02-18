//narrador.js

const d = document, w = window;
export default function navigatorReader(){
    const $speechSelect = d.getElementById("speech-select"),
    $speechText = d.getElementById("speech-text"),
    $speechBtn = d.getElementById("speech-btn"),
    sMessage = new SpeechSynthesisUtterance();
    
    let voces = []

    d.addEventListener("DOMContentLoaded", (e)=>{
        w.speechSynthesis.addEventListener("voiceschanged", (e) =>{
            voces = w.speechSynthesis.getVoices();
            console.log(voces)
            voces.forEach((voz) => {
                const $option = d.createElement("option")
                $option.value = voz.name;
                $option.textContent = `${voz.name} - ${voz.lang}`;
                $speechSelect.appendChild($option)
            })  
        })
    });
    d.addEventListener("change", (e)=>{
        if (e.target === $speechSelect) {
            sMessage.voice = voces.find(voz => voz.name===e.target.value)
        }
      
    });
    d.addEventListener("click", (e)=>{
        if (e.target === $speechBtn) {
            sMessage.text = $speechText.value;
            w.speechSynthesis.speak(sMessage)
  
        }
    });



}