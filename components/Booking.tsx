
import React from 'react';
import { Search } from 'lucide-react';

const Booking: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative rounded-[40px] overflow-hidden bg-coffee h-[400px] flex flex-col items-center justify-center text-center p-8">
          <img 
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2678&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            alt="coffee beans bg"
          />
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Let's book a Table <br /> For you</h2>
            
            <div className="flex flex-col md:flex-row gap-4 bg-white/10 backdrop-blur-md p-2 rounded-2xl md:rounded-full border border-white/20">
              <div className="flex items-center px-6 gap-3 flex-grow">
                <Search size={20} className="text-amber-500" />
                <input 
                  type="text" 
                  placeholder="Where do you want to book?" 
                  className="bg-transparent border-none outline-none text-white placeholder:text-white/40 w-full"
                />
              </div>
              <button className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-10 py-4 rounded-full transition-all">
                Check Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
