import React from "react";
import "react-vertical-timeline-component/style.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
// reactstrap components
// core components

import ListBlogPosts from "../src/helpers/ListBlogPosts";



class BlogPage extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
    
    document.getElementById("contact").classList.remove("contact-visible");
    document.getElementById("vert-nav").classList.remove("pt-5")
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
    if(destination.index === 0){
      document.getElementById("contact").classList.add("contact-visible")
      document.getElementById("vert-nav").classList.add("pt-5")
    }
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
