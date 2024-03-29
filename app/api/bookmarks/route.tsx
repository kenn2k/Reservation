import connectDB from "@/config/database";
import Property from "@/models/Property";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";

export const dynamic = "force-dynamic";

//` GET /api/bookmarks
export const GET = async (request: Request) => {
  try {
    await connectDB();

    const sessionUserData = await getSessionUser();
    if (sessionUserData) {
      const { userId } = sessionUserData;
      //` Find the user by their session ID
      const user = await User.findOne({ _id: userId });

      if (!user) {
        return new Response("User not found", { status: 404 });
      }

      //` Retrieve the user's bookmarks
      const bookmarks = await Property.find({ _id: { $in: user.bookmarks } });

      return new Response(JSON.stringify(bookmarks), {
        status: 200,
      });
    } else {
      return new Response("User session not found", { status: 404 });
    }
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};

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
    let message;

    if (isBookMarker) {
      //` remove if  it's already bookmarked
      user.bookmarks.pull(propertyId);
      message = "Bookmark removed successfully";
      isBookMarker = false;
    } else {
      //` if not - add it
      user.bookmarks.push(propertyId);
      message = "Added successfully";
      isBookMarker = true;
    }

    await user.save();

    return new Response(JSON.stringify({ message, isBookMarker }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response("something went wrong", { status: 500 });
  }
};
