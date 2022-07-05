import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider defaultTheme="system" attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <NavBar />
      <Component {...pageProps} />
      <Footer />
      <Script
        src="https://kit.fontawesome.com/2fa32b9cfe.js"
        crossorigin="anonymous"
      />
    </div>
  </ThemeProvider>
);

export default MyApp;
