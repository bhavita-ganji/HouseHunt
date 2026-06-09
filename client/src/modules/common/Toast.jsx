function Toast({ message }) {
  if (!message) return null;

  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "#222",
        color: "white",
        margin: "10px 0",
      }}
    >
      {message}
    </div>
  );
}

export default Toast;