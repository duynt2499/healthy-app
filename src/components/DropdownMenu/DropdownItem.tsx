import React, { FC } from "react";

interface IDropdownItem {
  title?: string;
  customContent?: JSX.Element | JSX.Element[];
  href?: string;
}

const DropdownItem: FC<IDropdownItem> = ({ title, customContent, href }) => {
  return (
    <a href={href ?? "#"}>
      <div className="w-full relative h-[72px] bg-gray-400 flex items-center text-[18px] text-white cursor-pointer hover:bg-primary-300 transition-all duration-300">
        {customContent ?? <p className="ml-[35px] leading-[26px]">{title}</p>}
        <div className="bg-dark-600 w-full h-[1px] mix-blend-normal opacity-25 absolute bottom-0" />
        <div className="bg-white w-full h-[1px] mix-blend-normal opacity-[15%] absolute bottom-[71px]" />
      </div>
    </a>
  );
};

export default DropdownItem;
