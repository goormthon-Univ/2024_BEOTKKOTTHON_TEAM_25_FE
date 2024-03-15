import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SUITE-Bold';
    src: url('https://cdn.jsdelivr.net/gh/sun-typeface/SUITE/fonts/static/woff2/SUITE-Bold.woff2') format('woff2');
  }
  @font-face {
    font-family: 'SUITE-ExtraBold';
    src: url('https://cdn.jsdelivr.net/gh/sun-typeface/SUITE/fonts/static/woff2/SUITE-ExtraBold.woff2') format('woff2');
  }
  @font-face {
    font-family: 'SUITE-Heavy';
    src: url('https://cdn.jsdelivr.net/gh/sun-typeface/SUITE/fonts/static/woff2/SUITE-Heavy.woff2') format('woff2');
  }
  @font-face {
    font-family: 'SUITE-Light';
    src: url('https://cdn.jsdelivr.net/gh/sun-typeface/SUITE/fonts/static/woff2/SUITE-Light.woff2') format('woff2');
  }
  @font-face {
    font-family: 'SUITE-Medium';
    src: url('https://cdn.jsdelivr.net/gh/sun-typeface/SUITE/fonts/static/woff2/SUITE-Medium.woff2') format('woff2');
  }
  @font-face {
    font-family: 'SUITE-Regular';
    src: url('https://cdn.jsdelivr.net/gh/sun-typeface/SUITE/fonts/static/woff2/SUITE-Regular.woff2') format('woff2');
  }
  @font-face {
    font-family: 'SUITE-SemiBold';
    src: url('https://cdn.jsdelivr.net/gh/sun-typeface/SUITE/fonts/static/woff2/SUITE-SemiBold.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Material Symbols Outlined';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialsymbolsoutlined/v167/kJF1BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-jCxv3fzvRNU22ZXGJpEpjC_1v-p_4MrImHCIJIZrDCvHOej.woff2) format('woff2');
  }
`;

export default GlobalStyle;
