import { PropertiesType } from "@/types/types";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

//` Fetch all properties
async function fetchProperties() {
  try {
    //` Handle the case when the domain is not available yet
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/properties`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
}

//` Fetch one property by ID
async function fetchProperty(id: any) {
  try {
    //` Handle the case when the domain is not available yet
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/properties/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching properties:", error);
    return null;
  }
}

export { fetchProperties, fetchProperty };
