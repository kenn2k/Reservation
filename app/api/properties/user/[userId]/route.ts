import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";

//` GET /api/properties/user/:userId
export const GET = async (request: Request, { params }: any) => {
  try {
    await connectDB();

    const userId = params.userId;

    if (!userId) {
      return new Response("User Id is required", { status: 400 });
    }

    //` fetching everything
    const properties = await Property.find({ owner: userId });
    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};
