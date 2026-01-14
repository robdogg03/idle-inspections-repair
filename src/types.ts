import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly icon: LucideIcon;
}

export interface Testimonial {
  readonly id: number;
  readonly name: string;
  readonly text: string;
  readonly rating: 1 | 2 | 3 | 4 | 5;
  readonly date: string;
}

export interface BusinessInfo {
  readonly name: string;
  readonly owner: string;
  readonly phone: string;
  readonly rawPhone: string;
  readonly address: string;
  readonly location: string;
  readonly hours: string;
  readonly weekendHours: string;
  readonly tagline: string;
}
