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

  if (width && width > 800) {
    return (
      <>
        {" "}
        <Head>
          <title key={"title"}>
            Lernen Sie unser Unternehmen kennen und werden Sie zum Wein Investor
          </title>
          <meta
            name="description"
            content="Werden Sie selbst Weininvestor und profitieren Sie von unserer Rundumdiensleistung - so investieren Sie sorglos und mit starken Renditen in die besten Weine der Welt"
            key="description"
          />
        </Head>
        <IndexDesktop />
      </>
    );
  }
  if (width && width <= 800) {
    return (
      <>
        <Head>
          <title key={"title"}>
            Lernen Sie unser Unternehmen kennen und werden Sie zum Wein Investor
          </title>
          <meta
            name="description"
            content="Werden Sie selbst Weininvestor und profitieren Sie von unserer Rundumdiensleistung - so investieren Sie sorglos und mit starken Renditen in die besten Weine der Welt"
            key="description"
          />
        </Head>
        <IndexMobile />
      </>
    );
  } else {
    return <></>;
  }
};

export default Index;
