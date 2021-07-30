import React from "react";
import "react-vertical-timeline-component/style.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
// reactstrap components
// core components

import ListBlogPosts from "../src/helpers/ListBlogPosts";



const BlogPage = () => {

    return (
      <>
        

        <div style={{ marginTop: "80px" }}>
          <ListBlogPosts></ListBlogPosts>
        </div>
      </>
    );
  }

export default BlogPage;
