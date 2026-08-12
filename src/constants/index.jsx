
import { Home } from "lucide-react";
import { Building2 } from "lucide-react";
import { Users } from "lucide-react";


import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";


export const navItems = [
  { label: "Buy", href: "#" },
  { label: "Rent", href: "#" },
  { label: "Projects", href: "#", highlight: true },
  { label: "Communities", href: "#" },
  { label: "Media", href: "#" },
  { label: "About Us", href: "#" },
];

export const testimonials = [
  {
    image: "John Doe",
    location: "Miami, Florida",
    price: "$2,450,000",
    beds:"4",

    company: "Stellar Solutions",
    
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  { image: user3,
    user: "David Johnson",
    company: "Quantum Innovations",
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
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

