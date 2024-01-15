
function main() {

    let num = 99
    let nombre = "Pedro"
    let serHumano = true
    let altura = 1.76
    let listado = [10, 20, "20", true]
    let alumno = {
        nombre: "Morales",
        codigo: "20203263",
        alumnoSistemas: true,
        hobbies: ["leer", "programar"],
        universidad: {
            nombre: "Ulima",
            direccion: "Calle 32 San Isidro",
        }
    }

    let datoNulo = null
    let datoIndefinido = undefined

    //texto directo a la consola
    console.log(listado[1])
    console.log(alumno.universidad.nombre)
    console.log(datoNulo)

}

main()
