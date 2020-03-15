import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Heading: React.FunctionComponent<Props> = ({ children }) => {
  return <h1 className="text-4xl font-bold">{children}</h1>;
};

export default Heading;
