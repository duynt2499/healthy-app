import React from "react";
import LineChart from ".";

const TableLineChart = () => {
  const listTab = [
    {
      id: 1,
      text: "日",
      onclick: () => {},
      isSelected: true,
    },
    {
      id: 2,
      text: "週",
      onclick: () => {},
      isSelected: true,
    },
    {
      id: 3,
      text: "月",
      onclick: () => {},
      isSelected: true,
    },
    {
      id: 4,
      text: "年",
      onclick: () => {},
      isSelected: true,
    },
  ];

  return (
    <div className="my-[56px] w-full bg-dark-600 py-4 px-6">
      <div className="flex">
        <p className="text-white text-[15px] leading-4">
          BODY
          <br /> RECORD
        </p>
        <p className="text-[22px] text-white ml-6">{"2021.05.21"}</p>
      </div>
      <LineChart classNameCustom={"w-[100%] px-40 max-md:px-5 "} />
      {listTab.map((value, index) => (
        <button className="text-primary-300 bg-white px-5 py-1 rounded-[20px] hover:bg-primary-300 hover:text-white mr-4">
          <p>{value.text}</p>
        </button>
      ))}
    </div>
  );
};

export default TableLineChart;
