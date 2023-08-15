let parrafo = document.querySelector('p')
let nombreStorage = localStorage.getItem('nombre');

function mayus(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let nombreMayus = mayus(nombreStorage)

parrafo.textContent = `¡Hola ${nombreMayus}! Somos figure una pagina web dedicada especificiamente a realizar calculos matematicos para sacar datos de cualquier figura geometrica.`

//////////////////////////////////////////////////////////




