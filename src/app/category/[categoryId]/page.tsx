import Image from "next/image";
import Link from "next/link";

interface NewsType {
  id: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  firstPublished: string;
}

interface CategoryDetailsPageProps {
  params: Promise<{
    categoryId: string;
  }>;
}

const CategoryDetailsPage = async ({
  params,
}: CategoryDetailsPageProps) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`
  );

  const data = await res.json();
  const navDataNews: NewsType[] = data.data;

  return (
    <div className="px-4 sm:px-6">
      <h1 className="my-5 border-b-2 border-red-700 px-2 py-3 text-lg font-bold sm:text-xl">
        {data.title}
      </h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {navDataNews.map((navdata) => (
          <Link
            key={navdata.id}
            href={`/fullnews/${navdata.id}`}
            className="group block w-full overflow-hidden rounded-2xl bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <figure className="overflow-hidden">
              <Image
                src={navdata.imageUrl}
                alt={navdata.imageAlt}
                width={500}
                height={300}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-56 md:h-60 lg:h-64"
              />
            </figure>

            <div className="space-y-3 p-4 sm:p-5">
              <span className="inline-block rounded bg-red-100 px-3 py-1 text-xs font-semibold text-red-600 sm:text-sm">
                {navdata.category}
              </span>

              <h2 className="line-clamp-2 text-lg font-bold leading-snug transition-colors duration-200 group-hover:text-red-600 sm:text-xl">
                {navdata.title}
              </h2>

              <p className="line-clamp-3 text-sm leading-6 text-gray-600">
                {navdata.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-gray-200 pt-3 text-xs text-gray-500 sm:text-sm">
                <span>{navdata.firstPublished}</span>

                <span className="shrink-0 font-medium text-red-600">
                  বিস্তারিত →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetailsPage;