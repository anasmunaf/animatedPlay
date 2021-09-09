/** @format */
import React, { useEffect } from "react";
import Cars from "./cars";
import Traffic from "./traffic";
import { ContextAnime } from "../context/GlobalState";

const Animation = () => {
  return (
    <ContextAnime>
      <div>
        <Cars />
        <Traffic />
      </div>
    </ContextAnime>
  );
};

export default Animation;
