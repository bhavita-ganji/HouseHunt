import { Link, useNavigate } from "react-router-dom";
import { useMemo } from "react";

function Navbar() {
  const navigate = useNavigate();

  const user = useMemo(() => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }, []);

  const type = user?.type;

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="hh-navbar">
      <div className="hh-navbar__inner">
        <div className="hh-brand">
          <div className="hh-brand__mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div>
            <Link className="hh-brand__name" to="/">
              HouseHunt
            </Link>
            <div className="hh-brand__tag">Rent management, simplified</div>
          </div>
        </div>

        <nav className="hh-nav">
          <Link className="hh-nav__link" to="/">
            Home
          </Link>
          {!type && (
            <>
              <Link className="hh-nav__link" to="/login">
                Login
              </Link>
              <Link className="hh-nav__link" to="/register">
                Register
              </Link>
            </>
          )}
          {type === "admin" && (
            <>
              <Link className="hh-nav__link" to="/admin">
                Admin
              </Link>
            </>
          )}

          {type === "owner" && (
            <>
              <Link className="hh-nav__link" to="/owner">
                Dashboard
              </Link>
            </>
          )}
          {type === "renter" && (
            <>
              <Link className="hh-nav__link" to="/renter">
                Dashboard
              </Link>
            </>
          )}

          {(type === "admin" || type === "owner" || type === "renter") && (
            <button className="hh-btn hh-btn--ghost" onClick={logout}>
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

