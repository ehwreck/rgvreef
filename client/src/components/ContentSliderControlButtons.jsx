import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle as faCircleSolid,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

const ContentSliderControlButtons = (props) => {
  const {
    backButtonHandler,
    nextButtonHandler,
    slideButtonClick,
    indicators,
    slides,
    currentSlideIndex,
  } = props;
  return (
    <div className="content_slider_control__buttons">
      <button
        onClick={backButtonHandler}
        className="icon__button content_slider_navigation__button"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {indicators &&
        slides.map((_slide, index) => {
          return (
            <button
              key={`slider_indicator_${index}`}
              onClick={() => slideButtonClick(index)}
              className="icon__button"
            >
              {currentSlideIndex === index ? (
                <FontAwesomeIcon icon={faCircleSolid} />
              ) : (
                <FontAwesomeIcon icon={faCircle} />
              )}
            </button>
          );
        })}

      <button
        onClick={nextButtonHandler}
        className="icon__button content_slider_navigation__button"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default ContentSliderControlButtons;
