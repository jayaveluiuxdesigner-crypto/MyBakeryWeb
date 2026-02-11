
import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Sophia Reed",
    role: "Food Critic",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop",
    text: "The most incredible Wagyu burger I've ever tasted. The bread is clearly artisan-made and perfectly toasted.",
    stars: 5
  },
  {
    name: "James Wilson",
    role: "Local Foodie",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop",
    text: "Priya's Bakes is my go-to for their Atho and Khao Suey. Authentic flavors that truly taste like home!",
    stars: 5
  },
  {
    name: "Elena Vance",
    role: "Pastry Enthusiast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
    text: "Their Royal Falooda is out of this world. The richness and presentation are unmatched in the city.",
    stars: 4
  },
  {
    name: "Marcus Chen",
    role: "Regular Guest",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2570&auto=format&fit=crop",
    text: "The Peri Peri Wings are perfectly spicy. I appreciate that everything is prepared fresh and not frozen.",
    stars: 5
  }
];

const StarRating: React.FC<{ count: number }> = ({ count }) => {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={14} 
          className={i < count ? "fill-amber-500 text-amber-500" : "text-gray-300"} 
        />
      ))}
    </div>
  );
};

const Testimonial: React.FC = () => {
  // Duplicate reviews for infinite scroll effect
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-24 bg-amber-50/20 overflow-hidden">
      <div className="container mx-auto px-4 mb-16 text-center">
        <span className="text-amber-600 font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">Guest Feedback</span>
        <h2 className="text-4xl md:text-5xl font-serif text-coffee">What Our Diners Say</h2>
      </div>

      <div className="relative group">
        <div className="animate-marquee flex gap-8">
          {duplicatedReviews.map((review, idx) => (
            <div 
              key={idx} 
              className="w-[350px] md:w-[450px] bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-coffee/5 flex flex-col items-start hover:shadow-xl transition-all duration-500"
            >
              <StarRating count={review.stars} />
              <p className="text-lg font-serif text-coffee mb-8 italic leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-100" 
                />
                <div>
                  <h4 className="font-bold text-coffee text-sm">{review.name}</h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays to soften edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-amber-50/50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-amber-50/50 to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
};

export default Testimonial;
