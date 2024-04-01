import { PropertiesType } from "@/types/types";
import React from "react";
import { FaBookmark, FaPaperPlane, FaShare } from "react-icons/fa";
import Bookmarks from "./Bookmark";
interface IProperty {
  property: PropertiesType;
}
const DetailSideBar = ({ property }: IProperty) => {
  return (
    <aside className="space-y-4">
      <div>
        <Bookmarks property={property} />
      </div>
      <div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
          <FaShare className="mr-2" /> Share Property
        </button>
      </div>

      {/* <!-- Contact Form --> */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-6">Contact Property Manager</h3>
        <form action="" method="POST" encType="text/plain">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
              type="submit"
            >
              <FaPaperPlane className="mr-2" /> Send Message
            </button>
          </div>
        </form>
      </div>
    </aside>
  );
};

export default DetailSideBar;
