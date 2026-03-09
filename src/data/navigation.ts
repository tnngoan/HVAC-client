import type { NavLink } from "@/types";
import { services } from "./services";

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({
      label: s.title,
      href: `/services/${s.slug}`,
    })),
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerServices: NavLink[] = services.map((s) => ({
  label: s.title,
  href: `/services/${s.slug}`,
}));
