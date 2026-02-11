
import React from 'react';
import { Play, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenMenu: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenMenu }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Decorative Flour Splashes */}
      <div className="absolute top-0 right-0 w-1/3 opacity-10 -z-10 pointer-events-none text-coffee">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M47.5,-51.2C60.1,-41.1,68,-23.4,69.5,-5.2C71,13.1,66.1,31.9,54.7,44.9C43.3,57.9,25.4,65.2,6.4,64.2C-12.6,63.2,-32.7,53.9,-46.8,39.6C-60.8,25.2,-68.8,5.9,-66.6,-13C-64.4,-31.9,-51.9,-50.4,-35.8,-59.5C-19.7,-68.6,0,-68.3,18.7,-64.1C37.4,-59.9,47.5,-51.2,47.5,-51.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 items-center gap-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-amber-600/10 text-amber-700 px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
            </span>
            Tastes just like home
          </div>
          <h1 className="text-5xl lg:text-7xl font-serif text-coffee leading-tight mb-6">
            Juicy, Cheesy, <br /> Creamy Delights
          </h1>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-lg">
            Away from home, but tastes just like home!! Explore our authentic signature flavors and artisanal bakes.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <button 
              onClick={onOpenMenu}
              className="bg-coffee text-white px-10 py-5 rounded-full hover:bg-amber-900 transition-all shadow-2xl hover:-translate-y-1 font-bold flex items-center gap-3"
            >
              View All Menus
              <ChevronRight size={18} />
            </button>
            <button className="flex items-center gap-3 text-coffee font-semibold hover:text-amber-800 transition-colors group">
              <span className="w-12 h-12 flex items-center justify-center rounded-full border border-coffee group-hover:bg-coffee group-hover:text-white transition-all">
                <Play size={16} fill="currentColor" />
              </span>
              Our Story
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 float-animation">
            <img 
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2670&auto=format&fit=crop" 
              alt="Gourmet Burger" 
              className="rounded-[3rem] shadow-2xl w-full object-cover aspect-[4/5] border-[16px] border-white"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-600 p-8 rounded-[2rem] shadow-2xl hidden md:block border-4 border-white">
              <div className="text-white">
                <p className="text-4xl font-black mb-1">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Fresh Ingredients</p>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-amber-100/50 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
