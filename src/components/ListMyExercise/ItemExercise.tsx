import React, { FC, memo } from "react";

export type ItemExerciseType = {
  id: number;
  title: string;
  kcal: string;
  time: string;
};

export interface IItemExercise {
  data: ItemExerciseType;
}

const ItemExercise: FC<IItemExercise> = ({ data }) => {
  return (
    <div className="mt-2 ml-0 w-[100%] flex  justify-between items-center py-[2px] border-b border-gray-400">
      <div>
        <div className="flex items-center">
          <p className="text-[5px] mr-3">●</p>
          <p className="text-[15px] leading-[22px]">{data.title}</p>
        </div>
        <p className="text-[15px] text-primary-300 leading-[22px]">
          {data.kcal}
        </p>
      </div>
      <div className="font-inter text-[18px] text-primary-300">
        <p>{data.time}</p>
      </div>
    </div>
  );
};

export default memo(ItemExercise);
