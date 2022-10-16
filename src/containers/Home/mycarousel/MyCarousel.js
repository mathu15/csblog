import React, { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import blogData from "../../../data/blog.json";
import { NavLink } from "react-router-dom";

import "./mycarousel.css";

const MyCarousel = () => {
  const [currentSlide, setCurrentslide] = useState(0);
  const slideLength = blogData.data.length;
  //slideLength=1 2 3 4 5 6 7
  //curentslide=0 1 2 3 4 5 6 7

  let autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;
  const nextSlide = () => {
    setCurrentslide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentslide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };
  function auto() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  useEffect(() => {
    setCurrentslide(0);
  }, []);
  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);
  return (
    <div className="slidercarousel">
      <video className="headerBgVideos" autoPlay muted loop>
        <source
          src={require("../../../blogPostImages/video.mp4")}
          type="video/mp4"
        />
        <source
          src={require("../../../blogPostImages/video.webm")}
          type="video/webm"
        />
      </video>
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      {blogData.data.map((slide, index) => {
        return (
          <div
            className={
              index === currentSlide
                ? "slidecarousel currentcarousel"
                : "slidecarousel"
            }
            key={slide.id}
          >
            {index === currentSlide && (
              <>
                <NavLink className="link" to={`/post/${slide.slug}`}>
                  <img
                    src={require("../../../blogPostImages/" + slide.blogImage)}
                    alt="slide"
                  />
                </NavLink>
                <div className="contentcarousel">
                  <NavLink className="link" to={`/post/${slide.slug}`}>
                    <h2>{slide.blogTitle}</h2>
                  </NavLink>

                  <p>{slide.blogText}</p>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MyCarousel;
