import React from "react";
import "react-vertical-timeline-component/style.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
// reactstrap components
// core components

import ListBlogPosts from "../src/helpers/ListBlogPosts";



const BlogPage = () => {

    return (
      <>
        

        <div className={"pt-2 pt-md-5"}>
          <ListBlogPosts></ListBlogPosts>
        </div>
      </>
    );
  }

export default BlogPage;
