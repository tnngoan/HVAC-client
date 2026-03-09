export interface ServiceData {
  slug: string;
  title: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  icon: string;
  heroImage: string;
  problem: string;
  solution: string;
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  ctaText: string;
}

export interface BusinessInfo {
  name: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  license: string;
  serviceAreas: string[];
  yearEstablished: number;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  date: string;
}
