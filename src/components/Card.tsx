interface Props {
  children: JSX.Element | JSX.Element[];
}

const Card: React.FunctionComponent<Props> = props => (
  <div className="p-4 shadow-xl rounded">{props.children}</div>
);

export default Card;
