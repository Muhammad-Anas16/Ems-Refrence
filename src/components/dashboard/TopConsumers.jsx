import {
  Flame,
  Lightbulb,
  Monitor,
  Server,
  Snowflake,
  Zap,
} from "lucide-react";

import Panel from "./Panel";

import { topConsumers } from "../../data/dashboardData";

const iconMap = {
  snowflake: Snowflake,
  lightbulb: Lightbulb,
  monitor: Monitor,
  server: Server,
  flame: Flame,
};

const TopConsumers = () => {
  const maxValue = Math.max(...topConsumers.map((item) => item.consumption));

  return (
    <Panel className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap size={17} className="text-slate-400" />

          <h3 className="text-sm font-semibold text-slate-100">
            Top Consumers
          </h3>
        </div>

        <span className="rounded-lg border border-white/[0.06] bg-[#0d151d] px-2.5 py-1.5 text-[10px] text-slate-400">
          Today
        </span>
      </div>

      <div className="mt-3 flex items-center text-[9px] text-slate-600">
        <span className="w-5">#</span>

        <span className="flex-1">Location / Device</span>

        <span className="w-20 text-right">Consumption</span>
      </div>

      <div className="mt-2">
        {topConsumers.map((item) => {
          const Icon = iconMap[item.icon] || Monitor;

          const progress = (item.consumption / maxValue) * 100;

          return (
            <div
              key={item.id}
              className="border-b border-white/[0.04] py-3 last:border-b-0"
            >
              <div className="flex items-center gap-2">
                <span className="w-5 text-[10px] text-slate-500">
                  {item.rank}
                </span>

                <div
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                  style={{
                    color: item.color,
                    backgroundColor: `${item.color}15`,
                  }}
                >
                  <Icon size={14} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-[10px] font-medium text-slate-300">
                    {item.name}
                  </p>

                  <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-white/[0.04]">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${progress}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>

                <div className="w-[70px] text-right">
                  <p className="text-[10px] font-medium text-slate-300">
                    {item.consumption} {item.unit}
                  </p>

                  <p className="mt-0.5 text-[9px] text-slate-600">
                    {item.percentage}%
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Panel>
  );
};

export default TopConsumers;
