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
class Chart extends Component {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  render() {
    const { maxTemp, minTemp } = this.props;
    const tempData = [];
    maxTemp.forEach((temp, i) => {
      tempData.push({
        name: `Day${i + 1}`,
        maxTemp: temp,
        minTemp: minTemp[i],
      });
    });
    console.log(tempData);
    return (
      <div className={styles.ChartWrapper}>
        <ResponsiveContainer
          className={styles.chartContainer}
          width={"100%"}
          height={"100%"}
          aspect={3}
        >
          <LineChart
            width={730}
            height={250}
            data={tempData}
            margin={{ top: 30, right: 30, left: 60, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#fff" />
            <XAxis dataKey="name" tick={{ fill: "#fff" }} />
            <YAxis tick={{ fill: "#fff" }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }}
              itemStyle={{ color: "#fff" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="maxTemp"
              stroke="green"
              dot={{ strokeWidth: 4, stroke: "red" }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="minTemp"
              stroke="orange"
              dot={{ strokeWidth: 2 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default Chart;
