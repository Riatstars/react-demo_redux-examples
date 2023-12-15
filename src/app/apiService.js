import axios from "axios";

const apiService = axios.create({
  baseURL: "http://localhost:5000",
});

apiService.interceptors.request.use(
  (request) => {
    console.log("Start Request", request);
    return request;
  },
  function (error) {
    console.log("Request Error", error);
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  (response) => {
    console.log("Response", response);
    return response;
  },
  (error) => {
    console.log("Response Error", error);
    return Promise.reject(error);
  }
);

export default apiService;
