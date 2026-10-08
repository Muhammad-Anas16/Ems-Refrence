import { useQuery } from "@tanstack/react-query";
import AuroraUtilities from "@/api/filter/auroraDyeingUtilities";

export const useAuroraDyeingUtilities = (division = "Dyeing") => {
  return useQuery({
    queryKey: ["auroraUtilities", division],
    queryFn: () => AuroraUtilities(division),

    // BACnet live data ke liye
    refetchInterval: 30 * 1000,

    // component mount par query automatically chalegi
    enabled: Boolean(division),
  });
};
