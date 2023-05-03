import CartContextProvider from '@/components/CartContext';
import { lightBG } from '@/lib/colors';
import { createGlobalStyle } from 'styled-components';
// import '@/styles/globals.css';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

body{
  background-color: ${lightBG};
  padding: 0;
  margin:0;
  font-family: 'Montserrat', sans-serif;
}


`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
