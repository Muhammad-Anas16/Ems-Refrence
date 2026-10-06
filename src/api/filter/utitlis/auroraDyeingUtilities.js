import { DyeingDepartment } from "../auroraMetersData";

const AuroraDyeingUtilities = async (type = "Electricity") => {
  try {
    const data = await DyeingDepartment();

    const uniqueData = [
      ...new Set(data.map((item) => item?.utilityType).filter(Boolean)),
    ];

    const filter = data.filter((item) => item?.utilityType === type);

    return {
      typeName: type,
      dataType: uniqueData,
      data: filter,
      dataCount: filter.length,
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
