import React, { Component } from "react";
import styles from "./Charts.module.scss";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2750,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const Chart = (props) => {
  const { maxTemp, minTemp, dates } = props;
  const tempData = [];
  // const newDate = new Date(date);
  if (maxTemp)
    maxTemp.forEach((temp, i) => {
      const newDate = new Date(dates[i]);
      let formatedDate = Intl.DateTimeFormat("en", {
        // day: "numeric",
        weekday: "short",
        // month: "short",
      }).format(newDate);
      tempData.push({
        date: formatedDate,
        maxTemp: temp,
        minTemp: minTemp[i],
      });
    });
  console.log(tempData);
  return (
    <div className={styles.ChartWrapper}>
      <ResponsiveContainer
        className={styles.chartContainer}
        width={"99%"}
        height={"100%"}
        aspect={2}
      >
        <LineChart
          width={730}
          height={250}
          data={tempData}
          margin={{ top: 30, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#fff" />
          <XAxis dataKey="date" tick={{ fill: "#fff" }} />
          <YAxis tick={{ fill: "#fff" }} height="100%" vertical={false} />
          <Tooltip
            contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }}
            itemStyle={{ color: "#fff" }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="maxTemp"
            stroke="Red"
            dot={{ strokeWidth: 6, stroke: "rgb(236, 236, 236)" }}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="minTemp"
            stroke="#fff"
            dot={{ strokeWidth: 2 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
