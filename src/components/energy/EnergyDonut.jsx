import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

import EnergyPill from "./EnergyPill";
import { energyData } from "./energy-data";

const EnergyDonut = () => {
  const total = energyData.reduce((sum, item) => sum + item.percentage, 0);

  // Keep cards balanced on both sides of the chart
  const middleIndex = Math.ceil(energyData.length / 2);
  const leftCards = energyData.slice(0, middleIndex);
  const rightCards = energyData.slice(middleIndex);

  return (
    <div className="mx-auto grid w-full max-w-[1050px] grid-cols-1 items-center gap-6 lg:grid-cols-[minmax(0,1fr)_380px_minmax(0,1fr)] lg:gap-5">
      {/* Left Cards */}
      <div className="order-2 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:order-1 lg:grid-cols-1">
        {leftCards.map((item) => (
          <EnergyPill key={item.name} item={item} />
        ))}
      </div>

      {/* Center Donut */}
      <div className="order-1 flex w-full justify-center lg:order-2">
        <div className="relative aspect-square w-full max-w-[380px]">
          {/* Glow */}
          <div className="pointer-events-none absolute inset-[24%] rounded-full bg-blue-500/[0.08] blur-3xl" />

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={energyData}
                dataKey="percentage"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius="57%"
                outerRadius="81%"
                paddingAngle={2}
                stroke="none"
                startAngle={90}
                endAngle={-270}
                animationBegin={0}
                animationDuration={900}
                animationEasing="ease-out"
              >
                {energyData.map((item) => (
                  <Cell
                    key={item.name}
                    fill={item.color}
                    className="outline-none"
                    style={{
                      filter: `drop-shadow(0 0 8px ${item.color}44)`,
                    }}
                  />
                ))}
              </Pie>

              <Tooltip
                cursor={false}
                contentStyle={{
                  background: "rgba(9, 19, 33, 0.96)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  backdropFilter: "blur(10px)",
                }}
                formatter={(value, name) => [`${value}%`, name]}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Center Content */}
          {/* <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/40 sm:text-xs">
              Energy
            </span>

            <span className="mt-1 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {total}%
            </span>

            <span className="mt-1 text-[11px] text-white/40 sm:text-xs">
              Distribution
            </span>
          </div> */}
        </div>
      </div>

      {/* Right Cards */}
      <div className="order-3 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
        {rightCards.map((item) => (
          <EnergyPill key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default EnergyDonut;
