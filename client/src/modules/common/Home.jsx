import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hh-container hh-page">
      <section className="hh-card" style={{ textAlign: "center" }}>
        <h1 style={{ marginBottom: 10 }}>HouseHunt</h1>
        <p className="hh-subtitle" style={{ fontSize: 18, marginTop: 0 }}>
          House Rent Management System
        </p>

        <div className="hh-actions" style={{ justifyContent: "center", marginTop: 18 }}>
          <Link to="/login" className="hh-btn hh-btn--primary">
            Login
          </Link>
          <Link to="/register" className="hh-btn hh-btn--ghost">
            Register
          </Link>
        </div>
      </section>

      <section className="hh-grid hh-grid--3" style={{ marginTop: 6 }}>
        <div className="hh-card">
          <div className="hh-title" style={{ fontSize: 18 }}>Admin View</div>
          <div className="hh-subtitle">Manage users, properties, and bookings.</div>
        </div>
        <div className="hh-card">
          <div className="hh-title" style={{ fontSize: 18 }}>Owner Tools</div>
          <div className="hh-subtitle">Add properties and approve booking requests.</div>
        </div>
        <div className="hh-card">
          <div className="hh-title" style={{ fontSize: 18 }}>Renter Experience</div>
          <div className="hh-subtitle">Browse available properties and request bookings.</div>
        </div>
      </section>
    </div>
  );
}

export default Home;
