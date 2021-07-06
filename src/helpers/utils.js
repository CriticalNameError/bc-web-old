
import { useApollo, client } from "./apolloClient";
import {gql} from "apollo-boost";
import React, {useState} from "react";
import { useEffect } from "react";
export const ALL_BRAND_IMAGES = gql`
    query allBrandImages($width: Int) {
        allBrandImages{
      title
      image {
        rendition(width: $width){
            url
        }
      }
    }
    
  }`
  


export const  getBrandImageUrlByTitle = async (title, width) => {
    let res;
    try{
        res = client.query({ query: ALL_BRAND_IMAGES, variables: {width: width} }).then((result, data) => {
            console.log("FRESH:", result.data.allBrandImages.filter(obj => obj.title === title)[0].image)
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
  useEffect(() => {
    try{
    getBrandImageUrlByTitle(props.title, props.width).then((res) =>
    setUrl(res) );
  }
    catch(error){
      console.log(error)
    }
   
  }); 
  return(<>
    {url? <img src={url} className={props.classes? props.classes:""}></img>:null}
   </>
  )
}


export const convertDateString = (s) => {
    let date = new Date(s)
    return date.toLocaleDateString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  }
