import connectDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async (request: Request) => {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const location = searchParams.get("location");
    const propertyType = searchParams.get("propertyType");

    //` Create a regex pattern for location search
    if (location !== null) {
      const locationPattern = new RegExp(location, "i");
      let query = {
        $or: [
          { name: locationPattern },
          { description: locationPattern },
          { "location.street": locationPattern },
          { "location.city": locationPattern },
          { "location.state": locationPattern },
          { "location.zipcode": locationPattern },
        ],
      };
      if (propertyType && propertyType !== "All") {
        const typePattern = new RegExp(propertyType, "i");
        query.$or.forEach((condition: any) => {
          if (!("$and" in condition)) {
            condition.$and = [];
          }
          condition.$and.push({ type: typePattern });
        });
      }

      const properties = await Property.find(query);

      return new Response(JSON.stringify(properties), {
        status: 200,
      });
    }
  } catch (error) {
    return new Response("something went wrong", { status: 500 });
  }
};
