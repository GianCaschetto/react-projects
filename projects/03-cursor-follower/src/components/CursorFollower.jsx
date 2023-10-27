import React from "react";

function CursorFollower({ enabled, setEnabled, position }) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: enabled
            ? `translate(${position.x}px, ${position.y}px)`
            : "translate(-100px, -100px)",
        }}
      />
      <h3>Seguidor del cursor</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguidor
      </button>
    </>
  );
}

export default CursorFollower;
