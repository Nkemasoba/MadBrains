
import { Home } from "lucide-react";
import { Building2 } from "lucide-react";
import { Users } from "lucide-react";
import modern from "../assets/modern.jpg";
import luxury from "../assets/luxury.jpg";
import cozy from "../assets/cozy.jpg";


export const navItems = [
  { label: "Buy", href: "#" },
  { label: "Rent", href: "#" },
  { label: "Projects", href: "#", highlight: true },
  { label: "Communities", href: "#" },
  { label: "Media", href: "#" },
  { label: "About Us", href: "#" },
];

export const preferredListings= [
  {
    image: modern,
    title: "Modern Villa",
    location: "Miami, Florida",
    price: "$2,450,000",
    beds:"4",
    baths:"3",
    sqft:"3,200",

  },
  {
    image: cozy,
    title: "Beachfront Condo",
    location: "Austin, Texas",
    price: "$1,250,000",
    beds:"3",
    baths:"2",
    sqft:"2,100",
  },
  {  
    image: luxury,
    title: "Luxury Apartment",
    location: "New York, USA",
    price: "$3,150,000",
    beds:"5",
    baths:"4",
    sqft:"4,000",
  },

];

export const ratingOptions = [
  {
    icon: Building2,
    title: "40K+",
    features: [
      "Successful",
      "Projects",
    ],
  },
  {
     icon: Home,
    title: "26K+",
    features: [
      "Available",
      "Property",
    ],
  },
  {
    icon: Users,
    title: "10M+",
    features: [
      "Satisfied",
      "Clients",
    ],
  },
];

