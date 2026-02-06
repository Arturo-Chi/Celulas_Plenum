//Detección de Geolocalización

const d = document, n = navigator, w = window;

export default function getGeolocation(id){
    //trabajaremos con información de latitud y longitud terrestre
    const $id = d.getElementById(id),
    options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    const sucess= (position) => {
        let coords = position.coords;
        $id.innerHTML= `
        <p>Tu posición actual es:<p/>
            <ul>
                <li>Latitud: <b>${coords.latitude}</b></li>
                <li>Longitud: <b>${coords.longitude}</b></li>
                <li>Precisión: <b>${coords.accuracy}</b> metros</li>
                
            </ul>
            <a href = "https://www.google.com/maps/@${coords.latitude},${coords.longitude},25z" target = "_blank" rel="noopener">Ver en el mapa</a>

        `
        console.log(position)
    };
    const error= (error) => {
        $id.innerHTML = `<p><mark>Error : ${error.code}:${error.message}</mark></p>`
        console.error(`Error ${error.code} : ${error.message}`)
    };
    n.geolocation.getCurrentPosition(sucess, error, options)
}