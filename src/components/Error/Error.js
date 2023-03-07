import React from "react";
import { Text } from "./Error.styled";

const ErrorMsg = ({ children }) => {
  return <Text>{children}</Text>;
};

export default ErrorMsg;
