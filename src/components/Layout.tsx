import Footer from './Footer';
import Header from './Header';

interface Props {
  children: JSX.Element | JSX.Element[];
  siteDescription?: string;
  siteTitle?: string;
}

const Layout: React.FunctionComponent<Props> = props => (
  <div className="container mx-auto max-w-screen-sm flex flex-col justify-between min-h-screen px-3">
    <div className="min-h-full">
      <Header />
      <div>{props.children}</div>
    </div>
    <Footer />
  </div>
);

export default Layout;
