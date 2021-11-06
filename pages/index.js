import Head from "next/head";
import Link from "next/link";
import HomeBgSvg from "../components/main-section/homeBgSvg";
import TypedComp from "../components/main-section/typedCom";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hridoy Mozumder | Home</title>
        <meta
          name="description"
          content="Hridoy Mozumder is a frontend developer.He is master in JavaScript, PHP, React and Next JS.Hire him now..."
        />
      </Head>

      <div className="px-6 py-2 pr-0 text-white relative w-full">
        <div className="background_text text-8xl font-mono absolute mt-20 justify-center">
          <p>I Build</p>
          <p>Websites</p>
        </div>
        <div className="foreground_text font-mono flex justify-center w-full">
          <div className="w-1/2 foreground_text__left flex justify-center flex-col">
            <h1 className="text-6xl">Hridoy M.</h1>
            <div>
              <TypedComp />
            </div>
            <div className="buttons mt-3">
              <Link href="/projects">
                <a className="button_item text-white border rounded px-3 py-2 mr-2 cursor-pointer">
                  View Work
                </a>
              </Link>
              <Link href="/contact">
                <a className="button_item text-white border rounded px-3 py-2 mr-2 cursor-pointer">
                  Contact Me
                </a>
              </Link>
            </div>
          </div>
          <div className="foreground_text__right w-1/2 ">
            <HomeBgSvg />
          </div>
        </div>
      </div>
    </div>
  );
}
