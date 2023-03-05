import * as Styled from './styles';
import Heading from 'components/Heading';
import PageContainer from 'components/PageContainer';
import api from '../../libs/alphaVantageApi';
import { useEffect, useState } from 'react';
import { StockSymbol } from '../../../types/alphaVantageApiTypes';
import { useRouter } from 'next/router';

interface Props {
  data: StockSymbol;
}

export default function Content({ data }: Props) {
  const router = useRouter();
  const { symbol } = router.query;
  const [stockSymbol, setStockSymbol] = useState<StockSymbol>(
    symbol ? null : data,
  );
  const [search, setSearch] = useState('');

  async function handleSymbolSearch(symbol: string) {
      const response = await api.getStockInfo(symbol as string);
      setStockSymbol(response);
  }

  useEffect(() => {
    if (symbol) {
      handleSymbolSearch(symbol as string);
      return;
    }
  }, [symbol]);

  return (
    <PageContainer>
      <Styled.Container>
        <Heading title="Trading Page" />
        <p>
          Search stock symbols to trade. For example, type GM for General
          Motors.
        </p>
        <form>
          <input
            type="text"
            placeholder="Enter stock symbol"
            name="symbol"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" disabled={search === '' ? true : false}>
            Submit
          </button>
        </form>
        <div>{stockSymbol && stockSymbol['Global Quote']['01. symbol']}</div>
      </Styled.Container>
    </PageContainer>
  );
}
