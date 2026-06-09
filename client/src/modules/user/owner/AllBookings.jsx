import { useEffect, useState } from "react";
import axios from "axios";

function AllBookings() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.get("http://localhost:8000/api/owner/bookings", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setBookings(res.data);
  };

  const updateStatus = async (id, bookingStatus) => {
    const token = localStorage.getItem("token");

    await axios.put(
      `http://localhost:8000/api/owner/booking/${id}`,
      { bookingStatus },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    alert("Booking updated");
    fetchBookings();
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Owner Bookings</h1>

      {bookings.map((booking) => (
        <div key={booking._id} style={{ border: "1px solid #ccc", padding: "15px", margin: "15px" }}>
          <p><b>User:</b> {booking.userName}</p>
          <p><b>Phone:</b> {booking.phone}</p>
          <p><b>Status:</b> {booking.bookingStatus}</p>

          <button onClick={() => updateStatus(booking._id, "approved")}>Approve</button>
          <button onClick={() => updateStatus(booking._id, "rejected")}>Reject</button>
        </div>
      ))}
    </div>
  );
}

export default AllBookings;