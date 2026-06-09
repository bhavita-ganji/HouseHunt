import { useEffect, useState } from "react";
import axios from "axios";
import AllPropertiesCards from "../AllPropertiesCards";

function AllProperties() {
  const [properties, setProperties] = useState([]);

  const fetchProperties = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.get("http://localhost:8000/api/owner/properties", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setProperties(res.data);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");

    await axios.delete(`http://localhost:8000/api/owner/property/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    alert("Property deleted");
    fetchProperties();
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>My Properties</h1>
      {properties.map((property) => (
        <AllPropertiesCards key={property._id} property={property} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default AllProperties;