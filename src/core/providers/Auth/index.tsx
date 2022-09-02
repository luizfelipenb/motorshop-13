import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserData, UserLogin } from "../../../interfaces/user-interfaces";
import { errorFeedback } from "../../../utils/errorFeedback";
import { toast, ToastVariants } from "../../../utils/toast";
import api from "../../services/db/api";
import { authService } from "./auth.service";

interface IAuthContext {
  token: string;
  isAuthenticated: boolean;
  signUp: (data: any) => Promise<any>;
  login: (data: UserLogin) => Promise<string>;
  profile: UserData;
  fetchUserData: () => Promise<UserData>;
  logOut: () => void;
}

const AuthContext = React.createContext({} as IAuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = React.useState(
    localStorage.getItem("@token:user") || ""
  );
  const [profile, setProfile] = React.useState({} as UserData);

  const signUp = async (data: any) => {
    const result = await authService.register(data);

    return result;
  };

  const login = async (data: UserLogin) => {
    const result = await authService.authenticate(data);
    setToken(result.token);
    localStorage.setItem("@token:user", result.token);

    return result.token;
  };

  const fetchUserData = async () => {
    const result = await authService.getUser(token);
    return result;
  };

  const logOut = async () => {
    setToken("");
    localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated: !!token,
        signUp,
        login,
        profile,
        fetchUserData,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
