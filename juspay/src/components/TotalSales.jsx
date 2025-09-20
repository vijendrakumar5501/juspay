// TotalSales.jsx
import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Direct", value: 300.56, color: "#111827" },
  { name: "Affiliate", value: 135.18, color: "#A3E635" },
  { name: "Sponsored", value: 154.02, color: "#818CF8" },
  { name: "E-mail", value: 48.96, color: "#60A5FA" },
];

const TotalSales = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow w-full lg:w-[100%] flex flex-col items-center min-w-[15vw]">
      <h3 className="text-sm font-semibold mb-4">Total Sales</h3>
      <PieChart width={180} height={180}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={70}
          paddingAngle={3}
        >
          {data.map((entry) => (
            <Cell key={entry.name} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `$${value}`} />
      </PieChart>
      <div className="mt-4 w-full">
        {data.map((d) => (
          <div key={d.name} className="flex justify-between text-sm mb-1">
            <div className="flex items-center space-x-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: d.color }}
              ></span>
              <span>{d.name}</span>
            </div>
            <span>${d.value.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalSales;
