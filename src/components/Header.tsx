import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FunctionComponent = () => {
  const { pathname } = useRouter();

  return (
    <header className="header">
      <nav>
        <Link href="/">
          <a>Ian Wilson</a>
        </Link>
        <div>
          <Link href="/blog">
            <a className={pathname.match(/\/blog/) ? 'active' : ''}>Blog</a>
          </Link>
          <Link href="/about">
            <a className={pathname.match(/\/about/) ? 'active' : ''}>About</a>
          </Link>
        </div>
      </nav>
      <style jsx>
        {`
          nav {
            display: flex;
            justify-content: space-between;
          }

          header {
            font-family: 'Lato', sans-serif;
          }

          a {
            color: '#000';
            margin-right: 21px;
            padding: 8px 10px;
            text-decoration: none;
          }

          a.active {
            background-color: rgba(40, 28, 77, 0.3);
            border-radius: 4px;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
