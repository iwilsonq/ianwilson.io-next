import { AppProps } from 'next/app';
import Prism from 'prismjs';
import Router from 'next/router';
import * as gtag from '../data/gtag';
import '../css/tailwind.css';

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

const App = ({ Component, pageProps }: AppProps) => {
  if (typeof window !== 'undefined') {
    Prism.highlightAll();
  }
  return <Component {...pageProps} />;
};

export default App;
