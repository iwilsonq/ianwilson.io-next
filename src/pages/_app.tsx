import { AppProps } from 'next/app';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

const App = ({ Component, pageProps }: AppProps) => {
  if (typeof window !== 'undefined') {
    Prism.highlightAll();
  }
  return <Component {...pageProps} />;
};

export default App;
