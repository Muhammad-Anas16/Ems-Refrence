import React from "react";

import ReportTable from "@/components/datalist/reportTable";

import CardsComponent from "@/components/card/cards";
import PieChartCard from "@/components/chart/pieChartText";
import AreaChartCard from "@/components/chart/areaChart";

const ReportPage = () => {
  return (
    <div className="dark min-h-screen w-full bg-slate-950 text-white">
      <CardsComponent />

      <div className="w-full p-4 sm:p-6 lg:p-8">
        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-10">
          {/* Area Chart - 70% */}
          <div className="min-w-0 lg:col-span-7">
            <AreaChartCard
              // data={electricityData}
              // dataColor="rgba(59, 130, 246, 0.20)"
              // dataStroke="rgba(59, 130, 246, 0.90)"
              label="Electricity"
              unit="kWh"
            />
          </div>

          {/* Pie Chart - 30% */}
          <div className="min-w-0 lg:col-span-3">
            <PieChartCard
              data={78420}
              dataColor="rgba(59, 130, 246, 0.25)"
              dataStroke="rgba(59, 130, 246, 0.90)"
              label="Electricity"
              unit="kWh"
            />
          </div>
        </div>

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
