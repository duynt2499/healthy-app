import React, { FC } from "react";

interface IColumnCard {
  imageUrl: string;
  time: string;
  des: string;
  tags: Array<string>;
}

const ColumnCard: FC<IColumnCard> = ({ imageUrl, time, des, tags }) => {
  return (
    <div className="w-[234px] mt-4">
      <div className="w-full h-[156px] relative overflow-hidden">
        <img className="absolute w-full h-full object-cover hover:scale-125 transition-all duration-300" alt="" src={imageUrl} />
        <div className="px-[10px] py-[7px] bg-primary-300 text-[15px] text-white leading-5 mt-[11px] flex justify-center items-center absolute bottom-0 left-0">
          <p>{time}</p>
        </div>
      </div>
      <div className="mt-[8px] text-[15px] leading-[22px]">
        <p>{des}</p>
      </div>
      <div>
        {tags.map((value, index) => (
          <span className="mr-2 text-[12px] leading-[22px] text-primary-400" key={index.toString()}>{value}</span>
        ))}
      </div>
    </div>
  );
};

export default ColumnCard;
