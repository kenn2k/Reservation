"use client";
import { createContext, useContext, useState } from "react";
import { initialState } from "./Inputs";
import { AddPropertyTypes } from "@/types/types";
interface IChildren {
  children: React.ReactNode;
}
const MyContext = createContext<
  | {
      fields: AddPropertyTypes;
      setFields: React.Dispatch<React.SetStateAction<AddPropertyTypes>>;
      unreadCount: number;
      setUnreadCount: React.Dispatch<React.SetStateAction<number>>;
    }
  | undefined
>(undefined);

export const MyContextProvider = ({ children }: IChildren) => {
  const [fields, setFields] = useState<AddPropertyTypes>(initialState);
  const [unreadCount, setUnreadCount] = useState(0);
  return (
    <MyContext.Provider
      value={{ fields, setFields, unreadCount, setUnreadCount }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};
