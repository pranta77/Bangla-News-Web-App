"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import Image from "next/image";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [name, setName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");
  const [loading, setLoading] = useState(false);

  if (!user) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="rounded-2xl border border-gray-200 bg-white px-8 py-6 text-center shadow-lg">
          <h2 className="text-xl font-bold text-gray-800">Please Sign In</h2>

          <p className="mt-2 text-sm text-gray-500">
            You need to sign in to view your profile.
          </p>
        </div>
      </div>
    );
  }

  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const { data, error } = await authClient.updateUser({
        name,
        image,
      });

      if (error) {
        toast.error(error.message || "Failed to update profile");
        return;
      }

      if (data) {
        toast.success("Profile updated successfully!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[80vh] overflow-hidden px-4 py-10">
      {/* Background decoration */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-red-100 blur-3xl" />

      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-red-50 blur-3xl" />

      <div className="relative mx-auto max-w-2xl">
        {/* Profile Card */}
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
          {/* Cover */}
          <div className="h-32 bg-linear-to-r from-red-700 via-red-600 to-red-400" />

          {/* Profile Image */}
          <div className="-mt-16 flex justify-center">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-red-100 shadow-xl">
              {image ? (
                <Image
                width={50}
                height={50}
                  src={image}
                  alt={name || "User"}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-red-600">
                  {name?.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          </div>

          {/* User heading */}
          <div className="px-6 pb-6 pt-4 text-center">
            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>

            <p className="mt-1 text-sm text-gray-500">{user.email}</p>

            <span className="mt-3 inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
              {user.emailVerified ? "✓ Email Verified" : "Email Not Verified"}
            </span>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200" />

          {/* Update Form */}
          <form onSubmit={handleUpdateProfile} className="space-y-5 p-6 sm:p-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Update Profile
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Update your name and profile picture.
              </p>
            </div>

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition-all duration-300 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
                required
              />
            </div>

            {/* Image */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Profile Image URL
              </label>

              <input
                type="url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://example.com/profile.jpg"
                className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition-all duration-300 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
              />

              <p className="mt-2 text-xs text-gray-400">
                Use a direct image URL for your profile picture.
              </p>
            </div>

            {/* Email - Read Only */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email
              </label>

              <input
                type="email"
                value={user.email}
                disabled
                className="h-12 w-full cursor-not-allowed rounded-xl border border-gray-200 bg-gray-100 px-4 text-sm text-gray-500"
              />

              <p className="mt-2 text-xs text-gray-400">
                Your email address cannot be changed here.
              </p>
            </div>

            {/* Update Button */}
            <button
              type="submit"
              disabled={loading}
              className="h-12 w-full rounded-xl bg-red-600 font-semibold text-white shadow-lg shadow-red-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Updating..." : "Update Profile"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
