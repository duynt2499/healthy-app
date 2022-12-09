import React from "react";
import { FC } from "react";
import ItemExercise, { ItemExerciseType } from "./ItemExercise";

export interface IItemExercise {
  data: Array<ItemExerciseType>;
  time: string;
  customClassName?: string;
}

const ListMyExercise: FC<IItemExercise> = ({ data, time, customClassName }) => {
  return (
    <div
      className={`bg-dark-500 px-6 py-4 text-white w-full ${customClassName}`}
    >
      <div className="flex">
        <p>
          MY
          <br /> EXERCISE
        </p>
        <p className="text-[22px] ml-6">{time}</p>
      </div>
      <div className="overflow-y-scroll scroll-ml-3 pr-6">
        <div className="grid grid-cols-2 gap-x-12 h-48 w-full ">
          {data.map((value) => (
            <ItemExercise key={value.id} data={value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListMyExercise;
