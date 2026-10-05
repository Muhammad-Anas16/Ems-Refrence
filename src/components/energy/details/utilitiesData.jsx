import React from "react";
import { consumptionData } from "../energy-data";

const UtilitiesData = () => {
  return (
    <div className="flex flex-col gap-2">
      {consumptionData.map((data, ind) => {
        return (
          <div
            key={ind}
            className="border-2 rounded-2xl text-lg capitalize text-center px-3.5 py-2 bg-white/10"
          >
            <h1>{data?.type}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default UtilitiesData;
