import { Link } from "react-router-dom";

function RenterHome() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: "30px" }}>
      <h1>Renter Dashboard</h1>
      <h3>Welcome, {user?.name}</h3>

      <Link to="/renter/properties">
        <button>View Available Properties</button>
      </Link>
    </div>
  );
}

export default RenterHome;