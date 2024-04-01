"use client";
import React, { FormEvent, useEffect, useState } from "react";

import { useMyContext } from "../UI/Context";
import AddPropertyTitle from "../addProperty/AddPropertyTitle";
import AddPropertyLocation from "../addProperty/AddPropertyLocation";
import AddPropertyMeasurement from "../addProperty/AddPropertyMeasurement";
import AddPropertyAmenities from "../addProperty/AddPropertyAmenities";
import AddPropertyRate from "../addProperty/AddPropertyRate";
import AddPropertySeller from "../addProperty/AddPropertySeller";
import { useParams, useRouter } from "next/navigation";
import { fetchProperty } from "@/utils/request";

const PropertyEdit = () => {
  const { id } = useParams();
  const router = useRouter();
  const [selected, setSelected] = useState(false);
  const [loading, setLoading] = useState(true);
  const { setFields } = useMyContext();

  useEffect(() => {
    setSelected(true);

    // Fetch property data using your fetchProperty function
    const fetchPropertyData = async () => {
      try {
        const propertyData = await fetchProperty(id);

        // Populate the fields state with the fetched data
        setFields(propertyData);
      } catch (error) {
        console.error("Error fetching property data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyData();
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target as HTMLFormElement);

      const res = await fetch(`/api/properties/${id}`, {
        method: "PUT",
        body: formData,
      });
      if (res.status === 200) {
        router.push(`/properties/${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    selected &&
    !loading && (
      <form onSubmit={handleSubmit}>
        <h2 className="text-3xl text-center font-semibold mb-6">
          Add Property
        </h2>

        <AddPropertyTitle />
        <AddPropertyLocation />
        <AddPropertyMeasurement />
        <AddPropertyAmenities />

        <AddPropertyRate />
        <AddPropertySeller />

        <div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update Property
          </button>
        </div>
      </form>
    )
  );
};

export default PropertyEdit;
