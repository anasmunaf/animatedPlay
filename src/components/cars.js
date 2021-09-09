/** @format */

import React, { useRef, useEffect, useState, useContext } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import { ContextService } from "../context/GlobalState";

const Cars = () => {
  const { getPlayer } = useContext(ContextService);
  const { ref, animate, getAnimation } = useWebAnimations({
    keyframes: {
      transform: ["translate(50vw,85vh)"],
    },
    animationOptions: {
      fill: "both",
    },
  });

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
        getPlayer("right");
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
        getPlayer("left");
      }
    });
  }, [animate]);
  return (
    <img
      className='player'
      ref={ref}
      width='100px'
      src='https://freesvg.org/img/faceman-Suburban-Assault-Vehicle-Back.png'
    />
  );
};

export default Cars;
