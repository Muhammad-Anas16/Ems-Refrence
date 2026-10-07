// import React, { useMemo } from "react";
// import { Label, Pie, PieChart } from "recharts";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import {
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";

// const PieChartCard = ({
//   data,
//   dataColor,
//   dataStroke,
//   label,
//   unit,
// }) => {
//   // -----------------------------
//   // Safe fallback values
//   // -----------------------------

//   const value =
//     data !== null &&
//     data !== undefined &&
//     !isNaN(Number(data))
//       ? Number(data)
//       : 0;

//   const color =
//     dataColor && typeof dataColor === "string"
//       ? dataColor
//       : "rgba(59, 130, 246, 0.45)";

//   const stroke =
//     dataStroke && typeof dataStroke === "string"
//       ? dataStroke
//       : "rgba(59, 130, 246, 0.9)";

//   const title =
//     label && typeof label === "string"
//       ? label
//       : "Not Defined";

//   const unitValue =
//     unit && typeof unit === "string"
//       ? unit
//       : "unit";

//   // -----------------------------
//   // Chart Data
//   // -----------------------------

//   const chartData = useMemo(
//     () => [
//       {
//         name: title,
//         value,
//         fill: color,
//       },
//     ],
//     [title, value, color],
//   );

//   // -----------------------------
//   // Chart Config
//   // -----------------------------

//   const chartConfig = useMemo(
//     () => ({
//       value: {
//         label: title,
//         color,
//       },
//     }),
//     [title, color],
//   );

//   return (
//     <Card className="w-full border-slate-800 bg-[#0b1424] text-white shadow-md">
//       {/* Header */}
//       <CardHeader className="pb-2">
//         <CardTitle className="text-sm font-semibold">
//           {title}
//         </CardTitle>

//         <CardDescription className="text-xs text-slate-500">
//           Total {title.toLowerCase()} consumption
//         </CardDescription>
//       </CardHeader>

//       {/* Chart */}
//       <CardContent className="flex flex-col items-center justify-center pt-2">
//         <ChartContainer
//           config={chartConfig}
//           className="mx-auto aspect-square h-[220px] w-[220px]"
//         >
//           <PieChart>
//             <ChartTooltip
//               cursor={false}
//               content={
//                 <ChartTooltipContent
//                   hideLabel
//                   formatter={(tooltipValue) =>
//                     `${Number(tooltipValue || 0).toLocaleString()} ${unitValue}`
//                   }
//                 />
//               }
//             />

//             <Pie
//               data={chartData}
//               dataKey="value"
//               nameKey="name"
//               innerRadius={68}
//               outerRadius={88}
//               startAngle={90}
//               endAngle={-270}
//               stroke={stroke}
//               strokeWidth={2}
//               fill={color}
//             >
//               <Label
//                 content={({ viewBox }) => {
//                   if (
//                     viewBox &&
//                     "cx" in viewBox &&
//                     "cy" in viewBox
//                   ) {
//                     return (
//                       <text
//                         x={viewBox.cx}
//                         y={viewBox.cy}
//                         textAnchor="middle"
//                         dominantBaseline="middle"
//                       >
//                         {/* Value */}
//                         <tspan
//                           x={viewBox.cx}
//                           y={(viewBox.cy || 0) - 6}
//                           className="fill-white text-2xl font-bold"
//                         >
//                           {value.toLocaleString()}
//                         </tspan>

//                         {/* Unit */}
//                         <tspan
//                           x={viewBox.cx}
//                           y={(viewBox.cy || 0) + 18}
//                           className="fill-slate-500 text-[11px]"
//                         >
//                           {unitValue}
//                         </tspan>
//                       </text>
//                     );
//                   }

//                   return null;
//                 }}
//               />
//             </Pie>
//           </PieChart>
//         </ChartContainer>
//       </CardContent>
//     </Card>
//   );
// };

// export default PieChartCard;

import React, { useMemo } from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const PieChartCard = ({ data, dataColor, dataStroke, label, unit }) => {
  // --------------------------------
  // Safe / fallback values
  // --------------------------------

  const value =
    data !== null && data !== undefined && !isNaN(Number(data))
      ? Number(data)
      : 0;

  const color =
    dataColor && typeof dataColor === "string"
      ? dataColor
      : "rgba(59, 130, 246, 0.45)";

  const stroke =
    dataStroke && typeof dataStroke === "string"
      ? dataStroke
      : "rgba(59, 130, 246, 0.9)";

  const title = label && typeof label === "string" ? label : "Not Defined";

  const unitValue = unit && typeof unit === "string" ? unit : "unit";

  // --------------------------------
  // Chart Data
  // --------------------------------

  const chartData = useMemo(
    () => [
      {
        name: title,
        value,
        fill: color,
      },
    ],
    [title, value, color],
  );

  // --------------------------------
  // Chart Config
  // --------------------------------

  const chartConfig = useMemo(
    () => ({
      value: {
        label: title,
        color,
      },
    }),
    [title, color],
  );

  return (
    <Card className="w-full border border-slate-800 bg-[#0a0f14] text-white shadow-md">
      {/* Header */}
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold text-white">
          {title}
        </CardTitle>

        <CardDescription className="text-xs text-slate-500">
          Total {title.toLowerCase()} consumption
        </CardDescription>
      </CardHeader>

      {/* Chart */}
      <CardContent className="flex flex-col items-center justify-center pt-2">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[220px] w-[220px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  formatter={(tooltipValue) =>
                    `${Number(tooltipValue || 0).toLocaleString()} ${unitValue}`
                  }
                />
              }
            />

            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={68}
              outerRadius={88}
              startAngle={90}
              endAngle={-270}
              stroke={stroke}
              strokeWidth={2}
              fill={color}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        {/* Value */}
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 6}
                          className="fill-white text-2xl font-bold"
                        >
                          {value.toLocaleString()}
                        </tspan>

                        {/* Unit */}
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 18}
                          className="fill-slate-500 text-[11px]"
                        >
                          {unitValue}
                        </tspan>
                      </text>
                    );
                  }

                  return null;
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default PieChartCard;
