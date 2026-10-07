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

const ReportTable = ({ data = [] }) => {
  // --------------------------------
  // Safe Data
  // --------------------------------

  const safeData = Array.isArray(data) ? data : [];

  // --------------------------------
  // Number Formatter
  // --------------------------------

  const formatNumber = (value) => {
    const safeValue =
      value !== null && value !== undefined && !isNaN(Number(value))
        ? Number(value)
        : 0;

    return safeValue.toLocaleString(undefined, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
  };

  // --------------------------------
  // Totals
  // --------------------------------

  const totalPower = safeData.reduce(
    (total, meter) =>
      total +
      (meter?.power !== null &&
      meter?.power !== undefined &&
      !isNaN(Number(meter?.power))
        ? Number(meter?.power)
        : 0),
    0,
  );

  const totalCurrent = safeData.reduce(
    (total, meter) =>
      total +
      (meter?.current !== null &&
      meter?.current !== undefined &&
      !isNaN(Number(meter?.current))
        ? Number(meter?.current)
        : 0),
    0,
  );

  const totalConsumption = safeData.reduce(
    (total, meter) =>
      total +
      (meter?.consumption !== null &&
      meter?.consumption !== undefined &&
      !isNaN(Number(meter?.consumption))
        ? Number(meter?.consumption)
        : 0),
    0,
  );

  const runningMeters = safeData.filter(
    (meter) =>
      (meter?.status || "").toLowerCase() === "running" ||
      (meter?.status || "").toLowerCase() === "on",
  ).length;

  const stoppedMeters = safeData.length - runningMeters;

  return (
    <Card
      className="
        h-full
        min-w-0
        overflow-hidden
        border-slate-800
        bg-[#0b1424]
        text-white
        shadow-md
      "
    >
      {/* Header */}
      <CardHeader className="border-b border-slate-800">
        <CardTitle className="text-sm font-semibold">
          Energy Meter Details
        </CardTitle>

        <CardDescription className="text-xs text-slate-500">
          Real-time meter status and energy data
        </CardDescription>
      </CardHeader>

      {/* Table */}
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            {/* Table Header */}
            <TableHeader>
              <TableRow className="border-slate-800 hover:bg-transparent">
                <TableHead className="min-w-[180px] text-slate-400">
                  Meter
                </TableHead>

                <TableHead className="min-w-[100px] text-slate-400">
                  Status
                </TableHead>

                <TableHead className="text-right text-slate-400">kW</TableHead>

                <TableHead className="text-right text-slate-400">A</TableHead>

                <TableHead className="text-right text-slate-400">kWh</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {/* No Data */}
              {safeData.length === 0 ? (
                <TableRow className="border-slate-800 hover:bg-transparent">
                  <TableCell
                    colSpan={5}
                    className="h-32 text-center text-sm text-slate-500"
                  >
                    No meter data available
                  </TableCell>
                </TableRow>
              ) : (
                safeData.map((meter, index) => {
                  const status = (meter?.status || "").toString().toLowerCase();

                  const isOn = status === "running" || status === "on";

                  return (
                    <TableRow
                      key={meter?.id || index}
                      className="border-slate-800 hover:bg-slate-800/40"
                    >
                      {/* Meter */}
                      <TableCell className="font-medium text-white">
                        {meter?.name || meter?.meter_name || "Unknown Meter"}
                      </TableCell>

                      {/* Status */}
                      <TableCell>
                        {isOn ? (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            ON
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400">
                            <CircleOff className="h-3.5 w-3.5" />
                            OFF
                          </span>
                        )}
                      </TableCell>

                      {/* kW */}
                      <TableCell className="text-right font-semibold text-white">
                        {formatNumber(meter?.power || 0)}
                      </TableCell>

                      {/* Ampere */}
                      <TableCell className="text-right font-semibold text-white">
                        {formatNumber(meter?.current || 0)}
                      </TableCell>

                      {/* kWh */}
                      <TableCell className="text-right font-semibold text-white">
                        {formatNumber(meter?.consumption || 0)}
                      </TableCell>
                    </TableRow>
                  );
                })
              )}

              {/* Total */}
              {safeData.length > 0 && (
                <TableRow
                  className="
                    border-slate-700
                    bg-slate-800/70
                    font-bold
                    hover:bg-slate-800/70
                  "
                >
                  <TableCell className="text-white">Total</TableCell>

                  <TableCell>
                    <div className="flex items-center gap-2 text-xs font-semibold">
                      <span className="text-emerald-400">
                        {runningMeters} ON
                      </span>

                      <span className="text-slate-600">/</span>

                      <span className="text-red-400">{stoppedMeters} OFF</span>
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
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportTable;
