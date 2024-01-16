let simbolosDisponibles = ["&#128526", "&#128513","&#128565"]

let listaCasillas = []

let numeroTurno = 1
let casillaTurnoAnterior = null

function crearCasillas() {

    for (let i = 0; i < simbolosDisponibles.length; i++) {
        let casilla1 = {
            simbolo: simbolosDisponibles[i],
            mostrandoSimbolo: false,
        }
        let casilla2 = {
            simbolo: simbolosDisponibles[i],
            mostrandoSimbolo: false,
        }
        listaCasillas.push(casilla1)
        listaCasillas.push(casilla2)
    }
}

function devolverCasilla(row, col) {
    const pos = (row * 3) + col
    return listaCasillas[pos]
}

function ponerSimboloCasillas() {
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
            const but = document.getElementById( i + "_" + j)
            const casilla = devolverCasilla(i, j)
            if (casilla.mostrandoSimbolo) {
                but.innerHTML = casilla.simbolo
            } else {
                but.innerHTML = "UL"
            }
        }
    }
}

function casillaOnClick(row, col) {
    // 1. Obtener datos de la casilla que hizo click
    const casillaSeleccionada = devolverCasilla(row, col)
    if (numeroTurno == 1) {
        casillaSeleccionada.mostrandoSimbolo = true
        casillaTurnoAnterior = casillaSeleccionada
        numeroTurno = 2
        ponerSimboloCasillas()
    } else {
        casillaSeleccionada.mostrandoSimbolo = true
        // 2. Verificación si son iguales los símbolos
        if (casillaTurnoAnterior.simbolo != casillaSeleccionada.simbolo) {
            ponerSimboloCasillas()  

            setTimeout(function() {
                // Deben ocultarse los dos
                casillaSeleccionada.mostrandoSimbolo = false
                casillaTurnoAnterior.mostrandoSimbolo = false
                ponerSimboloCasillas()
                casillaTurnoAnterior = null
                numeroTurno = 1
            }, 2000)
        } else {
            // Caso Correcto
            casillaTurnoAnterior = null
            numeroTurno = 1 
            ponerSimboloCasillas()
        }
    }
}       

function main() {
    crearCasillas()
    ponerSimboloCasillas()
}

main()
