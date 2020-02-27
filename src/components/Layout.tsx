import Header from './Header';

interface Props {
  children: JSX.Element | JSX.Element[];
  siteDescription?: string;
  siteTitle?: string;
}

const Layout: React.FunctionComponent<Props> = props => (
  <div className="layout">
    <Header />
    <div className="content">{props.children}</div>
    <style jsx global>
      {`
        @import url('https://fonts.googleapis.com/css?family=Lato:400,700|Lora&display=swap');
        html,
        body {
          color: #000;
          font-family: 'Lora', Helvetica, sans-serif;
          font-size: 10px;
          margin: 0;
          overflow-x: hidden;
        }

        h1,
        h2,
        h3 {
          font-family: 'Lato';
          font-weight: 700;
        }

        h1 {
          font-size: 3.4rem;
        }
        h2 {
          font-size: 3.1rem;
        }
        h3 {
          font-size: 2.8rem;
        }

        p,
        ol,
        ul,
        li,
        a,
        blockquote,
        b,
        em,
        strong {
          font-size: 2.1rem;
        }

        a {
          color: #0070f3;
        }

        pre,
        code,
        code[class*='language-'],
        pre[class*='language-'] {
          font-size: 1.6rem;
        }

        img {
          width: 100%;
        }

        @media (max-width: 727px) {
          p,
          ol,
          ul,
          li,
          a {
            font-size: 1.8rem;
          }
          h1 {
            font-size: 3rem;
          }
          pre,
          code,
          code[class*='language-'],
          pre[class*='language-'] {
            font-size: 1.6rem;
          }
        }

        a {
          text-decoration: none;
        }
      `}
    </style>
    <style jsx>{`
      .layout {
        max-width: 680px;
        margin: 20px auto;
        position: relative;
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
