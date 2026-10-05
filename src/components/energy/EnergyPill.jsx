// import React from "react";
// import { Card } from "@/components/ui/card";

// const EnergyPill = ({ item }) => {
//   const Icon = item.icon;

//   return (
//     <Card
//       className="border bg-[#091321]/95 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b1728] cursor-pointer rounded-full px-4"
//       style={{
//         borderColor: `${item.color}88`,
//       }}
//     >
//       <div className="flex items-center gap-3">
//         {/* Icon */}
//         <div
//           className="grid size-11 shrink-0 place-items-center rounded-full border-2 "
//           style={{
//             borderColor: item.color,
//             backgroundColor: `${item.color}18`,
//             boxShadow: `0 0 25px ${item.color}25`,
//           }}
//         >
//           <Icon size={21} strokeWidth={2} style={{ color: item.color }} />
//         </div>

//         {/* Content */}
//         <div className="min-w-0 flex-1">
//           <p className="truncate text-xs text-slate-400 sm:text-sm">
//             {item.name}
//           </p>

//           <div className="mt-0.5 flex items-baseline gap-1.5">
//             <span className="text-base font-bold text-white sm:text-lg">
//               {item.value}
//             </span>

//             <span className="text-[11px] text-slate-500 sm:text-xs">
//               {item.unit}
//             </span>
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// };

// export default EnergyPill;


import React from "react";
import { Card } from "@/components/ui/card";

const EnergyPill = ({ item }) => {
  const Icon = item.icon;

  return (
    <Card
      className="
        w-full max-w-[180px]
        cursor-pointer
        rounded-full
        border
        bg-[#091321]/95
        px-2 py-1.5
        backdrop-blur-xl
        transition-all duration-300
        hover:-translate-y-0.5
        hover:bg-[#0b1728]
      "
      style={{
        borderColor: `${item.color}66`,
        boxShadow: `0 5px 18px ${item.color}10`,
      }}
    >
      <div className="flex items-center gap-2">
        <div
          className="grid size-8 shrink-0 place-items-center rounded-full border"
          style={{
            borderColor: `${item.color}cc`,
            backgroundColor: `${item.color}14`,
            boxShadow: `0 0 12px ${item.color}22`,
          }}
        >
          <Icon
            size={14}
            strokeWidth={2}
            style={{ color: item.color }}
          />
        </div>

        <div className="min-w-0 leading-none">
          <p className="truncate text-[10px] font-medium text-slate-400">
            {item.name}
          </p>

          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-sm font-semibold text-white">
              {item.value}
            </span>

            <span className="text-[9px] text-slate-500">
              {item.unit}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EnergyPill;