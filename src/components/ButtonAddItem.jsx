export function ButtonAddItem({ onClick, children }) {
  return (
    <button className="btn btn-primary btn-xs" onClick={onClick}>
      {children}
    </button>
  );
}
