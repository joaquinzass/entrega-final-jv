///////////////////////////////////

let miBoton = document.querySelector('#send')
let input = document.getElementById('text')
let getItemLocal = localStorage.getItem('nombre')

getItemLocal && (window.location.href = "./pages/subMain.html")


function namee() {
    let miUser = input.value
    localStorage.setItem('nombre', miUser)

    if (miUser) {
        window.location.href = "./pages/subMain.html";
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar los datos!',
            showConfirmButton: false,
            width: 400,
            timer: 1500,
        })
    }
}

miBoton.addEventListener("click",namee)









