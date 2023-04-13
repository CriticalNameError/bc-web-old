import React, { useState, useEffect } from "react";
import IndexDesktop from "../src/components/IndexDesktop";
import IndexDesktopNew from "../src/components/IndexDesktopNew";
import IndexMobile from "../src/components/IndexMobile";
import Head from "next/head";
//import { getServerSideSitemap } from "next-sitemap";
//import { useApollo, client } from "../src/helpers/apolloClient";

// export const getServerSideProps = async (ctx) => {
//   // let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
//   // posts = await posts.json();
//   let posts = []
//   client.query({GET_POST_PAGES}).then((results, data)=>{
//     results.map(item=>{return item.slug})
//   })
//   const newsSitemaps = posts.map((item) => ({
//     loc: `https://berghauscie.de/${slug}`,
//     lastmod: new Date().toISOString(),
//   }));

//   const fields = [...newsSitemaps];

//   return getServerSideSitemap(ctx, fields);
// };

const Index = () => {
  const [width, setWidth] = useState(null);
  const [currentComponent, setCurrentComponent] = useState(<IndexDesktop />);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();
  });

  return(
    <>
    <Head>
    <title key={"title"}>
     Ihr Wein Investment - Lafite Rothschild, Mouton, Petrus und mehr!
    </title>
    <meta
      name="description"
      content="Geld verdienen mit Wein Investments ist leichter als Sie denken. Berghaus & Cie. ist absolut professionell und bietet dennoch günstige Preise. Auch En Primeur ist möglich und bietet hohe Renditen und Gewinn Potential. Wein ist eine Alternative zu Immobilien Investments oder Rolex, Audemars Piquet und Patek Philippe"
      key="description"
    />
  </Head>
  {width && width > 800?  <IndexDesktopNew />
  : (width && width <= 800?  <IndexMobile /> : <></>)}</>

  )
};

  // if (width && width > 800) {
  //   return (
  //     <>
  //       {" "}
  //       <Head>
  //         <title key={"title"}>
  //          Ihr Wein Investment - Lafite Rothschild, Mouton, Petrus und mehr!
  //         </title>
  //         <meta
  //           name="description"
  //           content="Geld verdienen mit Wein Investments ist leichter als Sie denken. Berghaus & Cie. ist absolut professionell und bietet dennoch günstige Preise. Auch En Primeur ist möglich und bietet hohe Renditen und Gewinn Potential. Wein ist eine Alternative zu Immobilien Investments oder Rolex, Audemars Piquet und Patek Philippe"
  //           key="description"
  //         />
  //       </Head>
  //       <IndexDesktop />
  //     </>
  //   );
  // }
  // if (width && width <= 800) {
  //   return (
  //     <>
  //       <Head>
  //         <title key={"title"}>
  //          Ihr Wein Investment - Lafite Rothschild, Mouton, Petrus und mehr!
  //         </title>
  //         <meta
  //           name="description"
  //           content="Geld verdienen mit Wein Investments ist leichter als Sie denken. Berghaus & Cie. ist absolut professionell und bietet dennoch günstige Preise. Auch En Primeur ist möglich und bietet hohe Renditen und Gewinn Potential. Wein ist eine Alternative zu Immobilien Investments oder Rolex, Audemars Piquet und Patek Philippe"
  //           key="description"
  //         />
  //       </Head>
  //       <IndexMobile />
  //     </>
  //   );
  // } else {
  //   return <></>;
  // }


export default Index;
