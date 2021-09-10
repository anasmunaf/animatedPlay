/** @format */
import { waitFor } from "@testing-library/dom";
import React, { useEffect, useState, useContext } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "../App.css";
import { ContextService } from "../context/GlobalState";
const timeFrame = 5000;
const Traffic = () => {
  const { getTraffic } = useContext(ContextService);

  // let [direction, setDirection] = useState();
  function right() {
    // setDirection("right");
    setTimeout(() => {
      getTraffic("right");
    }, timeFrame - 0.1);
    return "translate(12vw,25vh)";
  }
  function left() {
    // setDirection("left");
    setTimeout(() => {
      getTraffic("left");
    }, timeFrame - 0.1);
    return "translate(-8vw,25vh)";
  }
  const { ref, animate, getAnimation } = useWebAnimations();

  useEffect(() => {
    setInterval(() => {
      animate({
        keyframes: {
          transform: [
            "scale3d(0.1,0.1,0.1)",
            "scale3d(0.15,0.15,0.8)",
            `${Math.floor(Math.random() * 10) <= 5 ? left() : right()}`,
          ],
        },

        animationOptions: {
          duration: timeFrame,
          fill: "both",
        },
      });
      getTraffic(null);
    }, timeFrame + 0.1);
  }, [animate]);
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
