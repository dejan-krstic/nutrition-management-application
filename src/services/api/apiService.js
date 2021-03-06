import axios from "axios";
import { getItem } from "../localStorageService";

const BASE_API_URL = "http://localhost:5000";

class ApiService {
  constructor() {
    let service = axios.create({
      baseURL: BASE_API_URL,
      headers: { "Content-Type": "application/json" },
    });
    axios.defaults.headers.post["Content-Type"] = "application/json";
    this.service = service;
  }

  handleReqInterceptorSuccess(request) {
    if (request.baseURL === BASE_API_URL && !request.headers.Authorization) {
      const token = getItem("access_token");

      if (token) {
        request.headers.Authorization = `Bearer ${token}`;
      }
    }
    return request;
  }

  handleReqInterceptorError = (error) => {
    return Promise.reject(error);
  };

  handleResInterceptorSuccess(response) {
    return response;
  }

  handleResInterceptorError = (error) => {
    // handle error globally, for example check if the error status is 500
    // and write error in log.file or send via slack service...
    return Promise.reject(error);
  };

  async handleApiCall(apiCall) {
    try {
      const response = await apiCall();
      return response;
    } catch (error) {
      return {
        isError: true,
        error: error.response,
      };
    }
  }

  async get(path) {
    return this.handleApiCall(() => this.service.get(path));
  }

  async post(path, payload) {
    return this.handleApiCall(() =>
      this.service.request({
        method: "POST",
        url: path,
        data: payload,
      }),
    );
  }

  async put(path, payload) {
    return this.handleApiCall(() =>
      this.service.request({
        method: "PUT",
        url: path,
        data: payload,
      }),
    );
  }

  async patch(path, payload) {
    return this.service.request({
      method: "PATCH",
      url: path,
      data: payload,
    });
  }

  async delete(path) {
    return this.handleApiCall(() => this.service.delete(path));
  }
}

export const apiService = new ApiService();
