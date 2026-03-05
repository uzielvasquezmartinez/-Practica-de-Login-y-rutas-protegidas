import { useAuth } from "../context/AuthContext";

export default function DashboardView() {
  const { users } = useAuth();

  return (
    <div className="view-page">
      <div className="page-header">
        <h2 className="page-title">Dashboard</h2>
        <p className="page-subtitle">Listado de todos los usuarios del sistema</p>
      </div>

      <div className="table-wrapper">
        <table className="table">
          <thead className="table__head">
            <tr>
              <th className="table__th">Usuario</th>
              <th className="table__th">Nombre completo</th>
              <th className="table__th">Rol</th>
            </tr>
          </thead>
          <tbody className="table__body">
            {users.map((u) => (
              <tr key={u.user} className="table__row">
                <td className="table__td">@{u.user}</td>
                <td className="table__td">{u.nombreCompleto}</td>
                <td className="table__td">
                  <span className={`role-badge role-badge--${u.rol}`}>
                    {u.rol === "admin" ? "Administrador" : "Usuario"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
