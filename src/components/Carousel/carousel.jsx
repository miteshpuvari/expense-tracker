import React from "react";
import CarouselSlider from "react-carousel-slider";

const ImageCarousel = () => {

  let data = [
    {
      imgSrc:
        "https://thumbs.dreamstime.com/b/close-up-image-businessman-signing-contract-student-having-exam-test-wide-view-selective-focus-hand-pen-paper-message-149581347.jpg",
    },
    {
      imgSrc:
        "https://thumbs.dreamstime.com/b/close-up-image-businessman-signing-contract-student-having-exam-test-wide-view-selective-focus-hand-pen-paper-message-149581347.jpg",
    },
    
  ];

  let sliderBoxStyle = {
    width: "100%",
    background: "tranparent"
  };

  let itemsStyle = {
    height: "250px",
    background: "tranparent"
  };

  return (
    <CarouselSlider
      sliderBoxStyle={sliderBoxStyle}
      itemsStyle={itemsStyle}
      slideItems={data}
    />
    
  );
};

export default ImageCarousel;
