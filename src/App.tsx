import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import { Router } from '@routes/Router';

import themes from './styles/themes';

import { register } from 'swiper/element/bundle';
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';






export function App() {
  return (
    <ThemeProvider theme={themes.defaultThemeDark}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}
