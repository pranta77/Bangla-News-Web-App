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
    <div>
      <h1 className="my-5 border-b-2 border-red-700 px-2 py-3 text-xl font-bold">
        {data.title}
      </h1>

      <div className="grid grid-cols-3 gap-3">
        {navDataNews.map((navdata) => (
          <Link key={navdata.id} href={`/fullnews/${navdata.id}`}>
            <div className="group w-full max-w-md overflow-hidden rounded-2xl bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <figure className="overflow-hidden">
                <Image
                  src={navdata.imageUrl}
                  alt={navdata.imageAlt}
                  width={500}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>

              <div className="space-y-3 p-5">
                <span className="inline-block rounded bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
                  {navdata.category}
                </span>

                <h2 className="text-xl font-bold leading-snug transition-colors duration-200 group-hover:text-red-600">
                  {navdata.title}
                </h2>

                <p className="line-clamp-3 text-sm leading-6 text-gray-600">
                  {navdata.description}
                </p>

                <div className="flex items-center justify-between border-t pt-3 text-sm text-gray-500">
                  <span>{navdata.firstPublished}</span>
                  <span className="font-medium text-red-600">
                    বিস্তারিত →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetailsPage;