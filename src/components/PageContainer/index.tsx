import * as Styled from './styles';

interface Props {
    children: React.ReactNode;
}

function PageContainer({ children }: Props) {
  return (
    <Styled.Container>{children}</Styled.Container>
  )
}

export default PageContainer