import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>HouseHunt</h1>
      <p>House Rent Management System</p>

      <div style={{ marginTop: "20px" }}>
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/register">
          <button style={{ marginLeft: "10px" }}>Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;