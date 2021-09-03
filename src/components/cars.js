/** @format */

import React, { useRef, useEffect, useState } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
const Cars = () => {
  const { ref, animate, getAnimation } = useWebAnimations();

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        animate({
          keyframes: {
            transform: ["translate(55vw,85vh)"],
          },
          animationOptions: {
            duration: 200,
            fill: "both",
          },
        });
        console.log(getAnimation());
      }
      if (e.key === "ArrowLeft") {
        animate({
          keyframes: {
            transform: ["translate(35vw,85vh)"],
          },
          animationOptions: {
            duration: 200,
            fill: "both",
          },
        });
        console.log(getAnimation());
      }
    });
  }, [animate]);
  return (
    <div>
      <div className='target'>
        <img
          ref={ref}
          width='100px'
          src='https://freesvg.org/img/faceman-Suburban-Assault-Vehicle-Back.png'
        />
      </div>
    </div>
  );
};

export default Cars;
