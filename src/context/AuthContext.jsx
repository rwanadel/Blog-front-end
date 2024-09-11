// import { createContext, useEffect, useState } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   // const [token, setToken] = useState(localStorage.getItem("token"))
//   const [token, setToken] = useState(() => {
//     const storedToken = localStorage.getItem("isLoggedIn");
//     return storedToken ? JSON.parse(storedToken) : false;
//   });

//   // const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(() => {
//     const storedLoginStatus = localStorage.getItem("isLoggedIn");
//     return storedLoginStatus ? JSON.parse(storedLoginStatus) : false;
//   });

//   // const [user, setUser] = useState(null);
//   const [user, setUser] = useState(() => {
//     const storedUer = localStorage.getItem("user");
//     return storedUer ? JSON.parse(storedUer) : null;
//   });

//   useEffect(() => {
//     const storedLoginStatus = localStorage.getItem("isLoggedIn");
//     if (storedLoginStatus) {
//       setIsLoggedIn(true);
//       //localStorage.setItem("user", JSON.stringify(user));
//     }
//   }, [isLoggedIn]);

//   useEffect(() => {
//     if (user) {
//       localStorage.setItem("user", JSON.stringify(user));
//       localStorage.setItem("userId", JSON.stringify(user._id));
//     } else {
//       localStorage.removeItem("user");
//       localStorage.removeItem("userId");
//     }
//   }, [user]);

//   const login = (token, user) => {
//     //const userId = user._id;
//     //console.log(userId);
//     setToken(token);
//     setUser(user);
//     localStorage.setItem(token, "token");
//     console.log(token);
//     console.log(user);
//     // setUser(userData);
//     localStorage.setItem("isLoggedIn", true);
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("isLoggedIn", false);
//     localStorage.removeItem(token, "token");
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    const storedToken = localStorage.getItem("token");
    return storedToken ? storedToken : null;
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    return storedLoginStatus ? JSON.parse(storedLoginStatus) : false;
  });

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
    }
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isLoggedIn", true);
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("isLoggedIn");
    }
  }, [user]);

  const login = (token, user) => {
    setToken(token);
    setUser(user);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", true);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userId");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
