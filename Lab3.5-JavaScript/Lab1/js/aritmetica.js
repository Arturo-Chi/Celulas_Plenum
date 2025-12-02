export function sumar(a, b){
    return a+b;
}


export function restar (a, b){
    return a-b;
}


function multiplicar(a,b){
    return a*b;
}

function dividir(a,b){
    return a*b;
}

//Puedo agrupar todos los elementos a exportar y exportarlos mediante un objeto

export const aritmetica = {
    multiplicar,
    dividir

}
