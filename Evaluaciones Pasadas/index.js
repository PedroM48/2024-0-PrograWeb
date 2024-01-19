let turnoJugador = true; // true para "X", false para "O"
let juegoTerminado = false;

function colocarLetra(boton) {
  if (!juegoTerminado && boton.textContent === "") {
    boton.textContent = turnoJugador ? "X" : "O";
    turnoJugador = !turnoJugador;
    verificarGanadorOEmpate();
  }
}

function verificarGanadorOEmpate() {
  const botones = document.getElementsByClassName("cell");

  if (alguienGano()) {
    finDelJuego(`Jugador ${turnoJugador ? "O" : "X"} ganó el juego`);
  } else if (todasCasillasOcupadas()) {
    finDelJuego("Empate");
  }
}

function alguienGano() {
  const botones = document.getElementsByClassName("cell");

  // Verificar filas
  for (let i = 0; i < 3; i++) {
    const start = i * 3;
    if (
      botones[start].textContent !== "" &&
      botones[start].textContent === botones[start + 1].textContent &&
      botones[start].textContent === botones[start + 2].textContent
    ) {
      return true;
    }
  }

  // Verificar columnas
  for (let i = 0; i < 3; i++) {
    if (
      botones[i].textContent !== "" &&
      botones[i].textContent === botones[i + 3].textContent &&
      botones[i].textContent === botones[i + 6].textContent
    ) {
      return true;
    }
  }

  // Verificar diagonal principal
  if (
    botones[0].textContent !== "" &&
    botones[0].textContent === botones[4].textContent &&
    botones[0].textContent === botones[8].textContent
  ) {
    return true;
  }

  // Verificar diagonal secundaria
  if (
    botones[2].textContent !== "" &&
    botones[2].textContent === botones[4].textContent &&
    botones[2].textContent === botones[6].textContent
  ) {
    return true;
  }

  return false;
}

function todasCasillasOcupadas() {
  const botones = document.getElementsByClassName("cell");
  for (const boton of botones) {
    if (boton.textContent === "") {
      return false;
    }
  }
  return true;
}

function finDelJuego(mensaje) {
  alert(mensaje);
  juegoTerminado = true;
  deshabilitarCasillas();
}

function deshabilitarCasillas() {
  const botones = document.getElementsByClassName("cell");
  for (const boton of botones) {
    boton.disabled = true;
  }
}
