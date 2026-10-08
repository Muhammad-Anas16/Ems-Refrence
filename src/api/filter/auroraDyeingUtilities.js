import { bacnetRead, getEnergyLog } from "@/api/api";
import EmsDataFile from "@/data/ems_config_40";

// 1. Get Dyeing meters from config
const getMetersData = (division) => {
  return EmsDataFile?.meters.filter((item) => item.division === division);
};

// 2. Get BACnet instances from Dyeing meters
const getBACnetInstances = (meters = []) => {
  return [
    ...new Set(
      meters
        .map((item) => Number(item?.instance))
        .filter((instance) => Number.isFinite(instance)),
    ),
  ];
};

// 3. Read data from BACnet
const getBACnetData = async (instances = []) => {
  try {
    const response = await bacnetRead(instances);

    const foundData = (response?.data || []).flatMap(
      (item) => item?.found || [],
    );

    return {
      success: true,
      data: foundData,
      matchedObjects: response?.matchedObjects || 0,
      requestedInstances: response?.requestedInstances || [],
    };
  } catch (error) {
    console.error("BACnet Error:", error);

    return {
      success: false,
      data: [],
      matchedObjects: 0,
      requestedInstances: [],
      message:
        error?.response?.data?.message ||
        error?.message ||
        "BACnet data read failed",
    };
  }
};

// 4. Calculate total BACnet value
const calculateTotalValue = (bacnetData = []) => {
  return bacnetData.reduce(
    (total, item) => total + Number(item?.value || 0),
    0,
  );
};

// 5. Group meters by utilities
const groupByUtilities = async (division) => {
  const result = await getEnergyLog();

  if (!result?.energylog) {
    return [];
  }

  const utilities = result.energylog.map((item) => item?.utilityType);
  // console.log(
  //   "utilities meters",
  //   result.energylog.filter((item) => item.utilityType === "Electricity"),
  // );
  return [...new Set(utilities.filter(Boolean))];
};

// 6. Group meters by department
const groupByDepartment = (meters = []) => {
  return meters.reduce((result, meter) => {
    const department = meter?.department || "Unknown";

    if (!result[department]) {
      result[department] = [];
    }

    result[department].push(meter);

    return result;
  }, {});
};

// 7. Main function
const AuroraUtilities = async (division = "Dyeing") => {
  try {
    const getMeters = getMetersData(division);

    // Get BACnet instances
    const instances = getBACnetInstances(getMeters);

    // Get live BACnet data
    const bacNetResult = await getBACnetData(instances);

    // Calculate total value
    const totalValue = calculateTotalValue(bacNetResult.data);

    // Group meters by department
    const department = groupByDepartment(getMeters);

    // Group meters by department
    const utilities = await groupByUtilities(division);

    return {
      division: division,
      utilities: { type: utilities, data: null },
      departments: { type: Object.keys(department), data: department },
      Data: getMeters,
      dataCount: getMeters.length,
      totalValue: {
        value: totalValue,
        totaObject: getMeters.length,
      },

      bacnetData: bacNetResult.data,
      success: bacNetResult.success,
    };
  } catch (error) {
    console.error("AuroraDyeingUtilities Error:", error);

    return {
      typeName: type,
      dataType: [],
      data: {},
      totalData: [],
      dataCount: 0,
      consumption: "Dyeing",
      instanceForTotalValue: [],
      totalValue: {
        value: 0,
        units: 0,
        totaObject: 0,
      },
      matchedObjects: 0,
      requestedInstances: 0,
      bacnetData: [],
      success: false,
    };
  }
};

export default AuroraUtilities;
