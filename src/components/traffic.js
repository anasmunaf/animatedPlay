/** @format */

import React, { useEffect } from "react";
import useWebAnimations, { zoomIn } from "@wellyshen/use-web-animations";
import "../App.css";
const Traffic = () => {
  const { ref, animate } = useWebAnimations();
  useEffect(() => {
    animate({
      keyframes: {
        transform: [
          "scale3d(0.1,0.1,0.1)",
          "scale3d(0.15,0.15,0.8)",
          `${
            Math.floor(Math.random() * 10) <= 5
              ? "translate(-8vw,25vh)"
              : "translate(8vw,25vh)"
          }`,
        ],
      },

      animationOptions: {
        duration: 800,
        fill: "both",
      },
    });
  });

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
