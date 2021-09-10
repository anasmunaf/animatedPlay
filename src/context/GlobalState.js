/** @format */

import { waitFor } from "@testing-library/dom";
import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
const objectMotion = {
  player: null,
  traffic: null,
};
export const ContextService = createContext(objectMotion);

export const ContextAnime = ({ children }) => {
  let [state, dispatch] = useReducer(AppReducer, objectMotion);
  function getPlayer(direction) {
    dispatch({ type: "PLAYER", payload: direction });
  }
  function getTraffic(direction) {
    dispatch({ type: "TRAFFIC", payload: direction });
  }

  // console.log(state);
  useEffect(() => {
    if (state.player === state.traffic && state.player !== null) {
      alert("GAME OVER");
      clearInterval();
      window.location = "/";
    }
  }, [state]);
  return (
    <ContextService.Provider value={{ getPlayer, getTraffic }}>
      {children}
    </ContextService.Provider>
  );
};
