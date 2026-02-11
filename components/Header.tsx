import React, { useState, useEffect } from "react";
import { Menu, X, UtensilsCrossed, PhoneCall } from "lucide-react";
import logo from "../public/images/Logo.png";
interface HeaderProps {
  onOpenMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "TAIWAN FOOD", action: onOpenMenu },
    { name: "SIGNATURE", action: onOpenMenu },
    { name: "PIZZA", action: onOpenMenu },
    { name: "COMBOS", action: onOpenMenu },
    { name: "DRINKS", action: onOpenMenu },
  ];

  return (
    <div
      className={`fixed z-50 left-0 right-0 transition-all duration-500 flex justify-center ${isScrolled ? "top-4" : "top-6"}`}
    >
      <header
        className={`relative transition-all duration-500 ease-out flex items-center justify-between px-6 md:px-10 
          bg-coffee rounded-[2rem] shadow-2xl border border-white/5 
          ${isScrolled ? "w-[90%] lg:w-[85%] py-3" : "w-[95%] lg:w-[90%] py-5"}`}
      >
        <div className="flex items-center gap-3 group">
          {/* <UtensilsCrossed className="text-white" size={20} /> */}
          <div className="h-full rounded-xl transition-transform duration-300 group-hover:rotate-12 flex items-center justify-center">
            <a href="#" className="h-full flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-20 w-auto object-contain"
              />
            </a>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <button
                onClick={link.action}
                className="flex items-center gap-1 text-[15px] font-black tracking-[0.2em] text-white/70 hover:text-amber-500 transition-all uppercase"
              >
                {link.name}
              </button>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-amber-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+1234567890"
            className="hidden md:flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white text-[10px] font-black tracking-widest px-6 py-2.5 rounded-full transition-all shadow-lg active:scale-95 whitespace-nowrap"
          >
            <PhoneCall size={14} />
            CALL TO ORDER
          </a>

          <button
            className="lg:hidden text-amber-500 p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`absolute top-full left-0 right-0 mt-4 lg:hidden transition-all duration-500 ease-in-out z-[60]
            ${isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}
        >
          <div className="bg-coffee border border-white/5 rounded-[2rem] p-8 shadow-2xl flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  link.action();
                  setIsMenuOpen(false);
                }}
                className="text-white/80 text-lg font-serif hover:text-amber-500 transition-colors py-2"
              >
                {link.name}
              </button>
            ))}
            <a
              href="tel:+1234567890"
              className="bg-amber-600 text-white py-4 rounded-2xl font-black text-sm tracking-widest hover:bg-amber-500 transition-all"
            >
              CALL TO ORDER
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
