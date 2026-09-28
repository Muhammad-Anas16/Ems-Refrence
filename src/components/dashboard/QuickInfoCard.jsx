import { Activity, ChevronRight } from "lucide-react";

import Panel from "./Panel";

const locations = [
  {
    name: "dyeing",
    value: "1,024 kW",
    color: "bg-emerald-400",
  },
  {
    name: "Weaving ",
    value: "842 kW",
    color: "bg-cyan-400",
  },
  {
    name: "Apparel",
    value: "676 kW",
    color: "bg-violet-400",
  },
  {
    name: "KGL",
    value: "512 kW",
    color: "bg-amber-400",
  },
];

const QuickInfoCard = () => {
  return (
    <Panel className="overflow-hidden">
      <div className="flex items-center gap-2 px-4 pt-4">
        <Activity size={17} className="text-slate-400" />

        <h3 className="text-sm font-semibold text-slate-100">Division Info</h3>
      </div>

      <div className="mt-2">
        {locations.map((item, index) => (
          <div
            key={item.name}
            className={`flex items-center gap-3 px-4 py-3 ${
              index !== locations.length - 1
                ? "border-b border-white/[0.05]"
                : ""
            }`}
          >
            <span
              className={`h-2.5 w-2.5 shrink-0 rounded-full ${item.color}`}
            />

            <span className="min-w-0 flex-1 truncate text-xs text-slate-400 capitalize">
              {item.name}
            </span>

            <span className="text-xs font-medium text-slate-200">
              {item.value}
            </span>

            <ChevronRight size={14} className="text-slate-600" />
          </div>
        ))}
      </div>
    </Panel>
  );
};

export default QuickInfoCard;
