import React, { FC } from "react";

interface IHex
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  icon: JSX.Element;
  title: string;
}

const Hex: FC<IHex> = ({ icon, title, ...props }) => {
  return (
    <div {...props} className="hex-shape w-[134px] h-[125px] mx-10 mt-5">
      <div className="rotate-90 w-[134px] h-[125px] flex justify-center items-center flex-col">
        {icon}
        <p className="font-inter text-white text-[20px] leading-6">{title}</p>
      </div>
    </div>
  );
};

export default Hex;
