import React from "react";
import "react-vertical-timeline-component/style.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
// reactstrap components
// core components

import ListBlogPosts from "../src/helpers/ListBlogPosts";



class BlogPage extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  render() {
    return (
      <>
        

        <div style={{ marginTop: "80px", backgroundColor: "rgb(235, 236, 241)" }}>
          <ListBlogPosts></ListBlogPosts>
        </div>
      </>
    );
  }
}

export default BlogPage;
