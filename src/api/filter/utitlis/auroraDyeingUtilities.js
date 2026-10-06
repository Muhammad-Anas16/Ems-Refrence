import { bacnetRead } from "@/api/api";
import { DyeingDepartment } from "../auroraMetersData";

export const getBACnetInstances = (dyeingData = []) => {
  return [
    ...new Set(
      dyeingData
        .map((item) => {
          const instance = Number(item?.instance);

          if (!Number.isFinite(instance)) {
            return null;
          }

          return instance - (instance % 100) + 40;
        })
        .filter((instance) => instance !== null),
    ),
  ];
};

export const getBACnetTotal = async (dataInstance) => {
  try {
    const getDataFromInstance = dataInstance.map((item) => item);

    const { data, matchedObjects, requestedInstances } =
      await bacnetRead(getDataFromInstance);

    const getTotalData = data.flatMap((item) => item?.found || []);

    const values = getTotalData.map((item) => item.value);
    const units = getTotalData.map((item) => item.units);

    const objectTypeNames = getTotalData.map((item) => item.objectTypeName);

    const objTypeNameFilter = [...new Set(objectTypeNames.filter(Boolean))];

    const totalValue = values.reduce(
      (total, value) => total + Number(value || 0),
      0,
    );

    const totalUnits = units.reduce(
      (total, value) => total + Number(value || 0),
      0,
    );

    return {
      totalValue,
      totalUnits,
      values,
      units,
      objectTypeNames: objTypeNameFilter,
      matchedObjects,
      requestedInstances,
      data: getTotalData,
    };
  } catch (error) {
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        error?.message ||
        "BACnet data read failed",
    };
  }
};

export const filterByUtilityTypes = (dyeingData = [], utilityTypes = []) => {
  return utilityTypes.reduce((result, type) => {
    result[type] = dyeingData.filter((item) => item?.utilityType === type);

    return result;
  }, {});
};

const AuroraDyeingUtilities = async (type = "Electricity") => {
  try {
    const dyeingData = await DyeingDepartment();

    // console.log(dyeingData);

    const uniqueData = [
      ...new Set(dyeingData.map((item) => item?.utilityType).filter(Boolean)),
    ];

    const dataInstance = getBACnetInstances(dyeingData);

    // console.log("BACnet Instances:", dataInstance);

    const result = await getBACnetTotal(dataInstance);
    // console.log("result", result);

    const filter = filterByUtilityTypes(dyeingData, uniqueData);

    // console.log(filter);

    return {
      typeName: type,
      dataType: uniqueData,
      data: filter,
      totalData: dyeingData,
      dataCount: filter.length,
      consumption: "Dyeing",
      instanceForTotalValue: dataInstance,
      totalValue: {
        value: result.totalValue || 0,
        units: result.totalUnits || 0,
        totaObject: dyeingData.length || 0,
      },
      matchedObjects: result.matchedObjects || 0,
      requestedInstances: result.requestedInstances.length || 0,
    };
  } catch (error) {
    console.error("AuroraDyeingUtilities Error:", error);

    return {
      typeName: type,
      dataType: [],
      data: [],
      dataCount: 0,
    };
  }
};

export default AuroraDyeingUtilities;
