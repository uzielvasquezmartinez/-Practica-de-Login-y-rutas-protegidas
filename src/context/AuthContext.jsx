import { createContext, useContext, useState } from "react";

export const USERS = [
  {
    user: "admin",
    nombreCompleto: "Uziel Vasquez Martinez",
    rol: "admin",
    contraseña: "admin123",
  },
  {
    user: "Profesor",
    nombreCompleto: "Jose Emilio Enriquez Torres",
    rol: "user",
    contraseña: "user123",
  },
  {
    user: "Jetzemany",
    nombreCompleto: "Jetzemany Muñiz Granda",
    rol: "user",
    contraseña: "Jetzemany456",
  },
  {
    user: "Abraham",
    nombreCompleto: "Uziel Alberto Abraham Rendon",
    rol: "admin",
    contraseña: "abraham789",
  },
  {
    user: "Erick",
    nombreCompleto: "Erick Yahir Flores Lopez",
    rol: "user",
    contraseña: "erick321",
  },
   {
    user: "Zagal",
    nombreCompleto: "Diego Zagal Garcia",
    rol: "user",
    contraseña: "zagal987",
  },
];

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const login = (username, password) => {
    const found = USERS.find(
      (u) => u.user === username && u.contraseña === password
    );
    if (found) {
      setCurrentUser(found);
      return { success: true };
    }
    return { success: false, error: "Usuario o contraseña incorrectos." };
  };

  const logout = () => setCurrentUser(null);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, users: USERS }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
