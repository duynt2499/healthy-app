import React from "react";

const Footer = () => {
  const _listMenu = [
    {
      href: "#",
      text: "会員登録",
    },
    {
      href: "#",
      text: "運営会社",
    },
    {
      href: "#",
      text: "利用規約",
    },
    {
      href: "#",
      text: "個人情報の取扱について",
    },
    {
      href: "#",
      text: "特定商取引法に基づく表記",
    },
    {
      href: "#",
      text: "お問い合わせ",
    },
  ];

  return (
    <div className="bg-dark-500 text-white text-[11px] leading-[16px] py-14 px-40 max-md:px-5">
      <ul className="flex flex-wrap">
        {_listMenu.map((value,index) => {
          return (
            <li className="mr-[45px] hover:text-primary-300 transition-all duration-200" key={index.toString()}>
              <a href={value.href}>{value.text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
