// import React from "react";

// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Activity,
//   PlugZap,
//   TriangleAlert,
//   TrendingUp,
//   Signal,
// } from "lucide-react";

// const CardsComponent = () => {
//   const cards = [
//     {
//       title: "Total Load",
//       value: "12,400",
//       unit: "kW",
//       icon: PlugZap,
//       iconColor: "text-yellow-400",
//       iconBg: "bg-yellow-500/10",
//       iconBorder: "border-yellow-500/20",
//       badge: "Live",
//       badgeColor: "text-emerald-400",
//       description: "Current total power load",
//     },
//     {
//       title: "Total Consumption",
//       value: "78,420",
//       unit: "kWh",
//       icon: Activity,
//       iconColor: "text-blue-400",
//       iconBg: "bg-blue-500/10",
//       iconBorder: "border-blue-500/20",
//       badge: "Today",
//       badgeColor: "text-blue-400",
//       description: "Cumulative consumption today",
//     },
//     {
//       title: "Active Meters",
//       value: "6",
//       unit: "/ 8",
//       icon: Signal,
//       iconColor: "text-emerald-400",
//       iconBg: "bg-emerald-500/10",
//       iconBorder: "border-emerald-500/20",
//       badge: "75%",
//       badgeColor: "text-emerald-400",
//       description: "Meters currently online",
//     },
//     {
//       title: "Energy Loss",
//       value: "2.8",
//       unit: "%",
//       icon: TriangleAlert,
//       iconColor: "text-red-400",
//       iconBg: "bg-red-500/10",
//       iconBorder: "border-red-500/20",
//       badge: "Warning",
//       badgeColor: "text-red-400",
//       description: "Current system energy loss",
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//       {cards.map((card) => {
//         const Icon = card.icon;

//         return (
//           <Card
//             key={card.title}
//             className="border-slate-800 bg-[#0b1424] text-white shadow-md transition-all duration-200 hover:border-slate-700 hover:shadow-lg"
//           >
//             <CardContent className="p-5">
//               {/* Top */}
//               <div className="flex items-start justify-between gap-3">
//                 {/* Icon + Title */}
//                 <div className="flex items-center gap-3">
//                   <div
//                     className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${card.iconBorder} ${card.iconBg} ${card.iconColor}`}
//                   >
//                     <Icon className="h-5 w-5" />
//                   </div>

//                   <div>
//                     <p className="text-sm font-medium text-slate-400">
//                       {card.title}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Badge */}
//                 <div
//                   className={`flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-900/60 px-2.5 py-1.5 text-xs ${card.badgeColor}`}
//                 >
//                   {card.badge === "Live" && (
//                     <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//                   )}

//                   {card.badge === "Today" && (
//                     <TrendingUp className="h-3.5 w-3.5" />
//                   )}

//                   {card.badge}
//                 </div>
//               </div>

//               {/* Value */}
//               <div className="mt-5 flex items-end gap-2">
//                 <span className="text-3xl font-bold tracking-tight">
//                   {card.value}
//                 </span>

//                 <span className="pb-1 text-sm text-slate-400">{card.unit}</span>
//               </div>

//               {/* Bottom */}
//               <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4">
//                 <span className="text-xs text-slate-500">
//                   {card.description}
//                 </span>

//                 <span className={`text-xs font-medium ${card.badgeColor}`}>
//                   {card.badge === "Live"
//                     ? "Online"
//                     : card.badge === "Warning"
//                       ? "Check"
//                       : card.badge}
//                 </span>
//               </div>
//             </CardContent>
//           </Card>
//         );
//       })}
//     </div>
//   );
// };

// export default CardsComponent;

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Activity,
  PlugZap,
  TriangleAlert,
  TrendingUp,
  Signal,
} from "lucide-react";
const CardsComponent = () => {
  const cards = [
    {
      title: "Total Load",
      value: "12,400",
      unit: "kW",
      icon: PlugZap,
      iconColor: "text-yellow-400",
      iconBg: "bg-yellow-500/10",
      iconBorder: "border-yellow-500/20",
      badge: "Live",
      badgeColor: "text-emerald-400",
      description: "Current total power load",
    },
    {
      title: "Total Consumption",
      value: "78,420",
      unit: "kWh",
      icon: Activity,
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/10",
      iconBorder: "border-blue-500/20",
      badge: "Today",
      badgeColor: "text-blue-400",
      description: "Cumulative consumption today",
    },
    {
      title: "Active Meters",
      value: "6",
      unit: "/ 8",
      icon: Signal,
      iconColor: "text-emerald-400",
      iconBg: "bg-emerald-500/10",
      iconBorder: "border-emerald-500/20",
      badge: "75%",
      badgeColor: "text-emerald-400",
      description: "Meters currently online",
    },
    {
      title: "Energy Loss",
      value: "2.8",
      unit: "%",
      icon: TriangleAlert,
      iconColor: "text-red-400",
      iconBg: "bg-red-500/10",
      iconBorder: "border-red-500/20",
      badge: "Warning",
      badgeColor: "text-red-400",
      description: "Current system energy loss",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {" "}
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <Card
            key={card.title}
            className="border-slate-800 bg-[#0a0f14] text-white shadow-md transition-all duration-200 hover:border-slate-700 hover:shadow-lg"
          >
            {" "}
            <CardContent className="p-5">
              {" "}
              {/* Top */}{" "}
              <div className="flex items-start justify-between gap-3">
                {" "}
                {/* Icon + Title */}{" "}
                <div className="flex items-center gap-3">
                  {" "}
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${card.iconBorder} ${card.iconBg} ${card.iconColor}`}
                  >
                    {" "}
                    <Icon className="h-5 w-5" />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <p className="text-sm font-medium text-slate-400">
                      {" "}
                      {card.title}{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                {/* Badge */}{" "}
                <div
                  className={`flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-900/60 px-2.5 py-1.5 text-xs ${card.badgeColor}`}
                >
                  {" "}
                  {card.badge === "Live" && (
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  )}{" "}
                  {card.badge === "Today" && (
                    <TrendingUp className="h-3.5 w-3.5" />
                  )}{" "}
                  {card.badge}{" "}
                </div>{" "}
              </div>{" "}
              {/* Value */}{" "}
              <div className="mt-5 flex items-end gap-2">
                {" "}
                <span className="text-3xl font-bold tracking-tight">
                  {" "}
                  {card.value}{" "}
                </span>{" "}
                <span className="pb-1 text-sm text-slate-400">
                  {" "}
                  {card.unit}{" "}
                </span>{" "}
              </div>{" "}
              {/* Bottom */}{" "}
              <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4">
                {" "}
                <span className="text-xs text-slate-500">
                  {" "}
                  {card.description}{" "}
                </span>{" "}
                <span className={`text-xs font-medium ${card.badgeColor}`}>
                  {" "}
                  {card.badge === "Live"
                    ? "Online"
                    : card.badge === "Warning"
                      ? "Check"
                      : card.badge}{" "}
                </span>{" "}
              </div>{" "}
            </CardContent>{" "}
          </Card>
        );
      })}{" "}
    </div>
  );
};
export default CardsComponent;
