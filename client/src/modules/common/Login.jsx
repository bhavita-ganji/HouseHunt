import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/user/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      const type = res.data.user.type;

      if (type === "admin") navigate("/admin");
      else if (type === "owner") navigate("/owner");
      else if (type === "user") navigate("/renter");
      else navigate("/renter");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="hh-container">
      <section className="hh-card" style={{ maxWidth: 520, margin: "0 auto" }}>
        <h2 className="hh-title">Login</h2>
        <p className="hh-subtitle">Welcome back. Sign in to continue.</p>

        <form className="hh-form" onSubmit={handleLogin}>
          <div className="hh-field">
            <label className="hh-label" htmlFor="login-email">
              Email
            </label>
            <input
              id="login-email"
              type="email"
              className="hh-input"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className="hh-field">
            <label className="hh-label" htmlFor="login-password">
              Password
            </label>
            <input
              id="login-password"
              type="password"
              className="hh-input"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          <div className="hh-actions">
            <button type="submit" className="hh-btn hh-btn--primary" style={{ width: "100%" }}>
              Login
            </button>
          </div>
        </form>

        <p style={{ marginTop: 14 }}>
          New user? <Link className="hh-link" to="/register">Register here</Link>
        </p>
      </section>
    </div>
  );
}

export default Login;
