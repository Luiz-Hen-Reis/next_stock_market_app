import { Content, Header } from 'components';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { StockSymbol } from '../../../types/alphaVantageApiTypes';
import api from '../../libs/alphaVantageApi';

const initialSymbol = 'GM';

interface Props {
  data: StockSymbol;
}

export default function Home({ data }: Props) {
  return (
    <>
      <Header />
      <Content data={data} />
    </>
  );
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

  const data = await api.getStockInfo(initialSymbol);

  return {
    props: {
      data,
    },
  };
};
