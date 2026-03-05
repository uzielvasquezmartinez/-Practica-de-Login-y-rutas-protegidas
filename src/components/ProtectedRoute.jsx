import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, requiredRole }) {
  const { currentUser } = useAuth();


//Si en caso de que no haya sesion, lo mandamos al login
  if (!currentUser) return <Navigate to="/login" replace />;

  // Con la ruta requiere un rol en especifico 
  if (requiredRole && currentUser.rol !== requiredRole) {
    return <Navigate to="/profile" replace />;
  }

  return children;
}
