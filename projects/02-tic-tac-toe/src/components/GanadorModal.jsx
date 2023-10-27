/* eslint-disable react/prop-types */
import Casilla from "./Casilla";

function GanadorModal({ ganador, reiniciarJuego }) {
  if (ganador === null) return null;
  return (
    <section className="winner">
      <div className="text">
        <h2>{ganador === false ? "Empate" : "Ganó"}</h2>
        <div className="win">{ganador && <Casilla>{ganador}</Casilla>}</div>
        <button onClick={reiniciarJuego}>Reiniciar</button>
      </div>
    </section>
  );
}

export default GanadorModal;
