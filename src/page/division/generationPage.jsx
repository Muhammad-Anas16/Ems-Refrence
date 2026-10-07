import EnergyDonut from "@/components/energy/EnergyDonut";
import React from "react";

const GenerationPage = () => {
  return (
    <main className="min-h-screen bg-[#070a0e] text-white flex flex-col font-sans">
      <section className="flex-1 flex items-center justify-center py-6">
        <EnergyDonut />
      </section>
    </main>
  );
};

export default GenerationPage;
