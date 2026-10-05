import React from "react";

import {
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
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

const chartData = [
  {
    time: "06 AM",
    mainIncomer: 920,
    dyeing: 0,
  },
  {
    time: "08 AM",
    mainIncomer: 1180,
    dyeing: 210,
  },
  {
    time: "10 AM",
    mainIncomer: 1325,
    dyeing: 560,
  },
  {
    time: "12 PM",
    mainIncomer: 1450,
    dyeing: 740,
  },
  {
    time: "02 PM",
    mainIncomer: 1380,
    dyeing: 810,
  },
  {
    time: "04 PM",
    mainIncomer: 1510,
    dyeing: 920,
  },
  {
    time: "06 PM",
    mainIncomer: 1290,
    dyeing: 760,
  },
  {
    time: "08 PM",
    mainIncomer: 1160,
    dyeing: 610,
  },
  {
    time: "10 PM",
    mainIncomer: 1010,
    dyeing: 480,
  },
];

const chartConfig = {
  mainIncomer: {
    label: "Main Incomer",
    color: "var(--chart-1)",
  },
  dyeing: {
    label: "Dyeing Unit",
    color: "var(--chart-2)",
  },
};

const LineChart = () => {
  const [activeChart, setActiveChart] = React.useState("mainIncomer");

  const currentValue = chartData[chartData.length - 1]?.[activeChart] ?? 0;

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-col items-stretch border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5">
          <CardTitle>Power Load Trend</CardTitle>

          <CardDescription>Hourly power demand comparison</CardDescription>
        </div>

        <div className="flex">
          {Object.keys(chartConfig).map((key) => {
            const isActive = activeChart === key;
            const chart = chartConfig[key];

            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveChart(key)}
                className={`relative flex min-w-[150px] flex-col justify-center gap-1 border-t px-5 py-4 text-left transition-colors sm:border-l sm:border-t-0 sm:px-7 ${
                  isActive ? "bg-muted/50" : "hover:bg-muted/30"
                }`}
              >
                <span className="text-xs text-muted-foreground">
                  {chart.label}
                </span>

                <span className="text-xl font-bold sm:text-2xl">
                  {chartData[chartData.length - 1][key].toLocaleString()} kW
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>

      <CardContent className="pt-6">
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <RechartsLineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
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
                  formatter={(value) => `${value} kW`}
                />
              }
            />

            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 5,
              }}
            />
          </RechartsLineChart>
        </ChartContainer>

        <div className="mt-4 flex items-center justify-between border-t pt-4">
          <span className="text-sm text-muted-foreground">
            Current {chartConfig[activeChart].label} load
          </span>

          <span className="text-lg font-semibold">
            {currentValue.toLocaleString()} kW
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default LineChart;
