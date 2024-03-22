"use client";
import React, { useEffect, useState } from "react";
import AddPropertyAmenities from "./AddPropertyAmenities";
import AddPropertyTitle from "./AddPropertyTitle";
import AddPropertyLocation from "./AddPropertyLocation";
import AddPropertyMeasurement from "./AddPropertyMeasurement";
import AddPropertyRate from "./AddPropertyRate";
import AddPropertySeller from "./AddPropertySeller";
import { useMyContext } from "../UI/Context";

const AddProperty = () => {
  const [selected, setSelected] = useState(false);
  const { fields, setFields } = useMyContext();
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const { files } = event.target;

      const updatedImages: any = [...fields.images];
      for (const file of files) {
        updatedImages.push(file);
      }
      setFields((prevFields) => ({
        ...prevFields,
        images: updatedImages,
      }));
    }
  };

  useEffect(() => {
    setSelected(true);
  }, []);
  return (
    selected && (
      <form
        action="/api/properties"
        encType="multipart/form-data"
        method="POST"
      >
        <h2 className="text-3xl text-center font-semibold mb-6">
          Add Property
        </h2>

        <AddPropertyTitle />
        <AddPropertyLocation />
        <AddPropertyMeasurement />
        <AddPropertyAmenities />

        <AddPropertyRate />
        <AddPropertySeller />
        <div className="mb-4">
          <label
            htmlFor="images"
            className="block text-gray-700 font-bold mb-2"
          >
            Images (Select up to 4 images)
          </label>
          <input
            type="file"
            id="images"
            name="images"
            className="border rounded w-full py-2 px-3"
            accept="image/*"
            multiple
            required
            onChange={handleImageChange}
          />
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Property
          </button>
        </div>
      </form>
    )
  );
};

export default AddProperty;
