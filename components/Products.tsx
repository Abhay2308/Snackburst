
import React from 'react';

const SHARED_IMAGE = "https://i0.wp.com/aartimadan.com/wp-content/uploads/2020/07/Makhana-4-Flavours.jpg?w=1000&ssl=1";

const PRODUCTS = [
  { id: 1, name: "Peri Peri", image: SHARED_IMAGE, tag: "Hot & Spicy" },
  { id: 2, name: "Fresh Mint", image: SHARED_IMAGE, tag: "Cooling Vibe" },
  { id: 3, name: "Himalayan salt and pepper", image: SHARED_IMAGE, tag: "Classic Crunch" },
  { id: 4, name: "Achari masti", image: SHARED_IMAGE, tag: "Desi Twist" },
];

export const Products: React.FC = () => {
  return (
    <section id="all-products" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="relative">
            <h2 className="section-heading border-l-8 border-brandOrange pl-6 uppercase tracking-tighter leading-none">
              Our <span className="text-brandOrange">Iconic</span><br/>Flavours
            </h2>
            <div className="absolute -top-6 -left-2 text-brandOrange opacity-10 font-poppins font-black text-6xl select-none">MUNCH</div>
          </div>
          <p className="body-text text-gray-500 max-w-sm border-r-2 border-brandOrange/20 pr-6 text-right font-medium italic">
            Handpicked foxnuts roasted to perfection with our secret artisanal spice blends.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer relative bg-gray-50/50 p-6 rounded-[3rem] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="absolute -top-4 -right-4 z-20 bg-brandOrange text-white text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg border-2 border-white">
                {product.tag}
              </div>
              <div className="aspect-square overflow-hidden rounded-[2.5rem] bg-gray-100 mb-8 border-4 border-transparent transition-all group-hover:border-brandOrange">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="px-2">
                <h3 className="font-poppins font-black text-2xl md:text-3xl group-hover:text-brandOrange transition-colors uppercase tracking-tight leading-tight">
                  {product.name}
                </h3>
                <div className="flex items-center mt-4 space-x-2">
                   <div className="h-1 bg-brandOrange w-8 group-hover:w-full transition-all duration-500 rounded-full"></div>
                   <span className="text-brandOrange font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Discover</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
