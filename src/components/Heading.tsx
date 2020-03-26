import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const Heading: React.FunctionComponent<Props> = ({ children, className = '' }) => {
  return <h1 className={`text-4xl font-bold ${className}`}>{children}</h1>;
};

export default Heading;
