import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "../components/Button";
import Input from "../components/Input";

export default function LoginView() {
  const { login, currentUser } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (currentUser) return <Navigate to="/profile" replace />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = login(username, password);

    if (result.success) {
      navigate("/profile");
    } else {
      setError(result.error);
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-header">
          <span className="brand-icon brand-icon--lg">◈</span>
          <h1 className="login-title">NextWord</h1>
      
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          {}
          <Input
            id="username"
            label="Usuario"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ingresa tu usuario"
            autoComplete="username"
          />

          <Input
            id="password"
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
            autoComplete="current-password"
            error={error}
          />

          {}
          <Button
            type="submit"
            variant="primary"
            size="md"
            fullWidth
            loading={loading}
            disabled={!username || !password}
          >
            Iniciar sesión
          </Button>
        </form>

      </div>
    </div>
  );
}
