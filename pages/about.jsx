import Head from "next/head";
import Link from "next/link";
import { projects } from "../components/projects/project-data";

const About = () => {
  const skills = Array.from(
    new Map(
      projects
        .flatMap((project) => project.stack.map((item) => item.name.trim()))
        .map((name) => [name.toLowerCase(), name])
    ).values()
  );

  return (
    <>
      <Head>
        <title>About | Hridoy Mozumder</title>
        <meta
          name="description"
          content="Hridoy Mozumder is a self-taught full-stack developer skilled in JavaScript, PHP, React and WordPress plugin development."
        />
      </Head>
      <div className="projects_section px-6 sm:px-2 py-2 pr-0 text-white relative w-full mt-4 overflow-y-auto">
        <h1 className="text-3xl sm:text-xl mb-6">About Me</h1>
        <div className="projects_section__wrapper__item rounded-2xl p-6 sm:p-2 contact_section__right__socials sm:text-xs">
          <p>
            <span className="socials_color">&lt;!DOCTYPE html&gt;</span>
          </p>
          <p>
            <span className="socials_color">
              &lt;html lang=&quot;en&quot;&gt;
            </span>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;
            <span className="socials_color">&lt;head&gt;</span>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="socials_color">
              &lt;meta name=&quot;author&quot; content=&quot;Hridoy Mozumder&quot;
              /&gt;
            </span>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="socials_color">&lt;title&gt;</span>
            Who Am I?
            <span className="socials_color">&lt;/title&gt;</span>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;
            <span className="socials_color">&lt;/head&gt;</span>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;
            <span className="socials_color">&lt;body&gt;</span>
          </p>
          <p style={{ color: "#6a737d" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- Introduction --&gt;
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="socials_color">&lt;h1&gt;</span>
            Hi, I&apos;m Hridoy Mozumder
            <span className="socials_color">&lt;/h1&gt;</span>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="socials_color">&lt;p&gt;</span>I am a self-taught
            programmer and a full-stack developer. My main programming languages
            are JavaScript and PHP. Love to learn new web technology and I am
            very passionate about writing readable and reusable code.
            <span className="socials_color">&lt;/p&gt;</span>
          </p>
          <p style={{ color: "#6a737d" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- Education --&gt;
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="socials_color">&lt;p&gt;</span>I completed my
            diploma in computer engineering at Feni Polytechnic Institute in
            2018. Now I am studying CSE at Bangladesh University, Dhaka.
            <span className="socials_color">&lt;/p&gt;</span>
          </p>
          <p style={{ color: "#6a737d" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- Career --&gt;
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="socials_color">&lt;p&gt;</span>I have started my
            job life as a computer operator in a clinic though. That was a time
            when I met several people and I learned a lot from them.
            <span className="socials_color">&lt;/p&gt;</span>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="socials_color">&lt;p&gt;</span>Currently, I am
            working at DiviNext as a WordPress Plugin Developer (React).
            <span className="socials_color">&lt;/p&gt;</span>
          </p>
          <p style={{ color: "#6a737d" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- Skills --&gt;
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="socials_color">&lt;ul&gt;</span>
          </p>
          {skills.map((skill) => (
            <p key={skill}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="socials_color">&lt;li&gt;</span>
              {skill}
              <span className="socials_color">&lt;/li&gt;</span>
            </p>
          ))}
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="socials_color">&lt;/ul&gt;</span>
          </p>
          <p style={{ color: "#6a737d" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- Free Time --&gt;
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="socials_color">&lt;p&gt;</span>I feel very glad to
            teach programming stuff to others. Love to read spy-thriller,
            programming and motivational books, and spend time with my family in
            my free time.
            <span className="socials_color">&lt;/p&gt;</span>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="socials_color">
              &lt;a href=&quot;/projects&quot;&gt;
            </span>
            <Link href="/projects">
              <a className="border-b-2 cursor-pointer border-pink-300">
                check out what I&apos;ve built
              </a>
            </Link>
            <span className="socials_color">&lt;/a&gt;</span>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;
            <span className="socials_color">&lt;/body&gt;</span>
          </p>
          <p>
            <span className="socials_color">&lt;/html&gt;</span>
          </p>
        </div>
        <div className="mt-3">
          <Link href="/projects">
            <a className="button_item text-white border rounded px-3 py-2 mr-2 cursor-pointer sm:text-xs">
              View Work
            </a>
          </Link>
          <Link href="/contact">
            <a className="button_item text-white border rounded px-3 py-2 mr-2 cursor-pointer sm:text-xs">
              Contact Me
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
