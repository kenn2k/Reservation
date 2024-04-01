import Image from "next/image";
import React from "react";
import profileDefault from "@/public/assets/profileDefault.svg";
import { useSession } from "next-auth/react";
interface IUserMenu {
  onClick: () => void;
}
const UserMenu = ({ onClick }: IUserMenu) => {
  const { data: session } = useSession();
  const profileImage = session?.user?.image;
  return (
    <div>
      <button
        onClick={onClick}
        type="button"
        className="relative flex rounded-full bg-blue-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <span className="absolute -inset-1.5"></span>
        <span className="sr-only">Open user menu</span>
        <Image
          className="h-8 w-8 rounded-full bg-[#e0b2fa]"
          src={profileImage || profileDefault}
          alt=""
          width={40}
          height={40}
        />
      </button>
    </div>
  );
};

export default UserMenu;
