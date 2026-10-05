import React from "react";
import { TrendingUp } from "lucide-react";

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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
  const firstValue = chartData[0]?.consumption ?? 0;
  const lastValue = chartData[chartData.length - 1]?.consumption ?? 0;

  const increase =
    firstValue === 0 ? 100 : ((lastValue - firstValue) / firstValue) * 100;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Energy Consumption</CardTitle>

        <CardDescription>
          Cumulative energy consumption from 12 AM onwards
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <RechartsAreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 8,
              right: 12,
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
              fillOpacity={0.3}
              stroke="var(--color-consumption)"
              strokeWidth={2}
            />
          </RechartsAreaChart>
        </ChartContainer>
      </CardContent>

      <CardFooter>
        <div className="flex w-full items-center gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium">
            Energy consumption trend
            <TrendingUp className="h-4 w-4" />
          </div>

          <div className="ml-auto text-muted-foreground">
            {lastValue.toLocaleString()} kWh
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AreaChart;
