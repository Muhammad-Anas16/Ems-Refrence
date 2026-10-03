import axios from "axios";

const ServerIP = "http://192.168.1.57:3000/api";

export const checkConnection = async () => {
  try {
    const res = await axios.get(`${ServerIP}/data/authorization/check`);

    return res?.data;
  } catch (error) {
    console.log(error.message || "Not Connected");
  }
};

export const loginToServer = async (data) => {
  try {
    const res = await axios.post(`${ServerIP}/data/authorization`, {
      data: data,
    });

    return res?.data;
  } catch (error) {
    console.log(error.message || "Not Connected");
  }
};
