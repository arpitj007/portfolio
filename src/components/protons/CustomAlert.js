import React from "react";
import { Alert } from "antd";

const ALERT_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
  INFO: "info",
  WARNING: "warning",
};

export const CustomAlert = ({
  type = ALERT_TYPES.INFO,
  message = "sample",
  actionItems = null,
  isClosable = true,
  ...otherProps
}) => (
  <Alert
    message={message}
    type={type}
    showIcon
    action={actionItems}
    closable={isClosable}
    {...otherProps}
  />
);
