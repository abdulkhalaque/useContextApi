import React, { useContext } from "react";
import { GlobalContext } from "./Child";
const SuperChild = () => {
  const { AppColor } = useContext(GlobalContext);
  return (
    <>
      <h1 style={{ backgroundColor: AppColor }}>
        I am from Super Child Component
      </h1>
      <p> UseContext Hook is very Interesting to learn and fun with Component . I really enjoy it.</p>
    </>
  );
};

export default SuperChild;
