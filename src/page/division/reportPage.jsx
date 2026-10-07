import React from "react";

import ReportTable from "@/components/datalist/reportTable";

import CardsComponent from "@/components/card/cards";
import PieChartCard from "@/components/chart/pieChartText";
import AreaChartCard from "@/components/chart/areaChart";

const ReportPage = () => {
  return (
    <div className="dark min-h-screen w-full bg-slate-950 text-white">
      <main className="mx-auto w-full max-w-[1600px] p-4 sm:p-6 lg:p-8">
        {/* -------------------------------- */}
        {/* KPI Cards */}
        {/* -------------------------------- */}

        <section className="w-full">
          <CardsComponent />
        </section>

        {/* -------------------------------- */}
        {/* Charts */}
        {/* -------------------------------- */}

        <section className="mt-4 w-full">
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
        </section>

        {/* -------------------------------- */}
        {/* Meter Table */}
        {/* -------------------------------- */}

        <section className="mt-4 w-full min-w-0">
          <ReportTable />
        </section>
      </main>
    </div>
  );
};

export default ReportPage;
