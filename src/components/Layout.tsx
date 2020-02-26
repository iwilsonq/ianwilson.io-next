import Header from './Header';
import Meta from './Meta';

interface Props {
  children: JSX.Element | JSX.Element[];
  siteDescription?: string;
  siteTitle?: string;
}

const Layout: React.FunctionComponent<Props> = props => (
  <div className="layout">
    <Meta
      siteTitle={props.siteTitle || ''}
      siteDescription={props.siteDescription || ''}
    />
    <Header />
    <div className="content">{props.children}</div>
    <style jsx>{`
      .layout {
        max-width: 680px;
        margin: 20px auto;
        padding: 24px;
      }

      .layout a {
        text-decoration: none;
        color: blue;
      }

      .layout a:hover {
        opacity: 0.6;
      }
    `}</style>
  </div>
);

export default Layout;
