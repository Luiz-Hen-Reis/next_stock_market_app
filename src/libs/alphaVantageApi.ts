import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://www.alphavantage.co';

export default {
  tickerSearch: async (keyword: string) => {
    const response = await axios.get(
      `${BASE_URL}/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${API_KEY}`,
    );
    return response.data;
  },
  getStockInfo: async (symbol: string) => {
    const response = await axios.get(
      `${BASE_URL}/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`,
    );
    return response.data;
  },
  getNews: async () => {
    const response = await axios.get(
      `${BASE_URL}/query?function=NEWS_SENTIMENT&topics=technology&limit=50&apikey=${API_KEY}`,
    );
    return response.data;
  },
};
