import { Heading, Icon, LoginContainer } from 'components';
import { CoinStack } from '@styled-icons/boxicons-solid';

function Login() {
  return (
    <LoginContainer>
      <header>
        <Icon>
          <CoinStack size={60} />
        </Icon>
        <Heading title="Stock Market App" />
      </header>
    </LoginContainer>
  );
}

export default Login;
