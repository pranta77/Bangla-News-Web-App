import MainNews from "@/components/MainNews";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";

interface NewsType {
  id: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  firstPublished: string;
}

interface OtherType {
  curationId: string;
  title: string;
  articles: NewsType[];
}

export default async function Home() {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/sections",
  );

  const data = await res.json();

  const sectionsData = data.data;

  const mainNews: NewsType[] = sectionsData[0].articles;

  const otherNews: OtherType[] = sectionsData.slice(1);

  return (
    <main className="px-4 sm:px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
        {/* News Sections */}
        <div className="mt-5 min-w-0 lg:col-span-2">
          <MainNews news={mainNews} />

          {otherNews.map((other) => (
            <section key={other.curationId}>
              <h1 className="my-5 border-b-2 border-red-700 px-2 py-3 text-lg font-bold sm:text-xl">
                {other.title}
              </h1>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {other.articles.map((news) => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Most Read */}
        <aside className="mt-2 min-w-0 lg:sticky lg:top-5 lg:mt-5 lg:self-start">
          <MostRead />
        </aside>
      </div>
    </main>
  );
}