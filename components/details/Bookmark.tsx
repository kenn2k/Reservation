"use client";
import { PropertiesType } from "@/types/types";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { FaBookmark } from "react-icons/fa";

interface IBookmark {
  property: PropertiesType;
}

const Bookmark = ({ property }: IBookmark) => {
  const { data: session } = useSession();

  const userId = session?.user?.id;

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }
    const checkStatus = async () => {
      try {
        const res = await fetch("/api/bookmarks/check", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ propertyId: property._id }),
        });

        if (res.status === 200) {
          const data = await res.json();

          setIsBookmarked(data.isBookmarked);
          console.log("success");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    checkStatus();
  }, [property._id, userId]);

  const handleClick = async () => {
    if (!userId) {
      console.log("u need to sign in");
      return;
    }

    try {
      const res = await fetch("/api/bookmarks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ propertyId: property._id }),
      });

      if (res.status === 200) {
        const data = await res.json();

        setIsBookmarked(data.isBookmarked);

        //! setIsBookmarked(!isBookmarked);
        console.log("success");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <p>loading</p>;

  return isBookmarked ? (
    <button
      onClick={handleClick}
      className="bg-red-500 hover:bg-red-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
    >
      <FaBookmark className="mr-2" />
      Remove Bookmark
    </button>
  ) : (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
    >
      <FaBookmark className="mr-2" />
      Add Bookmark
    </button>
  );
};

export default Bookmark;
