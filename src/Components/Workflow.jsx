
import pic1 from "../assets/pic1.jpg"
import { MapPin, Home, Tag, Search, ChevronDown } from 'lucide-react';



const Workflow = () => {
  return (
    <div className="bg-white "> 
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
            <div className="pt-12 pb-18 w-full ml-4">
                <p className="text-sm sm:text-lg lg:text-xl text-orange-500 font-semibold tracking-wide">REAL ESTATE</p>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl  tracking-wide"> 
                    <span className="text-black">{" "}Experience</span><br></br>
                    <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">{" "}Luxury Living</span>
                </h2>
                <p className="text-black mt-5 ">Discover an extensive range of property<br></br> listing categories for your convinience.<br></br>Your ideal property is just a search away! </p>
                <div className="inline-flex mt-6 bg-gray-100 p-4 rounded-xl">
                <a href="#" className="py-2 px-4 rounded-lg  bg-gray-200 text-black">
                  Buy
                </a>
                <a href="#" className=" py-2 px-3 rounded-lg bg-gray-200 text-black">
                  Sale
                </a>
                 <a href="#" className=" py-2 px-3 rounded-lg bg-gray-200 text-black">
                  Projects
                </a>
              </div>
          
            
            </div>
            <div className="p-2 w-full h-full ">
                <img src={pic1} alt="Code" className="w-full h-full object-cover rounded-xl " />
            </div>

        </div>


        <div className=" relative z-0 flex -mt-20 bg-gray-100 p-1 items-center space-x-6 rounded-xl  ">
                    
            <div className="flex-1 lg:flex-[1.5] min-w-0 flex items-center bg-white border border-gray-300 rounded-xl px-4 py-2 sm:py-4 sm:px-5 shadow-sm focus-within:ring-2 focus-within:ring-orange-500/20 focus-within:border-orange-500 transition-all">
                <MapPin className="text-orange-500 mr-3 flex-shrink-0 w-5 h-5" />
                <input 
                    type="text"
                    placeholder="Search Area" 
                    className="w-full bg-transparent text-gray-800 placeholder-gray-400 font-medium text-sm outline-none"
                />
            </div>

            {/* 2. House/Villa: Set as an explicit button, transforms color scheme to orange background and white text on hover */}
            <button className="flex-1 bg-gray-200 text-gray-800 font-semibold text-sm py-2 px-4 sm:py-4 sm:px-5 rounded-xl flex items-center justify-between hover:bg-orange-500 hover:text-white hover:shadow-md transition-all duration-300 ease-in-out group cursor-pointer border border-transparent">
            <div className="flex items-center space-x-3">
                <Home className="text-orange-500 group-hover:text-white transition-colors duration-300 flex-shrink-0 w-[18px] h-[18px]" />
                <span>House/Villa</span>
            </div>
            <ChevronDown className="text-gray-400 group-hover:text-white/80 transition-colors duration-300 ml-2 w-4 h-4" />
            </button>

            {/* 3. Price Filter: Replicates button architecture and hover transformations */}
            <button className="flex-1 bg-gray-200 text-gray-800 font-semibold text-sm py-2 px-4 sm:py-4 sm:px-5 rounded-xl flex items-center justify-between hover:bg-orange-500 hover:text-white hover:shadow-md transition-all duration-300 ease-in-out group cursor-pointer border border-transparent">
            <div className="flex items-center space-x-3">
                <Tag className="text-orange-500 group-hover:text-white transition-colors duration-300 flex-shrink-0 w-[18px] h-[18px]" />
                <span>Price</span>
            </div>
            <ChevronDown className="text-gray-400 group-hover:text-white/80 transition-colors duration-300 ml-2 w-4 h-4" />
            </button>

            {/* 4. Action Search Button: Built with solid orange prominence tracking through the layout border */}
            <button type="submit" className="flex-1 bg-gray-200 hover:bg-orange-500 text-gray-800 font-bold text-sm py-2 px-4 sm:py-4 sm:px-5 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:text-white active:scale-[0.98]">
            <Search className="flex-shrink-0 w-[18px] h-[18px] stroke-[2.2] " />
            <span>Search</span>
            </button> 
        </div>


    </div>
  )
}

export default Workflow