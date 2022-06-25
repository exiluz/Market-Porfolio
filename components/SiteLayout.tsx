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
  const title = "Sixty9Unit - Mini Marketplace";
  const description = "A miniature online market place that provides customers with access to a diverse selection of goods and services.";

  return (
    <div className="flex flex-col justify-between h-full">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content="https://sixty9unit.tech" />
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
