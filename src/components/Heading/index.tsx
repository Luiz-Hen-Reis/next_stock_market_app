import * as Styled from './styles';

interface Props {
    title: string;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

function Heading({ title, as }: Props) {
  return (
    <Styled.Container as={as}>{title}</Styled.Container>
  )
}

export default Heading