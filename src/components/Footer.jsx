const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white py-12 text-center">
      <button
        onClick={scrollToTop}
        className="px-6 py-2 text-sm border border-gray-300 rounded-full
                 hover:bg-gray-900 hover:text-white hover:border-gray-900
                 transition-all duration-300"
      >
        back to top
      </button>
    </footer>
  );
};

export default Footer;
