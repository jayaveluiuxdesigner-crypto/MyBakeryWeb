
import React from 'react';

const Banners: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-6">
        {/* Main Promo */}
        <div className="lg:col-span-8 relative overflow-hidden rounded-[40px] bg-coffee h-[450px] group">
          <img 
            src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2574&auto=format&fit=crop" 
            alt="promo pasta" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-coffee/80 to-transparent p-12 flex flex-col justify-center">
            <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">WEEKEND SPECIAL</span>
            <h2 className="text-white text-5xl font-serif mb-6 leading-tight">Gourmet Pasta <br /> <span className="text-amber-500">Buy 1 Get 1</span> Free!</h2>
            <button className="bg-white text-coffee px-8 py-3 rounded-full font-bold w-fit hover:bg-amber-500 hover:text-white transition-all">
              Claim Offer
            </button>
          </div>
        </div>

        {/* Small Promos Stack */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="flex-1 bg-amber-100 rounded-[40px] p-8 relative overflow-hidden group">
            <h3 className="text-2xl font-serif text-coffee mb-2 relative z-10">Omelet <br /> Mornings</h3>
            <p className="text-coffee/60 text-sm relative z-10">Fresh bread omelet daily</p>
            <img 
              src="https://images.unsplash.com/photo-1510693206972-df098062cb71?q=80&w=2574&auto=format&fit=crop" 
              className="absolute bottom-[-10%] right-[-10%] w-32 h-32 object-cover rounded-full group-hover:scale-110 transition-transform"
              alt="omelet"
            />
          </div>
          <div className="flex-1 bg-coffee rounded-[40px] p-8 relative overflow-hidden group">
            <h3 className="text-2xl font-serif text-white mb-2 relative z-10">Double Stack <br /> Burger Fest</h3>
            <button className="text-amber-500 text-sm font-bold border-b border-amber-500 mt-2 relative z-10">See Menu</button>
             <img 
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2670&auto=format&fit=crop" 
              className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-40 h-40 object-contain opacity-40 grayscale group-hover:grayscale-0 transition-all"
              alt="burger side"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banners;
