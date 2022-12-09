import React, { FC } from "react";

interface IMyDiaryListCard {
  date: string;
  time: string;
  sub: string;
}

const MyDiaryListCard: FC<IMyDiaryListCard> = ({ date,time, sub }) => {
  return (
    <div className="w-[234px] h-[234px] border-[2px] border-gray-400 p-4 mt-3">
      <div className="text-[18px] leading-[22px]">
        <p>{time}</p>
        <p>{date}</p>
      </div>
      <div className="text-[12px] leading-[17px] mt-[8px] flex ">
        <p>{sub}</p>
      </div>
    </div>
  );
};

export default MyDiaryListCard;
