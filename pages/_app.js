import { createGlobalStyle } from "styled-components";
import Layout from "../components/Layout";

const GlobalStyle = createGlobalStyle`
*{
  font-family: 'Space Grotesk', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior:smooth;
}

body{
  background-color: #0A1A29;
  font-family: 'Montserrat', sans-serif;

}

`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
