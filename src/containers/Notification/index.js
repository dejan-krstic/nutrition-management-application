import { notification } from "antd";
import { useCallback, useEffect } from "react";
import { NOTIFICATION_TITLE } from "./constants";
import { useSelector } from "react-redux";
import { notificationSelector } from "../../selectors";

const Notification = () => {
  const notificationData = useSelector(notificationSelector);

  const openNotificationWithIcon = useCallback(() => {
    const { type, message } = notificationData;
    if (type) {
      notification[type]({
        message: NOTIFICATION_TITLE[type],
        description: message,
        placement: "bottomRight",
      });
    }
  }, [notificationData]);

  useEffect(() => {
    openNotificationWithIcon();
  }, [notificationData]);

  return null;
};

export default Notification;
