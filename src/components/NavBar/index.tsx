import React from "react";
import { IconChallenge, IconInfo, IconMemo } from "../../assets/icons";
import DropdownMenu from "../DropdownMenu";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  const listMenu = [
    {
      icon: <IconMemo />,
      text: "自分の記録",
      badge: undefined,
      href: "/my-record"
    },
    {
      icon: <IconChallenge />,
      text: "チャレンジ",
      badge: undefined,
      href: "#"
    },
    {
      icon: <IconInfo />,
      text: "お知らせ",
      badge: 1,
      href: "#"
    },
  ];

  return (
    <ul className="flex">
      {listMenu.map((value, index) => (
        <NavBarItem key={index.toString()} href={value.href} icon={value.icon} text={value.text} badge={value.badge} responsive={true} />
      ))}
      <DropdownMenu listMainMenu={listMenu} />
    </ul>
  );
};

export default NavBar;
