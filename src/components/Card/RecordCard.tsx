import React, { FC } from "react";

interface IRecordCard {
  imageUrl: string;
  title: string;
  sub: string;
}

const RecordCard: FC<IRecordCard> = ({ imageUrl, title, sub }) => {
  return (
    <div className="w-[288px] h-[288px] border-[24px] max-md:justify-center border-primary-300 relative mt-10">
      <img
        className="absolute w-full h-full object-cover opacity-[0.25]"
        src={imageUrl}
        alt=""
      />
      <div className="absolute w-full h-full bg-black mix-blend-luminosity opacity-70"></div>
      <div className="absolute w-full h-full flex justify-center items-center flex-col">
        <p className="text-primary-300 text-[25px] leading-[30px]">{title}</p>
        <div className="w-40 h-6 bg-primary-400 text-[14px] text-white leading-5 mt-[11px] flex justify-center items-center">
          <p>{sub}</p>
        </div>
      </div>
    </div>
  );
};

export default RecordCard;
