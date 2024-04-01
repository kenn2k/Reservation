"use client";
import { PropertiesType } from "@/types/types";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaGoogle } from "react-icons/fa";

interface INavigationProps {
  providers: {
    id: any;
  };
}

const MobileProfile = ({ providers }: INavigationProps) => {
  const pathname = usePathname();
  const { data: session } = useSession();
  return (
    <div id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
        <Link
          href="/"
          className={`${
            pathname === "/" ? "bg-blue-500" : ""
          } text-white  block rounded-md px-3 py-2 text-base font-medium`}
        >
          Home
        </Link>
        <Link
          href="/properties"
          className={`${
            pathname === "/properties" ? "bg-blue-500" : ""
          } text-white  block rounded-md px-3 py-2 text-base font-medium`}
        >
          Properties
        </Link>
        {session && (
          <Link
            href="/properties/add"
            className={`${
              pathname === "/properties/add" ? "bg-blue-500" : ""
            } text-white  block rounded-md px-3 py-2 text-base font-medium`}
          >
            Add Property
          </Link>
        )}
        {!session &&
          providers &&
          Object.values(providers).map((provider, index) => (
            <button
              onClick={() => signIn(provider.id)}
              key={index}
              className="flex items-center text-white bg-blue-500 hover:bg-blue-900 hover:text-white rounded-md px-3 py-2 my-4"
            >
              <FaGoogle className=" text-[#e0b2fa] mr-2" />
              <span>Login or Register</span>
            </button>
          ))}
      </div>
    </div>
  );
};

export default MobileProfile;
