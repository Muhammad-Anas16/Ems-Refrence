import React, { useEffect, useState } from "react";

import ReportTable from "@/components/datalist/reportTable";

import CardsComponent from "@/components/card/cards";
import PieChartCard from "@/components/chart/pieChartText";
import AreaChartCard from "@/components/chart/areaChart";
import AuroraUtilities from "@/api/filter/auroraDyeingUtilities";

const ReportPage = () => {
  const [systemData, setSystemData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await AuroraUtilities();
        setSystemData(res);
      } catch (error) {
        console.error("Report Page Data Error:", error);
        setSystemData({});
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dark min-h-screen w-full bg-[#070C11] text-white">
      <main className="mx-auto w-full max-w-[1600px] p-4 sm:p-6 lg:p-8">
        {/* -------------------------------- */}
        {/* KPI Cards */}
        {/* -------------------------------- */}

        <section className="w-full">
          <CardsComponent data={systemData} />
        </section>

        {/* -------------------------------- */}
        {/* Charts */}
        {/* -------------------------------- */}

        <section className="mt-4 w-full">
          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-10">
            {/* Area Chart - 70% */}
            <div className="min-w-0 lg:col-span-7">
              <AreaChartCard data={systemData} label="Division" unit="kWh" />
            </div>

            {/* Pie Chart - 30% */}
            <div className="min-w-0 lg:col-span-3">
              <PieChartCard data={systemData} label="Dyeing" unit="Meters" />
            </div>
          </div>
        </section>

        {/* -------------------------------- */}
        {/* Meter Table */}
        {/* -------------------------------- */}

        <section className="mt-4 w-full min-w-0">
          <ReportTable
            data={systemData}
            showMeters={8}
            headerAllow={true}
            pagiantionAllow={true}
          />
        </section>
      </main>
    </div>
  );
};

export default ReportPage;
