const HOST = {
  DEV: "http://localhost:7654",
  PROD: "https://backend.arpitj.dev",
};

const API_PATHS = {
  COMMON: "common",
};

export const API_ENDPOINTS = {
  SUBSCRIBE: `${API_PATHS.COMMON}/subscribe`,
  CONTACT: `${API_PATHS.COMMON}/contact`,
};

export const endpoint = (apiEndpoint) => {
  if (process.env.REACT_APP_ENV === "development")
    return `${HOST.DEV}/${apiEndpoint}`;
  return `${HOST.PROD}/${apiEndpoint}`;
};
