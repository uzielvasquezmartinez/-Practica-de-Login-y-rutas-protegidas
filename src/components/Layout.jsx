import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Layout() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="app-shell">
      <nav className="navbar">
        <div className="nav-brand">
          <span className="brand-icon">◈</span>
          <span className="brand-name">Nextword</span>
        </div>

        <div className="nav-links">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link--active" : ""}`
            }
          >
            Perfil
          </NavLink>

          {/*Se va renderizando dependiendo del rol*/ }
          {currentUser?.rol === "admin" && (
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link--active" : ""}`
              }
            >
              Dashboard
            </NavLink>
          )}
        </div>

        <div className="nav-user">
          <div className="user-chip">
            <span className={`role-badge role-badge--${currentUser?.rol}`}>
              {currentUser?.rol}
            </span>
            <span className="user-name">{currentUser?.user}</span>
          </div>
          <button onClick={handleLogout} className="btn btn--ghost btn--sm">
            Salir
          </button>
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
