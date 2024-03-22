import React from "react";
import { useMyContext } from "../UI/Context";

const AddPropertyLocation = () => {
  const { fields, setFields } = useMyContext();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name.includes(".")) {
      const [outerKey, innerKey] = name.split(".");
      console.log(outerKey, innerKey);
      setFields((prevFields: any) => ({
        ...prevFields,
        [outerKey]: {
          ...prevFields[outerKey],
          [innerKey]: value,
        },
      }));
    } else {
      setFields((prevFields) => ({
        ...prevFields,
        [name]: value,
      }));
    }
  };
  return (
    <div className="mb-4 bg-blue-50 p-4">
      <label className="block text-gray-700 font-bold mb-2">Location</label>
      <input
        type="text"
        id="street"
        name="location.street"
        className="border rounded w-full py-2 px-3 mb-2"
        placeholder="Street"
        onChange={handleChange}
        value={fields.location.street}
      />
      <input
        type="text"
        id="city"
        name="location.city"
        className="border rounded w-full py-2 px-3 mb-2"
        placeholder="City"
        required
        onChange={handleChange}
        value={fields.location.city}
      />
      <input
        type="text"
        id="state"
        name="location.state"
        className="border rounded w-full py-2 px-3 mb-2"
        placeholder="State"
        required
        onChange={handleChange}
        value={fields.location.state}
      />
      <input
        type="text"
        id="zipcode"
        name="location.zipcode"
        className="border rounded w-full py-2 px-3 mb-2"
        placeholder="Zipcode"
        onChange={handleChange}
        value={fields.location.zipcode}
      />
    </div>
  );
};

export default AddPropertyLocation;
