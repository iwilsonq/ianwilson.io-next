function Footer() {
  return (
    <footer className="text-center p-4">
      <div className="flex align-center justify-center">
        <a target="_blank" href="https://twitter.com/iwilsonq">
          <i className="text-blue-500 hover:text-blue-800 text-4xl mr-4 fab fa-twitter-square"></i>
        </a>
        <a target="_blank" href="https://dev.to/iwilsonq">
          <i className="text-blue-500 hover:text-blue-800 text-4xl mr-4 fab fa-dev"></i>
        </a>
        <a target="_blank" href="https://instagram.com/iwilsonq">
          <i className="text-blue-500 hover:text-blue-800 text-4xl mr-4 fab fa-instagram-square"></i>
        </a>
        <a target="_blank" href="https://medium.com/@iwilsonq">
          <i className="text-blue-500 hover:text-blue-800 text-4xl fab fa-medium"></i>
        </a>
      </div>
      <div>
        <span className="text-gray-500">© 2020 Ian Wilson</span>
      </div>
    </footer>
  );
}

export default Footer;
