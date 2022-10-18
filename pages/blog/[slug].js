import React from "react";
import LoadingOverlay from "react-loading-overlay";
import {
  primary,
  primary_t50,
  primary_t80,
} from "../../src/helpers/colorScheme";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { convertDateString } from "helpers/utils";
import "react-toastify/dist/ReactToastify.css";
import Head from 'next/head'
import LandingFooter from "components/Footer/LandingFooter";

const GET_POST = gql`
  query getPost($slug: String!) {
    page(slug: $slug) {
      title
      slug
      ... on PostPage {
        intro
        firstPublishedAt
        body
      }
    }
  }
`;

const notify = (msg) =>
  toast.success(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const PostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data, loading, error, fetchMore } = useQuery(GET_POST, {
    variables: { slug: slug },
  });
  if (loading)
    return (
      <LoadingOverlay
        active={true}
        fadeSpeed={100}
        styles={{
          overlay: (base) => ({
            ...base,
            background: "rgba(255, 255, 255, 0.7)",
            position: "fixed",
          }),
          spinner: (base) => ({
            ...base,
            width: "100px",
            "& svg circle": {
              stroke: primary,
            },
          }),
          content: (base) => ({
            ...base,
            color: "black",
          }),
        }}
        spinner
        text="Lade Blogpost...."
      >
        {/* <p>Some content or children or something.</p> */}
      </LoadingOverlay>
    );
  if (error) return <h1>Error</h1>;
  if (data)
    return (
      <>
      <Head>
      <title key={"title"}>{data.page.title}</title>
      <meta name="description" content={data.page.intro} key="description"/>
      <link rel="canonical" href={"https://berghauscie.de/" + slug} />
      </Head>
      <div
        className={"container-fluid mx-auto px-3 px-md-0 text-center animated fadeIn slow"}
        style={{
          paddingTop: "150px",
          overflowWrap: "break-word",
        }}
      >
        <div className={"mx-auto text-left mb-5"} style={{ maxWidth: "750px" }}>
          <i>{convertDateString(data.page.firstPublishedAt)}</i>
          <h1>{data.page.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.page.body }}></div>
          <a href={"/blog"} className={"btn btn-primary"}>
            Zurück zur Übersicht
          </a>
        </div>

       
      </div>
      </>
    );
};

export default PostPage;
