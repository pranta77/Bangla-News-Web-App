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
//   console.log(firstNews);

  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="group w-full max-w-md overflow-hidden rounded-2xl bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <figure className="overflow-hidden">
          <Image
            src={firstNews.imageUrl}
            alt={firstNews.imageAlt}
            width={500}
            height={300}
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </figure>

        <div className="space-y-3 p-5">
          <span className="inline-block rounded bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
            {firstNews.category}
          </span>

          <h2 className="text-xl font-bold leading-snug transition-colors duration-200 group-hover:text-red-600">
            {firstNews.title}
          </h2>

          <p className="line-clamp-3 text-sm leading-6 text-gray-600">
            {firstNews.description}
          </p>
          <div className="flex items-center justify-between border-t pt-3 text-sm text-gray-500">
            <span>{firstNews.firstPublished}</span>
            <span className="font-medium text-red-600">বিস্তারিত →</span>
          </div>
        </div>
      </div>
      <div className=" rounded-xl border border-gray-200 bg-white">
        {otherNews.slice(0, 4).map((other) => (
          <div
            key={other.id}
            className="border-b border-gray-200 px-4 py-5 last:border-b-0"
          >
            <p className="mb-2 text-sm text-red-600">প্রধান খবর</p>

            <h2 className="cursor-pointer text-xl font-medium leading-8 hover:text-red-600">
              {other.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
