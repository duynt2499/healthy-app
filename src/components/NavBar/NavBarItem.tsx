import React, { FC } from "react";

export interface INavBarItem {
  icon: JSX.Element;
  badge?: number;
  text?: string;
  responsive?: boolean;
  href?: string;
}

const NavBarItem: FC<INavBarItem> = ({
  icon,
  badge,
  text,
  responsive,
  href,
}) => {
  return (
    <a href={href ?? "#"}>
      <li
        className={`flex items-center text-white hover:text-primary-300 cursor-pointer mr-6 ${
          responsive ? "max-[650px]:hidden" : ""
        }`}
      >
        <div className={`relative ${responsive ? "" : "ml-3"}`}>
          {icon}
          {badge && (
            <div className="absolute top-[-3px] right-[-3px] w-4 h-4 rounded-[50%] bg-primary-500 text-[10px] leading-[12px] flex justify-center items-center">
              {badge}
            </div>
          )}
        </div>
        <p className="ml-2 leading-[23px] text-[16px] pb-[3px]">{text}</p>
      </li>
    </a>
  );
};

export default NavBarItem;
