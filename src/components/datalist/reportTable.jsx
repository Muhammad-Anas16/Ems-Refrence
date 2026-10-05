import React from "react";
import { CheckCircle2, CircleOff } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const meterData = [
  {
    id: 1,
    name: "Main Incomer",
    status: "running",
    power: 1245.8,
    current: 372.5,
    consumption: 18452.7,
    lastUpdate: "Now",
  },
  {
    id: 2,
    name: "Spinning Unit",
    status: "running",
    power: 686.4,
    current: 284.2,
    consumption: 14238.5,
    lastUpdate: "Now",
  },
  {
    id: 3,
    name: "Weaving Unit",
    status: "running",
    power: 554.7,
    current: 236.8,
    consumption: 11872.3,
    lastUpdate: "1 min ago",
  },
  {
    id: 4,
    name: "Dyeing Unit",
    status: "stopped",
    power: 0,
    current: 0,
    consumption: 9845.2,
    lastUpdate: "2 min ago",
  },
  {
    id: 5,
    name: "Compressor",
    status: "running",
    power: 292.6,
    current: 141.7,
    consumption: 7654.8,
    lastUpdate: "Now",
  },
  {
    id: 6,
    name: "Boiler House",
    status: "running",
    power: 428.3,
    current: 196.4,
    consumption: 8924.6,
    lastUpdate: "1 min ago",
  },
  {
    id: 7,
    name: "Finishing Unit",
    status: "stopped",
    power: 0,
    current: 0,
    consumption: 6238.4,
    lastUpdate: "4 min ago",
  },
  {
    id: 8,
    name: "Utility Panel",
    status: "running",
    power: 176.9,
    current: 117.3,
    consumption: 5487.9,
    lastUpdate: "Now",
  },
];

const formatNumber = (value) => {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
};

const ReportTable = () => {
  const totalPower = meterData.reduce((total, meter) => total + meter.power, 0);

  const totalCurrent = meterData.reduce(
    (total, meter) => total + meter.current,
    0,
  );

  const totalConsumption = meterData.reduce(
    (total, meter) => total + meter.consumption,
    0,
  );

  const runningMeters = meterData.filter(
    (meter) => meter.status === "running",
  ).length;

  const stoppedMeters = meterData.filter(
    (meter) => meter.status === "stopped",
  ).length;

  return (
    <Card
      className="
        h-full
        min-w-0
        overflow-hidden
        border-slate-800
        bg-slate-900
        text-white
        shadow-lg
        shadow-black/20
      "
    >
      <CardHeader className="border-b border-slate-800">
        <CardTitle>Energy Meter Details</CardTitle>

        <CardDescription className="text-slate-400">
          Real-time meter status and energy data
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-800 hover:bg-transparent">
                <TableHead className="min-w-[160px] text-slate-400">
                  Meter
                </TableHead>

                <TableHead className="min-w-[120px] text-slate-400">
                  Status
                </TableHead>

                <TableHead className="text-right text-slate-400">kW</TableHead>

                <TableHead className="text-right text-slate-400">A</TableHead>

                <TableHead className="text-right text-slate-400">kWh</TableHead>

                <TableHead className="text-right text-slate-400">
                  Update
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {meterData.map((meter) => {
                const isRunning = meter.status === "running";

                return (
                  <TableRow
                    key={meter.id}
                    className="border-slate-800 hover:bg-slate-800/40"
                  >
                    <TableCell className="font-medium text-white">
                      {meter.name}
                    </TableCell>

                    <TableCell>
                      {isRunning ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          Running
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-red-400">
                          <CircleOff className="h-3.5 w-3.5" />
                          Stopped
                        </span>
                      )}
                    </TableCell>

                    <TableCell className="text-right font-semibold text-white">
                      {formatNumber(meter.power)}
                    </TableCell>

                    <TableCell className="text-right font-semibold text-white">
                      {formatNumber(meter.current)}
                    </TableCell>

                    <TableCell className="text-right font-semibold text-white">
                      {formatNumber(meter.consumption)}
                    </TableCell>

                    <TableCell className="text-right text-xs text-slate-400">
                      {meter.lastUpdate}
                    </TableCell>
                  </TableRow>
                );
              })}

              <TableRow className="border-slate-700 bg-slate-800/70 font-bold hover:bg-slate-800/70">
                <TableCell className="text-white">Total</TableCell>

                <TableCell>
                  <div className="flex flex-col gap-1 text-xs">
                    <span className="text-emerald-400">
                      {runningMeters} Running
                    </span>

                    <span className="text-red-400">
                      {stoppedMeters} Stopped
                    </span>
                  </div>
                </TableCell>

                <TableCell className="text-right text-white">
                  {formatNumber(totalPower)}
                </TableCell>

                <TableCell className="text-right text-white">
                  {formatNumber(totalCurrent)}
                </TableCell>

                <TableCell className="text-right text-white">
                  {formatNumber(totalConsumption)}
                </TableCell>

                <TableCell />
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportTable;
