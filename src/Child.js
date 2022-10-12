import React, { createContext, useState } from "react";
import SuperChild from "./SuperChild";
export const GlobalContext = createContext();
const Child = () => {
  // eslint-disable-next-line
  const [color, SetColor] = useState("green");
  return (
    <>
      <div>
        <GlobalContext.Provider value={{ AppColor: color }}>
          <SuperChild />
        </GlobalContext.Provider>
      </div>
    </>
  );
};

export default Child;
