import { Wrench, Search, Car, Battery, Disc, Settings } from 'lucide-react';
import { ServiceItem, Testimonial, BusinessInfo } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Idle Inspections & Repair",
  owner: "Miguel Cruz",
  phone: "(325) 249-5131",
  rawPhone: "3252495131",
  address: "10 Nelson Ave, San Angelo, TX 76905",
  location: "San Angelo, TX",
  hours: "Mon-Fri: 8:30 AM - 5:00 PM",
  weekendHours: "Sat: By Appointment | Sun: Closed",
  tagline: "Honest Inspections. Reliable Repair.",
};

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Diagnostic Inspections",
    description: "I use professional equipment to identify root causes of your check engine light or strange noises.",
    icon: Search,
  },
  {
    id: 2,
    title: "Brake Repair",
    description: "Complete brake services including pads, rotors, and fluid checks to keep you safe.",
    icon: Disc,
  },
  {
    id: 3,
    title: "General Maintenance",
    description: "Oil changes, filter replacements, and fluid top-offs to keep your vehicle running smoothly for years.",
    icon: Wrench,
  },
  {
    id: 4,
    title: "Battery & Electrical",
    description: "Dead battery or alternator issues? I can test your charging system and get you powered up again.",
    icon: Battery,
  },
  {
    id: 5,
    title: "Suspension & Steering",
    description: "Fixing bumps and rattles. Shocks, struts, and steering components for a smooth ride down Texas roads.",
    icon: Car,
  },
  {
    id: 6,
    title: "Engine Repair",
    description: "From belts and hoses to more complex engine repairs, I handle the hard work so you don't have to.",
    icon: Settings,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Leah Claire",
    text: "The most honest, humble, and understanding mechanic in town and that we've ever had. Miguel is trustworthy, fair, and knowledgeable— I have never felt pressured to fix more than what's needed (or recommended with a valid reason). He does great work and we've always had an easy time getting on his schedule! 10/10 would highly recommend!",
    rating: 5,
    date: "a year ago"
  },
  {
    id: 2,
    name: "Brooke Villarreal",
    text: "Best service! I will always take my cars here. Always honest and fair.",
    rating: 5,
    date: "a year ago"
  },
  {
    id: 3,
    name: "Noley Dunlap",
    text: "I am a new San Angelo resident. Not only so friendly, but quick and even gave information on my next steps to registering my car.",
    rating: 5,
    date: "a year ago"
  },
];