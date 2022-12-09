import React from "react";
import { LogoImg } from "../../assets/images";

const Logo = () => {
  return (
    <div className="w-[109px] h-[40px]">
      <a href="/">
        <img src={LogoImg} className="w-full h-full" alt="" />
      </a>
    </div>
  );
};

export default Logo;
