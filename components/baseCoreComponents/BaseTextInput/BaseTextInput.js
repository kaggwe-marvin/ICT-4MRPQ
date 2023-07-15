import React from "react";
import { TextInput } from "react-native";
import { baseTextInputStyles } from "./BaseTextInputStyles";
import { applyVariantStyle } from "./variantStylesUtils";

const BaseTextInput = ({ placeholder, value, variant, onChangeText }) => {
  const textInputStyles = applyVariantStyle(
    baseTextInputStyles.baseTextInput,
    variant
  );

  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={textInputStyles}
    />
  );
};

export default BaseTextInput;
