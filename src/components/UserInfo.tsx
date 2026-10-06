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
    <div className="absolute right-5 top-5">
      {user ? (
        <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-md">
          {/* User Image */}
          <Link href={"/profile"}>
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-red-100">
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
          </div></Link>

          {/* Name + Email */}
          <div className="min-w-0">
            <h3 className="max-width: 140px; truncate text-sm font-bold text-gray-900">
              {user.name}
            </h3>

            <p className="max-width: 160px; truncate text-xs text-gray-500">
              {user.email}
            </p>
          </div>

          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            title="Sign Out"
            className="group ml-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600 transition-all duration-300 hover:bg-red-600 hover:text-white hover:shadow-md hover:shadow-red-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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
        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white p-1 shadow-md">
          <Link
            href="/signin"
            className="rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-red-600"
          >
            সাইন ইন
          </Link>

          <Link
            href="/signup"
            className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;