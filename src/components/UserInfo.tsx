"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="absolute right-3 top-3 z-50 sm:right-5 sm:top-5">
      {user ? (
        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-2 py-2 shadow-md sm:gap-3 sm:px-3">
          {/* User Image */}
          <Link href="/profile" className="shrink-0">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-red-100 sm:h-10 sm:w-10">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name || "User"}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-red-100 text-sm font-bold text-red-600">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          </Link>

          {/* Name + Email */}
          <div className="hidden min-w-0 sm:block">
            <h3 className="max-w-30 truncate text-sm font-bold text-gray-900 md:max-w-35">
              {user.name}
            </h3>

            <p className="max-w-35 truncate text-xs text-gray-500 md:max-w-40">
              {user.email}
            </p>
          </div>

          {/* Sign Out */}
          <button
            onClick={handleSignOut}
            title="Sign Out"
            className="group flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600 transition-all duration-300 hover:bg-red-600 hover:text-white hover:shadow-md hover:shadow-red-200 sm:h-9 sm:w-9"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3-6l3 3m0 0l-3 3m3-3H9"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white p-1 shadow-md sm:gap-2">
          <Link
            href="/signin"
            className="rounded-full px-3 py-2 text-xs font-medium text-gray-700 transition hover:bg-gray-100 hover:text-red-600 sm:px-4 sm:text-sm"
          >
            সাইন ইন
          </Link>

          <Link
            href="/signup"
            className="rounded-full bg-red-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-red-700 sm:px-4 sm:text-sm"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
