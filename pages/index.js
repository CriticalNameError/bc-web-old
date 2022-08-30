import React, { useState, useEffect } from "react";
import IndexDesktop from "../src/components/IndexDesktop";
import IndexMobile from "../src/components/IndexMobile";
import Head from "next/head";
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
  {width && width > 800?  <IndexDesktop />
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
