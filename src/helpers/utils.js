
import { useApollo, client } from "./apolloClient";
import {gql} from "apollo-boost";
import React, {useState} from "react";
import { useEffect } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const ALL_BRAND_IMAGES = gql`
    query allBrandImages($width: Int, $jpegquality: Int) {
        allBrandImages{
      title
      image {
        rendition(width: $width, jpegquality: $jpegquality){
            url
        }
      }
    }
    
  }`

  export const ALL_BRAND_IMAGES_HEIGHT = gql`
  query allBrandImages($height: Int, $jpegquality: Int) {
      allBrandImages{
    title
    image {
      rendition(height: $height, jpegquality: $jpegquality){
          url
      }
    }
  }
  
}`

  export const ALL_BRAND_IMAGES_FILL = gql`
  query allBrandImages($fill: String, $jpegquality: Int) {
      allBrandImages{
    title
    image {
      rendition(fill: $fill, jpegquality: $jpegquality){
          url
      }
    }
  }
  
}`
  


export const  getBrandImageUrlByTitle = async (title, width, jpegquality) => {
    let res;
    try{
        res = client.query({ query: ALL_BRAND_IMAGES, variables: {width: width, jpegquality: jpegquality} }).then((result, data) => {
            //console.log("FRESH:", result.data.allBrandImages.filter(obj => obj.title === title)[0].image)
            res =  String(result.data.allBrandImages.filter(obj => obj.title === title)[0].image.rendition.url)
            return res
        });
      }
      catch(error){
        console.log(error)
      }
    return res
   
    
}

export const  getBrandImageUrlByTitleFill = async (title, fill, jpegquality) => {
  let res;
  try{
      res = client.query({ query: ALL_BRAND_IMAGES_FILL, variables: {fill: fill, jpegquality: jpegquality} }).then((result, data) => {
          //console.log("FRESH:", result.data.allBrandImages.filter(obj => obj.title === title)[0].image)
          res =  String(result.data.allBrandImages.filter(obj => obj.title === title)[0].image.rendition.url)
          return res
      });
    }
    catch(error){
      console.log(error)
    }
  return res
 
  
}

export const  getBrandImageUrlByTitleHeight = async (title, height, jpegquality) => {
  let res;
  try{
      res = client.query({ query: ALL_BRAND_IMAGES_HEIGHT, variables: {height: height, jpegquality: jpegquality} }).then((result, data) => {
          //console.log("FRESH:", result.data.allBrandImages.filter(obj => obj.title === title)[0].image)
          res =  String(result.data.allBrandImages.filter(obj => obj.title === title)[0].image.rendition.url)
          return res
      });
    }
    catch(error){
      console.log(error)
    }
  return res
 
  
}

export const ImageFromCms = props => {
  const [url, setUrl] = useState(false)
  const [placeholderUrl, setPlaceholderUrl] = useState(false);
  useEffect(() => {
    try{
      if(props.fill){
        getBrandImageUrlByTitleFill(props.title, props.fill, (props.jpegquality? props.jpegquality : 100)).then((res) =>
        setUrl(res) );
        getBrandImageUrlByTitleFill(props.title, props.fill, (props.jpegquality? props.jpegquality / 10 : 10)).then((res) =>
        setPlaceholderUrl(res) );
      }else if(props.width){
        getBrandImageUrlByTitle(props.title, props.width, (props.jpegquality? props.jpegquality : 100)).then((res) =>
        setUrl(res) );
        getBrandImageUrlByTitle(props.title, props.width, (props.jpegquality? props.jpegquality / 10 : 10)).then((res) =>
        setPlaceholderUrl(res) );
      }else if(props.height){
        getBrandImageUrlByTitleHeight(props.title, props.height, (props.jpegquality? props.jpegquality : 100)).then((res) =>
        setUrl(res) );
        getBrandImageUrlByTitleHeight(props.title, props.height, (props.jpegquality? props.jpegquality / 10 : 10)).then((res) =>
        setPlaceholderUrl(res) );
      }

   
  }
    catch(error){
      console.log(error)
    }
   
  }); 
  return(<>
    {url && placeholderUrl? 
    <LazyLoadImage
    alt={props.alt}
    visibleByDefault={true}
    src={url} // use normal <img> attributes as props
    width={props.width} 
    placeholderSrc={placeholderUrl}
    wrapperClassName={props.classes}/>
    :null}
   </>
  )
}


export const convertDateString = (s) => {
    let date = new Date(s)
    return date.toLocaleDateString('de-DE', {year: 'numeric', month: 'long', day: 'numeric' })
  }

  export const getTimeFromDateString = (s) => {
    let date = new Date(s)
    return date.toLocaleTimeString("de-DE", {hour: '2-digit', minute: '2-digit'} )
  }



