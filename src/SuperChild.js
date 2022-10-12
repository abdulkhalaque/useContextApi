import React, { useContext } from "react";
import { GlobalContext } from "./Child";
const SuperChild = () => {
  const { AppColor } = useContext(GlobalContext);
  return (
    <>
      <h1 style={{ backgroundColor: AppColor }}>
        I am from SuperChild Component
      </h1>
    </>
  );
};

export default SuperChild;
