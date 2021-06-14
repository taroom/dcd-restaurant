import CONFIGURATION from "./configuration";

const API = {
  LIST: `${CONFIGURATION.BASE_URL}list`,
  DETAIL: (id) => `${CONFIGURATION.BASE_URL}detail/${id}`,
  SEARCH: (text) => `${CONFIGURATION.BASE_URL}search?q=${text}`,
  ADDREVIEW: `${CONFIGURATION.BASE_URL}`,
};

export default API;
