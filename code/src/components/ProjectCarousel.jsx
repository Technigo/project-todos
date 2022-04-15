import React from "react";
import Flickity from "react-flickity-component";

const flickityOptions = {
  initialIndex: 0,
  pageDots: false,
  wrapAround: true,
  freeScroll: true,
  // autoPlay: 6000,
};

const ProjectCarousel = (props) => {
  return (
    <>
      <Flickity
        className={"carousel"} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
      >
        {props.children}
      </Flickity>
    </>
  );
};

export default ProjectCarousel;
