import React from "react";
import { UserData, UserLogin } from "../../../interfaces/user-interfaces";
import api from "../../services/db/api";

const register = async (data: any) => {
  const result = await api.post<any>("/user/signup", data);

  return result.data;
};

const authenticate = async (data: UserLogin) => {
  const result = await api.post<{ token: string }>("/user/login", data);
  return result.data;
};

const getUser = async (token: string) => {
  const result = await api.get<UserData>("/user/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return result.data;
};
export const authService = { authenticate, getUser, register };
