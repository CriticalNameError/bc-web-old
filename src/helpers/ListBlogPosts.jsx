import React, { useState } from "react";
import LoadingOverlay from "react-loading-overlay";

import { Button } from "reactstrap";

import { gql, useQuery } from "@apollo/client";
import { convertDateString } from "helpers/utils";
import "react-toastify/dist/ReactToastify.css";
import LandingFooter from "components/Footer/LandingFooter";
import { primary, primary_t80, primary_t50 } from "helpers/colorScheme";

const GET_WINES = gql`
  {
    allWines {
      title
      lwin
      subregion {
        title
        region {
          title
          country {
            title
          }
        }
      }
      group
      winery {
        title
        description
      }
      vintagesRel {
        id
        title
        year
        alc
        drinkingMaturityFrom
        ratRel {
          rater {
            title
          }
          score
        }
      }
      description
      classification {
        title
      }
    }
  }
`;

const GET_POSTS = gql`
  query getPosts($skip: Int!, $first: Int!) {
    allPostPages(skip: $skip, first: $first) {
      id
      title
      firstPublishedAt
      titleImage {
        src
      }
      intro
      tags
      postCategory {
        id
        title
      }
      slug
    }
  }
`;

const MORE_POSTS = gql`
  query getPosts($skip: Int!, $first: Int!) {
    allPostPages(skip: $skip, first: $first) {
      id
      title
      firstPublishedAt
      titleImage {
        src
      }
      intro
      tags
      postCategory {
        id
        title
      }
      slug
    }
  }
`;

//  const ADDTOORDERLISTMUTATION = gql`
//  mutation createOrderPosition($offerId: Int!, $amount: Int! ){
//   createOrderPosition(offerId: $offerId, amount: $amount){
//    success
//    errors
//    }
//  }
//  `

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

const ListBlogPosts = () => {
  const [skip, setSkip] = useState(0);
  const [first, setFirst] = useState(1);
  const [posts, setPosts] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const { data, loading, error, fetchMore } = useQuery(GET_POSTS, {
    variables: { skip: skip, first: 1 },
  });

  //  const fetchData = () => {
  //   setIsLoading(true);
  //   setSkip(data.allPostPages.length, ()=>{

  //     client.query({
  //       query: GET_POSTS
  //     })
  //   console.log("FETCH CALLED")
  //   }).then(result => setPosts(posts.concat(result)));
  //   setIsLoading(false);
  // };

  const [isLoadingMore, setIsLoadingMore] = useState(false);

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
        text="Lade aktuelle Posts...."
      >
        {/* <p>Some content or children or something.</p> */}
      </LoadingOverlay>
    );
  if (error) return <h1>Error</h1>;
  if (data)
    return (
      <>
        {data.allPostPages.map((item, index) => (
          <div className={"row mt-5 pt-5 mx-2"}>
            <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-sm-10 offset-sm-1 col-xs-12">
              <a href={"/blog/" + item.slug} style={{ color: "#2c2c2c" }}>
                <div class="card p-3 animated fadeInUp faster blog-post-card">
                  <div className={"row"}>
                    <div className={"col-md-6 col-12 text-center my-auto"}>
                      <div className={"text-left"}>
                    {item.postCategory.map((cat, index) => (
                    <span
                      class="badge"
                      style={{ color: primary_t80, marginRight: "5px",border: "1px solid " + primary_t80, backgroundColor: "white", fontSize: "1em"}}
                    >
                      {cat.title}
                    </span>
                  ))}
                  </div>
                  <br/>
                  <br/>
                      <img
                        className={"img-raised img img-fluid img-blog"}
                        src={item.titleImage.src}
                      ></img>
                    </div>
                    <div className={"col-12 col-md-6 text-center"}>
                      <i style={{ fontSize: "0.8em" }}>
                        {convertDateString(item.firstPublishedAt)}
                      </i>
                      <h5 class="text-center mt-3 mt-md-0 mb-n1">
                        {item.title}
                      </h5>

                      <center>
                        {item.tags.map((tag, index) => (
                          <span
                            class="badge badge-secondary mx-1"
                            style={{ fontSize: "0.6em" }}
                          >
                            #{tag}
                          </span>
                        ))}
                      </center>
                      <br></br>
                      <p class="text-justify ">{item.intro}</p>
                      <center>
                        <button className={"btn btn-primary mt-0"}>Mehr</button>
                      </center>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
        <center>
          <Button
            className={"btn btn-primary"}
            disabled={loadingMore}
            onClick={() => {
              setLoadingMore(true);

              fetchMore({
                query: MORE_POSTS,
                variables: { skip: data.allPostPages.length, first: 1 },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                  setLoadingMore(false);
                  console.log("data", data);
                  if (!fetchMoreResult) return previousResult;
                  console.log("MORE:", fetchMoreResult);
                  console.log("OLD:", previousResult);
                  console.log([
                    ...previousResult.allPostPages,
                    ...fetchMoreResult.allPostPages,
                  ]);
                  return {
                    allPostPages: [
                      ...previousResult.allPostPages,
                      ...fetchMoreResult.allPostPages,
                    ],
                  };
                },
              });
            }}
          >
            {loadingMore ? "Lade..." : "Weitere Posts"}
          </Button>
        </center>
        <div
          className={"section fp-auto-height fp-auto-height-responsive p-5"}
          style={{
            backgroundImage:
              "linear-gradient(" +
              primary_t50 +
              " 0%, " +
              primary_t80 +
              " 100%)",
          }}
        >
          <LandingFooter />
        </div>
      </>
    );
};

export default ListBlogPosts;
