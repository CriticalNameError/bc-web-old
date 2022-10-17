import React from "react";
import "react-vertical-timeline-component/style.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
// reactstrap components
// core components

import ListBlogPosts from "../src/helpers/ListBlogPosts";

import Head from "next/head"


const BlogPage = () => {

    return (
      <>
          <Head>
      <title key={"title"}>Übersicht über alle Beiträge im Magazin von Berghaus & Cie - Finanzielle Freiheit dank Wein Investments </title>
      <meta name="description" content="Lesen Sie Beiträge zu verschiedenen Themen rund um Wein, Wein Investments, Finanzen und Vermögensaufbau." key="description"/>
      </Head>

        <div className={"pt-2 pt-md-5"}>
          <ListBlogPosts></ListBlogPosts>
        </div>
      </>
    );
  }

export default BlogPage;
