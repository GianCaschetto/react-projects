// eslint-disable-next-line react/prop-types
function Casilla({ children, updateTablero, isSelected, id }) {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  const handleClick = () => {
    updateTablero(id);
  };
  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
}

export default Casilla;
