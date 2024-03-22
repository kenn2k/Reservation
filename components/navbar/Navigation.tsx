"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo.svg";
import { usePathname } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

interface INavigationProps {
  providers: {
    id: any;
  };
}
const Navigation = ({ providers }: INavigationProps) => {
  const pathname = usePathname();
  const { data: session } = useSession();
  return (
    <>
      <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
        <Link className="flex flex-shrink-0 items-center" href="/">
          <Image className="h-10 w-auto" src={logo} alt="PropertyPulse" />

          <span className="hidden md:block text-[#e0b2fa] text-2xl font-bold ml-2">
            PropertyPulse
          </span>
        </Link>

        {/* Navigation */}

        <div className="hidden md:ml-6 md:block">
          <div className="flex space-x-2">
            <Link
              href="/"
              className={`${
                pathname === "/" ? "bg-gray-700" : ""
              } text-[#e0b2fa] hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
            >
              Home
            </Link>
            <Link
              href="/properties"
              className={`${
                pathname === "/properties" ? "bg-gray-700" : ""
              } text-[#e0b2fa] hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
            >
              Properties
            </Link>
            {session && (
              <Link
                href="/properties/add"
                className={`${
                  pathname === "/properties/add" ? "bg-gray-700" : ""
                } text-[#e0b2fa] hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
              >
                Add Property
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Login or Register */}
      {!session && (
        <div className="hidden md:block md:ml-6">
          <div className="flex items-center">
            {providers &&
              Object.values(providers).map((provider, index) => (
                <button
                  onClick={() => signIn(provider.id)}
                  key={index}
                  className="flex items-center text-[#e0b2fa] bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  <FaGoogle className=" mr-2" />
                  <span>Login or Register</span>
                </button>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
