"use client";

import { useEffect, useState } from "react";

import Navigation from "./navbar/Navigation";
import Profile from "./navbar/Profile";
import MobileProfile from "./navbar/MobileProfile";
import Notification from "./navbar/Notification";
import Burger from "./navbar/Burger";
import UserMenu from "./navbar/UserMenu";
import { getProviders, useSession } from "next-auth/react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(false);
  const [providers, setProviders] = useState({ id: null });
  const { data: session } = useSession();
  useEffect(() => {
    const setAuthProvider = async () => {
      const res: any = await getProviders();
      setProviders(res);
    };
    setAuthProvider();
  }, []);
  console.log(providers);
  return (
    <nav className="bg-[#4a4b60]  border-b border-[#e0b2fa]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <Burger onClick={() => setIsMobileMenuOpen((prev) => !prev)} />

          <Navigation providers={providers} />

          {/* Messages */}
          {session && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
              <Notification />
              <div className="relative ml-3">
                <UserMenu
                  onClick={() => {
                    setIsNotificationMenuOpen((prev) => !prev);
                  }}
                />
                {isNotificationMenuOpen && <Profile />}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && <MobileProfile providers={providers} />}
    </nav>
  );
};

export default NavBar;
