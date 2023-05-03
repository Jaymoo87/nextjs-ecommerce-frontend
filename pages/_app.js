import { createGlobalStyle } from 'styled-components';
// import '@/styles/globals.css';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

body{
  background-color: #15616d;
  padding: 0;
  margin:0;
  font-family: 'Montserrat', sans-serif;
}


`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
