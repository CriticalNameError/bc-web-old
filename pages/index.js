import React, {useState, useEffect} from "react";
import IndexDesktop from "../src/components/IndexDesktop";
import IndexMobile from "../src/components/IndexMobile";

const Index = () => {
  const [width, setWidth] = useState(null);
  const [currentComponent, setCurrentComponent] = useState(<IndexDesktop/>)
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();
  });

  if (width && width > 800) {
    return <IndexDesktop/>;
  } if (width && width <= 800) {
    return <IndexMobile/>;
  } else{
    return <></>
  }
};

export default Index;
