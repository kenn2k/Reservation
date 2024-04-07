import { AddPropertyTypes, PropertiesType } from "@/types/types";

export const checkboxData = [
  { id: "amenity_wifi", label: "Wifi" },
  { id: "amenity_kitchen", label: "Full Kitchen" },
  { id: "amenity_washer_dryer", label: "Washer & Dryer" },
  { id: "amenity_free_parking", label: "Free Parking" },
  { id: "amenity_pool", label: "Swimming Pool" },
  { id: "amenity_hot_tub", label: "Hot Tub" },
  { id: "amenity_24_7_security", label: "24/7 Security" },
  { id: "amenity_wheelchair_accessible", label: "Wheelchair Accessible" },
  { id: "amenity_elevator_access", label: "Elevator Access" },
  { id: "amenity_dishwasher", label: "Dishwasher" },
  { id: "amenity_gym_fitness_center", label: "Gym/Fitness Center" },
  { id: "amenity_air_conditioning", label: "Air Conditioning" },
  { id: "amenity_balcony_patio", label: "Balcony/Patio" },
  { id: "amenity_smart_tv", label: "Smart TV" },
  { id: "amenity_coffee_maker", label: "Coffee Maker" },
];

export const locationData = [
  { id: "street", name: "location.street", placeholder: "Street" },
  { id: "city", name: "location.city", placeholder: "City", required: true },
  { id: "state", name: "location.state", placeholder: "State", required: true },
  { id: "zipcode", name: "location.zipcode", placeholder: "Zipcode" },
];

export const measurements = [
  { id: "beds", name: "beds", label: "Beds", widthClass: "pr-2" },
  { id: "baths", name: "baths", label: "Baths", widthClass: "px-2" },
  {
    id: "square_feet",
    name: "square_feet",
    label: "Square Feet",
    widthClass: "pl-2",
  },
];

export const rateFields = [
  { id: "weekly_rate", name: "rates.weekly", label: "Weekly" },
  { id: "monthly_rate", name: "rates.monthly", label: "Monthly" },
  { id: "nightly_rate", name: "rates.nightly", label: "Nightly" },
];

export const sellerInfoFields = [
  {
    id: "seller_name",
    name: "seller_info.name",
    label: "Seller Name",
    type: "text",
    placeholder: "Name",
  },
  {
    id: "seller_email",
    name: "seller_info.email",
    label: "Seller Email",
    type: "email",
    placeholder: "Email address",
    required: true,
  },
  {
    id: "seller_phone",
    name: "seller_info.phone",
    label: "Seller Phone",
    type: "tel",
    placeholder: "Phone",
  },
];

//! for useState
export const initialState: AddPropertyTypes = {
  _id: "1",
  type: "Apartment",
  name: "Test Property",
  description: "",
  location: {
    street: "",
    city: "Test City",
    state: "Test State",
    zipcode: "",
  },
  beds: 3,
  baths: 2,
  square_feet: 1800,
  amenities: [],
  rates: {
    weekly: 100,
    monthly: 2000,
    nightly: 50,
  },
  seller_info: {
    name: "",
    email: "test@test.com",
    phone: "",
  },

  images: [],
};
