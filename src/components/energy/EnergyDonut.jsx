import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import EnergyPill from "./EnergyPill";
import { energyData } from "./energy-data";

const EnergyDonut = () => {
  return (
    <div className="relative mx-auto w-full max-w-[500px] aspect-square flex items-center justify-center my-4">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-[15%] rounded-full bg-transparent blur-3xl" />

      {/* Recharts Pie Chart */}
      <div className="relative w-full h-full">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={energyData}
              dataKey="percentage"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="64%"
              outerRadius="88%"
              paddingAngle={4}
              stroke="none"
              startAngle={90}
              endAngle={-270}
              animationDuration={1000}
            >
              {energyData.map((entry) => (
                <Cell
                  key={entry.id}
                  fill={entry.sliceColor}
                  style={{
                    filter: `drop-shadow(0 0 10px ${entry.color}66)`,
                  }}
                />
              ))}
            </Pie>
            <Tooltip
              cursor={false}
              contentStyle={{
                background: "rgba(10, 18, 29, 0.95)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "10px",
                color: "#fff",
              }}
              formatter={(value, name) => [`${value}%`, name]}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Isometric Graphic */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center rounded-full bg-transparent p-4 border border-white/5 backdrop-blur-sm shadow-2xl">
            {/* <IsometricMachine /> */}
          </div>
        </div>
      </div>

      {/* Floating Energy Pills Attached to Donut */}
      {energyData.map((item) => (
        <div key={item.id} className={`absolute z-10 ${item.positionClass}`}>
          <EnergyPill item={item} />
        </div>
      ))}
    </div>
  );
};

export default EnergyDonut;
