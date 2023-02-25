import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { AppProps } from 'next/app';

import '../../public/assets/fonts/styles.css';
import { GlobalStyles } from '../styles/global-styles';
import { AuthProvider } from 'contexts/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
