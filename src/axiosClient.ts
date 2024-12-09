import axios from "axios";

const apiKey = import.meta.env.VITE_API_URL;

const axiosClient = axios.create({
  baseURL: apiKey,
  withCredentials: true,
});

// Set up an interceptor to catch 401 errors
axiosClient.interceptors.response.use(
  (response) => response, // Pass through if the response is successful
  (error) => {
    // if (error.response && error.response.status === 401) {
    //   console.log(error);
    // }
    return Promise.reject(error); // Reject the error so it can be handled later if needed
  }
);

export default axiosClient;
