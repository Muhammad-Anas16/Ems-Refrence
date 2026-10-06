import { getEnergyLog } from "../api";

export const DyeingDepartment = async () => {
  try {
    const result = await getEnergyLog();

    if (!result) return [];

    return (
      result?.energylog?.filter((data) =>
        data.description?.includes("Dyeing"),
      ) || []
    );
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

export const WeavingDepartment = async () => {
  try {
    const result = await getEnergyLog();

    if (!result) return [];

    return (
      result?.energylog?.filter((data) =>
        data.description?.includes("Weaving"),
      ) || []
    );
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

export const ApparelDepartment = async () => {
  try {
    const result = await getEnergyLog();

    if (!result) return [];

    return (
      result?.energylog?.filter((data) =>
        data.description?.includes("Apparel"),
      ) || []
    );
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

export const KglDepartment = async () => {
  try {
    const result = await getEnergyLog();

    if (!result) return [];

    return (
      result?.energylog?.filter(
        (data) =>
          !data.description?.includes("Apparel") &&
          !data.description?.includes("Weaving") &&
          !data.description?.includes("Dyeing"),
      ) || []
    );
  } catch (error) {
    console.log(error.message);
    return [];
  }
};
