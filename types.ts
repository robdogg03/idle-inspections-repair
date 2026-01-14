import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number; // 1-5
  date: string;
}

export interface NavLink {
  label: string;
  href: string;
}