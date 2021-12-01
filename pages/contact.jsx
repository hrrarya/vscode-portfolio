import Head from "next/head";
const Contact = () => {
  return (
    <>
      <Head>
        <title>Hridoy Mozumder | Contact</title>
      </Head>
      <div className="contact_section px-6 py-2 pr-0 text-white relative w-full mt-4 font-mono flex sm:flex-col">
        <div className="w-1/2 sm:w-full contact_section__left border-r-2 sm:border-r-0 sm:border-b-2 sm:pb-2">
          <h1 className="text-3xl md:text-xl sm:text-sm">
            Reach Out Via Socials
          </h1>
          <div className="contact_section__right__socials mt-3 sm:text-xs">
            <p>
              <span className="socials_color md:">.socials</span>
              {" {"}
            </p>
            <p>
              &nbsp;&nbsp;&nbsp; email:&nbsp;
              <a
                href="mailto:hrrarya6@gmail.com"
                className="socials_color hover:underline"
              >
                hrrarya6@gmail.com
              </a>
              ;
            </p>
            <p>
              &nbsp;&nbsp;&nbsp; github:&nbsp;
              <a
                href="https://github.com/hrrarya"
                className="socials_color hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                hrrarya
              </a>
              ;
            </p>
            <p>
              &nbsp;&nbsp;&nbsp; linkedin:&nbsp;
              <a
                href="https://linkedin.com/hrrarya"
                className="socials_color hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                hrrarya
              </a>
              ;
            </p>
            <p>
              &nbsp;&nbsp;&nbsp; twitter:&nbsp;
              <a
                href="https://twitter.com/hrrarya"
                className="socials_color hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                hrrarya
              </a>
              ;
            </p>
            <p>{"}"}</p>
          </div>
        </div>
        <div className="w-1/2 sm:w-full contact_section__right p-6 sm:p-2 sm:pt-2">
          <h1 className="text-3xl mb-2 md:text-xl sm:text-sm">
            Or Fill Out The Form
          </h1>
          <form>
            <div className="flex sm:flex-col">
              <div className="w-1/2 sm:w-full mr-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full"
                />
              </div>
              <div className="w-1/2 sm:w-full">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full"
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="subject">Subject</label>
              <input
                type="subject"
                name="subject"
                id="subject"
                className="block w-full"
              />
            </div>
            <div className="">
              <label htmlFor="message">Message</label>
              <textarea
                type="message"
                name="message"
                id="message"
                className="block w-full"
                rows="5"
                required
                spellCheck={false}
              />
            </div>
            <input
              type="submit"
              value="Submit"
              className="contact_section__right__submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
