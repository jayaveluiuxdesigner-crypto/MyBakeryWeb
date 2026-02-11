
import React from 'react';
import { Flame, Pizza, Droplets, ChevronRight } from 'lucide-react';

interface MenuDisplayProps {
  onOpenMenu: () => void;
}

const featuredData = [
  {
    category: "Signature Selections",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=2584&auto=format&fit=crop",
    icon: <Flame size={20} />,
    items: [
      { name: "Atho with Egg", price: "₹80" },
      { name: "Khao Suey Noodles", price: "₹140" },
      { name: "Korean Cheese Bun", price: "₹65" }
    ]
  },
  {
    category: "Gourmet Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2674&auto=format&fit=crop",
    icon: <Pizza size={20} />,
    items: [
      { name: "Galotti Chicken Burger", price: "₹100" },
      { name: "Supreme Cheese Burger", price: "₹100" },
      { name: "Cheese Corn Burger", price: "₹100" }
    ]
  },
  {
    category: "Signature Shakes",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=2574&auto=format&fit=crop",
    icon: <Droplets size={20} />,
    items: [
      { name: "Royal Falooda", price: "₹90" },
      { name: "Oreo Monster Shake", price: "₹90" },
      { name: "Cold Coffee Blast", price: "₹90" }
    ]
  }
];

const MenuDisplay: React.FC<MenuDisplayProps> = ({ onOpenMenu }) => {
  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-coffee mb-4">Highlights of the Day</h2>
          <p className="text-gray-500 italic">Explore our most loved categories</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredData.map((section, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-coffee/5">
              <div className="h-48 overflow-hidden relative">
                <img src={section.image} alt={section.category} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-6 flex items-center gap-2 text-white">
                  {section.icon}
                  <h3 className="font-bold text-lg">{section.category}</h3>
                </div>
              </div>
              <div className="p-8 space-y-4">
                {section.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-sm font-bold text-coffee/80">
                    <span>{item.name}</span>
                    <span className="text-amber-700 font-mono">{item.price}</span>
                  </div>
                ))}
                <button 
                  onClick={onOpenMenu}
                  className="w-full mt-4 text-[10px] font-black uppercase tracking-widest text-amber-600 hover:text-amber-700 transition-colors flex items-center justify-center gap-2 pt-4 border-t border-dashed border-gray-100"
                >
                  See Category <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button 
            onClick={onOpenMenu}
            className="bg-coffee text-white px-12 py-5 rounded-full hover:bg-amber-900 transition-all shadow-xl font-black text-xs tracking-[0.2em]"
          >
            VIEW ALL MENUS (80+ ITEMS)
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuDisplay;
