import Search from "@/components/home/Search";
import PropertyCard from "@/components/properties/PropertyCard";
import { PropertiesType } from "@/types/types";
import { fetchProperties } from "@/utils/request";

const PropertiesPage = async () => {
  const properties = await fetchProperties();

  //` sorting by data
  properties.sort(
    (a: { createdAt: Date }, b: { createdAt: Date }) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start">
          <Search />
        </div>
      </section>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
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
    </>
  );
};

export default PropertiesPage;
