import React from "react";
import { Switch } from "react-native";
import { baseSwitchStyles } from "./BaseSwitchStyles";
import { applyVariantStyle } from "./variantStylesUtils";

const BaseSwitch = ({ value, variant, onValueChange }) => {
  const switchStyles = applyVariantStyle(baseSwitchStyles.baseSwitch, variant);

  return (
    <Switch value={value} style={switchStyles} onValueChange={onValueChange} />
  );
};

export default BaseSwitch;
