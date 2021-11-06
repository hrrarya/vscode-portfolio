import React from "react";
import Head from "next/head";
import TopBar from "./topbar";
import MainSection from "./main";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200&family=Montserrat:wght@900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <TopBar />
      <MainSection page={children} />
      <Footer />
    </div>
  );
};

export default Layout;
