// // import React from "react";

// // import { Card, CardContent } from "@/components/ui/card";
// // import {
// //   Activity,
// //   PlugZap,
// //   TriangleAlert,
// //   TrendingUp,
// //   Signal,
// // } from "lucide-react";

// // const CardsComponent = () => {
// //   const cards = [
// //     {
// //       title: "Total Load",
// //       value: "12,400",
// //       unit: "kW",
// //       icon: PlugZap,
// //       iconColor: "text-yellow-400",
// //       iconBg: "bg-yellow-500/10",
// //       iconBorder: "border-yellow-500/20",
// //       badge: "Live",
// //       badgeColor: "text-emerald-400",
// //       description: "Current total power load",
// //     },
// //     {
// //       title: "Total Consumption",
// //       value: "78,420",
// //       unit: "kWh",
// //       icon: Activity,
// //       iconColor: "text-blue-400",
// //       iconBg: "bg-blue-500/10",
// //       iconBorder: "border-blue-500/20",
// //       badge: "Today",
// //       badgeColor: "text-blue-400",
// //       description: "Cumulative consumption today",
// //     },
// //     {
// //       title: "Active Meters",
// //       value: "6",
// //       unit: "/ 8",
// //       icon: Signal,
// //       iconColor: "text-emerald-400",
// //       iconBg: "bg-emerald-500/10",
// //       iconBorder: "border-emerald-500/20",
// //       badge: "75%",
// //       badgeColor: "text-emerald-400",
// //       description: "Meters currently online",
// //     },
// //     {
// //       title: "Energy Loss",
// //       value: "2.8",
// //       unit: "%",
// //       icon: TriangleAlert,
// //       iconColor: "text-red-400",
// //       iconBg: "bg-red-500/10",
// //       iconBorder: "border-red-500/20",
// //       badge: "Warning",
// //       badgeColor: "text-red-400",
// //       description: "Current system energy loss",
// //     },
// //   ];

// //   return (
// //     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
// //       {cards.map((card) => {
// //         const Icon = card.icon;

// //         return (
// //           <Card
// //             key={card.title}
// //             className="border-slate-800 bg-[#0b1424] text-white shadow-md transition-all duration-200 hover:border-slate-700 hover:shadow-lg"
// //           >
// //             <CardContent className="p-5">
// //               {/* Top */}
// //               <div className="flex items-start justify-between gap-3">
// //                 {/* Icon + Title */}
// //                 <div className="flex items-center gap-3">
// //                   <div
// //                     className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${card.iconBorder} ${card.iconBg} ${card.iconColor}`}
// //                   >
// //                     <Icon className="h-5 w-5" />
// //                   </div>

// //                   <div>
// //                     <p className="text-sm font-medium text-slate-400">
// //                       {card.title}
// //                     </p>
// //                   </div>
// //                 </div>

// //                 {/* Badge */}
// //                 <div
// //                   className={`flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-900/60 px-2.5 py-1.5 text-xs ${card.badgeColor}`}
// //                 >
// //                   {card.badge === "Live" && (
// //                     <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
// //                   )}

// //                   {card.badge === "Today" && (
// //                     <TrendingUp className="h-3.5 w-3.5" />
// //                   )}

// //                   {card.badge}
// //                 </div>
// //               </div>

// //               {/* Value */}
// //               <div className="mt-5 flex items-end gap-2">
// //                 <span className="text-3xl font-bold tracking-tight">
// //                   {card.value}
// //                 </span>

// //                 <span className="pb-1 text-sm text-slate-400">{card.unit}</span>
// //               </div>

// //               {/* Bottom */}
// //               <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4">
// //                 <span className="text-xs text-slate-500">
// //                   {card.description}
// //                 </span>

// //                 <span className={`text-xs font-medium ${card.badgeColor}`}>
// //                   {card.badge === "Live"
// //                     ? "Online"
// //                     : card.badge === "Warning"
// //                       ? "Check"
// //                       : card.badge}
// //                 </span>
// //               </div>
// //             </CardContent>
// //           </Card>
// //         );
// //       })}
// //     </div>
// //   );
// // };

// // export default CardsComponent;

// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Activity,
//   PlugZap,
//   TriangleAlert,
//   TrendingUp,
//   Signal,
// } from "lucide-react";
// const CardsComponent = ({ data }) => {
//   console.log("data in cards : ", data?.departments?.data);
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
//       {" "}
//       {cards.map((card) => {
//         const Icon = card.icon;
//         return (
//           <Card
//             key={card.title}
//             className="border-slate-800 bg-[#0a0f14] text-white shadow-md transition-all duration-200 hover:border-slate-700 hover:shadow-lg"
//           >
//             {" "}
//             <CardContent className="p-5">
//               {" "}
//               {/* Top */}{" "}
//               <div className="flex items-start justify-between gap-3">
//                 {" "}
//                 {/* Icon + Title */}{" "}
//                 <div className="flex items-center gap-3">
//                   {" "}
//                   <div
//                     className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${card.iconBorder} ${card.iconBg} ${card.iconColor}`}
//                   >
//                     {" "}
//                     <Icon className="h-5 w-5" />{" "}
//                   </div>{" "}
//                   <div>
//                     {" "}
//                     <p className="text-sm font-medium text-slate-400">
//                       {" "}
//                       {card.title}{" "}
//                     </p>{" "}
//                   </div>{" "}
//                 </div>{" "}
//                 {/* Badge */}{" "}
//                 <div
//                   className={`flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-900/60 px-2.5 py-1.5 text-xs ${card.badgeColor}`}
//                 >
//                   {" "}
//                   {card.badge === "Live" && (
//                     <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//                   )}{" "}
//                   {card.badge === "Today" && (
//                     <TrendingUp className="h-3.5 w-3.5" />
//                   )}{" "}
//                   {card.badge}{" "}
//                 </div>{" "}
//               </div>{" "}
//               {/* Value */}{" "}
//               <div className="mt-5 flex items-end gap-2">
//                 {" "}
//                 <span className="text-3xl font-bold tracking-tight">
//                   {" "}
//                   {card.value}{" "}
//                 </span>{" "}
//                 <span className="pb-1 text-sm text-slate-400">
//                   {" "}
//                   {card.unit}{" "}
//                 </span>{" "}
//               </div>{" "}
//               {/* Bottom */}{" "}
//               <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4">
//                 {" "}
//                 <span className="text-xs text-slate-500">
//                   {" "}
//                   {card.description}{" "}
//                 </span>{" "}
//                 <span className={`text-xs font-medium ${card.badgeColor}`}>
//                   {" "}
//                   {card.badge === "Live"
//                     ? "Online"
//                     : card.badge === "Warning"
//                       ? "Check"
//                       : card.badge}{" "}
//                 </span>{" "}
//               </div>{" "}
//             </CardContent>{" "}
//           </Card>
//         );
//       })}{" "}
//     </div>
//   );
// };
// export default CardsComponent;
import React, { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";

import {
  Activity,
  Building2,
  Gauge,
  Radio,
  TrendingUp,
  TriangleAlert,
  Zap,
  Database,
} from "lucide-react";

const CardsComponent = ({ data }) => {
  // --------------------------------
  // Department Data
  // --------------------------------

  const departmentData = useMemo(() => {
    const departments = data?.departments?.data;

    if (
      !departments ||
      typeof departments !== "object" ||
      Array.isArray(departments)
    ) {
      return {};
    }

    return departments;
  }, [data]);

  // --------------------------------
  // Flatten All Meters
  // --------------------------------

  const allMeters = useMemo(() => {
    return Object.entries(departmentData).flatMap(([department, meters]) => {
      if (!Array.isArray(meters)) {
        return [];
      }

      return meters.map((meter) => ({
        ...meter,
        _department: department,
      }));
    });
  }, [departmentData]);

  // --------------------------------
  // Totals
  // --------------------------------

  const totalMeters = allMeters.length;

  const totalDepartments = Object.keys(departmentData).length;

  // --------------------------------
  // Status Count
  // --------------------------------

  const activeMeters = useMemo(() => {
    return allMeters.filter((meter) => {
      const status = String(meter?.status || meter?.state || meter?.mode || "")
        .trim()
        .toLowerCase();

      return status === "running" || status === "on" || status === "active";
    }).length;
  }, [allMeters]);

  const configuredMeters = useMemo(() => {
    return allMeters.filter((meter) => {
      const mode = String(meter?.mode || "")
        .trim()
        .toLowerCase();

      return mode === "configured";
    }).length;
  }, [allMeters]);

  // --------------------------------
  // Generic Numeric Sum
  // --------------------------------

  const getTotalField = (fieldNames) => {
    let found = false;

    const total = allMeters.reduce((sum, meter) => {
      for (const field of fieldNames) {
        const value = meter?.[field];

        if (
          value !== null &&
          value !== undefined &&
          value !== "" &&
          Number.isFinite(Number(value))
        ) {
          found = true;

          return sum + Number(value);
        }
      }

      return sum;
    }, 0);

    return found ? total : null;
  };

  // --------------------------------
  // Actual API Values
  // --------------------------------

  const totalPower = useMemo(
    () => getTotalField(["power", "power_kw", "kw", "load"]),
    [allMeters],
  );

  const totalConsumption = useMemo(
    () => getTotalField(["consumption", "energy", "energy_consumption", "kwh"]),
    [allMeters],
  );

  const totalCurrent = useMemo(
    () => getTotalField(["current", "ampere", "amps", "a"]),
    [allMeters],
  );

  const totalParameter = useMemo(
    () => getTotalField(["parameter"]),
    [allMeters],
  );

  // --------------------------------
  // Formatter
  // --------------------------------

  const formatValue = (value, suffix = "") => {
    if (
      value === null ||
      value === undefined ||
      !Number.isFinite(Number(value))
    ) {
      return "—";
    }

    return `${Number(value).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    })}${suffix}`;
  };

  // --------------------------------
  // Card Configuration
  // --------------------------------

  const cards = [
    {
      title: "Total Meters",
      value: formatValue(totalMeters),
      unit: "Meters",
      icon: Gauge,
      iconColor: "text-cyan-400",
      iconBg: "bg-cyan-500/10",
      iconBorder: "border-cyan-500/20",
      glow: "bg-cyan-500/[0.05]",
      badge: "System",
      badgeColor: "text-cyan-300",
      description: "Total meters registered in EMS",
      footer: `${totalDepartments} Departments`,
    },

    {
      title: "Total Load",
      value: formatValue(totalPower),
      unit: totalPower !== null ? "kW" : "",
      icon: Zap,
      iconColor: "text-yellow-400",
      iconBg: "bg-yellow-500/10",
      iconBorder: "border-yellow-500/20",
      glow: "bg-yellow-500/[0.05]",
      badge: totalPower !== null ? "Live" : "N/A",
      badgeColor: totalPower !== null ? "text-emerald-400" : "text-slate-500",
      description: "Current combined electrical load",
      footer:
        totalCurrent !== null
          ? `${formatValue(totalCurrent)} A`
          : "Load data unavailable",
    },

    {
      title: "Total Consumption",
      value: formatValue(totalConsumption),
      unit: totalConsumption !== null ? "kWh" : "",
      icon: Activity,
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/10",
      iconBorder: "border-blue-500/20",
      glow: "bg-blue-500/[0.05]",
      badge: totalConsumption !== null ? "Available" : "N/A",
      badgeColor:
        totalConsumption !== null ? "text-blue-400" : "text-slate-500",
      description: "Combined energy consumption",
      footer:
        totalConsumption !== null
          ? "Live meter data"
          : "Consumption data unavailable",
    },

    {
      title: "Meter Status",
      value: activeMeters,
      unit: `/ ${totalMeters}`,
      icon: Radio,
      iconColor: "text-emerald-400",
      iconBg: "bg-emerald-500/10",
      iconBorder: "border-emerald-500/20",
      glow: "bg-emerald-500/[0.05]",
      badge:
        totalMeters > 0
          ? `${Math.round((activeMeters / totalMeters) * 100)}%`
          : "0%",
      badgeColor: "text-emerald-400",
      description: "Meters currently active",
      footer:
        configuredMeters > 0
          ? `${configuredMeters} configured`
          : "Status monitoring",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Card
            key={card.title}
            className="
              group
              relative
              min-w-0
              overflow-hidden
              rounded-2xl
              border-white/[0.07]
              bg-[#090F15]/80
              text-white
              shadow-none
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-[1px]
              hover:border-white/[0.12]
              hover:bg-[#0A1118]
              hover:shadow-[0_12px_35px_rgba(0,0,0,0.2)]
            "
          >
            {/* Background Glow */}
            <div
              className={`
                pointer-events-none
                absolute
                -right-10
                -top-10
                h-28
                w-28
                rounded-full
                ${card.glow}
                blur-3xl
                transition-all
                duration-500
                group-hover:opacity-90
              `}
            />

            <CardContent className="relative z-10 p-4 sm:p-5">
              {/* Top */}
              <div className="flex items-start justify-between gap-3">
                {/* Icon + Title */}
                <div className="flex min-w-0 items-center gap-3">
                  <div
                    className={`
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      ${card.iconBorder}
                      ${card.iconBg}
                      ${card.iconColor}
                    `}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500">
                      {card.title}
                    </p>

                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="truncate text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        {card.value}
                      </span>

                      {card.unit && (
                        <span className="shrink-0 text-[11px] text-slate-500">
                          {card.unit}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <div
                  className={`
                    flex
                    shrink-0
                    items-center
                    gap-1.5
                    rounded-lg
                    border
                    border-white/[0.06]
                    bg-white/[0.025]
                    px-2
                    py-1.5
                    text-[9px]
                    font-medium
                    ${card.badgeColor}
                  `}
                >
                  {card.badge === "Live" && (
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                  )}

                  {card.badge === "Available" && (
                    <TrendingUp className="h-3 w-3" strokeWidth={1.8} />
                  )}

                  {card.badge === "N/A" && (
                    <TriangleAlert className="h-3 w-3" strokeWidth={1.8} />
                  )}

                  <span>{card.badge}</span>
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-5 flex min-w-0 items-center justify-between gap-3 border-t border-white/[0.05] pt-3">
                <div className="flex min-w-0 items-center gap-2">
                  <Database
                    size={12}
                    strokeWidth={1.7}
                    className="shrink-0 text-slate-600"
                  />

                  <span
                    className="truncate text-[10px] text-slate-600"
                    title={card.description}
                  >
                    {card.description}
                  </span>
                </div>

                <span
                  className={`shrink-0 text-[10px] font-medium ${card.badgeColor}`}
                >
                  {card.footer}
                </span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default CardsComponent;
