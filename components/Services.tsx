
import React from 'react';
import { Utensils, Sandwich, ChefHat, Flame, ShoppingBag } from 'lucide-react';

const services = [
  { icon: <ChefHat />, label: 'Artisan Bakery' },
  { icon: <Sandwich />, label: 'Gourmet Burger' },
  { icon: <Utensils />, label: 'Italian Pasta' },
  { icon: <Flame />, label: 'Bread Omelet' },
  { icon: <ShoppingBag />, label: 'Take Away' },
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-white/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif text-coffee mb-4">Crafting flavors, fresh bakes & premium bites</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="w-40 h-40 bg-coffee rounded-3xl flex flex-col items-center justify-center text-white gap-4 hover:bg-amber-800 transition-all cursor-pointer group shadow-lg hover:-translate-y-2"
            >
              <div className="text-amber-500 group-hover:scale-110 transition-transform">
                {/* Fix: Cast to React.ReactElement<any> to allow the 'size' prop and resolve type checking errors */}
                {React.cloneElement(service.icon as React.ReactElement<any>, { size: 32 })}
              </div>
              <p className="text-sm font-medium">{service.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
