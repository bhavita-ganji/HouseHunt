import { useState } from "react";
import axios from "axios";

function AddProperty() {
  const [formData, setFormData] = useState({
    propertyType: "",
    propertyAdType: "",
    propertyAddress: "",
    ownerContact: "",
    propertyAmt: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddProperty = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await axios.post("http://localhost:8000/api/owner/add-property", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Property added successfully");

      setFormData({
        propertyType: "",
        propertyAdType: "",
        propertyAddress: "",
        ownerContact: "",
        propertyAmt: "",
        additionalInfo: "",
      });
    } catch (error) {
      alert(error.response?.data?.message || "Failed to add property");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Add Property</h1>

      <form onSubmit={handleAddProperty}>
        <input
          name="propertyType"
          placeholder="Property Type"
          value={formData.propertyType}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          name="propertyAdType"
          placeholder="Property Ad Type"
          value={formData.propertyAdType}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          name="propertyAddress"
          placeholder="Property Address"
          value={formData.propertyAddress}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          name="ownerContact"
          placeholder="Owner Contact"
          value={formData.ownerContact}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          name="propertyAmt"
          type="number"
          placeholder="Rent Amount"
          value={formData.propertyAmt}
          onChange={handleChange}
          required
        />
        <br /><br />

        <textarea
          name="additionalInfo"
          placeholder="Additional Info"
          value={formData.additionalInfo}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Add Property</button>
      </form>
    </div>
  );
}

export default AddProperty;