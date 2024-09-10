import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [token, setToken] = useState(localStorage.getItem("token"))
  const [token, setToken] = useState(() =>{
    const storedToken = localStorage.getItem('isLoggedIn');
    return storedToken ? JSON.parse(storedToken) :false;
  });


  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() =>{
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    return storedLoginStatus ? JSON.parse(storedLoginStatus) :false;
  });
  
  // const [user, setUser] = useState(null);
  const [user, setUser] = useState(() =>{
    const storedUer = localStorage.getItem('user');
    return storedUer ? JSON.parse(storedUer) :null;
  });

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = (token) => {
    setToken(token)
    localStorage.setItem(token,"token");
    console.log(token);
    // setUser(userData);
    localStorage.setItem("isLoggedIn", true);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("isLoggedIn", false);
    localStorage.removeItem(token,"token");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

