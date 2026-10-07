import Image from "next/image";

interface NewsDetailsPageProps {
  params: Promise<{
    newsId: string;
  }>;
}

interface ImageItem {
  type: "image";
  url: string;
  width: number;
  height: number;
  caption?: string;
}

interface TextItem {
  type: "text";
  text: string;
}

interface SubheadingItem {
  type: "subheading";
  text: string;
}

type BodyItem = ImageItem | TextItem | SubheadingItem;

interface NewsDetails {
  id: string;
  title: string;
  source: string;
  firstPublished: string;
  tags: string[];
  body: BodyItem[];
}

const NewsDetailsPage = async ({ params }: NewsDetailsPageProps) => {
  const { newsId } = await params;

  const response = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
    {
      cache: "no-store",
    },
  );

  const data = await response.json();
  const news: NewsDetails = data.data;
  // console.log(news);
  

  return (
    <main className="container mx-auto max-w-4xl px-4 py-8">
      <article>
        {/* Title */}
        <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
          {news?.title}
        </h1>

        {/* News Information */}
        <div className="mt-5 flex flex-wrap items-center gap-3 border-y border-gray-200 py-4 text-sm text-gray-500">
          <span>{news?.source}</span>

          <span>•</span>

          <span>
            {new Date(news?.firstPublished).toLocaleDateString("bn-BD", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>

          <span>•</span>

          <span>
            {new Date(news?.firstPublished).toLocaleTimeString("bn-BD", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </span>
        </div>

        {/* News Content */}
        <div className="mt-6">
          {news?.body.map((item, index) => {
            // Image
            if (item.type === "image") {
              return (
                <figure key={index} className="my-6">
                  <Image
                    src={item.url}
                    alt={item.caption || news?.title}
                    width={item.width}
                    height={item.height}
                    className="h-auto w-full rounded-xl object-cover"
                  />

                  {item.caption && (
                    <figcaption className="mt-2 text-sm text-gray-500">
                      {item.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }

            // Subheading
            if (item.type === "subheading") {
              return (
                <h2
                  key={index}
                  className="my-7 text-2xl font-bold leading-9 text-gray-900"
                >
                  {item.text}
                </h2>
              );
            }

            // Paragraph
            return (
              <p
                key={index}
                className="mb-5 text-lg leading-9 text-gray-800"
              >
                {item.text}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        {news?.tags.length > 0 && (
          <div className="mt-10 border-t border-gray-200 pt-6">
            <h2 className="mb-3 text-lg font-bold text-gray-900">ট্যাগ</h2>

            <div className="flex flex-wrap gap-2">
              {news?.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
};

export default NewsDetailsPage;