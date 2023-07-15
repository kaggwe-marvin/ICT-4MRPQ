import React from "react";
import { Button } from "react-native";
import { baseButtonStyles } from "./BaseButtonStyles";
import { applyVariantStyle } from "./variantStylesUtils";

const BaseButton = ({ title, variant, onPress }) => {
  const buttonStyles = applyVariantStyle(baseButtonStyles.baseButton, variant);

  return <Button title={title} style={buttonStyles} onPress={onPress} />;
};

export default BaseButton;
