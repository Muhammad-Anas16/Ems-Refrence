import axios from "axios";

const ServerIP = "http://192.168.1.57:3000/api";
const TOKEN_KEY = "ems_auth_token";

export const checkConnection = async () => {
  try {
    const token = localStorage.getItem(TOKEN_KEY);

    if (!token) {
      return {
        success: false,
        message: "Authentication token not found",
      };
    }

    const res = await axios.get(`${ServerIP}/data/authorization/check`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res?.data;
  } catch (error) {
    console.log(
      error?.response?.data?.message || error?.message || "Not Connected",
    );

    // Token invalid/expired hai to remove kar dein
    if (error?.response?.status === 401) {
      localStorage.removeItem(TOKEN_KEY);
    }

    return {
      success: false,
      message: error?.response?.data?.message || "Authentication failed",
    };
  }
};

export const loginToServer = async (ip) => {
  try {
    const res = await axios.post(`${ServerIP}/data/authorization`, {
      data: ip,
    });

    const responseData = res?.data;

    if (responseData?.success && responseData?.data) {
      localStorage.setItem(TOKEN_KEY, responseData.data);
    }

    return responseData;
  } catch (error) {
    console.log(
      error?.response?.data?.message || error?.message || "Not Connected",
    );

    return {
      success: false,
      message: error?.response?.data?.message || "Connection failed",
    };
  }
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getAuthToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const getTrendLog = async () => {
  try {
    const token = localStorage.getItem(TOKEN_KEY);

    if (!token) {
      return {
        success: false,
        message: "Authentication token not found",
      };
    }

    const res = await axios.get(`${ServerIP}/data/trendlog`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res?.data?.data?.response;
  } catch (error) {
    if (error?.response?.status === 401) {
      localStorage.removeItem(TOKEN_KEY);
    }

    return {
      success: false,
      message: error?.response?.data?.message || "Authentication failed",
    };
  }
};

export const getEnergyLog = async () => {
  try {
    const token = localStorage.getItem(TOKEN_KEY);

    if (!token) {
      return {
        success: false,
        message: "Authentication token not found",
      };
    }

    const res = await axios.get(`${ServerIP}/data/energylog`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res?.data?.data?.response;
  } catch (error) {
    if (error?.response?.status === 401) {
      localStorage.removeItem(TOKEN_KEY);
    }

    return {
      success: false,
      message: error?.response?.data?.message || "Authentication failed",
    };
  }
};
