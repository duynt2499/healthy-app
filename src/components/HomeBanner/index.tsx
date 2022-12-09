import React from "react";
import { CircleProgress } from "../../assets/icons";
import { D01 } from "../../assets/images";

function HomeBanner() {
  return (
    <div className="w-[40%] relative flex justify-center items-center">
      <img
        alt=""
        src={D01}
        className="w-full h-full object-cover absolute -z-10"
      />
      <div className="w-[181px] h-[181px] flex justify-center items-center">
        <CircleProgress className="absolute" />
        <p>
          <span className="text-white font-inter text-[18px] custom-shadow-red">
            05/21
          </span>
          <span className="text-white font-inter text-[25px] custom-shadow-red ml-1">
            75%
          </span>
        </p>
      </div>
    </div>
  );
}

export default HomeBanner;
