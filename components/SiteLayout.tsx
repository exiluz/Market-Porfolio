import Head from "next/head";
import { Header } from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

const SiteLayout = ({
  children,
  showSkills = false,
}: {
  children: ReactNode;
  showSkills?: boolean;
}) => {
  const title = "Your Name - Frontend Engineer";
  const description =
    "Frontend Engineer with 5+ years experience working on single page applications using React, Next.js, TypeScript.";

  return (
    <div className="flex flex-col justify-between h-full">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content="https://yourWebsite.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta name="twitter:card" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/fb-social-share.jpg" />
      </Head>

      <div>
        <Header />

        {children}
      </div>

      <Footer showSkills={showSkills} />
    </div>
  );
};

export default SiteLayout;
