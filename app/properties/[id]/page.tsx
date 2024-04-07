"use client";
import React, { useEffect, useState } from "react";
import { fetchProperty } from "@/utils/request";
import { useParams } from "next/navigation";
import DetailImageProp from "@/components/details/DetailImageProp";
import DetailSideBar from "@/components/details/DetailSideBar";
import DetailOptions from "@/components/details/DetailOptions";
import DetailDescription from "@/components/details/DetailDescription";
import DetailAmenities from "@/components/details/DetailAmenities";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import ClientLoading from "@/components/UI/ClientLoading";
import PropertyImages from "@/components/properties/PropertyImages";
import { AddPropertyTypes } from "@/types/types";

const PropertyPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.error("error", error);
      } finally {
        setLoading(false);
      }
    };
    if (property === null) {
      getData();
    }
  }, [id, property]);
  if (!loading && !property) {
    return <h1>Property not found</h1>;
  }
  return (
    <>
      {loading && !property && <ClientLoading loading={loading} />}
      {!loading && property && (
        <>
          <DetailImageProp property={property} />
          <section>
            <div className="container m-auto py-6 px-6">
              <Link
                href="/properties"
                className="text-blue-500 hover:text-blue-600 flex items-center"
              >
                <FaArrowLeft className="mr-4" /> Back to Properties
              </Link>
            </div>
          </section>
          <section className="bg-blue-50">
            <div className="container m-auto py-10 px-6">
              <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                <main>
                  <DetailOptions property={property} />
                  <DetailDescription property={property} />
                  <DetailAmenities property={property} />
                </main>
                <DetailSideBar property={property} />
              </div>
            </div>
          </section>
          <PropertyImages images={(property as AddPropertyTypes).images} />
        </>
      )}
    </>
  );
};

export default PropertyPage;
