import React, { createContext } from "react";

const AuthContext = createContext();

const isLogin = () => {
  const token = localStorage.getItem("user");
  return token !== null;
};

function AuthProvider({ children }) {
  const [logged, setLogged] = React.useState(isLogin());
  return (
    <AuthContext.Provider value={{ logged, setLogged }}>
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
