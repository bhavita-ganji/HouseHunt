import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function RequireAdmin({ children }) {
  const navigate = useNavigate();
  const [status, setStatus] = useState("pending"); // pending | allowed | denied

  const user = useMemo(() => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }, []);

  const isAdmin = user?.type === "admin";

  useEffect(() => {
    if (isAdmin) {
      setStatus("allowed");
      return;
    }

    setStatus("denied");
    navigate("/login", { replace: true });
  }, [isAdmin, navigate]);

  if (status === "pending") return null;
  if (!isAdmin) {
    return <div style={{ padding: "30px" }}>Access Denied</div>;
  }

  return children;
}

export default RequireAdmin;


