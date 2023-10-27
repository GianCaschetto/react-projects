import { useState } from "react";
import Casilla from "./components/Casilla";
import confetti from "canvas-confetti";
import { TURNOS } from "./constants";
import { checkFinalJuego, checkGanador } from "./utilities";
import GanadorModal from "./components/GanadorModal";
import Tablero from "./components/Tablero";

function App() {
  const [tablero, setTablero] = useState(() => {
    const tableroLocalStorage = window.localStorage.getItem("tablero");
    return tableroLocalStorage
      ? JSON.parse(tableroLocalStorage)
      : Array(9).fill(null);
  });
  const [turno, setTurno] = useState(() => {
    const turnoLocalStorage = window.localStorage.getItem("turno");
    return turnoLocalStorage ?? TURNOS.x;
  });
  const [ganador, setGanador] = useState(null);

  const updateTablero = (id) => {
    if (tablero[id] || ganador) return;
    const nuevoTurno = turno === TURNOS.x ? TURNOS.o : TURNOS.x;
    setTurno(nuevoTurno);

    const nuevoTablero = [...tablero];
    nuevoTablero[id] = turno;
    setTablero(nuevoTablero);

    //Determinar el tablero y el turno en localstorage
    window.localStorage.setItem("tablero", JSON.stringify(nuevoTablero));
    window.localStorage.setItem("turno", nuevoTurno);

    const nuevoGanador = checkGanador(nuevoTablero);
    if (nuevoGanador) {
      confetti();
      setGanador(nuevoGanador);
    } else if (checkFinalJuego(nuevoTablero)) {
      setGanador(false);
    }
  };

  const reiniciarJuego = () => {
    setTablero(Array(9).fill(null));
    setTurno(TURNOS.x);
    setGanador(null);
    window.localStorage.removeItem("tablero");
    window.localStorage.removeItem("turno");
  };

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={reiniciarJuego}>Reiniciar</button>
      <section className="game">
        <Tablero tablero={tablero} updateTablero={updateTablero} />
      </section>
      <section className="turn">
        <Casilla isSelected={turno === TURNOS.x}>{TURNOS.x}</Casilla>
        <Casilla isSelected={turno === TURNOS.o}>{TURNOS.o}</Casilla>
      </section>
      <GanadorModal ganador={ganador} reiniciarJuego={reiniciarJuego} />
    </main>
  );
}

export default App;
