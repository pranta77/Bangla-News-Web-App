const Loading = () => {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-red-600 text-2xl font-black text-white shadow-xl shadow-red-200">
        BN
      </div>

      <span className="loading loading-spinner loading-lg mt-6 text-red-600" />

      <h2 className="mt-4 text-xl font-bold text-gray-900">
        Bangla News 24
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        সর্বশেষ খবর লোড হচ্ছে...
      </p>
    </div>
  );
};

export default Loading;