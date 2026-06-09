import { Link } from "react-router-dom";

function AdminHome() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: "30px" }}>
      <h1>Admin Dashboard</h1>
      <h3>Welcome, {user?.name}</h3>

      <Link to="/admin/users">
        <button>All Users</button>
      </Link>

      <Link to="/admin/properties">
        <button style={{ marginLeft: "10px" }}>All Properties</button>
      </Link>

      <Link to="/admin/bookings">
        <button style={{ marginLeft: "10px" }}>All Bookings</button>
      </Link>
    </div>
  );
}

export default AdminHome;