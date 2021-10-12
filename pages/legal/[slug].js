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
import LandingFooter from "components/Footer/LandingFooter";

const GET_HOME_PAGE = gql`
  query homePage($slug: String!) {
    homePage(slug: $slug) {
      title
      slug
      ...on HomePage{
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

const LegalPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data, loading, error, fetchMore } = useQuery(GET_HOME_PAGE, {
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
        text="Lade ...."
      >
        {/* <p>Some content or children or something.</p> */}
      </LoadingOverlay>
    );
  if (error) return <h1>Error</h1>;
  if (data)
    return (
      <div
        className={"container-fluid mx-auto px-5 px-md-0 text-center"}
        style={{
          paddingTop: "150px",
        }}
      >
        <div className={"mx-auto text-justify mb-5"} style={{ maxWidth: "750px" }}>
          {/* <i>{convertDateString(data.page.firstPublishedAt)}</i> */}
          <h1>{data.homePage.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.homePage.body }}></div>
          {/* <a href={"/blog"} className={"btn btn-primary"}>
            Zurück zur Übersicht
          </a> */}
        </div>

        <LandingFooter />
      </div>
    );
};

export default LegalPage;
