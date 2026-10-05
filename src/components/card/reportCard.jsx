import React from "react";
import { Activity, Zap } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ReportCard = ({
  title = "Dyeing Load",
  power = 8091,
  consumption = 0,
  status = "running",
}) => {
  const isRunning = status === "running";

  return (
    <Card className="h-full overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="text-base font-semibold">{title}</CardTitle>

          <div className="flex items-center gap-2">
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                isRunning ? "bg-emerald-500" : "bg-red-500"
              }`}
            />

            <span
              className={`text-xs font-medium ${
                isRunning ? "text-emerald-600" : "text-red-600"
              }`}
            >
              {isRunning ? "Running" : "Stopped"}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold tracking-tight">
                {Number(power).toLocaleString()}
              </span>

              <span className="mb-1 text-sm text-muted-foreground">kW</span>
            </div>

            <div className="mt-1 text-xs text-muted-foreground">
              Current power load
            </div>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
            <Zap className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-t pt-4">
          <div>
            <div className="text-xs text-muted-foreground">
              Consumption 12 AM to now
            </div>

            <div className="mt-1 text-lg font-semibold">
              {Number(consumption).toLocaleString(undefined, {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
              })}{" "}
              <span className="text-sm font-normal text-muted-foreground">
                kWh
              </span>
            </div>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
            <Activity className="h-4 w-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportCard;
