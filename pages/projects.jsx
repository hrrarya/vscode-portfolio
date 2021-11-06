import Head from "next/head";
import Link from "next/link";
const Projects = () => {
  return (
    <>
      <Head>
        <title>Hridoy Mozumder | Projects</title>
      </Head>
      <div className="projects_section px-6 py-2 pr-0 text-white relative w-full mt-4 overflow-y-auto">
        <h1 className="text-3xl mb-6">Look What I&apos;ve Built</h1>
        <div className="projects_section__wrapper pr-3">
          <div className="projects_section__wrapper__item mb-5 rounded-2xl">
            <img
              src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?cs=srgb&dl=pexels-pixabay-159711.jpg&fm=jpg"
              alt="lms"
              className="rounded-2xl"
            />
            <div className="px-2 py-4">
              <h2 className="text-xl leading-normal">
                Library Management System
              </h2>
              <p className="text-xs">A web app for manage books</p>
              <div className="stack my-3">
                <span className="px-2 py-1 mr-2 text-xs border border-pink-300 rounded-xl">
                  PHP
                </span>
                <span className="px-2 py-1 mr-2 text-xs border border-pink-300 rounded-xl">
                  JS
                </span>
                <span className="px-2 py-1 mr-2 text-xs border border-pink-300 rounded-xl">
                  MySQL
                </span>
                <span className="px-2 py-1 mr-2 text-xs border border-pink-300 rounded-xl">
                  HTML
                </span>
              </div>
              <div className="links">
                <Link href="/">
                  <a className="border-b-2 cursor-pointer border-pink-300 mr-2">
                    Source Code
                  </a>
                </Link>
                <Link href="/">
                  <a className="border-b-2 cursor-pointer border-pink-300 mr-2">
                    Live Demo
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="projects_section__wrapper__item mb-5 rounded-2xl">
            <img
              src="https://images.pexels.com/photos/4916023/pexels-photo-4916023.jpeg?cs=srgb&dl=pexels-maria-orlova-4916023.jpg&fm=jpg"
              alt="ice creame shop"
              className="rounded-2xl"
            />
            <div className="px-2 py-4">
              <h2 className="text-xl leading-normal">Ice Creame Shop</h2>
              <p className="text-xs">A web app for manage books</p>
              <div className="stack my-3">
                <span className="px-2 py-1 mr-2 text-xs border border-pink-300 rounded-xl">
                  JS
                </span>
                <span className="px-2 py-1 mr-2 text-xs border border-pink-300 rounded-xl">
                  tailwind
                </span>
                <span className="px-2 py-1 mr-2 text-xs border border-pink-300 rounded-xl">
                  MySQL
                </span>
                <span className="px-2 py-1 mr-2 text-xs border border-pink-300 rounded-xl">
                  HTML
                </span>
              </div>
              <div className="links">
                <Link href="/">
                  <a className="border-b-2 cursor-pointer border-pink-300 mr-2">
                    Source Code
                  </a>
                </Link>
                <Link href="/">
                  <a className="border-b-2 cursor-pointer border-pink-300 mr-2">
                    Live Demo
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="projects_section__wrapper__item mb-5 rounded-2xl">
            <img
              src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?cs=srgb&dl=pexels-tracy-le-blanc-607812.jpg&fm=jpg"
              alt="Popular website rebuild with html"
              className="rounded-2xl"
            />
            <div className="px-2 py-4">
              <h2 className="text-xl leading-normal">HTML Templates</h2>
              <p className="text-xs">A web app for manage books</p>
              <div className="stack my-3">
                <span className="px-2 py-1 mr-2 text-xs border border-pink-300 rounded-xl">
                  alpine.js
                </span>
                <span className="px-2 py-1 mr-2 text-xs border border-pink-300 rounded-xl">
                  tailwind
                </span>
                <span className="px-2 py-1 mr-2 text-xs border border-pink-300 rounded-xl">
                  HTML
                </span>
              </div>
              <div className="links">
                <Link href="/">
                  <a className="border-b-2 cursor-pointer border-pink-300 mr-2">
                    Source Code
                  </a>
                </Link>
                <Link href="/">
                  <a className="border-b-2 cursor-pointer border-pink-300 mr-2">
                    Live Demo
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="projects_section__wrapper__item mb-5 rounded-2xl">
            <img
              src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?cs=srgb&dl=pexels-boonkong-boonpeng-1134176.jpg&fm=jpg"
              alt="Hotel Resort"
              className="rounded-2xl"
            />
            <div className="px-2 py-4">
              <h2 className="text-xl leading-normal">Hotel Resort</h2>
              <p className="text-xs">A web app for manage books</p>
              <div className="stack my-3">
                <span className="px-2 py-1 mr-2 text-xs border border-pink-300 rounded-xl">
                  React
                </span>
                <span className="px-2 py-1 mr-2 text-xs border border-pink-300 rounded-xl">
                  tailwind
                </span>
                <span className="px-2 py-1 mr-2 text-xs border border-pink-300 rounded-xl">
                  node
                </span>
                <span className="px-2 py-1 mr-2 text-xs border border-pink-300 rounded-xl">
                  mysql
                </span>
              </div>
              <div className="links">
                <Link href="/">
                  <a className="border-b-2 cursor-pointer border-pink-300 mr-2">
                    Source Code
                  </a>
                </Link>
                <Link href="/">
                  <a className="border-b-2 cursor-pointer border-pink-300 mr-2">
                    Live Demo
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
