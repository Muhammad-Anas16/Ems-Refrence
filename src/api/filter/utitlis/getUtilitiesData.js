const getUtilitiesData = async () => {
  try {
    const result = await await AuroraDyeingUtilities(data);

    const dataType = result?.dataType || [];
    const data = result?.data || {};

    dataType.forEach((type) => {
      const typeData = data[type];

      console.log("Type:", type);
      console.log("typeData:", typeData);
    });

    return {
      success: false,
      data: result,
      message: "Successfully get Utilities Meters Data",
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      message: error.message || "Unable to get Utilities Meters Data",
    };
  }
};

export default getUtilitiesData;
