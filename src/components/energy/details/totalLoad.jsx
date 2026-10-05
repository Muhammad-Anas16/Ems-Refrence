import React from "react";

const TotalLoad = ({ value = 239, unit = "kW" }) => {
  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-5">
      <h2 className="text-sm font-medium capitalize text-slate-300">
        Total Load
      </h2>

      <div className="mt-4 flex items-end gap-2">
        <span className="text-4xl font-semibold text-white">
          {value}
        </span>

        <span className="mb-1 text-sm text-slate-400">
          {unit}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-green-400" />

        <span className="text-xs text-slate-400">
          Current load
        </span>
      </div>
    </div>
  );
};

export default TotalLoad;