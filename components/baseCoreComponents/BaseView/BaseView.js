import React from "react";
import { View } from "react-native";
import { baseViewStyles } from "./BaseViewStyles";
import { applyVariantStyle } from "./variantStylesUtils";

const BaseView = ({ children, variant }) => {
  const containerStyle = applyVariantStyle(baseViewStyles.baseView, variant);

  return <View style={containerStyle}>{children}</View>;
};

export default BaseView;
