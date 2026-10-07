import EnergyDonut from "@/components/energy/EnergyDonut";
import React from "react";

const GenerationPage = () => {
  return (
    <main className="bg-transparent text-white flex flex-col justify-between font-sans">
      <section className="flex-1 flex items-center justify-center py-6">
        <EnergyDonut />
      </section>
    </main>
  );
};

export default GenerationPage;
