import { useEffect } from 'react';
import {
  recoverUserInformation,
  registerRequest,
  signInRequest,
} from 'libs/auth';
import Router from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

interface User {
  name: string;
  email: string;
}

interface SignInData {
  email: string;
  password: string;
}

interface RegisterData {
  email: string;
  password: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => void;
  signUp: (data: RegisterData) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'nextstockmarketapp.token': token } = parseCookies();

    if (token) {
      recoverUserInformation(token).then((response) => {
        setUser(response);
      });
    }
  }, []);

  async function signIn({ email, password }) {
    const { user, token } = await signInRequest({ email, password });

    setCookie(undefined, 'nextstockmarketapp.token', token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    setUser(user);

    Router.push('/user/home');
  }

  async function signUp({ email, name, password }) {
    const { user, token, userAlreadyExist } = await registerRequest({
      email,
      name,
      password,
    });

    if (userAlreadyExist) {
      alert('Email that was provided already exist. Log in?');
      return;
    }

    setCookie(undefined, 'nextstockmarketapp.token', token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    setUser(user);

    Router.push('/user/home');
  }

  function signOut() {
    destroyCookie(undefined, 'nextstockmarketapp.token', { path: '/' });
    setUser(null);
    toast.success('Logged Out!')
    Router.push('/');
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, signOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
}
