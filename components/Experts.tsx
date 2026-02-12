import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

import ChefImage from "../public/images/ChefProfileImage.jpeg";
import ChefImage2 from "../public/images/ChefImage2.jpeg"; // Add second image in this path

const experts = [
  { 
    name: 'Chef Priya', 
    role: 'Chef', 
    image: ChefImage,
    desc: 'Chef Priya is the founder of Priya’s Bakes. She creates fresh and delicious baked items with care and passion.'
  },
  { 
    name: 'Nirmala', 
    role: 'Assistant Chef', 
    image: ChefImage2,
    desc: ' is the Assistant Chef at Priya’s Bakes, dedicated to crafting fresh, high-quality baked goods with consistency and excellence.'
  },
];

const Experts: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-coffee mb-16 text-center lg:text-left">
          Meet our Masters <br /> of Culinary Art
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {experts.map((expert, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row gap-8 items-center lg:items-start group">
              
              <div className="w-64 h-80 rounded-[40px] overflow-hidden shadow-2xl shrink-0">
                <img 
                  src={expert.image} 
                  alt={expert.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>

              <div className="flex-1 text-center lg:text-left pt-4">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                  <div className="w-12 h-[1px] bg-amber-600"></div>
                  <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">
                    {expert.role}
                  </span>
                </div>

                <h3 className="text-3xl font-serif text-coffee mb-4">
                  {expert.name}
                </h3>

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


// import React from 'react';
// import { Instagram, Twitter, Facebook } from 'lucide-react';
// import ChefPriyaImage from "../public/images/ChefProfileImage.jpeg";

// const expert = { 
//   name: 'Sakthi Priya', 
//   role: 'Chef', 
//   desc: 'Chef Priya is the founder of Priya’s Bakes. She creates fresh and delicious baked items with care and passion.'
// };

// const Experts: React.FC = () => {
//   return (
//     <section className="py-24">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-serif text-coffee mb-16 text-center">
//           Meet our Masters <br /> of Culinary Art
//         </h2>
        
//         <div className="flex justify-center">
//           <div className="flex flex-col lg:flex-row gap-8 items-center group">
            
//             <div className="w-64 h-80 rounded-[40px] overflow-hidden shadow-2xl shrink-0">
//               <img 
//                 src={ChefPriyaImage} 
//                 alt={expert.name} 
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//               />
//             </div>

//             <div className="text-center lg:text-left pt-4 max-w-md">
//               <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
//                 <div className="w-12 h-[1px] bg-amber-600"></div>
//                 <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">
//                   {expert.role}
//                 </span>
//               </div>

//               <h3 className="text-3xl font-serif text-coffee mb-4">
//                 {expert.name}
//               </h3>

//               <p className="text-gray-500 mb-6 leading-relaxed">
//                 {expert.desc}
//               </p>

//               <div className="flex items-center justify-center lg:justify-start gap-4 text-coffee/40">
//                 <Instagram size={20} className="hover:text-amber-600 cursor-pointer transition-colors" />
//                 <Twitter size={20} className="hover:text-amber-600 cursor-pointer transition-colors" />
//                 <Facebook size={20} className="hover:text-amber-600 cursor-pointer transition-colors" />
//               </div>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Experts;
