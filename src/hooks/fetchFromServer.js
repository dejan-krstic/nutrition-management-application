import { useCallback } from "react";
import { message } from "antd";
import axios from "axios";
import { REQUEST_METHOD } from "../constants";
import { useDispatch } from "react-redux";
import { loadingStarted, loadingFinished } from "../actions";

export const fetchFromServer = () => {
  const dispatch = useDispatch();
  const sendRequest = useCallback(
    async (
      url,
      method = REQUEST_METHOD.GET,
      data = null,
      headers = { "Content-Type": "application/json" },
    ) => {
      const key = parseInt(Math.random() * 10000) + "";
      message.loading({ content: "Loading...", key });
      loadingStarted()(dispatch);
      try {
        const response = await axios({
          url,
          method,
          data,
          headers,
        });
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.message);
        }
        message.success({ content: "Loaded!", duration: 3 });
        loadingFinished()(dispatch);
        return response;
      } catch (error) {
        message.error({ content: error.message, key, duration: 3 });
        loadingFinished()(dispatch);
        console.error("error", error);
      }
    },
    [message],
  );

  return { sendRequest };
};
