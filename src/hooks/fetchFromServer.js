import { useCallback, useState } from "react";
import { DEFAULT_URL } from "../constants";
import { message } from "antd";

export const fetchFromServer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const sendRequest = useCallback(
    async (
      path,
      method = "GET",
      body = null,
      headers = { "Content-Type": "application/json" },
    ) => {
      const key = path;
      message.loading({ content: "Loading...", key });
      const url = DEFAULT_URL + path;
      setIsLoading(true);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
        });

        const responseData = await response.json();

        if (response.status < 200 || response.status >= 300) {
          throw new Error(responseData.message);
        }
        message.success({ content: "Loaded!", key, duration: 2 });
        setIsLoading(false);

        return responseData;
      } catch (error) {
        console.error("error", error);
        // message.error({ content: error.message, key, duration: 5 });
        // we are mocking the response, even error will display success message
        message.success({ content: "Loaded!", key, duration: 2 });
        setIsLoading(false);
      }
    },
    [],
  );

  return { sendRequest, isLoading };
};
