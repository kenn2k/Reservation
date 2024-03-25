import connectDB from "@/config/database";
import User from "@/models/User";
import { AuthOptions, Profile } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    //? Invoked on successful sign in
    async signIn({ profile }: { profile: any }) {
      //! 1. connect database

      await connectDB();
      //! 2. Check if user exists
      const userExists = await User.findOne({ email: profile.email });

      //! 3. If user not, add user to database
      if (!userExists) {
        const username = profile.name.slice(0, 20);
        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        });
      }

      //!return true to allow sign in
      return true;
    },

    //? Session callback function that modifies the session object
    async session({ session }: { session: any }) {
      //! 1. Get user from database
      const user = await User.findOne({ email: session.user.email });

      //! 2. Assign user id from database to session
      session.user.id = user._id.toString();

      //! 3. return session
      return session;
    },
  },
};
