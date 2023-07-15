import {
  compactTextInputStyles,
  disabledTextInputStyles,
  errorTextInputStyles,
  highlightedTextInputStyles,
  largeTextInputStyles,
  maxLengthTextInputStyles,
  multilineTextInputStyles,
  numericTextInputStyles,
  outlinedTextInputStyles,
  passwordTextInputStyles,
  placeholderTextInputStyles,
  roundedTextInputStyles,
  searchTextInputStyles,
  smallTextInputStyles,
  successTextInputStyles,
  transparentTextInputStyles,
  underlineTextInputStyles,
  uppercaseTextInputStyles,
} from "./BaseTextInputStyles";

export const applyVariantStyle = (baseStyle, variant) => {
  switch (variant) {
    case "rounded":
      return [baseStyle, roundedTextInputStyles.variantTextInput];
    case "compact":
      return [baseStyle, compactTextInputStyles.variantTextInput];
    case "outlined":
      return [baseStyle, outlinedTextInputStyles.variantTextInput];
    case "error":
      return [baseStyle, errorTextInputStyles.variantTextInput];
    case "success":
      return [baseStyle, successTextInputStyles.variantTextInput];
    case "multiline":
      return [baseStyle, multilineTextInputStyles.variantTextInput];
    case "password":
      return [baseStyle, passwordTextInputStyles.variantTextInput];
    case "search":
      return [baseStyle, searchTextInputStyles.variantTextInput];
    case "disabled":
      return [baseStyle, disabledTextInputStyles.variantTextInput];
    case "highlighted":
      return [baseStyle, highlightedTextInputStyles.variantTextInput];
    case "large":
      return [baseStyle, largeTextInputStyles.variantTextInput];
    case "small":
      return [baseStyle, smallTextInputStyles.variantTextInput];
    case "uppercase":
      return [baseStyle, uppercaseTextInputStyles.variantTextInput];
    case "numeric":
      return [baseStyle, numericTextInputStyles.variantTextInput];
    case "underline":
      return [baseStyle, underlineTextInputStyles.variantTextInput];
    case "transparent":
      return [baseStyle, transparentTextInputStyles.variantTextInput];
    case "placeholder":
      return [baseStyle, placeholderTextInputStyles.variantTextInput];
    case "maxLength":
      return [baseStyle, maxLengthTextInputStyles.variantTextInput];
    default:
      return baseStyle;
  }
};
