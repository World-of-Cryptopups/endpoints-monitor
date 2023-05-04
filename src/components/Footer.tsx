const Footer = () => {
  return (
    <footer className="py-12 text-center">
      <p>
        <small className="text-gray-500 tracking-wide">
          &copy; {new Date().getFullYear()} | World of Cryptopups - All Rights
          Reserved
        </small>
      </p>
    </footer>
  );
};

export default Footer;
