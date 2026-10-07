interface MostReadNews {
  rank: number;
  title: string;
  id: string;
}
const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  const mostRead: MostReadNews[] = data.data;
  console.log(mostRead);
  

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="mb-5 text-2xl font-bold">সর্বাধিক পঠিত </h2>

      <div>
        {mostRead.map((news) => (
          <div
            key={news.id}
            className="flex gap-4 border-b border-gray-200 py-3 last:border-b-0"
          >
            <span className="text-2xl font-medium text-red-500">
              {news.rank}
            </span>

            <h3 className="cursor-pointer text-lg font-medium leading-7 hover:text-red-600">
              {news.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostRead;
