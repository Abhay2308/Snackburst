
import React from 'react';

export const AnnouncementBar: React.FC = () => {
  const fragments = ["100% Guilt Free", "No Palm Oil", "Gluten Free"];
  
  // We repeat the set of fragments to ensure a smooth loop
  const set = (
    <div className="flex items-center">
      {fragments.map((text, idx) => (
        <React.Fragment key={idx}>
          <span className="px-16 font-poppins font-black text-xl md:text-2xl tracking-[0.25em] text-white uppercase whitespace-nowrap">
            {text}
          </span>
          <span className="text-white font-black text-3xl opacity-50">•</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="fixed top-0 left-0 w-full h-16 md:h-20 bg-brandOrange z-[100] flex items-center overflow-hidden border-b-4 border-black/5 shadow-xl">
      <div className="animate-marquee flex items-center">
        {set}
        {set}
        {set}
        {set}
      </div>
    </div>
  );
};
