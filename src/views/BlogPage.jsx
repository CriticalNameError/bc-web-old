import React from "react";
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

import { Chrono } from "react-chrono";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Card
} from "reactstrap";

import ReactTooltip from 'react-tooltip';

import {primary, primary_t50, primary_t80} from '../helpers/colorScheme';

import peter from "assets/img/peter_irnich_berghaus_cie.png"
import tristan from "assets/img/tristan_berghaus_berghaus_cie.png"
import martin from "assets/img/martin_dammrath_berghaus_cie.png"
import bernadette from "assets/img/bernadette_baur_berghaus_cie.png"

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footer/DefaultFooter.js";
import LandingNavbar from "components/Navbars/LandingNavbar";
import ListBlogPosts from "../helpers/ListBlogPosts";
import WineDaxSap from "../components/WineDaxSap";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import LandingFooter from "components/Footer/LandingFooter";
import ContactUs from "components/ContactUs.js";
// const Process = () => {
//   const items = [
//     {},
//     {
//     title: "May 1940",
//     cardTitle: "Dunkirk",
//     cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
//     media: {
//       type: "IMAGE",
//       source: {
//         url: "http://someurl/image.jpg"
//       }
//     }
//   },
//   {
//     title: "May 1940",
//     cardTitle: "Dunkirk",
//     cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
//     media: {
//       type: "IMAGE",
//       source: {
//         url: "http://someurl/image.jpg"
//       }
//     }
//   },
//   {
//     title: "May 1940",
//     cardTitle: "Dunkirk",
//     cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
//     media: {
//       type: "IMAGE",
//       source: {
//         url: "http://someurl/image.jpg"
//       }
//     }
//   }];

//   return (
//     <div style={{ width: "100%", height: "85%" }}>
//       <Chrono items={items} mode={"HORIZONTAL"} slideShow allowDynamicUpdate hideControls scrollable/>
//     </div>
//   )
// }




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
      <ContactUs></ContactUs>

        

<div style={{marginTop: "80px"}}>

<ListBlogPosts ></ListBlogPosts>
</div>








                
           
    
       
      </>
    );
  }
}

export default BlogPage;