import React, { FC } from "react";

interface IRecommendedCard {
  title: string;
  sub: string;
}

const RecommendedCard: FC<IRecommendedCard> = ({ title, sub }) => {
  return (
    <div className="w-[216px] h-[144px] bg-dark-600 relative mt-10 flex justify-center items-center flex-col">
      <p className="text-primary-300 font-inter text-[22px] leading-[27px] text-center">{title}</p>
      <hr className=" border w-14 my-3" />
      <div className="w-40 h-6 text-[18px] text-white leading-[26px]  flex justify-center items-center">
        <p>{sub}</p>
      </div>
    </div>
  );
};

export default RecommendedCard;
