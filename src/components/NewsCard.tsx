import Image from "next/image";
import Link from "next/link";
interface NewsType {
  imageUrl: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  firstPublished: string;
  id: string;
}

const NewsCard = ({ news }: { news: NewsType }) => {
  // console.log(news);

  return (
    <Link href={`/fullnews/${news.id}`}>
      <div className="group w-full max-w-md overflow-hidden rounded-2xl bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <figure className="overflow-hidden">
          <Image
            src={news.imageUrl}
            alt={news.imageAlt}
            width={500}
            height={300}
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </figure>

        <div className="space-y-3 p-5">
          <span className="inline-block rounded bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
            {news.category}
          </span>

          <h2 className="text-xl font-bold leading-snug transition-colors duration-200 group-hover:text-red-600">
            {news.title}
          </h2>

          <p className="line-clamp-3 text-sm leading-6 text-gray-600">
            {news.description}
          </p>
          <div className="flex items-center justify-between border-t pt-3 text-sm text-gray-500">
            <span>{news.firstPublished}</span>
            <span className="font-medium text-red-600">বিস্তারিত →</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
