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
  //   console.log(headlineData);

  return (
    <div className="bg-red-600 text-white font-bold flex items-center max-w-7xl mx-auto ">
      <div className="bg-red-800 p-1.5 rounded font-bold">সর্বশেষ»</div>
      <MarqueeText
        className="p-1.5"
        direction="right"
        duration={10}
        pauseOnHover={true}
      >
        {headlineData.map((headline) => (
          <span key={headline.id}>
            <span className="mx-3">✶</span>
            <span>{headline.title}</span>
          </span>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;
