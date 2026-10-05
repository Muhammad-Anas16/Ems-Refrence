import React from "react";
import { consumptionData } from "../energy-data";

const UtilitiesData = () => {
  return (
    <div className="flex flex-col gap-2">
      {consumptionData.map((data, ind) => {
        return (
          <div
            key={ind}
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-center transition hover:bg-white/10"
          >
            <h1 className="text-sm font-medium capitalize text-white">
              {data?.type}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default UtilitiesData;