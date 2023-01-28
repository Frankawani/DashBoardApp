import React from "react";
import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    Total: 1200,
  },
  {
    name: "Febuary",
    Total: 1200,
  },
  {
    name: "March",
    Total: 2100,
  },
  {
    name: "April",
    Total: 800,
  },
  {
    name: "May",
    Total: 1600,
  },
  {
    name: "June",
    Total: 900,
  },
  {
    name: "July",
    Total: 1700,
  },
];

function Chart() {
  return (
    <div className="chart">
      <div className="title">Last 6 Months (Revenue)</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="gray" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
/*{
    name: "January",
    Total: 1200,
  },
  {
    name: "January",
    Total: 1200,
  },
  {
    name: "January",
    Total: 1200,
  },
  {
    name: "January",
    Total: 1200,
  },
  {
    name: "January",
    Total: 1200,
  },
  {
    name: "January",
    Total: 1200,
  },
  {
    name: "January",
    Total: 1200,
  }, */
