import Link from "next/link";
const Demo = ({ demo }) => {
  if (!Array.isArray(demo) || demo.length < 1) return null;
  return demo.map((item, index) => {
    return !item.self ? (
      <a
        key={index}
        href={item?.src}
        target="_blank"
        rel="noopener noreferrer"
        className="border-b-2 cursor-pointer border-pink-300 mr-2 sm:text-xs"
      >
        {item?.title}
      </a>
    ) : (
      <Link key={index} href="/">
        <a className="border-b-2 cursor-pointer border-pink-300 mr-2 sm:text-xs">
          {item?.title}
        </a>
      </Link>
    );
  });
};

export default Demo;
