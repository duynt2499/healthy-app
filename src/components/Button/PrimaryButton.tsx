import React, { FC } from "react";

interface IPrimaryButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
}

const PrimaryButton: FC<IPrimaryButton> = ({ title, ...props }) => {
  return (
    <button
      {...props}
      className="custom-btn leading-[26px] text-[18px] pt-4 pb-[14px] w-[296px] h-[56px] rounded-[5px] text-white"
    >
      <p>{title}</p>
    </button>
  );
};

export default PrimaryButton;
