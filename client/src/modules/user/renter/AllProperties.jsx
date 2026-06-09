import { useEffect, useState } from "react";
import axios from "axios";
import AllPropertiesCards from "../AllPropertiesCards";

function AllProperties() {
  const [properties, setProperties] = useState([]);

  const fetchProperties = async () => {
    const res = await axios.get("http://localhost:8000/api/user/properties");
    setProperties(res.data);
  };

  const handleBook = async (propertyId) => {
    const phone = prompt("Enter your phone number");
    if (!phone) return;

    const token = localStorage.getItem("token");

    await axios.post(
      "http://localhost:8000/api/user/book-property",
      { propertyId, phone },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    alert("Booking request sent");
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Available Properties</h1>
      {properties.map((property) => (
        <AllPropertiesCards key={property._id} property={property} onBook={handleBook} />
      ))}
    </div>
  );
}

export default AllProperties;