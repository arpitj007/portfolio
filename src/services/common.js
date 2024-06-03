import { endpoint, API_ENDPOINTS } from "./api";
import http from "./service-util";

const subscribe = async (data) => {
  const response = await http.post(endpoint(API_ENDPOINTS.SUBSCRIBE), data);
  return response;
};

const contact = async (data) => {
  const response = await http.post(endpoint(API_ENDPOINTS.CONTACT), data);
  return response;
};

const commonService = {
  subscribe,
  contact,
};
export default commonService;
