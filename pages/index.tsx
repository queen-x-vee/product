import Home from "@/components/home";
import Head from "next/head";

const index = () => {
  return (
    <div className="mx-auto container md:p-10 p-5">
      <Head>
        <title>Innovotio</title>
        <meta
          name="description"
          content="Innovotio is a tech business support organization that specializes in
        connecting tech talent across all levels of experience to organizations
        of all sizes to achieve their business goals."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.png" />
        <meta
          property="og:url"
          content="https://innovotio-website.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Innovotio" />
        <meta
          property="og:description"
          content="Innovotio is a tech business support organization that specializes in
          connecting tech talent across all levels of experience to organizations
          of all sizes to achieve their business goals."
        />
        <meta
          property="og:image"
          content="https://innovotio-website.vercel.app/inno.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="innovotio.vercel.app" />
        <meta
          property="twitter:url"
          content="https://innovotio-website.vercel.app/"
        />
        <meta name="twitter:title" content="Innovotio" />
        <meta
          name="twitter:description"
          content="Innovotio is a tech business support organization that specializes in
          connecting tech talent across all levels of experience to organizations
          of all sizes to achieve their business goals."
        />
        <meta
          name="twitter:image"
          content="https://innovotio-website.vercel.app/inno.png"
        />
      </Head>
      <Home />
    </div>
  );
};

export default index;
