"use client"
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-base-100 px-4 py-16">
      {/* Background decoration */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-red-100 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-red-50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        {/* 404 */}
        <div className="relative mb-6">
          <h1 className="text-[140px] font-black leading-none tracking-tighter text-red-600/10 sm:text-[200px]">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-2xl border border-red-100 bg-white/80 px-6 py-3 shadow-xl backdrop-blur-sm">
              <span className="text-4xl font-black tracking-widest text-red-600 sm:text-5xl">
                404
              </span>
            </div>
          </div>
        </div>

        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-3xl shadow-sm">
          📰
        </div>

        {/* Content */}
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          খবরটি খুঁজে পাওয়া যায়নি
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
          দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে,
          পরিবর্তন করা হয়েছে অথবা এই ঠিকানায় আর নেই।
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-red-600 px-7 font-semibold text-white shadow-lg shadow-red-200 transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-xl hover:shadow-red-200"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            হোম পেজে ফিরে যান
          </Link>

          <button
            onClick={() => window.history.back()}
            className="h-12 rounded-xl border border-gray-200 bg-white px-7 font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:text-red-600 hover:shadow-md"
          >
            আগের পেজে যান
          </button>
        </div>

        {/* Bottom text */}
        <div className="mt-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
            Bangla News 24
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;