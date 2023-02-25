import { signInRequest } from 'libs/auth';
import Router from 'next/router';
import { setCookie } from 'nookies';
import { createContext, useState } from 'react';

interface User {
  name: string;
  email: string;
}

interface SignInData {
  email: string;
  password: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  async function signIn({ email, password }) {
    try {
      const { user, token } = await signInRequest({ email, password });

      setCookie(undefined, 'nextstockmarketapp.token', token, {
        maxAge: 60 * 60 * 1, // 1 hour
      });

      setUser(user);

      Router.push('/user/home');
    } catch (error) {}
  }

  async function signOut() {}

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
