import React, {useState, useEffect} from "react";
import IndexDesktop from "../src/components/IndexDesktop";
import IndexMobile from "../src/components/IndexMobile";

const Index = () => {
  const [width, setWidth] = useState(1300);
  const [currentComponent, setCurrentComponent] = useState(<IndexDesktop/>)
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();
  });

  if (width > 800) {
    return <IndexDesktop/>;
  } else {
    return <IndexMobile/>;
  }
};

export default Index;
