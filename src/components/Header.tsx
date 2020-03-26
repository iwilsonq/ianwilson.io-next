import { useRouter } from 'next/router';
import Link from './Link';

const Header: React.FunctionComponent = () => {
  const { pathname } = useRouter();
  return (
    <header className="flex font-sans text-xl h-20">
      <nav className="flex items-center w-full justify-between">
        <Link className="flex items-center" href="/" slim={false}>
          <img
            className="w-16 mr-2 rounded-full"
            src="/bio.jpg"
            alt="ian wilson drinking coffee"
          />
        </Link>
        <div className="flex items-center">
          <Link href="/blog" isActive={pathname === '/blog'} slim={false}>
            Blog
          </Link>
          <Link href="/contact" isActive={pathname === '/contact'} slim={false}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
