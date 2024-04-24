"use client";
import ClientLoading from "@/components/UI/ClientLoading";
import PropertyCard from "@/components/properties/PropertyCard";
import { PropertiesType } from "@/types/types";
import React, { useEffect, useState } from "react";
interface ISaved extends Pick<PropertiesType, "_id"> {}
const SavedPropertyPage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSavedProperties = async () => {
      try {
        const res = await fetch(`/api/bookmarks`);

        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
          //` Sort the properties by create date
        } else {
          console.error(`Failed to fetch saved properties: ${res.statusText}`);
        }
      } catch (error) {
        console.error(
          `An error occurred while fetching saved properties: ${error}`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSavedProperties();
  }, []);
  console.log(properties);

  return loading ? (
    <ClientLoading loading={loading} />
  ) : (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <h1 className="text-2xl mb-4">Saved Properties</h1>
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property: PropertiesType) => (
              <PropertyCard property={property} key={property._id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SavedPropertyPage;
