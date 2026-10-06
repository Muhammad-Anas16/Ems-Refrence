import React, { useEffect, useState } from "react";
import { energyData } from "../energy-data";
import AuroraDyeingUtilities from "@/api/filter/utitlis/auroraDyeingUtilities";

const TopCard = () => {
  const [utilis, setUtilis] = useState({});
  useEffect(() => {
    const data = async (data) => {
      const res = await AuroraDyeingUtilities(data);
      setUtilis(res);
    };

    data();
  }, []);
  // console.log(utilis);
  const utilityCount = Array.isArray(utilis?.dataType) ? utilis?.dataType : 0;

  const electricalData = energyData?.find((item) => item.id === "electrical");

  const currentLoad = electricalData?.value || 0;
  const currentUnit = electricalData?.unit || "kW";

  return (
    <section className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {/* Connected Utilities */}
      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-400">Connected Utilities</span>

          <span className="rounded-md bg-cyan-400/10 px-2 py-1 text-[10px] font-medium text-cyan-300">
            LIVE
          </span>
        </div>

        <div className="mt-2 flex items-end gap-2">
          <span className="text-2xl font-bold text-white">
            {utilis?.dataType?.length || 0}
          </span>

          <span className="pb-1 text-xs text-slate-500">utilities</span>
        </div>
      </div>

      {/* Consumption View */}
      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-400">Consumption View</span>

          <span className="text-[11px] text-slate-600">EMS</span>
        </div>

        <div className="mt-2">
          <span className="text-lg font-semibold text-white">
            {utilis?.consumption || "Distribution"}
          </span>

          <p className="mt-0.5 text-[11px] text-slate-500">
            Utility-wise energy breakdown
          </p>
        </div>
      </div>

      {/* Current Load */}
      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:col-span-2 lg:col-span-1">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-400">Current Load</span>

          <span className="rounded-md bg-blue-400/10 px-2 py-1 text-[10px] font-medium text-blue-300">
            {currentUnit}
          </span>
        </div>

        <div className="mt-2 flex items-end gap-2">
          <span className="text-2xl font-bold text-white">{currentLoad}</span>

          <span className="pb-1 text-xs text-slate-500">electrical load</span>
        </div>
      </div>
    </section>
  );
};

export default TopCard;
