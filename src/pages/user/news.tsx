import Template from 'template';
import api from '../../libs/alphaVantageApi';
import { GetServerSideProps } from 'next';
import { NewsType } from '../../../types/alphaVantageApiTypes';
import { NewsPage } from 'components';


interface Props {
  data: NewsType;
}

export default function News({ data }: Props) {

  return <Template>
   <NewsPage posts={data.feed} />
  </Template>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data = await api.getNews();

  return {
    props: {
      data,
    },
  };
};
