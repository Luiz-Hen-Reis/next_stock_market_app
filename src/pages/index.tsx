import Head from 'next/head';
import { Heading, Icon, LoginContainer } from 'components';
import { CoinStack } from '@styled-icons/boxicons-solid';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from 'contexts/AuthContext';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { toast } from 'react-toastify';
import { theme } from 'styles/theme';

export default function Home() {
  const [isRegistered, setIsRegistered] = useState<boolean>(true);
  const { register, handleSubmit } = useForm();
  const { signIn, signUp } = useContext(AuthContext);

  interface SignInData {
    email: string;
    password: string;
  }

  interface RegisterData {
    email: string;
    name: string;
    password: string;
  }

  async function handleSignIn(data: SignInData | RegisterData) {
    try {
      if (isRegistered) {
        await signIn(data);
        toast.success('Welcome!');
        return;
      }

      await signUp(data);
      toast.success('Welcome');
      return;
    } catch {
      toast.error('Email or Password Wrong. Try again');
    }
  }

  return (
    <>
      <Head>
        <title>
          {isRegistered
            ? 'Login | Stock Market App'
            : 'Register | Stock Market App'}
        </title>
      </Head>
      <LoginContainer>
        <header>
          <Icon>
            <CoinStack size={60} color={theme.colors.darkSlateGrey} />
          </Icon>
          <Heading title="Stock Market App" />
        </header>
        <div>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                {...register('email')}
                name="email"
                type="email"
                required
                placeholder="Your email adress"
              />
              {!isRegistered && (
                <>
                  <label htmlFor="name">Name</label>
                  <input
                    {...register('name')}
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                  />
                </>
              )}
              <label htmlFor="name">Password</label>
              <input
                {...register('password')}
                name="password"
                type="password"
                required
                placeholder="Your password"
              />
              {isRegistered && (
                <p onClick={() => setIsRegistered(false)}>
                  Not Registered? Sign Up
                </p>
              )}
              <input
                type="submit"
                value={!isRegistered ? 'Register' : 'Log In'}
              />
              {!isRegistered && (
                <p onClick={() => setIsRegistered(true)}>
                  Already have an account? Log In
                </p>
              )}
            </div>
          </form>
        </div>
      </LoginContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'nextstockmarketapp.token': token } = parseCookies(ctx);

  if (token) {
    return {
      redirect: {
        destination: '/user/home',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
