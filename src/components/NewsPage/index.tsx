import * as Styled from './styles';
import { Post } from '../../../types/alphaVantageApiTypes';
import Image from 'next/image';

interface Props {
  posts: Post[];
}

export default function NewsPage({ posts }: Props) {
  return (
    <Styled.Container>
      {posts.map((post, index) => (
        <Styled.Post>
          <a href={post.url} target="_blank" key={index}>
            <header>
              <h2>{post.title}</h2>
              <span>
                {post.authors} <span></span>
              </span>
            </header>
            <div>
              <img src={post.banner_image} alt={post.title} />
            </div>
            <p>{post.summary}</p>
          </a>
        </Styled.Post>
      ))}
    </Styled.Container>
  );
}
