import React, { createContext } from "react";

const AuthContext = createContext();
function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

const getLogin = () => {
  const token = localStorage.getItem("user");
  if (token !== null) {
    return {
      logged: true,
      token,
      ...parseJwt(token),
    };
  }
  return {
    logged: false,
  };
};

function AuthProvider({ children }) {
  const [auth, setAuth] = React.useState(getLogin());

  const authenticate = React.useCallback(
    (token) => {
      localStorage.setItem("user", token);
      setAuth(getLogin());
    },
    [useAuth]
  );

  const value = React.useMemo(
    () => ({
      auth,
      authenticate,
    }),
    [auth, authenticate]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
