import React, { useCallback, useEffect, useState } from "react";
import ContentSliderControlButtons from "./ContentSliderControlButtons";

const ContentSlider = (props) => {
  const { slides, indicators = true } = props;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Automatic content slide
  useEffect(() => {
    const interval = setInterval(() => {
      currentSlideIndex < slides.length - 1
        ? setCurrentSlideIndex(currentSlideIndex + 1)
        : setCurrentSlideIndex(0);
    }, 5000);
    return () => clearInterval(interval);
  });

  const nextButtonHandler = () => {
    setCurrentSlideIndex(
      currentSlideIndex < slides.length - 1 ? currentSlideIndex + 1 : 0
    );
  };

  const backButtonHandler = () => {
    setCurrentSlideIndex(
      currentSlideIndex > 0 ? currentSlideIndex - 1 : slides.length - 1
    );
  };

  const slideButtonClick = (index) => {
    setCurrentSlideIndex(index);
  };

  return (
    <div className="content_slider">
      {slides.map((slide, index) => {
        return (
          <div
            key={index}
            // style={{ display: currentSlideIndex === index ? "flex" : "none" }}
            className={`content_slider_data_box ${
              currentSlideIndex === index ? "" : "hidden"
            }`}
          >
            <h2 className="m_l__size extra_bold__weight no_block__margin">
              {slide.title}
            </h2>
            <p className="xs_s__size w_90 inline_auto__margin">{slide.text}</p>
          </div>
        );
      })}
      <ContentSliderControlButtons
        slides={slides}
        indicators={indicators}
        currentSlideIndex={currentSlideIndex}
        nextButtonHandler={nextButtonHandler}
        backButtonHandler={backButtonHandler}
        slideButtonClick={slideButtonClick}
      />
    </div>
  );
};

export default ContentSlider;
