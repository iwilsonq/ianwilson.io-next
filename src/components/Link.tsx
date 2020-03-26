import { ReactNode } from 'react';
import NextLink from 'next/link';

interface Props {
  children: ReactNode;
  className?: string;
  href: string;
  isActive?: boolean;
  slim?: boolean;
}

const Link: React.FunctionComponent<Props> = ({
  children,
  className = '',
  href,
  isActive = false,
  slim = true,
}) => {
  const textColor = isActive ? 'text-blue-800' : 'text-blue-500';
  const marginPadding = slim ? '' : 'p-2 mr-4';
  const cls = `${textColor} hover:text-blue-800 ${marginPadding} ${className}`;
  return (
    <NextLink href={href}>
      <a className={cls}>{children}</a>
    </NextLink>
  );
};

export default Link;
