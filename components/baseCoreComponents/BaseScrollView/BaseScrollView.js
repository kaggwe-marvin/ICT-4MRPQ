import React from "react";
import { ScrollView } from "react-native";
import { baseScrollViewStyles } from "./BaseScrollViewStyles";
import { applyVariantStyle } from "./variantStylesUtils";

const BaseScrollView = ({ children, variant }) => {
  const scrollViewStyles = applyVariantStyle(
    baseScrollViewStyles.baseScrollView,
    variant
  );

  return <ScrollView style={scrollViewStyles}>{children}</ScrollView>;
};

export default BaseScrollView;
