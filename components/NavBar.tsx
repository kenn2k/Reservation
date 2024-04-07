"use client";

import { useEffect, useState } from "react";
import Navigation from "./navbar/Navigation";
import MobileProfile from "./navbar/MobileProfile";
import Notification from "./navbar/Notification";
import Burger from "./navbar/Burger";
import UserMenu from "./navbar/UserMenu";
import { getProviders, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [providers, setProviders] = useState({ id: null });
  const { data: session } = useSession();
  useEffect(() => {
    const setAuthProvider = async () => {
      const res: any = await getProviders();
      setProviders(res);
    };
    setAuthProvider();
  }, []);
  return (
    <nav className="bg-blue-700  border-b border-[#426CF7]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <Burger onClick={() => setIsMobileMenuOpen((prev) => !prev)} />

          <Navigation providers={providers} />

          {/* Messages */}
          {session && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
              {/* notification */}
              <Notification session={session} />
              <div className="relative ml-3">
                {/* UserMenu */}
                <UserMenu
                  onClick={() => {
                    setIsMenuOpen((prev) => !prev);
                  }}
                />
                {isMenuOpen && (
                  <div
                    id="user-menu"
                    className=" absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                  >
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700"
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </Link>
                    <Link
                      href="/properties/saved"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      id="user-menu-item-2"
                    >
                      Saved Properties
                    </Link>
                    <button
                      onClick={() => {
                        setIsMenuOpen(false), signOut();
                      }}
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      id="user-menu-item-2"
                      tabIndex={-1}
                    >
                      Sign Out
                    </button>
                  </div>
                )}
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
