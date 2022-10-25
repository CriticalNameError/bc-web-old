import React, { useState, useEffect } from "react";
import LoadingOverlay from "react-loading-overlay";

import { Button } from "reactstrap";

import { gql, useQuery } from "@apollo/client";
import { convertDateString } from "helpers/utils";
import "react-toastify/dist/ReactToastify.css";
import LandingFooter from "components/Footer/LandingFooter";
import { primary, primary_t80, primary_t50 } from "helpers/colorScheme";
// import { getServerSideSitemap } from "next-sitemap";

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

export const GET_POSTS = gql`
  query getPosts($skip: Int!, $first: Int!) {
    allPostPages(skip: $skip, first: $first) {
      id
      title
      firstPublishedAt
      titleImage {
        rendition(fill: "300x250", jpegquality: 40) {
          url
        }
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
        rendition(fill: "300x250", jpegquality: 40) {
          url
        }
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
let number_of_posts_to_load = 10;

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
  const [endReached, toggleEndReached] = useState(false);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { data, loading, error, fetchMore } = useQuery(GET_POSTS, {
    variables: { skip: skip, first: 10 },
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
      // <LoadingOverlay
      //   active={true}
      //   fadeSpeed={100}
      //   styles={{
      //     overlay: (base) => ({
      //       ...base,
      //       background: "rgba(255, 255, 255, 0.7)",
      //       position: "fixed",
      //     }),
      //     spinner: (base) => ({
      //       ...base,
      //       width: "100px",
      //       "& svg circle": {
      //         stroke: primary,
      //       },
      //     }),
      //     content: (base) => ({
      //       ...base,
      //       color: "black",
      //     }),
      //   }}
      //   spinner
      //   text="Lade aktuelle Posts...."
      // >
      //   {/* <p>Some content or children or something.</p> */}
      // </LoadingOverlay>
      <div style={{height: "100vh"}}></div>
    );
  if (error) return <h1>Error</h1>;
  if (data){

    

    // if(data.allPostPages.length < number_of_posts_to_load){
    //   toggleEndReached(true);
    // }
 
    return (
      <div>
        {data.allPostPages.map((item, index) => (
          <>
          <a href={"/blog/" + item.slug} className={"text-dark"} style={{textDecoration: "none"}}  >
            <div class="row mx-auto" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" style={{ paddingTop: "90px", maxWidth: "1200px" }}>
              <div
                className={
                  "col-md-4 col-sm-12 mx-2 mx-sm-n3 mb-n3 mb-sm-0 my-sm-auto " +
                  (width < 768 ? "text-center" : "text-right")
                }
                style={{ zIndex: 1000 }}
              >
                {/* <ImageFromCms
                title={"tristan_formal"}
                width={Math.min(width * 0.85, 300)}
                fill={width > 991 ? "300x300" : "300x300"}
                jpegquality={80}
                classes={"animated fadeIn img img-raised"}
              /> */}
                <img
                  className={"img-raised"}
                  src={item.titleImage.rendition.url}
                ></img>
                {/* <img
                    src={"/assets/img/tristan_berghaus_berghaus_cie.png"}
                    class={"img-raised"}
                    width="350px"
                  ></img> */}
              </div>

              <div class="col-md-8 col-sm-12 text-left card mt-sm-4 mx-3 p-3 pt-5 pt-sm-4 text-center">
                <div style={{justifyContent: "space-between"}}>
                <small>
                  {" "}
                  {convertDateString(item.firstPublishedAt)}
                </small>
             
                </div>
                <br />
                <h2
                  class="text-left d-inline heading mt-sm-3 h3"
                  style={{ fontSize: "21px" }}
                >
                  {item.title}
                </h2>
                <br />
                <br />

                {/* <center>
                  {item.tags.map((tag, index) => (
                    <span
                      class="badge badge-secondary mx-1"
                      style={{ fontSize: "0.6em" }}
                    >
                      #{tag}
                    </span>
                  ))}
                </center> */}
                <p className={"text-left"}>{item.intro}</p>
                <br />
                <center>
                  <button className={"btn btn-primary mt-0"}>Mehr</button>
                </center>
                <div className={"text-right description"}>
                  Kategorien:{" "}
                  {item.postCategory.map(i => i.title).join(", ")}
                        {/* {item.postCategory.map((cat, index) => (
                       
                            <span>{cat.title} {" "}</span>
                         
                        ))} */}
                      </div>
              </div>
            </div>

            {/* 
          <div className={"row mt-5 pt-5 mx-2"}>
            <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-sm-10 offset-sm-1 col-xs-12">
              <a href={"/blog/" + item.slug} style={{ color: "#2c2c2c" }}>
                <div class="card p-3 animated fadeInUp faster blog-post-card">
                  <div className={"row"}>
                    <div className={"col-md-6 col-12 text-center my-auto"}>
                      {/* <div className={"text-left"}>
                        {item.postCategory.map((cat, index) => (
                          <span
                            class="badge"
                            style={{
                              color: primary_t80,
                              marginRight: "5px",
                              border: "1px solid " + primary_t80,
                              backgroundColor: "white",
                              fontSize: "1em",
                            }}
                          >
                            {cat.title}
                          </span>
                        ))}
                      </div>
                      <br />
                      <br /> 
                      <div style={{height: "100%", overflow: "hidden"}}>
                      <img
                        className={"img-raised img img-fluid img-blog"}
                        style={{height: "100%", width: "100%"}}
                        src={item.titleImage.rendition.url}
                      ></img>
                      </div>
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
          </div> */}
          </a>
          </>
          
        ))}
        <center>
          {!endReached && (
            <Button
              className={"btn btn-primary"}
              disabled={loadingMore}
              onClick={() => {
                setLoadingMore(true);

                fetchMore({
                  query: MORE_POSTS,
                  variables: {
                    skip: data.allPostPages.length,
                    first: number_of_posts_to_load,
                  },
                  updateQuery: (previousResult, { fetchMoreResult }) => {
                    setLoadingMore(false);
                    if (
                      fetchMoreResult.allPostPages.length <
                      number_of_posts_to_load
                    ) {
                      toggleEndReached(true);
                    }
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
              {loadingMore ? "Lade..." : "Ältere Posts"}
            </Button>
          )}

          <br />
          <br />
        </center>

       
      </div>
    );
  }
};

export default ListBlogPosts;
