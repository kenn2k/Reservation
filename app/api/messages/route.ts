import connectDB from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";

export const dynamic = "force-dynamic";

export const GET = async (request: Request) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.user) {
      return new Response(JSON.stringify("user id is required"), {
        status: 401,
      });
    }
    const { userId } = sessionUser;

    const messages = await Message.find({ recipient: userId })
      .populate("sender", "name")
      .populate("property", "title");

    return new Response(JSON.stringify(messages), {
      status: 200,
    });
  } catch (error) {
    return new Response("something went wrong");
  }
};

export const POST = async (request: Request) => {
  try {
    //` connect with database
    await connectDB;

    const { name, email, phone, message, property, recipient } =
      await request.json();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.user) {
      return new Response("User ID is required", { status: 401 });
    }

    const { user } = sessionUser;

    if (user.id === recipient) {
      return new Response(
        JSON.stringify({ message: "Can not send message to yourself" }),
        { status: 400 }
      );
    }

    // Create a new message
    const newMessage = new Message({
      sender: user.id,
      recipient,
      name,
      property,
      email,
      phone,
      body: message,
    });
    await newMessage.save();

    return new Response(JSON.stringify({ message: "Message Sent" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
  }
};
