import React, { useState } from "react";
import Head from "next/head";

const GoogleAnalytics = () => {
  return (
    <>
      {process.env.NEXT_PUBLIC_NODE_ENV === "production" && process.browser ? (
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-5TB6FL3V22"
          ></script>
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag("js", new Date());

                gtag("config", "G-5TB6FL3V22");`,
            }}
          />
        </Head>
      ) : null}
    </>
  );
};

export default GoogleAnalytics;
