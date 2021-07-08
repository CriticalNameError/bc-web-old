import React from "react";
import "react-vertical-timeline-component/style.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
// reactstrap components
// core components

import ListBlogPosts from "../src/helpers/ListBlogPosts";



class BlogPage extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
    console.log(origin)
    document.getElementById("contact").classList.add("d-none");
    document.getElementById("vert-nav").classList.remove("pt-5")

    if(origin.anchor === "footer"){
      document.getElementById("contact-us").classList.add("bg-primary")
      document.getElementById("contact-us").classList.add("bg-white")
      document.getElementById("contact-us-text").classList.add("text-primary")
      document.getElementById("contact-us").classList.remove("bg-white")
      document.getElementById("contact-us").classList.remove("text-primary")
      document.getElementById("contact-us-text").classList.remove("text-white")
      
    }

    if (destination.anchor === "footer"){
      document.getElementById("contact-us").classList.remove("bg-primary")
      document.getElementById("contact-us").classList.remove("bg-white")
      document.getElementById("contact-us-text").classList.remove("text-primary")
      document.getElementById("contact-us").classList.add("bg-white")
      document.getElementById("contact-us").classList.add("text-primary")
      document.getElementById("contact-us-text").classList.add("text-white")
    }

  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
   
    if(destination.index === 0){
      document.getElementById("contact").classList.remove("d-none")
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
