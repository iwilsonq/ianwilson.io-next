import { useRouter } from 'next/router';
import Link from './Link';

const Header: React.FunctionComponent = () => {
  const { pathname } = useRouter();
  return (
    <header className="flex font-sans text-xl h-20">
      <nav className="flex w-full justify-between">
        <Link href="/" slim={false}>
          Ian Wilson
        </Link>
        <div className="flex align-center">
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
