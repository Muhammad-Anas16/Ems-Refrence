// import { bacnetRead, getEnergyLog } from "@/api/api";
// import EmsDataFile from "@/data/ems_config_40";

// // 1. Get Dyeing meters from config
// const getMetersData = (division) => {
//   return EmsDataFile?.meters.filter((item) => item.division === division);
// };

// // 2. Get BACnet instances from Dyeing meters
// const getBACnetInstances = (meters = []) => {
//   return [
//     ...new Set(
//       meters
//         .map((item) => Number(item?.instance))
//         .filter((instance) => Number.isFinite(instance)),
//     ),
//   ];
// };

// // 3. Read data from BACnet
// const getBACnetData = async (instances = []) => {
//   try {
//     const response = await bacnetRead(instances);

//     const foundData = (response?.data || []).flatMap(
//       (item) => item?.found || [],
//     );

//     return {
//       success: true,
//       data: foundData,
//       matchedObjects: response?.matchedObjects || 0,
//       requestedInstances: response?.requestedInstances || [],
//     };
//   } catch (error) {
//     console.error("BACnet Error:", error);

//     return {
//       success: false,
//       data: [],
//       matchedObjects: 0,
//       requestedInstances: [],
//       message:
//         error?.response?.data?.message ||
//         error?.message ||
//         "BACnet data read failed",
//     };
//   }
// };

// // 4. Calculate total BACnet value
// const calculateTotalValue = (bacnetData = []) => {
//   return bacnetData.reduce(
//     (total, item) => total + Number(item?.value || 0),
//     0,
//   );
// };

// // 5. Group meters by utilities
// const groupByUtilities = async (division) => {
//   const result = await getEnergyLog();

//   if (!result?.energylog) {
//     return [];
//   }

//   const utilities = result.energylog.map((item) => item?.utilityType);
//   // console.log(
//   //   "utilities meters",
//   //   result.energylog.filter((item) => item.utilityType === "Electricity"),
//   // );
//   return [...new Set(utilities.filter(Boolean))];
// };

// // 6. Group meters by department
// const groupByDepartment = (meters = []) => {
//   return meters.reduce((result, meter) => {
//     const department = meter?.department || "Unknown";

//     if (!result[department]) {
//       result[department] = [];
//     }

//     result[department].push(meter);

//     return result;
//   }, {});
// };

// // 7. Main function
// const AuroraUtilities = async (division = "Dyeing") => {
//   try {
//     const getMeters = getMetersData(division);

//     // Get BACnet instances
//     const instances = getBACnetInstances(getMeters);

//     // Get live BACnet data
//     const bacNetResult = await getBACnetData(instances);

//     // Calculate total value
//     const totalValue = calculateTotalValue(bacNetResult.data);

//     // Group meters by department
//     const department = groupByDepartment(getMeters);

//     // Group meters by department
//     const utilities = await groupByUtilities(division);

//     return {
//       division: division,
//       utilities: { type: utilities, data: null },
//       departments: { type: Object.keys(department), data: department },
//       Data: getMeters,
//       dataCount: getMeters.length,
//       totalValue: {
//         value: totalValue,
//         totaObject: getMeters.length,
//       },

//       bacnetData: bacNetResult.data,
//       success: bacNetResult.success,
//     };
//   } catch (error) {
//     console.error("AuroraDyeingUtilities Error:", error);

//     return {
//       typeName: type,
//       dataType: [],
//       data: {},
//       totalData: [],
//       dataCount: 0,
//       consumption: "Dyeing",
//       instanceForTotalValue: [],
//       totalValue: {
//         value: 0,
//         units: 0,
//         totaObject: 0,
//       },
//       matchedObjects: 0,
//       requestedInstances: 0,
//       bacnetData: [],
//       success: false,
//     };
//   }
// };

// export default AuroraUtilities;

import { bacnetRead, getEnergyLog } from "@/api/api";
import EmsDataFile from "@/data/ems_config_40";

/* =========================================================
   1. Get meters from EMS configuration
========================================================= */

const getMetersData = (division) => {
  return (EmsDataFile?.meters || []).filter(
    (item) => item?.division === division,
  );
};

/* =========================================================
   2. Get BACnet instances
========================================================= */

const getBACnetInstances = (meters = []) => {
  return [
    ...new Set(
      meters
        .map((item) => Number(item?.instance))
        .filter((instance) => Number.isFinite(instance)),
    ),
  ];
};

/* =========================================================
   3. Normalize BACnet instance
   Handles different possible response structures
========================================================= */

const getBACnetInstance = (item) => {
  const possibleInstances = [
    item?.instance,
    item?.instanceNumber,
    item?.objectInstance,
    item?.object_instance,
    item?.requestedInstance,
    item?.requested_instance,
    item?.object?.instance,
    item?.object?.objectInstance,
  ];

  for (const value of possibleInstances) {
    const number = Number(value);

    if (Number.isFinite(number)) {
      return number;
    }
  }

  return null;
};

/* =========================================================
   4. Normalize BACnet value
========================================================= */

const getBACnetValue = (item) => {
  const possibleValues = [
    item?.value,
    item?.presentValue,
    item?.present_value,
    item?.currentValue,
    item?.current_value,
  ];

  for (const value of possibleValues) {
    if (
      value !== null &&
      value !== undefined &&
      value !== "" &&
      Number.isFinite(Number(value))
    ) {
      return Number(value);
    }
  }

  return null;
};

/* =========================================================
   5. Read BACnet data

   IMPORTANT:
   Parent instance is preserved while flattening found[]
========================================================= */

const getBACnetData = async (instances = []) => {
  try {
    const response = await bacnetRead(instances);

    const foundData = (response?.data || []).flatMap((item) => {
      const parentInstance = getBACnetInstance(item);

      return (item?.found || []).map((found) => {
        const foundInstance = getBACnetInstance(found);

        return {
          ...found,

          // Keep the correct instance
          instance: foundInstance !== null ? foundInstance : parentInstance,

          // Always expose a normalized live value
          value: getBACnetValue(found),
        };
      });
    });

    return {
      success: true,
      data: foundData,
      matchedObjects: response?.matchedObjects || 0,
      requestedInstances: response?.requestedInstances || instances || [],
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

/* =========================================================
   6. Find BACnet live data for a meter
========================================================= */

const findBACnetValueForMeter = (meter, bacnetData = []) => {
  const meterInstance = Number(meter?.instance);

  if (!Number.isFinite(meterInstance)) {
    return null;
  }

  /*
    First try exact instance match.
  */
  const matches = bacnetData.filter((item) => {
    const bacnetInstance = Number(getBACnetInstance(item));

    return Number.isFinite(bacnetInstance) && bacnetInstance === meterInstance;
  });

  if (matches.length === 0) {
    return null;
  }

  /*
    If configuration contains a parameter,
    prefer a BACnet result with the same parameter.
  */
  const meterParameter = meter?.parameter;

  if (
    meterParameter !== undefined &&
    meterParameter !== null &&
    meterParameter !== ""
  ) {
    const parameterMatch = matches.find((item) => {
      return (
        item?.parameter === meterParameter ||
        item?.parameterId === meterParameter ||
        item?.property === meterParameter ||
        item?.propertyId === meterParameter
      );
    });

    if (parameterMatch) {
      return getBACnetValue(parameterMatch);
    }
  }

  /*
    Otherwise use the first matching BACnet value.
  */
  return getBACnetValue(matches[0]);
};

/* =========================================================
   7. Merge configuration + live BACnet data
========================================================= */

const mergeMeterData = (meters = [], bacnetData = []) => {
  return meters.map((meter) => {
    const liveValue = findBACnetValueForMeter(meter, bacnetData);

    return {
      ...meter,

      /*
        Keep original configuration fields untouched
        and simply add live fields.
      */

      value: liveValue,
      liveValue: liveValue,

      /*
        Useful aliases for components.
        Existing code remains compatible.
      */

      currentValue: liveValue,
      bacnetValue: liveValue,

      /*
        Explicit flag
      */

      hasLiveValue: liveValue !== null,
    };
  });
};

/* =========================================================
   8. Calculate total live value
========================================================= */

const calculateTotalValue = (meters = []) => {
  return meters.reduce((total, meter) => {
    const value = Number(meter?.value);

    if (!Number.isFinite(value)) {
      return total;
    }

    return total + value;
  }, 0);
};

/* =========================================================
   9. Group meters by utilities
========================================================= */

const groupByUtilities = async () => {
  try {
    const result = await getEnergyLog();

    if (!Array.isArray(result?.energylog)) {
      return [];
    }

    const utilities = result.energylog
      .map((item) => item?.utilityType)
      .filter(Boolean);

    return [...new Set(utilities)];
  } catch (error) {
    console.error("Utilities Group Error:", error);

    return [];
  }
};

/* =========================================================
   10. Group meters by department
========================================================= */

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

/* =========================================================
   11. Main function
========================================================= */

const AuroraUtilities = async (division = "Dyeing") => {
  try {
    /* ---------------------------------------------
       Configuration meters
    --------------------------------------------- */

    const meters = getMetersData(division);

    /* ---------------------------------------------
       BACnet instances
    --------------------------------------------- */

    const instances = getBACnetInstances(meters);

    /* ---------------------------------------------
       Live BACnet data
    --------------------------------------------- */

    const bacNetResult = await getBACnetData(instances);

    /* ---------------------------------------------
       Merge live values into meters
    --------------------------------------------- */

    const liveMeters = mergeMeterData(meters, bacNetResult.data);

    /* ---------------------------------------------
       Total live value
    --------------------------------------------- */

    const totalValue = calculateTotalValue(liveMeters);

    /* ---------------------------------------------
       Departments
    --------------------------------------------- */

    const departmentData = groupByDepartment(liveMeters);

    /* ---------------------------------------------
       Utilities
    --------------------------------------------- */

    const utilities = await groupByUtilities();

    /* ---------------------------------------------
       Final response
    --------------------------------------------- */

    return {
      division,

      utilities: {
        type: utilities,
        data: null,
      },

      departments: {
        type: Object.keys(departmentData),
        data: departmentData,
      },

      /*
        IMPORTANT:
        Data now contains config + live BACnet value.
      */

      Data: liveMeters,

      dataCount: liveMeters.length,

      /*
        Existing structure preserved
      */

      totalValue: {
        value: totalValue,
        totaObject: liveMeters.length,
      },

      /*
        Extra useful totals
        Existing components don't need to use these.
      */

      totalLoad: totalValue,

      /*
        Since currently your BACnet response exposes
        one main numeric value, keep the same source here.
        Later, when a separate consumption parameter exists,
        this can be separated without restructuring the API.
      */

      totalConsumption: totalValue,

      /*
        Raw + normalized BACnet data
      */

      bacnetData: bacNetResult.data,

      success: bacNetResult.success,

      /*
        Useful debugging information
      */

      matchedObjects: bacNetResult.matchedObjects,

      requestedInstances: bacNetResult.requestedInstances,
    };
  } catch (error) {
    console.error("AuroraUtilities Error:", error);

    return {
      division,

      utilities: {
        type: [],
        data: null,
      },

      departments: {
        type: [],
        data: {},
      },

      Data: [],

      dataCount: 0,

      totalValue: {
        value: 0,
        totaObject: 0,
      },

      totalLoad: 0,

      totalConsumption: 0,

      bacnetData: [],

      matchedObjects: 0,

      requestedInstances: [],

      success: false,

      message:
        error?.response?.data?.message ||
        error?.message ||
        "Aurora utilities data failed",
    };
  }
};

export default AuroraUtilities;
