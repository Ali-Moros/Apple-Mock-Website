import { Html } from "@react-three/drei";
import React from "react";
import { ThreeDots } from "react-loader-spinner";
const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        {/* <div className="w-[10vw] h-[10vw] rounded-full">Loading...</div> */}
        <ThreeDots
          visible={true}
          height="40"
          width="40"
          color="#333"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </Html>
  );
};

export default Loader;
