import { useEffect, useState } from "react";
import axios from "axios";

function AllUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.get("http://localhost:8000/api/admin/users", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setUsers(res.data);
  };

  const approveOwner = async (id) => {
    const token = localStorage.getItem("token");

    await axios.put(
      `http://localhost:8000/api/admin/approve-owner/${id}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    alert("Owner approved");
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>All Users</h1>

      {users.map((user) => (
        <div key={user._id} style={{ border: "1px solid #ccc", padding: "15px", margin: "15px" }}>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Type:</b> {user.type}</p>
          <p><b>Approved:</b> {user.isApproved ? "Yes" : "No"}</p>

          {user.type !== "owner" && (
            <button onClick={() => approveOwner(user._id)}>Approve as Owner</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default AllUsers;