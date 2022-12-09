import React from "react";
import { PrimaryButton } from "../components/Button";
import { MyDiaryListCard, RecordCard } from "../components/Card";
import TableLineChart from "../components/LineChart/TableLineChart";
import ListMyExercise from "../components/ListMyExercise";
import { DataExercises } from "../_mock";
import { DataMyDiary } from "../_mock/dataMyDiary";
import { DataRecords } from "../_mock/dataRecords";

const MyRecord = () => {
  return (
    <div className="flex justify-between max-sm:justify-center items-start flex-wrap mt-8 w-[100vw] px-40 max-md:px-5">
      {DataRecords.map((value, index) => (
        <RecordCard
          key={index.toString()}
          imageUrl={value.imageUrl}
          sub={value.sub}
          title={value.sub}
        />
      ))}

      <TableLineChart />
      <ListMyExercise
        data={DataExercises}
        time={"2021.05.21"}
        customClassName={"mb-[56px]"}
      />
      <p className="text-[22px] leading-[27px] mb-3 font-inter">MY DIARY</p>
      <div className="flex justify-between max-sm:justify-center items-start flex-wrap mb-[30px]">
        {DataMyDiary.map((value, index) => (
          <MyDiaryListCard
            key={value.id.toString()}
            date={value.date}
            time={value.time}
            sub={value.sub}
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-7 mb-16 w-full">
        <PrimaryButton title="自分の日記をもっと見る" />
      </div>
    </div>
  );
};

export default MyRecord;
