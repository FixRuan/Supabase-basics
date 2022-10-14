import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { supabase } from "../../services/supabase";

import AsyncStorage from "@react-native-async-storage/async-storage";
const USER_STORAGE = "@supabase:user";

interface UserProps {
  id?: number;
  created_at?: string;
  name: string;
  email: string;
  username: string;
  password?: string;
}

interface UserContextProps {
  CreateUser: (user: UserProps) => Promise<any>;
  getUserByEmail: (email: string) => Promise<any>;
  signOut: () => Promise<void>;
  userData: UserProps | null;
  EmailSignInAuth: (email: string, password: string) => Promise<any>;
  setUserData: any;
  isLoading: boolean;
}

const UserContext = createContext({} as UserContextProps);

interface UserControllerProviderProps {
  children: ReactNode;
}

export function UserControllerProvider({ children }: UserControllerProviderProps) {
  const [userData, setUserData] = useState<UserProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function getUserByEmail(email: string) {
    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }

  }

  async function EmailSignUpAuth(email: string, password: string) {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.signUp({ email, password });

      if (error) {
        return error;
      }

      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }

  }

  async function EmailSignInAuth(email: string, password: string) {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        return error;
      }

      return data;
    } finally {
      setIsLoading(false);
    }
  }

  async function CreateUser(user: UserProps) {
    try {
      setIsLoading(true);
      const { email, password } = user;
      const data: any = await EmailSignUpAuth(email, password);

      if (data.message === "User already registered") {
        return "E-mail em uso";
      }

      const userWithoutPassword = {
        name: user.name,
        email: user.email,
        username: user.username
      };

      const { error } = await supabase
        .from("users")
        .insert(userWithoutPassword);

      if (error) {
        return error;
      }

    } finally {
      setIsLoading(false);
    }

  }

  async function signOut() {
    try {
      setIsLoading(true);
      await AsyncStorage.removeItem(USER_STORAGE);
      setUserData(null);
    } finally {
      setIsLoading(false);
    }

  }

  useEffect(() => {
    async function loadStorage(): Promise<void> {
      const localUser = await AsyncStorage.getItem(USER_STORAGE);

      if (localUser) {
        setUserData(JSON.parse(localUser));
      }
    }

    loadStorage();
  }, []);

  return (
    <UserContext.Provider value={{
      EmailSignInAuth,
      userData,
      signOut,
      CreateUser,
      getUserByEmail,
      setUserData,
      isLoading,
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserController() {
  const context = useContext(UserContext);
  return context;
}
