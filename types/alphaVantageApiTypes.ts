export interface StockSymbol {
  'Global Quote': {
    '01. symbol': string;
    '02. open': string;
    '03. high': string;
    '04. low': string;
    '05. price': string;
    '06. volume': string;
    '07. latest trading day': string;
    '08. previous close': string;
    '09. change': string;
    '10. change percent': string;
  };
}

export interface NewsType {
  items: string;
  feed: Post[]
}

export interface Post {
    title: string,
    url: string,
    time_published: string,
    authors: [string],
    summary: string,
    banner_image: string,
}