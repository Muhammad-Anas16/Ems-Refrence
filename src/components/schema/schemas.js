import * as yup from "yup";

export const IpSchema = yup.object({
  ip: yup
    .string()
    .required("IP address is required")
    .matches(
      /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/,
      "Please enter a valid IPv4 address",
    ),
});
