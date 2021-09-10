/** @format */
import { waitFor } from "@testing-library/dom";
import React, { useEffect, useState, useContext } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "../App.css";
import { ContextService } from "../context/GlobalState";
const timeFrame = 2000;
const Traffic = () => {
  const { ref, animate, getAnimation } = useWebAnimations();
  const { getTraffic } = useContext(ContextService);

  function direction(pole, area) {
    setTimeout(() => {
      getTraffic(pole);
    }, timeFrame - 100);
    return area;
  }
  useEffect(() => {
    setInterval(() => {
      animate({
        keyframes: {
          transform: [
            "scale3d(0.1,0.1,0.1)",
            "scale3d(0.15,0.15,0.8)",
            `${
              Math.floor(Math.random() * 10) <= 5
                ? direction("left", "translate(-8vw,25vh)")
                : direction("right", "translate(12vw,25vh)")
            }`,
          ],
        },

        animationOptions: {
          duration: timeFrame,
          fill: "both",
        },
      });
      getTraffic(null);
    }, timeFrame + 100);
  }, [animate]);

  // function direction(pole, area) {
  //   getTraffic(pole);
  //   return area;
  // }
  // useEffect(() => {
  //   animate({
  //     keyframes: {
  //       transform: [
  //         "scale3d(0.1,0.1,0.1)",
  //         "scale3d(0.15,0.15,0.8)",
  //         `${
  //           Math.floor(Math.random() * 10) <= 5
  //             ? direction("left", "translate(-8vw,25vh)")
  //             : direction("right", "translate(12vw,25vh)")
  //         }`,
  //       ],
  //     },

  //     animationOptions: {
  //       duration: timeFrame,
  //       fill: "both",
  //     },
  //   });
  // }, [animate]);

  return (
    <div>
      <img
        className='car'
        ref={ref}
        src='https://images.vexels.com/media/users/3/155395/isolated/lists/3ced49c3448bede9f79d9d57bff35586-sport-car-front-view-silhouette.png'
      />
    </div>
  );
};

export default Traffic;
