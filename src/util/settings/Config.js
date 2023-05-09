//định nghĩa các tham số cố định

export const DOMAIN = "https://movieapi.cyberlearn.vn";
export const TOKEN = "accessToken";
export const GROUPID = "GP01";
export const USER_LOGIN = "USER_LOGIN";
export const validateMessages = {
  required: "${label} không được bỏ trống !",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} phải là số !",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
