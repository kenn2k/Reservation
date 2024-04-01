"use client";
import ClientLoading from "@/components/UI/ClientLoading";
import Search from "@/components/home/Search";
import PropertyCard from "@/components/properties/PropertyCard";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const SearchResultsPage = () => {
  const searchParams = useSearchParams();

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = searchParams.get("location");
  const propertyType = searchParams.get("propertyType");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(
          `/api/properties/search?location=${location}&propertyType=${propertyType}`
        );
        if (res.status === 200) {
          const data = await res.json();
          console.log(data);
          setProperties(data);
        } else {
          setProperties([]);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [location, propertyType]);

  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start">
          <Search />
        </div>
      </section>
      {loading ? (
        <ClientLoading loading={loading} />
      ) : (
        <section className="px-4 py-6">
          <div className="container-xl lg:container m-auto px-4 py-6">
            <Link
              href="/properties"
              className="flex items-center text-blue-500 hover:underline mb-3"
            >
              <FaArrowAltCircleLeft className="mr-2 mb-1" /> Back to properties
            </Link>
            <h1 className="text-2xl mb-4">Search Results</h1>
            {properties.length === 0 ? (
              <p>No properties found</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {properties.map((property, index) => (
                  <PropertyCard property={property} key={index} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};
export default SearchResultsPage;
