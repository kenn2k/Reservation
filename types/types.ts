export type BoxesTypes = {
  heading: string;
  backgroundColor: string;
  buttonInfo: {
    text: string;
    link: string;
    backgroundColor: string;
  };
};

export type PropertiesType = {
  _id: string;
  owner: string;
  name: string;
  type: string;
  description: string;
  location: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  };
  beds: number;
  baths: number;
  square_feet: number;
  amenities: string[];
  rates: {
    weekly?: number;
    monthly?: number;
    nightly?: number;
  };
  seller_info: {
    name: string;
    email: string;
    phone: string;
  };
  images: string[];
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
};

export type AddPropertyTypes = {
  type: string;
  name: string;
  description: string;
  location: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  };
  beds: string;
  baths: string;
  square_feet: string;

  //! type never
  amenities: string[];
  rates: {
    weekly: string;
    monthly: string;
    nightly: string;
  };
  seller_info: {
    name: string;
    email: string;
    phone: string;
  };
  images: [];
};
