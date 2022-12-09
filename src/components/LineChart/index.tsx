import React, { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    x: {
      grid: {
        color: "#FFFFFF",
      },
      ticks: {
        color: "#FFFFFF",
      },
    },
  },
};

const labels = [
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 204, 33)",
      backgroundColor: "rgba(255, 204, 33, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(143, 233, 208)",
      backgroundColor: "rgba(143, 233, 208, 0.5)",
    },
  ],
};

interface ILineChart {
  classNameCustom?: string;
}

const LineChart: FC<ILineChart> = ({ classNameCustom }) => {
  return (
    <div className={`bg-dark-600 pl-16 pb-3  h-80 ${classNameCustom ?? "w-[100%]"}`}>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
