
import React from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee pt-20 pb-10 text-white/70">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold font-serif text-white mb-6">Priya's Bakes</h2>
            <p className="text-sm leading-relaxed mb-8">
              Away from home, but tastes just like home!! Juicy, Cheesy, Creamy – All in One Place! Freshly prepared just for you.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all cursor-pointer">
                <Facebook size={18} />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all cursor-pointer">
                <Instagram size={18} />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all cursor-pointer">
                <Twitter size={18} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">OUR MENU</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Taiwan's Food</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Chef Signature</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Italian Flat Bread</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Milk Shakes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">SERVICES</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Fresh Preparation</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Value Combos</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Takeaway Only</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Bulk Orders</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">CONTACT</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-600 shrink-0" />
                <span>+91 6383641534</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-600 shrink-0" />
                <span><a href="mailto:priyas.bakes1@gmail.com">priyas.bakes1@gmail.com</a></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs uppercase tracking-widest font-bold">@2026 copyright priya's bakes all right reserved</p>
          <div className="flex gap-8 text-xs font-bold text-white uppercase tracking-widest">
            <span className="text-amber-500">No Frozen Items Used</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
