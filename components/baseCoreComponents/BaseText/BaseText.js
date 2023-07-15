import React from "react";
import { Text } from "react-native";
import { baseTextStyles } from "./BaseTextStyles";
import { applyVariantStyle } from "./variantStylesUtils";

const BaseText = ({ children, variant }) => {
  const fontStyle = applyVariantStyle(baseTextStyles.baseText, variant);
  return <Text style={fontStyle}>{children}</Text>;
};

export default BaseText;
