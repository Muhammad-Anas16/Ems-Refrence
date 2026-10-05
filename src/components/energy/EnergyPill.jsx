import React from "react";
import { Card } from "@/components/ui/card";

const EnergyPill = ({ item }) => {
  const Icon = item.icon;

  return (
    <Card
      className="
        w-full min-w-0 border bg-[#091321]/95 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b1728] cursor-pointer"
      style={{
        borderColor: `${item.color}88`,
      }}
    >
      <div className="flex items-center gap-3 px-3.5 py-3">
        {/* Icon */}
        <div
          className="grid size-11 shrink-0 place-items-center rounded-full border-2"
          style={{
            borderColor: item.color,
            backgroundColor: `${item.color}18`,
            boxShadow: `0 0 25px ${item.color}25`,
          }}
        >
          <Icon size={21} strokeWidth={2} style={{ color: item.color }} />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs text-slate-400 sm:text-sm">
            {item.name}
          </p>

          <div className="mt-0.5 flex items-baseline gap-1.5">
            <span className="text-base font-bold text-white sm:text-lg">
              {item.value}
            </span>

            <span className="text-[11px] text-slate-500 sm:text-xs">
              {item.unit}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EnergyPill;
