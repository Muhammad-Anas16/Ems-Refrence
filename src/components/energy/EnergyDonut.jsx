// import React from "react";
// import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

// import EnergyPill from "./EnergyPill";
// import { energyData } from "./energy-data";

// const EnergyDonut = () => {
//   const total = energyData.reduce((sum, item) => sum + item.percentage, 0);

//   return (
//     <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(320px,420px)_1fr]">
//       {/* Donut Chart */}
//       <div className="relative mx-auto aspect-square w-full max-w-[400px]">
//         {/* Glow */}
//         <div className="pointer-events-none absolute inset-[25%] rounded-full bg-blue-500/10 blur-3xl" />

//         <ResponsiveContainer width="100%" height="100%">
//           <PieChart>
//             <Pie
//               data={energyData}
//               dataKey="percentage"
//               nameKey="name"
//               cx="50%"
//               cy="50%"
//               innerRadius="58%"
//               outerRadius="82%"
//               paddingAngle={2}
//               stroke="none"
//               startAngle={90}
//               endAngle={-270}
//               animationBegin={0}
//               animationDuration={900}
//               animationEasing="ease-out"
//             >
//               {energyData.map((item) => (
//                 <Cell
//                   key={item.name}
//                   fill={item.color}
//                   className="outline-none"
//                   style={{
//                     filter: `drop-shadow(0 0 8px ${item.color}44)`,
//                   }}
//                 />
//               ))}
//             </Pie>

//             <Tooltip
//               cursor={false}
//               contentStyle={{
//                 background: "rgba(15, 23, 42, 0.95)",
//                 border: "1px solid rgba(255,255,255,0.08)",
//                 borderRadius: "12px",
//                 backdropFilter: "blur(10px)",
//               }}
//               formatter={(value, name) => [`${value}%`, name]}
//             />
//           </PieChart>
//         </ResponsiveContainer>

//         {/* Center Content */}
//         <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
//           <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
//             Energy
//           </span>

//           <span className="mt-1 text-3xl font-semibold tracking-tight text-white">
//             {total}%
//           </span>

//           <span className="mt-1 text-xs text-white/40">Distribution</span>
//         </div>
//       </div>

//       {/* Energy Cards */}
//       <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-1">
//         {energyData.map((item) => (
//           <EnergyPill key={item.name} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EnergyDonut;

import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

import EnergyPill from "./EnergyPill";
import { energyData } from "./energy-data";

const getConnectorAngle = (index, count, side) => {
  if (count <= 1) return 0;

  const center = (count - 1) / 2;
  const normalized = (index - center) / center;

  const angle = normalized * 36;

  return side === "left" ? angle : -angle;
};

const EnergyDonut = () => {
  const middleIndex = Math.ceil(energyData.length / 2);

  const leftCards = energyData.slice(0, middleIndex);
  const rightCards = energyData.slice(middleIndex);

  const renderConnector = (item, index, side, count) => {
    const angle = getConnectorAngle(index, count, side);

    return (
      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          top-1/2
          hidden
          h-px
          w-[58px]
          -translate-y-1/2
          lg:block
          ${side === "left" ? "right-[-58px]" : "left-[-58px]"}
        `}
        style={{
          transformOrigin: side === "left" ? "left center" : "right center",

          transform:
            side === "left"
              ? `translateY(-50%) rotate(${angle}deg)`
              : `translateY(-50%) rotate(${angle}deg)`,
        }}
      >
        {/* Connector Line */}
        <div
          className="relative h-px w-full opacity-60 transition-all duration-300 group-hover:opacity-100"
          style={{
            background:
              side === "left"
                ? `linear-gradient(90deg, ${item.color}, transparent)`
                : `linear-gradient(90deg, transparent, ${item.color})`,
            boxShadow: `0 0 8px ${item.color}55`,
          }}
        >
          {/* Connection Dot */}
          <span
            className={`
              absolute top-1/2
              size-1.5
              -translate-y-1/2
              rounded-full
            `}
            style={{
              backgroundColor: item.color,
              boxShadow: `0 0 8px ${item.color}`,
              [side === "left" ? "right" : "left"]: "-1px",
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div
      className="
        relative
        mx-auto
        grid
        w-full
        max-w-[900px]
        grid-cols-1
        items-center
        gap-6
        lg:grid-cols-[190px_360px_190px]
        lg:gap-3
      "
    >
      {/* =====================================================
          LEFT
      ====================================================== */}
      <div className="order-2 flex flex-col items-center justify-center gap-3 lg:order-1 lg:items-end">
        {leftCards.map((item, index) => (
          <div
            key={item.name}
            className="
              group
              relative
              flex
              w-full
              justify-center
              lg:justify-end
            "
          >
            <EnergyPill item={item} />

            {renderConnector(item, index, "left", leftCards.length)}
          </div>
        ))}
      </div>

      {/* =====================================================
          CENTER DONUT
      ====================================================== */}
      <div className="order-1 flex w-full justify-center lg:order-2">
        <div className="relative aspect-square w-full max-w-[360px]">
          {/* Outer Glow */}
          <div
            className="
              pointer-events-none
              absolute
              inset-[16%]
              rounded-full
              bg-blue-500/[0.08]
              blur-3xl
            "
          />

          {/* Inner Glow */}
          <div
            className="
              pointer-events-none
              absolute
              inset-[30%]
              rounded-full
              bg-cyan-400/[0.025]
              blur-2xl
            "
          />

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={energyData}
                dataKey="percentage"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius="58%"
                outerRadius="80%"
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
                      filter: `drop-shadow(0 0 7px ${item.color}55)`,
                    }}
                  />
                ))}
              </Pie>

              <Tooltip
                cursor={false}
                contentStyle={{
                  background: "rgba(9, 19, 33, 0.97)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 10px 35px rgba(0,0,0,0.35)",
                }}
                itemStyle={{
                  color: "#fff",
                  fontSize: "12px",
                }}
                formatter={(value, name) => [`${value}%`, name]}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Center Glow */}
          <div
            className="
              pointer-events-none
              absolute
              inset-[42%]
              rounded-full
              border
              border-white/[0.03]
              bg-white/[0.015]
              shadow-[0_0_40px_rgba(59,130,246,0.08)]
            "
          />
        </div>
      </div>

      {/* =====================================================
          RIGHT
      ====================================================== */}
      <div className="order-3 flex flex-col items-center justify-center gap-3 lg:items-start">
        {rightCards.map((item, index) => (
          <div
            key={item.name}
            className="
              group
              relative
              flex
              w-full
              justify-center
              lg:justify-start
            "
          >
            <EnergyPill item={item} />

            {renderConnector(item, index, "right", rightCards.length)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnergyDonut;
