import MarqueeText from "react-marquee-text";
// import "react-marquee-text/dist/styles.css";

interface hedlineType {
  id: string;
  title: string;
}

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const headlineData: hedlineType[] = data.data;

  return (
    <div className="flex w-full max-w-7xl items-center overflow-hidden bg-red-600 font-bold text-white mx-auto">
      <div className="shrink-0 rounded bg-red-800 p-1.5 font-bold">
        সর্বশেষ»
      </div>

      <MarqueeText
        className="min-w-0 flex-1 p-1.5"
        direction="right"
        duration={10}
        pauseOnHover={true}
      >
        {headlineData.map((headline) => (
          <span key={headline.id} className="whitespace-nowrap">
            <span className="mx-3">✶</span>
            <span>{headline.title}</span>
          </span>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;