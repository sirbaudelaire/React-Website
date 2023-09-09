import React, { useState, useEffect, useRef } from "react";
import image1 from "../assets/dylan-clifton-wFln-loyVxY-unsplash.jpg";
import image2 from "../assets/john-schnobrich-VnHzobjGra4-unsplash.jpg";
import image3 from "../assets/michal-parzuchowski-oT-XbATcoTQ-unsplash.jpg";
// import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

const sliderImages = [image1, image2, image3];
let count = 0;
const style = {
  color: "white",
};

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0); // useState hook to keep track of the current index of the image being displayed

  const slideRef = useRef(); // useRef hook to reference the slider div

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  }; // function to remove the fade-anim class from the slider div

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    startSlider();
  }, []);

  const startSlider = () => {
    setInterval(() => {
      handleOnNextClick();
    }, 5000);
  };

  // function to handle the next button click
  const handleOnNextClick = () => {
    count = (count + 1) % sliderImages.length; // increment count by 1 and reset to 0 if it reaches the length of the sliderImages array
    setCurrentIndex(count); // set the current index to the new count
    slideRef.current.classList.add("fade-anim"); // add the fade-anim class to the slider div
  };

  // function to handle the previous button click
  const handleOnPrevClick = () => {
    const sliderLength = sliderImages.length;
    count = (currentIndex + sliderLength - 1) % sliderLength; // decrement count by 1 and reset to the length of the sliderImages array if it reaches 0
    setCurrentIndex(count); // set the current index to the new count
    slideRef.current.classList.add("fade-anim"); // add the fade-anim class to the slider div
  };

  //   console.log(slideRef)

  return (
    <>
      <div ref={slideRef} className="w-full select-none relative ">
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={sliderImages[currentIndex]}
            alt="image"
            className="h-full"
          />
        </div>

        <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
          <button
            onClick={handleOnPrevClick}
            className="bg-black p-2 text-white rounded-full bg-opacity-50 cursor-pointer items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={handleOnNextClick}
            className="bg-black p-2 text-white rounded-full bg-opacity-50 cursor-pointer items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Slider;
