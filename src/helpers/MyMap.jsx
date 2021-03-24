import React, {useState} from 'react';
import { Line, Bar } from "react-chartjs-2";
import LoadingOverlay from 'react-loading-overlay';

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
import L from "leaflet";
import { 
  Map,
  Marker,
  Popup,
  TileLayer,
  Circle,
  CircleMarker,
  Polygon,
  Rectangle,
  Tooltip, } from "react-leaflet";
import { Icon } from "leaflet";
import ContainerDimensions from "react-container-dimensions";
import {FaUndo} from "react-icons/fa";
import { thead, tbody } from "variables/general";

import {
    dashboardPanelChart,
    dashboardShippedProductsChart,
    dashboardAllProductsChart,
    dashboard24HoursPerformanceChart
  } from "variables/charts.jsx";

import Control from 'react-leaflet-control';

import {primary} from 'helpers/colorScheme';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Link } from "react-router-dom";

// import WineOverview from '../';
// import Spinner from '../';

//"SRID=4326;POINT(5.0790633 44.0648015)".split("(")[1].split(")")[0].split(" ")

// https://static.thenounproject.com/png/202245-200.png

const myIcon = L.icon({
  iconUrl: 'https://i.pinimg.com/originals/8a/81/d8/8a81d8e23182fa8f73def82b8e51effb.png',
  iconSize: [28, 32],
  iconAnchor: [15, 32],
  popupAnchor: [3, -76],
  shadowUrl: 'https://icon-library.com/images/location-icon-white-png/location-icon-white-png-6.jpg',
  shadowSize: [0, 0],
  shadowAnchor: [22, 94]
});
const GET_WINERIES = gql`
{
  allWineries{
    id
    title
    location
  }
}
`

const GET_OFFERS = gql`
{
  allOffers{
    id
   vintage {
     id
     title
     wine{
       lwin
     }
     
   }
   sellPrice
   bottleSize{
     title
   }
   caskOf
   partialOfferRel{
     quantityAvailable
   }
 }
 }`

const MyMap = props => {
  const [showModal, toggleShowModal] = useState(false);
  const [modalOfferId, setModalOfferId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [wine, setWine] = useState(null); 
  const [id, setId] = useState(props.id); 
  const [mapCenter, setMapCenter] = useState(props.center? props.center:[45.025059, -0.627686]);
  // const [lastMapCenter, setLastMapCenter] = useState([45.025059, -0.627686]);
  const [mapZoom, setMapZoom] = useState(props.zoom? props.zoom: 9); 
  // const [lastMapZoom, setLastMapZoom] = useState(9); 

    return(<Query query={GET_WINERIES}>
{
    ({ loading, error, data }) => {
        console.log({loading});
        console.log({error});
        console.log({data});
        if (loading) return <LoadingOverlay
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
        text='Lade aktuelle Angebote....'
        >
        {/* <p>Some content or children or something.</p> */}
      </LoadingOverlay>;
        if (error) return <h1>Error</h1>;
        if (data){ 
          // if(id){
          //   console.log("ID IST:");
          //   console.log(id)
          //   let passed_winery = data.allWineries.find(item => item.id === id);
          //   console.log(passed_winery);
          //   setMapCenter([
          //     parseFloat(passed_winery.location.split("(")[1].split(")")[0].split(" ")[1]),
          //   parseFloat(passed_winery.location.split("(")[1].split(")")[0].split(" ")[0])
          //  ],
          //   setMapZoom(17)
          //   );

          // }
          return (

<Map center={
   mapCenter
} zoom={mapZoom} style={{
  height: "100%", 
  width: Math.floor(0.95*props.width),
  marginLeft: Math.floor(0.025*props.width),
  boxShadow: "0 1px 15px 1px rgba(39, 39, 39, 0.1);",
  borderRadius: "0.1875rem "
  
  }}>
      {/* <TileLayer
        url='https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        opacity="0.6"
      /> */}
      <TileLayer
        url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        opacity="0.7"
      /> 
       {/* <TileLayer
        url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        opacity="1"
      />  */}
      
      

      <TileLayer
        url='https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

<Control position="topleft">
       
       <span className="btn bg-white p-2 mt-n2" style={{marginLeft: "-.5px"}}
       onClick={()=>{
        setMapCenter([45.025059, -0.627686], setMapZoom(8));
      }
      }
       >
         <FaUndo color={"black"}>
         </FaUndo>
        
      </span>
      </Control>

{data.allWineries.map((item, index) => (
   <Marker position={[
     parseFloat(item.location.split("(")[1].split(")")[0].split(" ")[1]),
     parseFloat(item.location.split("(")[1].split(")")[0].split(" ")[0])
     ]}
     onMouseOver={(e) => {
      e.target.openPopup();
    }}
    onMouseOut={(e) => {
      e.target.closePopup();
    }}
     icon={myIcon}
     color={"red"}
     onClick={()=>{
       setMapCenter([
       parseFloat(item.location.split("(")[1].split(")")[0].split(" ")[1]),
     parseFloat(item.location.split("(")[1].split(")")[0].split(" ")[0])
    ],
     setMapZoom(17)
     );
     props.changeId(item.id);
     }}>
   {/* <Popup permanent>{item.title} 123123123 Lorem ist <br></br> Test!!!</Popup> */}
    <Tooltip permanent={true} interactive={true} direction={"right"} className="map_tooltip"
    
    onClick={()=>{
      setMapCenter([
      parseFloat(item.location.split("(")[1].split(")")[0].split(" ")[1]),
    parseFloat(item.location.split("(")[1].split(")")[0].split(" ")[0])
   ],
    setMapZoom(17)
    );
    props.changeId(item.id);
    }}
    >
      
    {/* <Link to={"/admin/chateaus/"+item.id}> */}
      {item.title}
      {/* </Link> */}
    </Tooltip>
    
 </Marker>
    //             <Row className="">
    //              <Col></Col>
    // <Col key={index}  xs={12} md={10}>
    // <div class="card">
    //   <div class="card-body row py-3">
    //           <div class="col-12 col-md-2 text-left align-center my-auto"><small><span className={"d-none d-sm-inline"}>LWIN:<br/></span>{item.vintage.wine.lwin}</small></div>
    //           <div class="col-12 col-md-4 my-auto">
    //           <Link to={"/admin/vintage/" + item.vintage.id}>
    //             {item.vintage.title}
    //             </Link>
    //             <hr className={"d-block d-md-none"}/></div>
    // <div class="col-3 col-md-1 text-center my-auto"><span className={"badge badge-primary"}>{item.caskOf}x{item.bottleSize.title}</span></div>
    //           <div class="col-5 col-md-2 text-center text-success my-auto">
    //             <b>EUR {(item.sellPrice).toFixed(2)}</b><br></br>
    //           <small className="text-danger text-center">verfügbar: {item.partialOfferRel.reduce( function(cnt,o){ return cnt + o.quantityAvailable; }, 0)}</small>
              
    //           </div>
    //           <div class="col-4 col-md-3 text-right"><button type="button" class="btn btn-primary mx-0 px-1" onClick={()=>{
    //             toggleShowModal(!showModal);
    //             setModalOfferId(item.id);
    //             setPrice(parseFloat(data.allOffers.find(obj => obj.id == item.id).sellPrice));
    //             setWine({item})}
    //             }><b>Auf Orderliste setzen</b></button></div>
    //   </div>
    // </div>
   
    // </Col>
    // <Col></Col> 

    // </Row>

))}

     
    </Map>
    
    

           
//              <>
//              <Modal isOpen={showModal} toggle={()=>
//                toggleShowModal()}
//              className="modal-lg modal-dialog-centered ">
//           <ModalHeader>
//           <b>{wine?wine.item.vintage.title:""}</b>
//           </ModalHeader>
//           <ModalBody className="py-4 px-3">
//              <h5>Variante: {wine?wine.item.caskOf:""} x {wine?wine.item.bottleSize.title:""}</h5>
//              <br/>
//              <h5>Preis/Einheit:  <span className="text-success" style={{whiteSpace: "nowrap"}}>EUR {price}</span></h5>
//              <Row className="py-3">
//                <Col md={2}><h5> Menge:</h5></Col>
//                <Col md={5} className="pull-right"> <input 
//                                       value={quantity}
//                                       onChange={e=>setQuantity(e.target.value)}
//                                       type="text"
//                                       class="form-control bg-white d-inline"
//                                       placeholder="Anzahl Einheiten">
//                                     </input></Col>
              
//              </Row>

//           <hr className="text-danger"></hr>
//           <h4>Gesamtpreis: <span style={{whiteSpace: "nowrap"}}><b className="text-success">EUR {!(quantity*price>0)? "---": (quantity*price).toFixed(2)}</b></span></h4>
//           </ModalBody>
//           <ModalFooter>
//           <Button color="info" disabled={!(quantity*price > 0)} onClick={()=>toggleShowModal()}>Auf die Orderliste</Button>
//           <Button color="success" disabled={!(quantity*price > 0 )} onClick={()=>toggleShowModal()}>Sofort kaufen</Button>
//           </ModalFooter>
//         </Modal>
       
//               {data.allOffers.map((item, index) => (
//                 <Row className="">
//                  <Col></Col>
//     <Col key={index}  xs={12} md={10}>
//     <div class="card">
//       <div class="card-body row py-3">
//               <div class="col-12 col-md-2 text-left align-center my-auto"><small><span className={"d-none d-sm-inline"}>LWIN:<br/></span>{item.vintage.wine.lwin}</small></div>
//               <div class="col-12 col-md-4 my-auto">
//               <Link to={"/admin/vintage/" + item.vintage.id}>
//                 {item.vintage.title}
//                 </Link>
//                 <hr className={"d-block d-md-none"}/></div>
//     <div class="col-3 col-md-1 text-center my-auto"><span className={"badge badge-primary"}>{item.caskOf}x{item.bottleSize.title}</span></div>
//               <div class="col-5 col-md-2 text-center text-success my-auto">
//                 <b>EUR {(item.sellPrice).toFixed(2)}</b><br></br>
//               <small className="text-danger text-center">verfügbar: {item.partialOfferRel.reduce( function(cnt,o){ return cnt + o.quantityAvailable; }, 0)}</small>
              
//               </div>
//               <div class="col-4 col-md-3 text-right"><button type="button" class="btn btn-primary mx-0 px-1" onClick={()=>{
//                 toggleShowModal(!showModal);
//                 setModalOfferId(item.id);
//                 setPrice(parseFloat(data.allOffers.find(obj => obj.id == item.id).sellPrice));
//                 setWine({item})}
//                 }><b>Auf Orderliste setzen</b></button></div>
//       </div>
//     </div>
   
//     </Col>
//     <Col></Col> 

//     </Row>

// ))}
              
//        </>
          )};;
    }
}
    </Query>)
};

export default MyMap;





