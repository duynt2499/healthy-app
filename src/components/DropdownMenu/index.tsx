import React, { FC } from "react";
import { IconClose, IconMenu } from "../../assets/icons";
import useResponsive from "../../hooks/useResponsive";
import { useToggle } from "../../hooks/useToggle";
import NavBarItem, { INavBarItem } from "../NavBar/NavBarItem";
import DropdownItem from "./DropdownItem";

interface IDropdownMenu {
  listMainMenu?: Array<INavBarItem>;
}

const DropdownMenu: FC<IDropdownMenu> = ({ listMainMenu }) => {
  const { toggle, handleToggle } = useToggle();
  const { isSm } = useResponsive();

  const listMenu = [
    {
      href: "/my-record",
      title: "自分の記録",
    },
    {
      href: "#",
      title: "体重グラフ",
    },
    {
      href: "#",
      title: "目標",
    },
    {
      href: "#",
      title: "選択中のコース",
    },
    {
      href: "/column",
      title: "コラム一覧",
    },
    {
      href: "#",
      title: "設定",
    },
  ];

  return (
    <>
      <div className="relative">
        <button onClick={handleToggle}>
          {toggle ? <IconClose /> : <IconMenu />}
        </button>
        <div
          className={`absolute w-[280px] left-[-248px] top-[32px] transition-all duration-300  ${
            toggle ? `opacity-100 z-50` : "opacity-0 -z-10"
          }`}
        >
          {listMenu.map((value, index) => (
            <DropdownItem
              key={index.toString()}
              title={value.title}
              href={value.href}
            />
          ))}
          {isSm &&
            listMainMenu?.map((value, index) => (
              <DropdownItem
                key={index.toString()}
                href={value.href}
                customContent={
                  <NavBarItem
                    key={index.toString()}
                    icon={value.icon}
                    text={value.text}
                    badge={value.badge}
                  />
                }
              />
            ))}
        </div>
      </div>
      {toggle && (
        <div
          onClick={handleToggle}
          className="w-[100vw] h-[100vh] absolute z-40 left-0"
        />
      )}
    </>
  );
};

export default DropdownMenu;
