import { COMBOS_GANADORES } from "./constants";
export const checkGanador = (tableroActual) => {
    for (const combo of COMBOS_GANADORES) {
      const [a, b, c] = combo;
      if (
        tableroActual[a] &&
        tableroActual[a] === tableroActual[b] &&
        tableroActual[b] === tableroActual[c]
      ) {
        return tableroActual[a];
      }
    }
    return null;
};

export const checkFinalJuego = (tableroActual) => {
    return tableroActual.every((casilla) => casilla !== null);
};