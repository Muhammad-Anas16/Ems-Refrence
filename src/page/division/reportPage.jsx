import React from "react";
import { Activity,   BatteryCharging, Gauge, Zap } from "lucide-react";

import ReportTable from "@/components/datalist/reportTable";
import AreaChart from "@/components/chart/areaChart";
import LineChart from "@/components/chart/lineChart";

import { Card, CardContent } from "@/components/ui/card";

const ReportPage = () => {
  return (
    <div className="dark min-h-screen w-full bg-slate-950 text-white">
      <div className="w-full p-4 sm:p-6 lg:p-8">
        {/* =====================================================
            TOP ROW
            LEFT  = ENERGY CARD
            RIGHT = AREA CHART
        ====================================================== */}
        <div className="grid grid-cols-1 gap-0 xl:grid-cols-2">
          {/* =========================
              ENERGY OVERVIEW CARD
          ========================= */}
          <Card
            className="
              rounded-none
              border-slate-800
              bg-slate-900
              text-white
              shadow-none
              xl:rounded-l-xl
              xl:border-r-0
            "
          >
            <CardContent className="h-full p-6">
              {/* Total Load */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10">
                  <Zap className="h-6 w-6 text-yellow-400" />
                </div>

                <div>
                  <p className="text-sm text-slate-400">Total Load</p>

                  <p className="mt-1 text-3xl font-bold tracking-tight text-white">
                    12,400
                    <span className="ml-2 text-sm font-normal text-slate-400">
                      kW
                    </span>
                  </p>
                </div>
              </div>

              {/* Today Consumption */}
              <div className="mt-6 border-t border-slate-800 pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                    <BatteryCharging className="h-6 w-6 text-emerald-400" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Today Consumption</p>

                    <p className="mt-1 text-3xl font-bold tracking-tight text-white">
                      78,420
                      <span className="ml-2 text-sm font-normal text-slate-400">
                        kWh
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Current + Meters */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Activity className="h-4 w-4 text-blue-400" />

                    <span className="text-xs text-slate-400">Current</span>
                  </div>

                  <p className="text-xl font-bold text-white">
                    2,145
                    <span className="ml-1 text-xs font-normal text-slate-400">
                      A
                    </span>
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Gauge className="h-4 w-4 text-purple-400" />

                    <span className="text-xs text-slate-400">
                      Active Meters
                    </span>
                  </div>

                  <p className="text-xl font-bold text-white">
                    6
                    <span className="ml-1 text-xs font-normal text-slate-400">
                      / 8
                    </span>
                  </p>
                </div>
              </div>

              {/* Small Status */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-5">
                <span className="text-sm text-slate-400">System Status</span>

                <span className="flex items-center gap-2 text-sm font-medium text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  All Systems Normal
                </span>
              </div>
            </CardContent>
          </Card>

          {/* =========================
              AREA CHART
          ========================= */}
          <div
            className="
              min-w-0
              border-slate-800
              bg-slate-900
              xl:border-l
            "
          >
            <AreaChart />
          </div>
        </div>

        {/* =====================================================
            MIDDLE ROW
            LINE CHART
        ====================================================== */}
        <div
          className="
            w-full
            border-x
            border-b
            border-slate-800
            bg-slate-900
          "
        >
          <LineChart />
        </div>

        {/* =====================================================
            BOTTOM ROW
            TABLE
        ====================================================== */}
        <div
          className="
            w-full
            overflow-hidden
            border-x
            border-b
            border-slate-800
            bg-slate-900
            xl:rounded-b-xl
          "
        >
          <ReportTable />
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
