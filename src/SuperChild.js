import React, { useContext } from "react";
import { GlobalContext } from "./Child";
const SuperChild = () => {
  const { AppColor } = useContext(GlobalContext);
  return (
    <>
      <h1 style={{ backgroundColor: AppColor }}>
        I am from Super Child Component
      </h1>
    </>
  );
};

export default SuperChild;
