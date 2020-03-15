import { ReactNode } from 'react';
import NextLink from 'next/link';

interface Props {
  children: ReactNode;
  href: string;
  isActive?: boolean;
  slim?: boolean;
}

const Link: React.FunctionComponent<Props> = ({
  children,
  href,
  isActive = false,
  slim = true,
}) => {
  const textColor = isActive ? 'text-blue-800' : 'text-blue-500';
  const marginPadding = slim ? '' : 'p-2 mr-4';
  const className = `${textColor} hover:text-blue-800 ${marginPadding}`;
  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  );
};

export default Link;
