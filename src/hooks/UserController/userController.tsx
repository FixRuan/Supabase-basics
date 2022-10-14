import React, { createContext, ReactNode, useContext } from "react";
import { supabase } from "../../services/supabase";

interface UserProps {
  name: string;
  email: string;
  username: string;
  password: string;
}

interface UserContextProps {
  CreateUser: (user: UserProps) => Promise<any>
  getUserByEmail: (email: string) => Promise<any>
}

const UserContext = createContext({} as UserContextProps);

interface UserControllerProviderProps {
  children: ReactNode;
}

export function UserControllerProvider({ children }: UserControllerProviderProps) {

  async function getUserByEmail(email: string) {
    try {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email);

      if (error) {
        return error;
      }

      return data;

    } catch (error) {
      return error;
    }

  }

  async function CreateUser(user: UserProps) {
    const userAlreadyExists: UserProps[] = await getUserByEmail(user.email);

    if (userAlreadyExists.length != 0) {
      return "E-mail em uso";
    }

    const { error } = await supabase
      .from("users")
      .insert(user);

    if (error) {
      return error;
    }
  }

  return (
    <UserContext.Provider value={{
      CreateUser,
      getUserByEmail
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserController() {
  const context = useContext(UserContext);
  return context;
}
