// import React, { useMemo } from "react";

// import {
//   Area,
//   AreaChart as RechartsAreaChart,
//   CartesianGrid,
//   XAxis,
// } from "recharts";

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

// const AreaChartCard = ({ data, dataColor, dataStroke, label, unit }) => {
//   // --------------------------------
//   // Safe / fallback values
//   // --------------------------------

//   const color =
//     dataColor && typeof dataColor === "string"
//       ? dataColor
//       : "rgba(59, 130, 246, 0.25)";

//   const stroke =
//     dataStroke && typeof dataStroke === "string"
//       ? dataStroke
//       : "rgba(59, 130, 246, 0.9)";

//   const title = label && typeof label === "string" ? label : "Consumption";

//   const unitValue = unit && typeof unit === "string" ? unit : "unit";

//   // --------------------------------
//   // Prepare Chart Data
//   // --------------------------------

//   const chartData = useMemo(() => {
//     /*
//       Agar data array nahi hai ya empty hai
//       to 12 zero values show hongi.
//     */

//     const safeData =
//       Array.isArray(data) && data.length > 0 ? data : Array(12).fill(0);

//     const now = new Date();

//     // 2 hours interval
//     const intervalMinutes = 120;

//     return safeData.map((item, index) => {
//       // Agar item object hai to value lo
//       // warna direct number use karo
//       const rawValue =
//         typeof item === "object" && item !== null ? item.value : item;

//       const value =
//         rawValue !== null && rawValue !== undefined && !isNaN(Number(rawValue))
//           ? Number(rawValue)
//           : 0;

//       /*
//         Agar API se timestamp mila hai
//         to usko use karenge.
//         Warna automatically current time
//         se backwards calculate hoga.
//       */

//       const itemTime =
//         typeof item === "object" && item !== null && item.timestamp
//           ? new Date(item.timestamp)
//           : new Date(
//               now.getTime() -
//                 (safeData.length - 1 - index) * intervalMinutes * 60 * 1000,
//             );

//       return {
//         time: itemTime.toLocaleTimeString("en-US", {
//           hour: "2-digit",
//           minute: "2-digit",
//           hour12: true,
//         }),

//         consumption: value,
//       };
//     });
//   }, [data]);

//   // --------------------------------
//   // Chart Config
//   // --------------------------------

//   const chartConfig = useMemo(
//     () => ({
//       consumption: {
//         label: title,
//         color: color,
//       },
//     }),
//     [title, color],
//   );

//   // --------------------------------
//   // Total
//   // --------------------------------

//   const totalConsumption = useMemo(() => {
//     return chartData.reduce((total, item) => total + item.consumption, 0);
//   }, [chartData]);

//   return (
//     <Card className="w-full border-slate-800 bg-[#0b1424] text-white shadow-md">
//       {/* Header */}
//       <CardHeader className="pb-2">
//         <CardTitle className="text-sm font-semibold">{title}</CardTitle>

//         <CardDescription className="text-xs text-slate-500">
//           {title} consumption trend
//         </CardDescription>
//       </CardHeader>

//       {/* Chart */}
//       <CardContent className="pt-2">
//         <ChartContainer config={chartConfig} className="h-[230px] w-full">
//           <RechartsAreaChart
//             accessibilityLayer
//             data={chartData}
//             margin={{
//               left: 2,
//               right: 2,
//               top: 10,
//               bottom: 0,
//             }}
//           >
//             <CartesianGrid vertical={false} className="stroke-slate-800" />

//             <XAxis
//               dataKey="time"
//               tickLine={false}
//               axisLine={false}
//               tickMargin={8}
//               tick={{
//                 fontSize: 10,
//                 fill: "#64748b",
//               }}
//             />

//             <ChartTooltip
//               cursor={false}
//               content={
//                 <ChartTooltipContent
//                   indicator="line"
//                   formatter={(value) =>
//                     `${Number(value || 0).toLocaleString()} ${unitValue}`
//                   }
//                 />
//               }
//             />

//             <Area
//               dataKey="consumption"
//               type="monotone"
//               fill={color}
//               fillOpacity={0.25}
//               stroke={stroke}
//               strokeWidth={2}
//               dot={false}
//             />
//           </RechartsAreaChart>
//         </ChartContainer>
//       </CardContent>
//     </Card>
//   );
// };

// export default AreaChartCard;

import React, { useMemo } from "react";

import {
  Area,
  AreaChart as RechartsAreaChart,
  CartesianGrid,
  XAxis,
} from "recharts";

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

const AreaChartCard = ({ data, dataColor, dataStroke, label, unit }) => {
  // --------------------------------
  // Safe / fallback values
  // --------------------------------

  const color =
    dataColor && typeof dataColor === "string"
      ? dataColor
      : "rgba(59, 130, 246, 0.25)";

  const stroke =
    dataStroke && typeof dataStroke === "string"
      ? dataStroke
      : "rgba(59, 130, 246, 0.9)";

  const title = label && typeof label === "string" ? label : "Consumption";

  const unitValue = unit && typeof unit === "string" ? unit : "unit";

  // --------------------------------
  // Prepare Chart Data
  // --------------------------------

  const chartData = useMemo(() => {
    /*
      Agar valid data available nahi hai
      to fallback values use hongi.
    */

    const safeData =
      Array.isArray(data) && data.length > 0 ? data : Array(12).fill(0);

    const now = new Date();

    // 2 hours interval
    const intervalMinutes = 120;

    return safeData.map((item, index) => {
      // Agar item object hai to value lo
      // warna direct number use karo
      const rawValue =
        typeof item === "object" && item !== null ? item.value : item;

      const value =
        rawValue !== null && rawValue !== undefined && !isNaN(Number(rawValue))
          ? Number(rawValue)
          : 0;

      /*
        Agar API se timestamp available hai
        to usko use karenge.
        Warna current time se backwards calculate hoga.
      */

      const itemTime =
        typeof item === "object" && item !== null && item.timestamp
          ? new Date(item.timestamp)
          : new Date(
              now.getTime() -
                (safeData.length - 1 - index) * intervalMinutes * 60 * 1000,
            );

      return {
        time: itemTime.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),

        consumption: value,
      };
    });
  }, [data]);

  // --------------------------------
  // Chart Config
  // --------------------------------

  const chartConfig = useMemo(
    () => ({
      consumption: {
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
          {title} consumption trend
        </CardDescription>
      </CardHeader>

      {/* Chart */}
      <CardContent className="pt-2">
        <ChartContainer config={chartConfig} className="h-[230px] w-full">
          <RechartsAreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 2,
              right: 2,
              top: 10,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} className="stroke-slate-800" />

            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{
                fontSize: 10,
                fill: "#64748b",
              }}
            />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  formatter={(value) =>
                    `${Number(value || 0).toLocaleString()} ${unitValue}`
                  }
                />
              }
            />

            <Area
              dataKey="consumption"
              type="monotone"
              fill={color}
              fillOpacity={0.25}
              stroke={stroke}
              strokeWidth={2}
              dot={false}
            />
          </RechartsAreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default AreaChartCard;
