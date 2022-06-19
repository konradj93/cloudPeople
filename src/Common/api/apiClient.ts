import axios, { AxiosInstance } from 'axios';

const { REACT_APP_API_GATEWAY_URL } = process.env;

export const getApiClient = (baseUrl = REACT_APP_API_GATEWAY_URL): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: baseUrl,
  });

  return axiosInstance;
};
