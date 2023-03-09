import { TradingPage } from 'components';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import Template from 'template';
import { StockSymbol } from '../../../types/alphaVantageApiTypes';
import api from '../../libs/alphaVantageApi';

const initialSymbol = 'GM';

interface Props {
  data: StockSymbol;
}

export default function Home({ data }: Props) {
  return (
    <Template>
      <TradingPage data={data} />
    </Template>
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
