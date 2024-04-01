"use client";
import ClientLoading from "@/components/UI/ClientLoading";
import PropertyCard from "@/components/properties/PropertyCard";
import { PropertiesType } from "@/types/types";
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
interface ISaved extends Pick<PropertiesType, "_id"> {}
const SavedPropertyPage = () => {
  const [properties, setProperties] = useState([]);
=======

import React, { useEffect, useState } from "react";

const SavedProperty = () => {
  const [properties, setProperties] = useState<PropertiesType[]>([]);
>>>>>>> b87025d0363c51ddaa6e0e7208bc34398be68a17
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSavedProperties = async () => {
      try {
<<<<<<< HEAD
        const res = await fetch(`/api/bookmarks`);

        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
          //` Sort the properties by create date
          properties.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
=======
        const res = await fetch(`/api/bookmarks`, {
          method: "GET",
        });

        if (res.status === 200) {
          const data: PropertiesType[] = await res.json();
          data.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          ); // Sort the properties by create date
          setProperties(data);
>>>>>>> b87025d0363c51ddaa6e0e7208bc34398be68a17
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
<<<<<<< HEAD
  console.log(properties);

=======
>>>>>>> b87025d0363c51ddaa6e0e7208bc34398be68a17
  return loading ? (
    <ClientLoading loading={loading} />
  ) : (
    <section className="px-4 py-6">
<<<<<<< HEAD
      <div className="container-xl lg:container m-auto px-4 py-6">
        <h1 className="text-2xl mb-4">Saved Properties</h1>
=======
      <h1 className="text-2xl mb-4">Saved Properties</h1>
      <div className="container-xl lg:container m-auto px-4 py-6">
>>>>>>> b87025d0363c51ddaa6e0e7208bc34398be68a17
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<<<<<<< HEAD
            {properties.map((property) => (
              <PropertyCard property={property} key={property._id} />
=======
            {properties.map((property, index) => (
              <PropertyCard property={property} key={index} />
>>>>>>> b87025d0363c51ddaa6e0e7208bc34398be68a17
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default SavedPropertyPage;
=======
export default SavedProperty;
>>>>>>> b87025d0363c51ddaa6e0e7208bc34398be68a17
