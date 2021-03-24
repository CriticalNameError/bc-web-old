import React, {useState} from 'react';
import { useStateWithCallbackLazy } from 'use-state-with-callback';
import { Line, Bar } from "react-chartjs-2";
import LoadingOverlay from 'react-loading-overlay';
import InfiniteScroll from 'react-infinite-scroll-component';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Button,
  Label,
  FormGroup,
  Input,
  UncontrolledTooltip,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";


import { thead, tbody } from "variables/general";

import {primary} from "../helpers/colorScheme";

import {
    dashboardPanelChart,
    dashboardShippedProductsChart,
    dashboardAllProductsChart,
    dashboard24HoursPerformanceChart
  } from "variables/charts.jsx";
import {client} from "index";
import { Query, Mutation, useQuery} from 'react-apollo';
import { gql } from 'apollo-boost';
import { Link } from "react-router-dom";
import NotificationAlert from 'react-notification-alert';
import { ToastContainer, toast } from 'react-toastify';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import {convertDateString} from "helpers/utils";
import 'react-toastify/dist/ReactToastify.css';
// import WineOverview from '../';
// import Spinner from '../';



const GET_POST = gql`
query getPost($slug: String!){
    page(slug: $slug) {
      title
      slug
      ...on PostPage{
      intro
      firstPublishedAt
        body
     
    }
    }
}`



//  const ADDTOORDERLISTMUTATION = gql`
//  mutation createOrderPosition($offerId: Int!, $amount: Int! ){
//   createOrderPosition(offerId: $offerId, amount: $amount){
//    success
//    errors
//    }
//  }
//  `

const notify = (msg) => toast.success(msg, {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  });



const PostPage = (props) => {
  
  const { data, loading, error, fetchMore } = useQuery(GET_POST, {
    variables: { slug: props.match.params.slug }
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
  if (loading) return (<LoadingOverlay
    active={true}
    fadeSpeed={100}
    styles={{
      overlay: (base) => ({
        ...base,
        background: 'rgba(255, 255, 255, 0.7)',
        position: "fixed"
      })
    , spinner: (base) => ({
      ...base,
      width: '100px',
      '& svg circle': {
        stroke: primary
      }
    })
    , content: (base) => ({
      ...base,
      color: 'black',
     
    })

  }}
    spinner
    text='Lade Post....'
    >
    {/* <p>Some content or children or something.</p> */}
  </LoadingOverlay>)
    if (error) return <h1>Error</h1>;
    if (data) return (
      <div className={"container text-center text-justify"} style={{paddingTop: "150px"}}>
     <i>{convertDateString(data.page.firstPublishedAt)}</i>
      <h1>{data.page.title}</h1>
      <div dangerouslySetInnerHTML={{__html: data.page.body}}>
      </div>
     
      <i></i>
      </div>
    )

    
}

export default PostPage;
