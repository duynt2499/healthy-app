import React, { FC } from "react";

interface ICircleIconButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: JSX.Element;
}

const CircleIconButton: FC<ICircleIconButton> = ({ title, icon, ...props }) => {
  return (
    <button
      {...props}
      className="w-12 h-12 rounded-[50%] border border-gray-400 text-gray-400 hover:text-white hover:border-primary-400 hover:bg-primary-400 flex justify-center items-center transition-all duration-300"
    >
      {icon}
    </button>
  );
};

export default CircleIconButton;
