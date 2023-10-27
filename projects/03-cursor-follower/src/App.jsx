import { useEffect, useState } from "react";
import CursorFollower from "./components/CursorFollower";

function App() {
  //Estado para saber si el seguidor esta activo o no
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  //Efecto para suscribirse al evento de movimiento del mouse
  useEffect(() => {
    //Funcion que se ejecuta cuando el mouse se mueve
    const handleMove = (evt) => {
      const { clientX, clientY } = evt;
      setPosition({ x: clientX, y: clientY });
    };
    //Suscribirse al evento de movimiento del mouse
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }
    //Limpiar la suscripcion del window (cleanup)
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);
  return (
    <>
      <CursorFollower
        enabled={enabled}
        setEnabled={setEnabled}
        position={position}
      />
    </>
  );
}

export default App;
