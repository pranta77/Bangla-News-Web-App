import Link from "next/link";

interface NavTypes {
  slug: string;
  title: string;
  topicId: string;
  matchMedia: string;
  scrapable: boolean;
}
const NavLinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navData: NavTypes[] = data.data;
  //   console.log(navData);

  const filterNavs = navData.filter((nav) => nav.scrapable);
  //   console.log(filterNavs);

  return (
    <div className="flex gap-5 justify-center mt-6">
      <Link href={"/"}>হোম</Link>
      {filterNavs.map((nav, i) => (
        <Link key={i} href={`/category/${nav.slug}`}>
          {nav.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
