import connectDB from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";

export const DELETE = async (request: Request, { params }: any) => {
  try {
    await connectDB();

    const { id } = params;

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required", { status: 401 });
    }

    const { userId } = sessionUser;

    //` Find message by id
    const message = await Message.findById(id);

    //` Check if message exists
    if (!message) return new Response("Message Not Found", { status: 404 });

    //` Verify ownership
    if (message.recipient.toString() !== userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    //` Delete message
    await message.deleteOne();

    return new Response("Message Deleted", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
