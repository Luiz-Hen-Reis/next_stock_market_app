import Head from 'next/head';
import * as Styled from './styles';
import { CoinStack, Face } from '@styled-icons/boxicons-solid';
import { Icon, Heading } from 'components';
import { AuthContext } from 'contexts/AuthContext';
import { useContext } from 'react';
import { theme } from 'styles/theme';
import Link from 'next/link';

export default function Header() {
  const { user, signOut } = useContext(AuthContext);


  return (
    <>
      <Head>
        <title>Stock Market App</title>
      </Head>
      <Styled.Container>
        <span>
          <Icon>
            <CoinStack size={20} color={theme.colors.primaryColor} />
          </Icon>
          <Heading title="Stock Market App" as='h2' />
        </span>
        <nav>
          <Link href={'/user/home/'}>Trading Page</Link>
          <Link href={'/user/news/'}>News</Link>
        </nav>
        <nav>
          <div>
            <Icon>
              <Face size={20} color={theme.colors.primaryColor} />
            </Icon>
            <p>{user?.name}</p>
          </div>
          <button onClick={() => signOut()}>Logout</button>
        </nav>
      </Styled.Container>
    </>
  );
}
