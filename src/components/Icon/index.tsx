import * as Styled from './styles';

interface Props {
    children: React.ReactNode
}

function Icon({ children }: Props) {
  return (
    <Styled.Container>{children}</Styled.Container>
  )
}

export default Icon