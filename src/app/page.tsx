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
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  // console.log(data);
  const sectionsData = data.data;
  // console.log(sectionsData);
  const mainNews: NewsType[] = sectionsData[0].articles;
  // console.log(mainNews);
  const otherNews: OtherType[] = sectionsData.slice(1);
  // console.log(otherNews);

  return (
    <div>
      <div className="grid grid-cols-3 max-w-7xl mx-auto ">
        {/* News Sections */}
        <div className="col-span-2 mt-5">
          <MainNews news={mainNews} />

          {otherNews.map((other) => (
            <div key={other.curationId}>
              <h1 className="border-b-2 border-red-700 my-5 text-xl font-bold px-2 py-3">
                {other.title}
              </h1>
              <div className="grid grid-cols-2 gap-3">
                {other.articles.map((news) => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Most Read Sections */}
        <div className="col-span-1 mt-5 ml-3">
          <MostRead />
        </div>
      </div>
    </div>
  );
}
