import { Droplets, Wind, Flame, Zap, Waves } from "lucide-react";

export const energyData = [
  {
    name: "Water",
    value: "2,845",
    unit: "m³",
    percentage: 25,
    color: "#1683ff",
    icon: Droplets,
    position: "left-[4%] top-[13%]",
  },
  {
    name: "Air",
    value: "12,450",
    unit: "m³",
    percentage: 25,
    color: "#f5b800",
    icon: Wind,
    position: "right-[4%] top-[13%]",
  },
  {
    name: "Gas",
    value: "4,680",
    unit: "tons",
    percentage: 20,
    color: "#ff6817",
    icon: Flame,
    position: "right-[1%] top-[53%]",
  },
  {
    name: "Steam",
    value: "6,720",
    unit: "ton",
    percentage: 20,
    color: "#19d995",
    icon: Waves,
    position: "left-[1%] top-[53%]",
  },
  {
    name: "Electrical",
    value: "362",
    unit: "kW",
    percentage: 10,
    color: "#8ea4c2",
    icon: Zap,
    position: "bottom-0 left-1/2 -translate-x-1/2",
  },
];
