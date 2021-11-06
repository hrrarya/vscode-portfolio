import Head from "next/head";
const Contact = () => {
  return (
    <>
      <Head>
        <title>Hridoy Mozumder | Contact</title>
      </Head>
      <div className="contact_section px-6 py-2 pr-0 text-white relative w-full mt-4 font-mono flex">
        <div className="w-1/2 contact_section__left border-r-2">
          <h1 className="text-3xl">Reach Out Via Socials</h1>
          <div className="contact_section__right__socials mt-3">
            <p>
              <span className="socials_color">.socials</span>
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
            </p>
            <p>
              &nbsp;&nbsp;&nbsp; github:&nbsp;
              <a
                href="https://github.com/hrrarya"
                className="socials_color hover:underline"
              >
                hrrarya
              </a>
            </p>
            <p>
              &nbsp;&nbsp;&nbsp; linkedin:&nbsp;
              <a
                href="https://linkedin.com/hrrarya"
                className="socials_color hover:underline"
              >
                hrrarya
              </a>
            </p>
            <p>
              &nbsp;&nbsp;&nbsp; twitter:&nbsp;
              <a
                href="https://twitter.com/hrrarya"
                className="socials_color hover:underline"
              >
                hrrarya
              </a>
            </p>
            <p>{"}"}</p>
          </div>
        </div>
        <div className="w-1/2 contact_section__right pl-6 pr-6">
          <h1 className="text-3xl mb-2">Or Fill Out The Form</h1>
          <form>
            <div className="flex">
              <div className="w-1/2 mr-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full"
                />
              </div>
              <div className="w-1/2">
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
