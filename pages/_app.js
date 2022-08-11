import Head from "next/head";
import NavBar from "../components/NavBar";
import '../styles/global.css';

function App({ Component, pageProps }) {
  console.log("[App] redendered.")
  return (
      <>
         <Head>
            <link rel='icon' href="/icons/favicon-32x32.png" />
         </Head>
        <NavBar />
        <Component {...pageProps} />
      </>

  );
}

export default App;
