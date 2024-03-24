import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import { Router } from '@routes/Router';

import themes from './styles/themes';






export function App() {
  return (
    <ThemeProvider theme={themes.defaultThemeDark}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}
