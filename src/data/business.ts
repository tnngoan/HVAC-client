import type { BusinessInfo } from "@/types";

export const business: BusinessInfo = {
  name: "Comfort Air HVAC",
  phone: "(555) 123-4567",
  email: "info@comfortairhvac.com",
  address: {
    street: "123 Main Street",
    city: "Austin",
    state: "TX",
    zip: "78701",
  },
  hours: {
    weekdays: "7:00 AM – 8:00 PM",
    saturday: "8:00 AM – 5:00 PM",
    sunday: "Emergency Only",
  },
  license: "TACLA12345C",
  serviceAreas: [
    "Austin",
    "Round Rock",
    "Cedar Park",
    "Georgetown",
    "Pflugerville",
    "Leander",
    "Lakeway",
  ],
  yearEstablished: 2008,
};
