interface Props {
  children: JSX.Element | JSX.Element[];
}

const Card: React.FunctionComponent<Props> = props => (
  <div className="card">
    {props.children}
    <style jsx>{`
      .card {
        background: #fff;
        border-radius: 8px;
        box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #fff;
        padding: 16px;
      }
    `}</style>
  </div>
);

export default Card;
