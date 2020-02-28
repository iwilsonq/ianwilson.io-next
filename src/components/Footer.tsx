interface Props {}

function Footer() {
  return (
    <footer>
      <a target="_blank" href="https://twitter.com/iwilsonq">
        <i className="fab fa-twitter-square"></i>
      </a>
      <a target="_blank" href="https://dev.to/iwilsonq">
        <i className="fab fa-dev"></i>
      </a>
      <a target="_blank" href="https://instagram.com/iwilsonq">
        <i className="fab fa-instagram-square"></i>
      </a>
      <a target="_blank" href="https://medium.com/@iwilsonq">
        <i className="fab fa-medium"></i>
      </a>
      <style jsx>{`
        footer {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        .fab {
          font-size: 4rem;
          margin-right: 24px;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
