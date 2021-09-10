/** @format */
import React, { useEffect } from "react";
import Cars from "./cars";
import Traffic from "./traffic";
import { ContextAnime } from "../context/GlobalState";
import Start from "./start";

const Animation = () => {
  return (
    <ContextAnime>
      <div>
        <Start />
        <Cars />
        <Traffic />
      </div>
    </ContextAnime>
  );
};

export default Animation;
