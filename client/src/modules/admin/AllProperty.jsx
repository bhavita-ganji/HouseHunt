import { useEffect, useState } from "react";
import axios from "axios";
import AllPropertiesCards from "../user/AllPropertiesCards";

function AllProperty() {
  const [properties, setProperties] = useState([]);

  const fetchProperties = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.get("http://localhost:8000/api/admin/properties", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setProperties(res.data);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>All Properties</h1>

      {properties.map((property) => (
        <AllPropertiesCards key={property._id} property={property} />
      ))}
    </div>
  );
}

export default AllProperty;