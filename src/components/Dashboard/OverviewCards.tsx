import React from "react";
import "./styles.css";
import recievedIcon from "../../assets/Arrow_down.svg";
import sentIcon from "../../assets/Arrow_top.svg";
import shoppingIcon from "../../assets/Basket.svg";
import { Cell, Pie, PieChart } from "recharts";

const OverviewCards = () => {
  const cards = [
    { title: "Recieved", icon: recievedIcon },
    { title: "Shopping", icon: shoppingIcon },
    { title: "Sent", icon: sentIcon },
  ];
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const PieChartComponent = () => (
    <PieChart width={200} height={150}>
      <Pie
        data={data}
        cx={100}
        cy={80}
        innerRadius={40}
        outerRadius={60}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${entry.name}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
    </PieChart>
  );

  return (
    <div className="overview-cards-div">
      {cards.map((card) => (
        <div className="overview-card" key={card.title}>
          <div className="overview-card-details">
            <div className="overview-card-icon-title">
              <img src={card.icon} />
              <div className="overview-card-text">{card.title}</div>
            </div>
            <div className="overview-card-amount">
              ${(Math.random() * 10000).toFixed(2)}
            </div>
            <div className="overview-card-percent">10% increase</div>
          </div>
          <div className="card-pie-align">{PieChartComponent()}</div>
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;
