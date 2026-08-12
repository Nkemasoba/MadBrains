import { MapPin, Bed3, Bath, Square, Heart } from "lucide-react";
import { preferredListings } from "../constants";

const PreferredListings = () => {
  return (
    <section className="mt-20 max-w-7xl mx-auto px-6 mb-16">
      
      {/* SECTION HEADER ROW */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <div className="flex items-center gap-3">
          {/* Subtle Orange Badge */}
          <span className="bg-orange-50 text-orange-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-orange-100">
            Property
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Preferred Listings
          </h2>
        </div>
        
        {/* View All Action Link */}
        <a 
          href="#all-listings" 
          className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors flex items-center gap-1 self-start sm:self-auto"
        >
          View All Listings <span className="text-xs">➔</span>
        </a>
      </div>

      {/* DYNAMIC LISTING GRID */}
      {/* grid-cols-1 forces single card layout on mobile, md:grid-cols-3 handles desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {preferredListings.map((property, index) => (
          <div 
            key={index} 
            className="group bg-white rounded-3xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
          >
            {/* Image Container with Floating Interactions */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100">
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating Heart/Favorite Button */}
              <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-white transition-colors shadow-sm">
                <Heart className="w-4 h-4 fill-current text-transparent hover:text-red-500" />
              </button>
            </div>

            {/* Title & Price Information */}
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-gray-900 text-lg group-hover:text-orange-500 transition-colors">
                {property.title}
              </h3>
              <span className="font-bold text-orange-600 text-base">
                {property.price}
              </span>
            </div>

            {/* Location Subtext with Icon Pin */}
            <div className="flex items-center gap-1 text-gray-400 text-xs mb-4">
              <MapPin className="w-3.5 h-3.5 text-gray-400" />
              <span>{property.location}</span>
            </div>

            {/* Structural Blueprint Grid (Beds, Baths, Sqft) */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-50 text-gray-500 text-xs font-medium">
              <div className="flex items-center gap-1.5 justify-center py-1 bg-gray-50 rounded-xl">
                <Bed3 className="w-3.5 h-3.5 text-gray-400" />
                <span>{property.beds} Beds</span>
              </div>
              <div className="flex items-center gap-1.5 justify-center py-1 bg-gray-50 rounded-xl">
                <Bath className="w-3.5 h-3.5 text-gray-400" />
                <span>{property.baths} Baths</span>
              </div>
              <div className="flex items-center gap-1.5 justify-center py-1 bg-gray-50 rounded-xl">
                <Square className="w-3.5 h-3.5 text-gray-400" />
                <span>{property.sqft} Sqft</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default PreferredListings;