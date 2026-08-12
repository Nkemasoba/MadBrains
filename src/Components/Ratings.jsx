// Price.jsx
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import { ArrowRight } from "lucide-react";
import { ratingOptions } from "../constants";

const Ratings = () => {
  return (
    <div className="mt-10 mb-10 max-w-7xl mx-auto px-4">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3  lg:border-r lg:border-gray-100 lg:pr-8 ">
          {ratingOptions.map((option, index) => {
          
            const IconComponent = option.icon;

            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center  py-9 px-4 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out"
              >
                {/* Icon sits directly above the text */}
                {IconComponent && (
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-orange-500" />
                  </div>
                )}
                
                {/* Main Stat Number */}
                <h3 className="text-3xl font-bold text-gray-900 mb-6  hover:text-orange-500 hover:shadow-md transition-all duration-300 ease-in-out group cursor-pointer">
                  {option.title}
                </h3>
                
                {/* Stat Label with subtle max-width to handle line breaks cleanly */}
                <p className="text-sm text-gray-500 max-w-[120px] leading-snug ">
                  {option.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="block">
                      {feature}
                    </span>
                  ))}
                </p>
              </div>
            );
          })}
        </div>

        {/* RIGHT SIDE: Review Card Section (takes up 1/4 layout on desktop) */}
        <div className="flex flex-col justify-between h-full min-h-[160px] pt-4 lg:pt-0 relative px-2">
          {/* Quote Mark Decoration */}
          <span className="text-orange-400 text-4xl font-serif absolute -top-2 left-0 select-none">
            “
          </span>
          
          <div className="pl-4">
            <p className="text-sm text-gray-600 italic leading-relaxed">
              I had a fantastic stay at the Cozy Cottage Retreat. The property was clean, 
              well-maintained, and beautifully furnished.
            </p>
          </div>

          {/* Bottom Avatars and Interaction Button */}
          <div className="flex items-center justify-between mt-6 pl-4">
            {/* Overlapping Profile Circles */}
            <div className="flex -space-x-2 overflow-hidden">
              <img src={user1} alt="Code" className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
               <img src={user2} alt="Code" className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                <img src={user3} alt="Code" className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
            </div>

            {/* Next Action Button */}
            <button className="w-8 h-8 rounded-full bg-orange-50 hover:bg-orange-100 flex items-center justify-center transition-colors">
              <ArrowRight className="w-4 h-4 text-orange-500" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Ratings;