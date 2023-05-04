const Header = () => {
  return (
    <header className="py-3">
      <div className="w-11/12 mx-auto">
        <h1 className="text-xl font-black text-gray-800">
          WAX Endpoints <span className="text-indigo-500">Monitor</span>
        </h1>
        <p className="text-gray-500">
          by{" "}
          <a
            href="https://www.worldofcryptopups.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            title="World of Cryptopups"
          >
            World of Cryptopups
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
