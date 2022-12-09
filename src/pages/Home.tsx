import React from "react";
import { PrimaryButton } from "../components/Button";
import Hex from "../components/Hex";
import { IconCoffee, IconKnife } from "../assets/icons";
import { PhotoCard } from "../components/Card";
import LineChart from "../components/LineChart";
import { DataMeals } from "../_mock";
import HomeBanner from "../components/HomeBanner";

function Home() {
  const listHexMenu = [
    {
      icon: <IconKnife />,
      title: "Morning",
    },
    {
      icon: <IconKnife />,
      title: "Lunch",
    },
    {
      icon: <IconKnife />,
      title: "Dinner",
    },
    {
      icon: <IconCoffee />,
      title: "Snack",
    },
  ];

  return (
    <div>
      <div className="flex h-80">
        <HomeBanner />
        <LineChart classNameCustom={"w-[60%] px-40 max-md:px-5 "} />
      </div>
      <div className="mt-6 flex justify-center items-center flex-wrap">
        {listHexMenu.map((value, index) => (
          <Hex key={index.toString()} icon={value.icon} title={value.title} />
        ))}
      </div>
      <div className="flex justify-center items-start flex-wrap mt-8 w-[100vw] px-40 max-md:px-5">
        {DataMeals.map((value, index) => (
          <PhotoCard
            key={index.toString()}
            imageUrl={value.imageUrl}
            sub={value.sub}
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-7 mb-16">
        <PrimaryButton title="記録をもっと見る" />
      </div>
    </div>
  );
}

export default Home;
