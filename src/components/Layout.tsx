import Footer from './Footer';
import Header from './Header';

interface Props {
  children: JSX.Element | JSX.Element[];
  siteDescription?: string;
  siteTitle?: string;
}

const Layout: React.FunctionComponent<Props> = props => (
  <div className="container mx-auto max-w-screen-md">
    <Header />
    <div className="content">{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
