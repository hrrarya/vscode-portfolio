import Head from "next/head";
import Image from "next/image";
import { projects } from "../../components/projects/project-data";
import Demo from "../../components/projects/demo";
import Stack from "../../components/projects/stack";

const Projects = () => {
  const reversed = [...projects].reverse();

  return (
    <>
      <Head>
        <meta name="description" content="Here is my projects." />
        <title>Projects | Hridoy Mozumder</title>
      </Head>
      <div className="projects_section px-6 sm:px-2  py-2 pr-0 text-white relative w-full mt-4 overflow-y-auto">
        <h1 className="text-3xl sm:text-xl mb-6">{`Look What I've Built`}</h1>
        <div className="projects_section__wrapper flex flex-wrap px-0">
          {reversed.map((project, index) => (
            <div key={index} className="px-2 mb-2 w-1/3 md:w-1/2 sm:w-full">
              <div className="projects_section__wrapper__item rounded-2xl">
                <Image
                  src={project?.image?.src}
                  alt={project?.image?.altText}
                  width={500}
                  height={330}
                  objectFit="cover"
                  className="rounded-2xl"
                />
                <div className="px-2 py-4">
                  <h2 className="text-xl leading-normal sm:text-lg">
                    {project?.title}
                  </h2>
                  <p className="text-xs">{project?.description}</p>
                  <div className="stack my-3 flex flex-wrap">
                    <Stack stack={project?.stack} />
                  </div>
                  <div className="links flex flex-wrap">
                    {project?.sourceCode && (
                      <a
                        href={project?.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-b-2 cursor-pointer border-pink-300 mr-2 sm:text-xs"
                      >
                        Source Code
                      </a>
                    )}
                    <Demo demo={project?.demo} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="projects_section__wrapper flex flex-wrap px-0">
          <div className="px-2 mb-2 w-1/3 md:w-1/2 sm:w-full">
            <div className="projects_section__wrapper__item rounded-2xl">
              <Image
                src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?cs=srgb&dl=pexels-pixabay-159711.jpg&fm=jpg"
                alt="lms"
                width={500}
                height={330}
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="px-2 py-4">
                <h2 className="text-xl sm:text-lg leading-normal">
                  Library Management System
                </h2>
                <p className="text-xs">A web app for manage books.</p>
                <div className="stack my-3 flex flex-wrap">
                  <span className="px-2 py-1 mr-2 mb-2 text-xs border border-pink-300 rounded-xl">
                    PHP
                  </span>
                  <span className="px-2 py-1 mr-2 mb-2 text-xs border border-pink-300 rounded-xl">
                    JS
                  </span>
                  <span className="px-2 py-1 mr-2 mb-2 text-xs border border-pink-300 rounded-xl">
                    MySQL
                  </span>
                  <span className="px-2 py-1 mr-2 mb-2 text-xs border border-pink-300 rounded-xl">
                    HTML
                  </span>
                </div>
                <div className="links">
                  <a
                    href="https://github.com/hrrarya/LibraryMannagementSystem_PHP_OOP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b-2 cursor-pointer border-pink-300 mr-2 sm:text-xs"
                  >
                    Source Code
                  </a>
                  <a
                    href="https://phplms.toptablereviews.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b-2 cursor-pointer border-pink-300 mr-2 sm:text-xs"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 mb-2 w-1/3 md:w-1/2 sm:w-full">
            <div className="projects_section__wrapper__item rounded-2xl">
              <Image
                src="https://images.pexels.com/photos/4916023/pexels-photo-4916023.jpeg?cs=srgb&dl=pexels-maria-orlova-4916023.jpg&fm=jpg"
                alt="ice creame shop"
                width={500}
                height={330}
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="px-2 py-4">
                <h2 className="text-xl leading-normal sm:text-lg">
                  Ice Cream Shop
                </h2>
                <p className="text-xs">A web app for Ice Cream Shop.</p>
                <div className="stack my-3 flex flex-wrap">
                  <span className="px-2 py-1 mr-2 mb-2 text-xs border border-pink-300 rounded-xl">
                    JS
                  </span>
                  <span className="px-2 py-1 mr-2 mb-2 text-xs border border-pink-300 rounded-xl">
                    tailwind
                  </span>
                  <span className="px-2 py-1 mr-2 mb-2 text-xs border border-pink-300 rounded-xl">
                    MySQL
                  </span>
                  <span className="px-2 py-1 mr-2 mb-2 text-xs border border-pink-300 rounded-xl">
                    HTML
                  </span>
                </div>
                <div className="links">
                  <a
                    href="https://github.com/hrrarya/ShoppingCartJs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b-2 cursor-pointer border-pink-300 mr-2 sm:text-xs"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 mb-2 w-1/3 md:w-1/2 sm:w-full">
            <div className="projects_section__wrapper__item rounded-2xl">
              <Image
                src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?cs=srgb&dl=pexels-tracy-le-blanc-607812.jpg&fm=jpg"
                alt="Popular website rebuild with html"
                width={500}
                height={330}
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="px-2 py-4">
                <h2 className="text-xl leading-normal sm:text-lg">
                  HTML Templates
                </h2>
                <p className="text-xs">Rebuilding popular social sites.</p>
                <div className="stack my-3 flex flex-wrap">
                  <span className="px-2 py-1 mr-2 mb-2 text-xs border border-pink-300 rounded-xl">
                    alpine.js
                  </span>
                  <span className="px-2 py-1 mr-2 mb-2 text-xs border border-pink-300 rounded-xl">
                    tailwind
                  </span>
                  <span className="px-2 py-1 mr-2 mb-2 text-xs border border-pink-300 rounded-xl">
                    HTML
                  </span>
                </div>
                <div className="links flex flex-wrap">
                  <a
                    href="https://github.com/hrrarya/html-templates"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b-2 cursor-pointer border-pink-300 mr-2 sm:text-xs"
                  >
                    Source Code
                  </a>
                  <a
                    href="https://hrrarya.github.io/html-templates/facebook-home-page/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b-2 cursor-pointer border-pink-300 mr-2 sm:text-xs"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://hrrarya.github.io/html-templates/twitter-profile-page/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b-2 cursor-pointer border-pink-300 mr-2 sm:text-xs"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://hrrarya.github.io/html-templates/Instagram/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b-2 cursor-pointer border-pink-300 mr-2 sm:text-xs"
                  >
                    Instrgram Home Page
                  </a>
                  <a
                    href="https://hrrarya.github.io/html-templates/Instagram/profile.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b-2 cursor-pointer border-pink-300 mr-2 sm:text-xs"
                  >
                    Instrgram Profile Page
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 mb-2 w-1/3 md:w-1/2 sm:w-full">
            <div className="projects_section__wrapper__item rounded-2xl">
              <Image
                src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?cs=srgb&dl=pexels-boonkong-boonpeng-1134176.jpg&fm=jpg"
                alt="Hotel Resort"
                width={500}
                height={330}
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="px-2 py-4">
                <h2 className="text-xl leading-normal sm:text-lg">
                  Hotel Resort
                </h2>
                <p className="text-xs">A web app for hotel room booking.</p>
                <div className="stack my-3 flex flex-wrap">
                  <span className="px-2 py-1 mr-2 mb-2 text-xs border border-pink-300 rounded-xl">
                    React
                  </span>
                  <span className="px-2 py-1 mr-2 mb-2 text-xs border border-pink-300 rounded-xl">
                    tailwind
                  </span>
                  <span className="px-2 py-1 mr-2 mb-2 text-xs border border-pink-300 rounded-xl">
                    node
                  </span>
                  <span className="px-2 py-1 mr-2 mb-2 text-xs border border-pink-300 rounded-xl">
                    mysql
                  </span>
                </div>
                <div className="links">
                  <a
                    href="https://github.com/hrrarya/Hotel-resort"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b-2 cursor-pointer border-pink-300 mr-2 sm:text-xs"
                  >
                    Source Code
                  </a>
                  <a
                    href="https://hotelbooking.toptablereviews.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b-2 cursor-pointer border-pink-300 mr-2 sm:text-xs"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 mb-2 w-1/3 md:w-1/2 sm:w-full">
            <div className="projects_section__wrapper__item rounded-2xl relative">
              <Image
                src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?cs=srgb&dl=pexels-olia-danilevich-4974914.jpg&fm=jpg"
                alt="VS Code Portfolio"
                width={500}
                height={330}
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="px-2 py-4">
                <h2 className="text-xl leading-normal sm:text-lg">
                  VS Code Portfolio
                </h2>
                <p className="text-xs">
                  Stylish VS Code looking portfolio website.
                </p>
                <div className="stack my-3 flex flex-wrap">
                  <span className="px-2 py-1 mr-2 mb-2 text-xs border border-pink-300 rounded-xl">
                    NextJS
                  </span>
                  <span className="px-2 py-1 mr-2 mb-2 text-xs border border-pink-300 rounded-xl">
                    tailwind
                  </span>
                  <span className="px-2 py-1 mr-2 mb-2 text-xs border border-pink-300 rounded-xl">
                    node
                  </span>
                </div>
                <div className="links">
                  <a
                    href="https://github.com/hrrarya/vscode-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b-2 cursor-pointer border-pink-300 mr-2 sm:text-xs"
                  >
                    Source Code
                  </a>
                  <Link href="/">
                    <a className="border-b-2 cursor-pointer border-pink-300 mr-2 sm:text-xs">
                      Live Demo
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 mb-2 w-1/3 md:w-1/2 sm:w-full">
            <div className="projects_section__wrapper__item rounded-2xl">
              <Image
                src="/litmas-homepage.png"
                alt="Litmas"
                width={500}
                height={330}
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="px-2 py-4">
                <h2 className="text-xl leading-normal sm:text-lg">Litmas</h2>
                <p className="text-xs">Litmas is a story sharing app.</p>
                <div className="stack my-3 flex flex-wrap">
                  <span className="px-2 py-1 mr-2 mb-2 text-xs border border-pink-300 rounded-xl">
                    NextJS
                  </span>
                  <span className="px-2 py-1 mr-2 mb-2 text-xs border border-pink-300 rounded-xl">
                    tailwind
                  </span>
                  <span className="px-2 py-1 mr-2 mb-2 text-xs border border-pink-300 rounded-xl">
                    node
                  </span>
                </div>
                <div className="links">
                  <a
                    href="https://github.com/hrrarya/litmas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b-2 cursor-pointer border-pink-300 mr-2 sm:text-xs"
                  >
                    Source Code
                  </a>
                  <a
                    href="http://litmas.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b-2 cursor-pointer border-pink-300 mr-2 sm:text-xs"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Projects;
