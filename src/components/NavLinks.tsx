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

  const filterNavs = navData.filter((nav) => nav.scrapable);

  return (
    <div className="mx-auto mt-6 flex max-w-7xl flex-wrap justify-center gap-3 px-4 sm:gap-5">
      <Link href={"/"} className="whitespace-nowrap">
        হোম
      </Link>

      {filterNavs.map((nav) => (
        <Link
          key={nav.slug}
          href={`/category/${nav.slug}`}
          className="whitespace-nowrap"
        >
          {nav.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;