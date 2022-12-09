import React from "react";
import { PrimaryButton } from "../components/Button";
import { ColumnCard } from "../components/Card";
import RecommendedCard from "../components/Card/RecommendedCard";
import { DataColumns } from "../_mock/dataColumn";
import { DataRecommended } from "../_mock/dataRecommended";

const Column = () => {
  return (
    <div className="w-[100vw] ">
      <div className="px-40 max-md:px-5 flex justify-between max-sm:justify-center items-start flex-wrap">
        {DataRecommended.map((value) => (
          <RecommendedCard key={value.id} title={value.title} sub={value.sub} />
        ))}
      </div>

      <div className="flex justify-between max-sm:justify-center items-start flex-wrap mt-8 w-[100vw] px-40 max-md:px-5">
        {DataColumns.map((value, index) => (
          <ColumnCard
            key={value.id.toString()}
            imageUrl={value.imageUrl}
            des={value.des}
            time={value.time}
            tags={value.tags}
          />
        ))}

        <div className="flex justify-center items-center mt-7 mb-16 w-full">
          <PrimaryButton title="コラムをもっと見る" />
        </div>
      </div>
    </div>
  );
};

export default Column;
