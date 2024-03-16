"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

interface IAuthProvider {
  children: React.ReactNode;
}
const AuthProvider = ({ children }: IAuthProvider) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
