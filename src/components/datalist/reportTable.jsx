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
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col gap-1">
          <CardTitle>Energy Meter Details</CardTitle>

          <CardDescription>
            Real-time meter status, power, current and energy consumption
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <div className="overflow-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[220px]">Meter Name</TableHead>

                  <TableHead className="min-w-[210px]">Status</TableHead>

                  <TableHead className="text-right">Power (kW)</TableHead>

                  <TableHead className="text-right">Current (A)</TableHead>

                  <TableHead className="text-right">
                    Consumption (kWh)
                  </TableHead>

                  <TableHead className="text-right">Last Update</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {meterData.map((meter) => {
                  const isRunning = meter.status === "running";

                  return (
                    <TableRow key={meter.id}>
                      <TableCell className="font-medium">
                        {meter.name}
                      </TableCell>

                      <TableCell>
                        <div className="flex items-center gap-4">
                          <label className="flex items-center gap-2">
                            <input
                              type="radio"
                              checked={isRunning}
                              readOnly
                              disabled
                              className="h-4 w-4 accent-emerald-600"
                            />

                            <span
                              className={
                                isRunning
                                  ? "text-sm text-emerald-600"
                                  : "text-sm text-muted-foreground"
                              }
                            >
                              Running
                            </span>
                          </label>

                          <label className="flex items-center gap-2">
                            <input
                              type="radio"
                              checked={!isRunning}
                              readOnly
                              disabled
                              className="h-4 w-4 accent-red-600"
                            />

                            <span
                              className={
                                !isRunning
                                  ? "text-sm text-red-600"
                                  : "text-sm text-muted-foreground"
                              }
                            >
                              Stopped
                            </span>
                          </label>
                        </div>
                      </TableCell>

                      <TableCell className="text-right font-semibold">
                        {meter.power.toLocaleString(undefined, {
                          minimumFractionDigits: 1,
                          maximumFractionDigits: 1,
                        })}
                      </TableCell>

                      <TableCell className="text-right font-semibold">
                        {meter.current.toLocaleString(undefined, {
                          minimumFractionDigits: 1,
                          maximumFractionDigits: 1,
                        })}
                      </TableCell>

                      <TableCell className="text-right font-semibold">
                        {meter.consumption.toLocaleString(undefined, {
                          minimumFractionDigits: 1,
                          maximumFractionDigits: 1,
                        })}
                      </TableCell>

                      <TableCell className="text-right text-sm text-muted-foreground">
                        {meter.lastUpdate}
                      </TableCell>
                    </TableRow>
                  );
                })}

                <TableRow className="bg-muted/50 font-bold">
                  <TableCell>Total</TableCell>

                  <TableCell>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-sm text-emerald-600">
                        <CheckCircle2 className="h-4 w-4" />
                        {runningMeters} Running
                      </span>

                      <span className="flex items-center gap-1 text-sm text-red-600">
                        <CircleOff className="h-4 w-4" />
                        {stoppedMeters} Stopped
                      </span>
                    </div>
                  </TableCell>

                  <TableCell className="text-right">
                    {totalPower.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    })}{" "}
                    kW
                  </TableCell>

                  <TableCell className="text-right">
                    {totalCurrent.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    })}{" "}
                    A
                  </TableCell>

                  <TableCell className="text-right">
                    {totalConsumption.toLocaleString(undefined, {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    })}{" "}
                    kWh
                  </TableCell>

                  <TableCell />
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportTable;
