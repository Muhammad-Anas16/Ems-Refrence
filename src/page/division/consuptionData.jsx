import React, { useEffect, useState } from "react";
import EnergyDonut from "@/components/energy/EnergyDonut";
import UtilitiesData from "@/components/energy/details/utilitiesData";
import TotalLoad from "@/components/energy/details/totalLoad";
import TopCard from "@/components/energy/details/topCard";
import AuroraDyeingUtilities from "@/api/filter/utitlis/auroraDyeingUtilities";

const ConsumptionData = () => {
  const [utilis, setUtilis] = useState({});
  useEffect(() => {
    const data = async (data) => {
      const res = await AuroraDyeingUtilities(data);
      setUtilis(res);
    };

    data();
  }, []);
  // console.log(utilis);

  return (
    <main className="min-h-screen bg-[#050b13] text-white font-sans overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] flex-col px-4 py-5 sm:px-6 lg:px-8">
        {/* Top Summary Cards */}

        <TopCard utilis={utilis} />

        {/* Main Dashboard */}
        <section className="flex-1">
          <div className="grid min-h-[560px] grid-cols-1 gap-5 lg:grid-cols-[230px_minmax(420px,1fr)_230px] xl:grid-cols-[250px_minmax(500px,1fr)_250px]">
            {/* Left - Utilities */}
            <div className="order-2 lg:order-1">
              <UtilitiesData data={utilis} />
            </div>

            {/* Center - Donut */}
            <div className="order-1 flex min-h-[560px] items-center justify-center lg:order-2">
              <div className="relative flex h-full w-full items-center justify-center backdrop-blur-sm">
                {/* Decorative center glow */}
                <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-cyan-500/[0.025] blur-3xl" />

                <EnergyDonut />
              </div>
            </div>

            {/* Right - Total Load */}
            <div className="order-3">
              <div className="flex h-full items-center">
                <TotalLoad data={utilis} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ConsumptionData;
