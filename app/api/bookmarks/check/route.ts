import connectDB from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";

export const dynamic = "force-dynamic";

export const POST = async (request: Request) => {
  try {
    await connectDB();

    const { propertyId } = await request.json();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required", { status: 401 });
    }
    const { userId } = sessionUser;

    //` find user in database
    const user = await User.findOne({ _id: userId });

    //` check if property is bookmarked
    let isBookMarker = user.bookmarks.includes(propertyId);

    return new Response(JSON.stringify({ isBookMarker }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response("something went wrong", { status: 500 });
  }
};
