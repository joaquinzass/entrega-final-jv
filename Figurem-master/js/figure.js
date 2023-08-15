fetch('../js/data.json')
    .then((respuesta) => respuesta.json())
    .then((figuras) => {
        const triangulo = figuras[0]
        const cuadrado = figuras[1]
        const circulo = figuras[2]
        const rectangulo =  figuras[3]


    let nav = document.querySelector(".nav-sub")
    nav.innerHTML = `<h1>Seleccionar figura para calcular su <span>area</span>
                        <div class="containerFigure-sub">
                            <img class="imgTriangulo" src="${triangulo.imgUrl}">
                            <img class="imgCuadrado"  src="${cuadrado.imgUrl}">
                            <img class="imgCirculo"  src="${circulo.imgUrl}">
                            <img class="imgRectangulo"  src="${rectangulo.imgUrl}">
                        </div>`

    let cardContaniner = document.querySelector(".card-contaniner-sub")
    cardContaniner.innerHTML = `<img src="../images/figuraGeoilus.png">`

    var resultadosTriangle = []   /* local storage */
    var resultadosCuadrado = []   /* local storage */
    var resultadosCirculo = []   /* local storage */   
    var resultadosRectangulo = []   /* local storage */

    let historyContainer = document.querySelector("#history-container")


    let imgTriangulo = document.querySelector(".imgTriangulo")
    imgTriangulo.addEventListener("click", trianguloArea)

    let imgCuadrado = document.querySelector(".imgCuadrado")
    imgCuadrado.addEventListener("click", cuadradoArea)

    let imgCirculo = document.querySelector(".imgCirculo")
    imgCirculo.addEventListener("click", circuloArea)

    let imgRectangulo = document.querySelector(".imgRectangulo")
    imgRectangulo.addEventListener("click", rectanguloArea)



    function trianguloArea() {
        cardContaniner.innerHTML = `<div class="one-sect">
                                    <h3> ${triangulo.nombre} </h3>
                                    <img src="${triangulo.imgUrl}">
                                    <p>Base: <input id="baseTriangle" type="number" placeholder="Ingrese base"></p>
                                    <p>Altura: <input id="alturaTriangle" type="number" placeholder="Ingrese altura"></p>
                                    <p>Resultado: <input id="resultTriangle" type="text" placeholder="Resultado"></p>
                                    <button class="btnTriangle">Enviar</button>
                                    <button class="btnDelete">Borrar</button>
                                    </div>
                                    <span></span>
                                    <div class="two-sect">
                                    <h4>¿Como calculamos el area del ${triangulo.nombre}?</h4>
                                    <p>El área o superficie de un triángulo cualquiera es igual al producto de la base por la altura dividido por dos. (La vamos a representar por S en lugar de por A para evitar coincidencias con el vértice A).</p>        
                                    <img src="../images/formulas/triangle/formula.png">
                                    </div>`



        let btnTriangle = document.querySelector(".btnTriangle")
        btnTriangle.addEventListener("click", resultadoTriangle)
        
        let btnDelete = document.querySelector(".btnDelete")
        btnDelete.addEventListener("click", () => {
            trianguloArea()
        })
        

        function resultadoTriangle() {
            var base = parseInt(baseTriangle.value)
            var altura = parseInt(alturaTriangle.value)
            var resultado = (base * altura) / 2;


            resultadosTriangle.unshift({numero1: base, numero2: altura , resultado: resultado})

            localStorage.setItem("resultado",JSON.stringify(resultadosTriangle))
            




            if (resultado > 0) {
                resultTriangle.value = resultado

                let door = document.createElement("li")
                door.innerHTML = (`El ultimo calculo fue: ${base} + ${altura} = ${resultado}`)
                historyContainer.append(door)

                
            } else if (resultado < 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingrese numeros validos!',
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingrese base y altura!',
                })
            }
        }

        var items = localStorage.getItem("resultado")
        let numeroRE = JSON.parse(items)[0].numero1
        let numeroRe = JSON.parse(items)[0].numero2
        let resultadoRE = JSON.parse(items)[0].resultado

        
        if (items) {
            liname.innerHTML = (`Ultimo calculo restaurado:  (${numeroRE}   *  ${numeroRe}) / 2 = ${resultadoRE}`)
            historyContainer.append(liname)
        }
    }



    function cuadradoArea() {
        cardContaniner.innerHTML = `<div class="one-sect">
                                    <h3> ${cuadrado.nombre} </h3>
                                    <img src="${cuadrado.imgUrl}">
                                    <p>Base: <input id="baseCuadrado" type="number" placeholder="Ingrese base"></p>
                                    <p>Resultado:<input id="resultCuadrado" type="text" placeholder="Resultado"></p>
                                    <button class="btnCuadrado">Enviar</button>
                                    <button class="btnDelete">Borrar</button>
                                    </div>
                                    <span></span>
                                    <div class="two-sect">
                                    <h4>¿Como calculamos el area del ${cuadrado.nombre}?</h4>
                                    <p>Un cuadrado es definido como una figura 2D que tiene cuatro lados de igual longitud. Un cuadrado es un tipo especial de rectángulo, ya que todos sus ángulos internos miden 90°.</p>
                                    <img src="../images/formulas/cuadrado/formula.png">
                                    </div>`

        let btnCuadrado = document.querySelector(".btnCuadrado")
        btnCuadrado.addEventListener("click", resultadoCuadrado)

        let btnDelete = document.querySelector(".btnDelete")
        btnDelete.addEventListener("click", ()=>{
            cuadradoArea()
        })


        function resultadoCuadrado() {
            let base = parseInt(baseCuadrado.value)
            var resultado = (base * 2)

            resultadosCuadrado.unshift({numero1: base , resultado: resultado})

            localStorage.setItem("resultado1",JSON.stringify(resultadosCuadrado))

            if (resultado > 0) {
                resultCuadrado.value = resultado
                
                let door = document.createElement("li")
                door.innerHTML = (`Historial: ${base} * 2 = ${resultado}`)
                historyContainer.append(door)
            
            } else if (resultado < 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingrese numeros validos!',
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingrese base!',
                })
            }
        }

        var items1 = localStorage.getItem("resultado1")
        var numeroCU = JSON.parse(items1)[0].numero1
        var resultadoCU = JSON.parse(items1)[0].resultado

        
        if (items1) {
            liname.innerHTML = (`Ultimo calculo restaurado:  ${numeroCU}   *  2 = ${resultadoCU}`)
            historyContainer.append(liname)
        }
    }

    function circuloArea() {
        cardContaniner.innerHTML = `<div class="one-sect">
                                    <h3> ${circulo.nombre} </h3>
                                    <img src="${circulo.imgUrl}">
                                    <p>Radio: <input id="radioCirculo" type="number" placeholder="Ingrese radio"></p>
                                    <p>Resultado:<input id="resultCirculo" type="text" placeholder="Resultado"></p>
                                    <button class="btnCirculo">Enviar</button>
                                    <button class="btnDelete">Borrar</button>
                                    </div>
                                    <span></span>
                                    <div class="two-sect">
                                    <h4>¿Como calculamos el area del ${circulo.nombre}?</h4>
                                    <p>El área de un círculo es pi multiplicado por el radio al cuadrado (A = π r²). Aprende cómo utilizar esta fórmula para calcular el área de un círculo cuando el diámetro está dado.</p>
                                    <img src="../images/formulas/circulo/formula.png">
                                    </div>`
                                    

        let btnCirculo = document.querySelector(".btnCirculo")
        btnCirculo.addEventListener("click", resultadoCirculo)

        let btnDelete = document.querySelector(".btnDelete")
        btnDelete.addEventListener("click",()=>{
            circuloArea()
        })



        function resultadoCirculo() {
            let radio = parseInt(radioCirculo.value)
            var resultado = (3.144 * (radio) * 2)

            resultadosCirculo.unshift({numero1: radio , resultado: resultado})

            localStorage.setItem("resultado2",JSON.stringify(resultadosCirculo))

            if (resultado > 0) {
                resultCirculo.value = resultado
                
                let door = document.createElement("li")
                door.innerHTML = (`Historial: 3.144 * ${radio} * 2 = ${resultado}`)
                historyContainer.append(door)

            } else if (resultado < 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingrese numeros validos!',
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingrese radio!',
                })
            }
        }

        var items2 = localStorage.getItem("resultado2")
        let numeroCC = JSON.parse(items2)[0].numero1
        let resultadoCC = JSON.parse(items2)[0].resultado

        
        if (items2) {
            liname.innerHTML = (`Ultimo calculo restaurado:  3.144   *  ${numeroCC} * 2 = ${resultadoCC}`)
            historyContainer.append(liname)
        }
    }

    function rectanguloArea() {
        cardContaniner.innerHTML = `<div class="one-sect">
                                    <h3> ${rectangulo.nombre} </h3>
                                    <img src="${rectangulo.imgUrl}">
                                    <p>Base: <input id="baseRectangulo" type="number" placeholder="Ingrese base"></p>
                                    <p>Altura: <input id="alturaRectangulo" type="number" placeholder="Ingrese altura"></p>
                                    <p>Resultado:<input id="resultRectangulo" type="text" placeholder="Resultado"></p>
                                    <button class="btnRectangulo">Enviar</button>
                                    <button class="btnDelete">Borrar</button>
                                    </div>
                                    <span></span>
                                    <div class="two-sect">
                                    <h4>¿Como calculamos el area del ${rectangulo.nombre}?</h4>
                                    <p>El área de un rectángulo es igual a la base del rectángulo por la altura del rectángulo.
                                    A diferencia del cuadrado, los lados del rectángulo son iguales dos a dos, por lo tanto, tenemos que multiplicar su base por su altura para calcular el área del rectángulo.</p>
                                    <img src="../images/formulas/rectangulo/formula.png">
                                    </div>`

        let btnRectangulo = document.querySelector(".btnRectangulo")
        btnRectangulo.addEventListener("click", resultadoRectangulo)

        let btnDelete = document.querySelector(".btnDelete")
        btnDelete.addEventListener("click",()=>{
            rectanguloArea()
        })





        function resultadoRectangulo() {
            let base = parseInt(baseRectangulo.value)
            let altura = parseInt(alturaRectangulo.value)
            var resultado = (base * altura)

            resultadosRectangulo.unshift({numero1: base ,numero2: altura , resultado: resultado})

            localStorage.setItem("resultado3",JSON.stringify(resultadosRectangulo))

            if (resultado > 0) {
                resultRectangulo.value = resultado
                
                let door = document.createElement("li")
                door.innerHTML = (`Historial: ${base} * ${altura} = ${resultado}`)
                historyContainer.append(door)

            } else if (resultado < 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingrese numeros validos!',
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingrese base y altura!',
                })
            }
        }

        var items3 = localStorage.getItem("resultado3")
        let numeroR = JSON.parse(items3)[0].numero1
        let numeroRR = JSON.parse(items3)[0].numero2
        let resultadoRR = JSON.parse(items3)[0].resultado

        
        if (items3) {
            liname.innerHTML = (`Ultimo calculo restaurado:  ${numeroR}   *  ${numeroRR} = ${resultadoRR}`)
            historyContainer.append(liname)
        }
    }

    

})

