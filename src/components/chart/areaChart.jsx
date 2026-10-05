import React from "react";

import {
  Area,
  AreaChart as RechartsAreaChart,
  CartesianGrid,
  XAxis,
} from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { time: "12 AM", consumption: 0 },
  { time: "02 AM", consumption: 320 },
  { time: "04 AM", consumption: 680 },
  { time: "06 AM", consumption: 1180 },
  { time: "08 AM", consumption: 1890 },
  { time: "10 AM", consumption: 2760 },
  { time: "12 PM", consumption: 3610 },
  { time: "02 PM", consumption: 4480 },
  { time: "04 PM", consumption: 5350 },
  { time: "06 PM", consumption: 6210 },
  { time: "08 PM", consumption: 7020 },
  { time: "10 PM", consumption: 7860 },
];

const chartConfig = {
  consumption: {
    label: "Consumption",
    color: "var(--chart-1)",
  },
};

const AreaChart = () => {
  return (
    <div className="w-full">
      {/* Chart Title */}
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Energy Consumption</p>

          <p className="mt-1 text-xs text-slate-400">
            Cumulative consumption today
          </p>
        </div>

        <div className="text-right">
          <p className="text-lg font-bold text-white">7,860</p>

          <p className="text-[11px] text-slate-500">kWh</p>
        </div>
      </div>

      {/* Chart */}
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
          <CartesianGrid vertical={false} />

          <XAxis
            dataKey="time"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tick={{ fontSize: 10 }}
          />

          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                indicator="line"
                formatter={(value) => `${value} kWh`}
              />
            }
          />

          <Area
            dataKey="consumption"
            type="monotone"
            fill="var(--color-consumption)"
            fillOpacity={0.25}
            stroke="var(--color-consumption)"
            strokeWidth={2}
          />
        </RechartsAreaChart>
      </ChartContainer>
    </div>
  );
};

export default AreaChart;
