import { PropertiesType } from "@/types/types";
import React from "react";
import { FaCheck } from "react-icons/fa";

interface IDetailAmenities {
  property: PropertiesType;
}

const DetailAmenities = ({ property }: IDetailAmenities) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-bold mb-6">Amenities</h3>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none space-y-2">
        {property.amenities.map((amenity, index) => (
          <li key={index}>
            <FaCheck className="inline-block mr-2 text-green-600" />
            {amenity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailAmenities;
