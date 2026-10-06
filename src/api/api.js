import axios from "axios";

const ServerIP = "http://192.168.1.57:3000/api";

export const getTrendLog = async () => {
  try {
    const res = await axios.get(`${ServerIP}/data/trendlog`);

    return res?.data?.data?.response;
  } catch (error) {
    return {
      success: false,
      message: error?.response?.data?.message || "Authentication failed",
    };
  }
};

export const getEnergyLog = async () => {
  try {
    const res = await axios.get(`${ServerIP}/data/energylog`);

    return res?.data?.data?.response;
  } catch (error) {
    return {
      success: false,
      message: error?.response?.data?.message || "Authentication failed",
    };
  }
};
