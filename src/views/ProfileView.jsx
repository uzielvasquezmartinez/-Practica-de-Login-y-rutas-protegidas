import { useAuth } from "../context/AuthContext";

export default function ProfileView() {
  const { currentUser } = useAuth();

  const initials = currentUser?.nombreCompleto
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  return (
    <div className="view-page">
      <div className="page-header">
        <h2 className="page-title">Mi Perfil</h2>
        <p className="page-subtitle">Información de tu cuenta</p>
      </div>

      <div className="profile-card">
        <div className="profile-avatar">
          <span className="avatar-initials">{initials}</span>
        </div>

        <div className="profile-info">
          <h3 className="profile-name">{currentUser?.nombreCompleto}</h3>
          <span className={`role-badge role-badge--${currentUser?.rol} role-badge--lg`}>
            {currentUser?.rol === "admin" ? "Administrador" : "Usuario"}
          </span>
        </div>

        <div className="profile-details">
          <div className="detail-row">
            <span className="detail-label">Usuario</span>
            <span className="detail-value">@{currentUser?.user}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Nombre Completo</span>
            <span className="detail-value">{currentUser?.nombreCompleto}</span>
          </div>
      
          <div className="detail-row">
            <span className="detail-label">Rol</span>
            <span className="detail-value">{currentUser?.rol}</span>
          </div>
        </div>

        {currentUser?.rol !== "admin" && (
          <div className="profile-notice">
            <span className="notice-icon">ℹ</span>
            Tu cuenta tiene acceso de usuario estándar. Contacta a un administrador
            para solicitar permisos adicionales.
          </div>
        )}
      </div>
    </div>
  );
}
