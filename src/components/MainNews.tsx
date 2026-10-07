import Image from "next/image";

interface NewsType {
  imageUrl: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  firstPublished: string;
  id: string;
}

const MainNews = ({ news }: { news: NewsType[] }) => {
  const [firstNews, ...otherNews] = news;

  if (!firstNews) return null;

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {/* Main News */}
      <div className="group w-full overflow-hidden rounded-2xl bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <figure className="overflow-hidden">
          <Image
            src={firstNews.imageUrl}
            alt={firstNews.imageAlt}
            width={500}
            height={300}
            className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-64"
          />
        </figure>

        <div className="space-y-3 p-4 sm:p-5">
          <span className="inline-block rounded bg-red-100 px-3 py-1 text-xs font-semibold text-red-600 sm:text-sm">
            {firstNews.category}
          </span>

          <h2 className="text-lg font-bold leading-snug transition-colors duration-200 group-hover:text-red-600 sm:text-xl">
            {firstNews.title}
          </h2>

          <p className="line-clamp-3 text-sm leading-6 text-gray-600">
            {firstNews.description}
          </p>

          <div className="flex items-center justify-between gap-3 border-t pt-3 text-xs text-gray-500 sm:text-sm">
            <span>{firstNews.firstPublished}</span>

            <span className="shrink-0 font-medium text-red-600">
              বিস্তারিত →
            </span>
          </div>
        </div>
      </div>

      {/* Other Main News */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        {otherNews.slice(0, 4).map((other) => (
          <div
            key={other.id}
            className="border-b border-gray-200 px-4 py-4 last:border-b-0 sm:px-5 sm:py-5"
          >
            <p className="mb-2 text-xs text-red-600 sm:text-sm">
              {other.category}
            </p>

            <h2 className="cursor-pointer text-base font-medium leading-7 hover:text-red-600 sm:text-lg">
              {other.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;