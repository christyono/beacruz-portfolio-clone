import { useState } from "react";
import ContactModal from "./ContactModal";
import logo from "../images/bea_cruz_logo_circle.png";

const Header = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const navItems = [
    { label: "Contact", href: "#contact", isModal: true },
    { label: "Press", href: "#press" },
    { label: "About", href: "#about" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-start p-4 md:p-6">
        {/* Navigation */}
        <nav className="flex gap-2 md:gap-3">
          {navItems.map((item) =>
            item.isModal ? (
              <button
                key={item.label}
                onClick={() => setIsContactOpen(true)}
                className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-white/90
                           border border-white/30 rounded-full backdrop-blur-sm
                           hover:bg-white/10 transition-all duration-300"
              >
                {item.label}
              </button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-white/90
                           border border-white/30 rounded-full backdrop-blur-sm
                           hover:bg-white/10 transition-all duration-300"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Logo */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="#"
            className="text-white text-sm md:text-base font-serif tracking-tight"
          >
            <span className="text-mint">/</span>beacruz
          </a>
          <img
            src={logo}
            alt="Beacruz logo"
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
        </div>
      </header>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
};

export default Header;
