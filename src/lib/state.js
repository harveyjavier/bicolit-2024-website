"use client";
import React, { createContext, useState, useContext } from "react";

const StateContext = createContext();

export function StateProvider({ children }) {
  const [state, setState] = useState({
    link: "#advocates",
  });

  return (
    <StateContext.Provider value={{ state, setState }}>
      {children}
    </StateContext.Provider>
  );
}

export function useStateContext() {
  return useContext(StateContext);
}
