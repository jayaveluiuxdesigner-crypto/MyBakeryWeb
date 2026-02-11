
import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const experts = [
  { 
    name: 'Chef Marco Rossi', 
    role: 'Executive Chef', 
    image: 'https://images.unsplash.com/photo-1583394060263-fba09a836a6f?q=80&w=2648&auto=format&fit=crop',
    desc: 'Master of Italian cuisine and gourmet burger creations with a Michelin-star background.'
  },
  { 
    name: 'Elena Vance', 
    role: 'Head Artisan Baker', 
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=2574&auto=format&fit=crop',
    desc: 'Specializing in wild-yeast sourdough and ancient grain pastries baked fresh every dawn.'
  },
];

const Experts: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-coffee mb-16 text-center lg:text-left">Meet our Masters <br /> of Culinary Art</h2>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {experts.map((expert, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row gap-8 items-center lg:items-start group">
              <div className="w-64 h-80 rounded-[40px] overflow-hidden shadow-2xl shrink-0">
                <img src={expert.image} alt={expert.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1 text-center lg:text-left pt-4">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                  <div className="w-12 h-[1px] bg-amber-600"></div>
                  <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">{expert.role}</span>
                </div>
                <h3 className="text-3xl font-serif text-coffee mb-4">{expert.name}</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  {expert.desc}
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-4 text-coffee/40">
                  <Instagram size={20} className="hover:text-amber-600 cursor-pointer transition-colors" />
                  <Twitter size={20} className="hover:text-amber-600 cursor-pointer transition-colors" />
                  <Facebook size={20} className="hover:text-amber-600 cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;
