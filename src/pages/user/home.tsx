import { Content, Header } from 'components';
import { AuthContext } from 'contexts/AuthContext';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import React, { useContext } from 'react';

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Header />
      <Content />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'nextstockmarketapp.token': token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
