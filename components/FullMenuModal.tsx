import React, { useState, useEffect } from "react";
import {
  X,
  Zap,
  Flame,
  Pizza,
  Sandwich,
  Coffee,
  Package,
  Droplets,
  IceCream,
  Utensils,
  Clock,
  Info,
} from "lucide-react";
import logo from "../public/images/Logo.png";

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuData = [
  {
    id: "taiwan",
    category: "Taiwan's Food",
    image:
      "https://images.unsplash.com/photo-1573019606806-9695d0a9739d?q=80&w=2642&auto=format&fit=crop",
    icon: <Zap size={20} />,
    items: [
      { name: "French Fry", price: "₹65" },
      { name: "Veg Maggie", price: "₹45" },
      { name: "Corn Nuggets", price: "₹65" },
      { name: "Cheese Ball", price: "₹80" },
      { name: "Corn Cheese Ball", price: "₹80" },
      { name: "Egg Maggie", price: "₹50" },
      { name: "Chicken Nuggets", price: "₹75" },
      { name: "Crispy Chicken", price: "₹75" },
      { name: "Chicken Popcorn", price: "₹75" },
      { name: "Chicken Finger", price: "₹75" },
      { name: "Peri Peri Chicken Wings", price: "₹90" },
      { name: "Chicken Leg (2 piece)", price: "₹140" },
      { name: "Supreme Chicken (2 piece)", price: "₹100" },
      { name: "Galuti Chicken Nuggets", price: "₹80" },
      { name: "Atho with Egg", price: "₹80" },
      { name: "Chicken Hot Dog", price: "₹90" },
      { name: "Egg Bejio", price: "₹40" },
      { name: "Momo's Crispy Chicken Ball", price: "₹90" },
      { name: "Khao Suey Noodles", price: "₹140" },
      { name: "Korean Cheese Bun", price: "₹65" },
    ],
  },
  {
    id: "signature",
    category: "Chef Signature",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2574&auto=format&fit=crop",
    icon: <Flame size={20} />,
    items: [
      { name: "Club Sandwich", price: "₹70" },
      { name: "Mixed Veg Pasta", price: "₹110" },
      { name: "Paneer Pasta", price: "₹130" },
      { name: "Mushroom Pasta", price: "₹130" },
      { name: "Chicken Pasta", price: "₹130" },
      { name: "Galotti Chicken Burger", price: "₹100" },
      { name: "Fried Chicken Burger", price: "₹100" },
      { name: "Supreme Cheese Burger", price: "₹100" },
      { name: "Veg Burger", price: "₹80" },
      { name: "Paneer Burger", price: "₹100" },
      { name: "Cheese Corn Burger", price: "₹100" },
      { name: "Keema Pani Puri", price: "₹70" },
    ],
  },
  {
    id: "pizza",
    category: "Italian Flat Bread (Pizza)",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2670&auto=format&fit=crop",
    icon: <Pizza size={20} />,
    items: [
      { name: "Maxicon Corn Pizza", price: "₹180" },
      { name: "Margherita Pizza", price: "₹180" },
      { name: "BBQ Chicken Pizza", price: "₹210" },
      { name: "Peri Peri Chicken Pizza", price: "₹200" },
      { name: "Garlic Chicken Pizza", price: "₹200" },
      { name: "Cheese Mushroom Pizza", price: "₹210" },
      { name: "Chicken Tikka Pizza", price: "₹200" },
      { name: "2 in 1 Pizza (Non Veg & Veg)", price: "₹220" },
    ],
  },
  {
    id: "sandwich-rolls",
    category: "Sandwich & Katti Rolls",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2670&auto=format&fit=crop",
    icon: <Sandwich size={20} />,
    items: [
      { name: "Corn Sandwich", price: "₹50" },
      { name: "Veg Sandwich", price: "₹45" },
      { name: "Paneer Sandwich", price: "₹55" },
      { name: "Mushroom Sandwich", price: "₹55" },
      { name: "Chicken Sandwich", price: "₹55" },
      { name: "Mumbai Egg Bun", price: "₹45" },
      { name: "Mushroom Katti Roll", price: "₹70" },
      { name: "Paneer Katti Roll", price: "₹70" },
      { name: "Egg Katti Roll", price: "₹55" },
      { name: "Chicken Katti Roll", price: "₹70" },
      { name: "Fried Chicken Roll", price: "₹75" },
      { name: "Galuti Chicken Roll", price: "₹75" },
    ],
  },
  {
    id: "bread",
    category: "Bruschetta & Bread",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=2670&auto=format&fit=crop",
    icon: <Coffee size={20} />,
    items: [
      { name: "Garlic Bread", price: "₹50" },
      { name: "Chilli Cheese Toast", price: "₹55" },
      { name: "Mushroom Cheese Toast", price: "₹60" },
      { name: "Corn Toast", price: "₹50" },
      { name: "Bread Toast With Jam", price: "₹40" },
      { name: "French Toast", price: "₹50" },
      { name: "Bread Omelette", price: "₹35" },
      { name: "Pan Cake", price: "₹50" },
      { name: "Mushroom Omelette", price: "₹45" },
      { name: "Peanut Chocolate Bun", price: "₹40" },
      { name: "Peanut Butter Toast", price: "₹40" },
      { name: "Bun Butter Jam", price: "₹40" },
    ],
  },
  {
    id: "combos",
    category: "Special Value Combos",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2574&auto=format&fit=crop",
    icon: <Package size={20} />,
    items: [
      {
        name: "499 COMBO (Burger, Pizza, Popcorn, Egg Roll, Rose Milk, 7Up)",
        price: "₹499",
      },
      {
        name: "349 COMBO (Wings-2, Nuggets-4, Leg-1, Finger-3, Popcorn-8, 7Up)",
        price: "₹349",
      },
      {
        name: "299 COMBO (Finger, Egg Roll, Sandwich, Jam Bun, 7Up)",
        price: "₹299",
      },
      {
        name: "199 COMBO (Chicken Roll, Popcorn, Bread Omelette, 7Up)",
        price: "₹199",
      },
    ],
  },
  {
    id: "juices",
    category: "Fresh Juices",
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=2574&auto=format&fit=crop",
    icon: <Droplets size={20} />,
    items: [
      { name: "Orange / Apple Juice", price: "₹60" },
      { name: "Carrot / Amla Juice", price: "₹40" },
      { name: "Sweet Lime / Nannari", price: "₹50" },
      { name: "Musk / Watermelon", price: "₹40" },
      { name: "Lemon / Lemon Mint", price: "₹30 - ₹35" },
      { name: "ABC / Chicko", price: "₹60" },
      { name: "Pomegranate / Avocado", price: "₹70 - ₹100" },
    ],
  },
  {
    id: "shakes",
    category: "Milk Shakes & Lassi",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=2574&auto=format&fit=crop",
    icon: <IceCream size={20} />,
    items: [
      { name: "Vannila / Strawberry", price: "₹60 - ₹75" },
      { name: "Chocolate / Orea", price: "₹80 - ₹90" },
      { name: "Blackcurrent / Kitkat", price: "₹80" },
      { name: "Red Banana Shake", price: "₹90" },
      { name: "Rose Milk / with Ice Cream", price: "₹50 - ₹60" },
      { name: "Cold Coffee", price: "₹70" },
      { name: "Tender Coconut", price: "₹90" },
      { name: "Sweet / Banana Lassi", price: "₹60 - ₹70" },
      { name: "Dry Fruit Lassi", price: "₹80" },
    ],
  },
  {
    id: "falooda",
    category: "Falooda & Desserts",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=2574&auto=format&fit=crop",
    icon: <Utensils size={20} />,
    items: [
      { name: "Royal Falooda", price: "₹90" },
      { name: "Dry Fruit Falooda", price: "₹110" },
      { name: "Chocolate Falooda", price: "₹100" },
      { name: "Brownie / with Ice Cream", price: "₹60 - ₹90" },
      { name: "Vannilla Double Scoop", price: "₹60" },
      { name: "Mixed Ice Cream (Large)", price: "₹90 - ₹130" },
    ],
  },
];

const FullMenuModal: React.FC<FullMenuModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState(menuData[0].id);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-coffee animate-in fade-in duration-300">
      <div className="bg-coffee border-b border-white/10 px-6 py-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <a href="#" className="h-full flex items-center">
            <img src={logo} alt="Logo" className="h-20 w-auto object-contain" />
          </a>
            
        </div>
        <button
          onClick={onClose}
          className="bg-white/10 text-white p-2 rounded-full hover:bg-amber-600 transition-all"
        >
          <X size={24} />
        </button>
      </div>

      <div className="flex-grow flex overflow-hidden">
        <div className="w-20 md:w-64 bg-black/20 overflow-y-auto shrink-0 border-r border-white/5 custom-scrollbar">
          {menuData.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveTab(section.id);
                document
                  .getElementById(`section-${section.id}`)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`w-full flex items-center gap-4 px-4 md:px-8 py-6 transition-all border-l-4 ${
                activeTab === section.id
                  ? "bg-amber-600/10 border-amber-600 text-amber-500"
                  : "border-transparent text-white/40 hover:text-white/70"
              }`}
            >
              <span className="shrink-0">{section.icon}</span>
              <span className="hidden md:block text-xs font-black uppercase tracking-widest text-left leading-tight">
                {section.category}
              </span>
            </button>
          ))}
        </div>

        <div className="flex-grow overflow-y-auto bg-[#FDFBF7] p-6 md:p-12 custom-scrollbar">
          <div className="max-w-4xl mx-auto space-y-20">
            {menuData.map((section) => (
              <div
                key={section.id}
                id={`section-${section.id}`}
                className="scroll-mt-10"
              >
                <div className="relative h-48 md:h-64 rounded-[2rem] overflow-hidden mb-8 shadow-2xl">
                  <img
                    src={section.image}
                    alt={section.category}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-4xl font-serif text-white mb-2">
                      {section.category}
                    </h3>
                    <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-widest">
                      <span className="h-0.5 w-8 bg-amber-500"></span>
                      Fresh Ingredients
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-baseline group py-2 border-b border-gray-100"
                    >
                      <div className="flex flex-col">
                        <span className="text-coffee font-bold group-hover:text-amber-700 transition-colors">
                          {item.name}
                        </span>
                        <span className="text-[10px] text-gray-400 uppercase tracking-tighter">
                          Chef's Special
                        </span>
                      </div>
                      <span className="text-amber-700 font-mono font-black">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-amber-50 border-2 border-amber-200 p-8 rounded-[2rem] text-center">
              <Clock className="mx-auto text-amber-600 mb-4" size={32} />
              <h4 className="text-coffee font-serif text-2xl mb-2">
                Patiently Prepared
              </h4>
              <p className="text-gray-500 text-sm italic max-w-lg mx-auto mb-6">
                Please be patient for 15 to 20 minutes while we prepare your
                delicious food. We use only fresh ingredients. No packed or
                frozen items.
              </p>
              <div className="flex items-center justify-center gap-2 text-coffee font-black uppercase text-xs tracking-widest">
                <Info size={16} className="text-amber-600" />
                Parcel & Extra Mayonnaise Charged Separately
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #D97706; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default FullMenuModal;
