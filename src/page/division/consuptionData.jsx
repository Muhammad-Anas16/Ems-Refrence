import TotalLoad from "@/components/energy/details/totalLoad";
import UtilitiesData from "@/components/energy/details/utilitiesData";
import EnergyDonut from "@/components/energy/EnergyDonut";
import React from "react";

const ConsumptionData = () => {
  return (
    <main className="bg-[#050b13] text-white flex flex-col justify-between font-sans">
      <section className="flex-1 flex items-center justify-center py-6">
        <UtilitiesData />
        <EnergyDonut />
        <TotalLoad />
      </section>
    </main>
  );
};

export default ConsumptionData;
