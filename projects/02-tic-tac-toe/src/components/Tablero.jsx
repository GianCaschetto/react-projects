import Casilla from "./Casilla";

export default function Tablero({ tablero, updateTablero }) {
  return tablero.map((casilla, index) => {
    return (
      <Casilla key={index} id={index} updateTablero={updateTablero}>
        {tablero[index]}
      </Casilla>
    );
  });
}
