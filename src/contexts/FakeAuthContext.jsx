/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthent: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthent: true };
    case "logout":
      return { ...state, user: null, isAuthent: false };
    default:
      throw new Error("Invalid action");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthent }, dispatch] = useReducer(reducer, initialState);

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }

  function logout() {
    dispatch({ type: "login" });
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthent,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("AuthContext ws used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
