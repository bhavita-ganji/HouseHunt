import { Link } from "react-router-dom";

function OwnerHome() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: "30px" }}>
      <h1>Owner Dashboard</h1>
      <h3>Welcome, {user?.name}</h3>

      <Link to="/owner/add-property">
        <button>Add Property</button>
      </Link>

      <Link to="/owner/properties">
        <button style={{ marginLeft: "10px" }}>My Properties</button>
      </Link>

      <Link to="/owner/bookings">
        <button style={{ marginLeft: "10px" }}>View Bookings</button>
      </Link>
    </div>
  );
}

export default OwnerHome;