import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    type: "user",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/api/user/register", formData);
      alert("Registration successful");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="hh-container">
      <section className="hh-card" style={{ maxWidth: 560, margin: "0 auto" }}>
        <h2 className="hh-title">Create account</h2>
        <p className="hh-subtitle">Join HouseHunt. Pick your role and get started.</p>

        <form className="hh-form" onSubmit={handleRegister}>
          <div className="hh-field">
            <label className="hh-label" htmlFor="reg-name">
              Name
            </label>
            <input
              id="reg-name"
              name="name"
              className="hh-input"
              placeholder="Enter name"
              onChange={handleChange}
              required
              value={formData.name}
              autoComplete="name"
            />
          </div>

          <div className="hh-field">
            <label className="hh-label" htmlFor="reg-email">
              Email
            </label>
            <input
              id="reg-email"
              name="email"
              className="hh-input"
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
              required
              value={formData.email}
              autoComplete="email"
            />
          </div>

          <div className="hh-field">
            <label className="hh-label" htmlFor="reg-password">
              Password
            </label>
            <input
              id="reg-password"
              name="password"
              className="hh-input"
              type="password"
              placeholder="Enter password"
              onChange={handleChange}
              required
              value={formData.password}
              autoComplete="new-password"
            />
          </div>

          <div className="hh-field">
            <label className="hh-label" htmlFor="reg-type">
              Role
            </label>
            <select id="reg-type" name="type" className="hh-select" onChange={handleChange} value={formData.type}>
              <option value="user">Renter</option>
              <option value="owner">Owner</option>
            </select>
          </div>

          <div className="hh-actions">
            <button type="submit" className="hh-btn hh-btn--primary" style={{ width: "100%" }}>
              Register
            </button>
          </div>
        </form>

        <p style={{ marginTop: 14 }}>
          Already registered? <Link className="hh-link" to="/login">Login here</Link>
        </p>
      </section>
    </div>
  );
}

export default Register;
