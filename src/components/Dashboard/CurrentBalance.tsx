import React from "react";
import "./styles.css";
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
  { name: "Jan", uv: 4200, pv: 3900, amt: 2500 },
  { name: "Feb", uv: 3800, pv: 4200, amt: 2700 },
  { name: "Mar", uv: 4600, pv: 3100, amt: 2600 },
  { name: "Apr", uv: 4900, pv: 4500, amt: 2800 },
  { name: "May", uv: 5200, pv: 3700, amt: 3000 },
  { name: "Jun", uv: 4100, pv: 5200, amt: 2400 },
  { name: "Jul", uv: 5600, pv: 4300, amt: 3100 },
  { name: "Aug", uv: 4700, pv: 3900, amt: 2600 },
  { name: "Sep", uv: 6100, pv: 4800, amt: 3400 }, // spike
  { name: "Oct", uv: 4300, pv: 3600, amt: 2500 }, // dip
  { name: "Nov", uv: 5800, pv: 5000, amt: 3200 },
  { name: "Dec", uv: 4900, pv: 4100, amt: 2800 },
];

const AreaChartComponent = () => (
  <ResponsiveContainer width="100%" height="100%">
    <AreaChart
      width={200}
      height={60}
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <defs>
        {/* Custom Ombre Gradient */}
        <linearGradient id="colorOmbre" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A38FFA" stopOpacity={0.8} />{" "}
          <stop offset="50%" stopColor="#C7BBFC" stopOpacity={0.6} />{" "}
          <stop offset="100%" stopColor="#EDE9FE" stopOpacity={0.4} />{" "}
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#8884d8"
        fill="url(#colorOmbre)"
      />
      <Area
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        fill="url(#colorOmbre)"
      />
    </AreaChart>
  </ResponsiveContainer>
);

const CurrentBalance = () => {
  return (
    <div className="current-balance-div">
      <div>Current Balance</div>
      <div>$123,300.00</div>
      <div className="current-balance-chart">{AreaChartComponent()}</div>
    </div>
  );
};

export default CurrentBalance;
