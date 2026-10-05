import React from "react";
import { Activity, BatteryCharging, Gauge, Zap } from "lucide-react";

import ReportCard from "@/components/card/reportCard";
import ReportTable from "@/components/datalist/reportTable";
import AreaChart from "@/components/chart/areaChart";
import LineChart from "@/components/chart/lineChart";

import { Card, CardContent } from "@/components/ui/card";

const ReportPage = () => {
  return (
    <div className="dark min-h-screen w-full bg-slate-950 text-white">
      <div className="space-y-6 bg-slate-950 p-4 text-white sm:p-6 lg:p-8">
        {/* =========================
            PAGE HEADER
        ========================= */}
        {/* <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Energy Report
            </h1>

            <p className="mt-1 text-sm text-slate-400 sm:text-base">
              Real-time energy performance, power load and consumption overview
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
            <span className="text-emerald-400">Live Monitoring</span>

            <span>•</span>

            <span>Today</span>
          </div>
        </div> */}

        {/* =========================
            LOAD REPORT CARDS
        ========================= */}
        {/* <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <ReportCard
            title="Dyeing Load"
            power={8091}
            consumption={0}
            status="running"
          />

          <ReportCard
            title="Spinning Load"
            power={1864}
            consumption={14238.5}
            status="running"
          />

          <ReportCard
            title="Weaving Load"
            power={1547}
            consumption={11872.3}
            status="running"
          />

          <ReportCard
            title="Utility Load"
            power={698.4}
            consumption={12067.4}
            status="running"
          />
        </div> */}

        {/* =========================
            SUMMARY STATISTICS
        ========================= */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Total Power */}
          <Card className="border-slate-800 bg-slate-900 text-white shadow-lg shadow-black/20">
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10">
                <Zap className="h-5 w-5 text-yellow-400" />
              </div>

              <div className="min-w-0">
                <p className="text-sm text-slate-400">Total Power</p>

                <p className="mt-1 text-2xl font-bold tracking-tight text-white">
                  12,400
                  <span className="ml-1 text-sm font-normal text-slate-400">
                    kW
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Total Current */}
          <Card className="border-slate-800 bg-slate-900 text-white shadow-lg shadow-black/20">
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                <Activity className="h-5 w-5 text-blue-400" />
              </div>

              <div className="min-w-0">
                <p className="text-sm text-slate-400">Total Current</p>

                <p className="mt-1 text-2xl font-bold tracking-tight text-white">
                  2,145
                  <span className="ml-1 text-sm font-normal text-slate-400">
                    A
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Consumption */}
          <Card className="border-slate-800 bg-slate-900 text-white shadow-lg shadow-black/20">
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
                <BatteryCharging className="h-5 w-5 text-emerald-400" />
              </div>

              <div className="min-w-0">
                <p className="text-sm text-slate-400">Today Consumption</p>

                <p className="mt-1 text-2xl font-bold tracking-tight text-white">
                  78,420
                  <span className="ml-1 text-sm font-normal text-slate-400">
                    kWh
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Active Meters */}
          <Card className="border-slate-800 bg-slate-900 text-white shadow-lg shadow-black/20">
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-purple-500/10">
                <Gauge className="h-5 w-5 text-purple-400" />
              </div>

              <div className="min-w-0">
                <p className="text-sm text-slate-400">Active Meters</p>

                <p className="mt-1 text-2xl font-bold tracking-tight text-white">
                  6
                  <span className="ml-1 text-sm font-normal text-slate-400">
                    / 8
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* =========================
            CHART SECTION
        ========================= */}
        <div className="grid gap-6 xl:grid-cols-2">
          <div className="min-w-0 [&>div]:border-slate-800 [&>div]:bg-slate-900">
            <AreaChart />
          </div>

          <div className="min-w-0 [&>div]:border-slate-800 [&>div]:bg-slate-900">
            <LineChart />
          </div>
        </div>

        {/* =========================
            METER TABLE
        ========================= */}
        <div className="min-w-0 [&>div]:border-slate-800 [&>div]:bg-slate-900">
          <ReportTable />
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
