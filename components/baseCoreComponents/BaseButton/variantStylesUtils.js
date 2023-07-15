import {
  blockButtonStyles,
  disabledButtonStyles,
  fullWidthButtonStyles,
  iconButtonStyles,
  outlineButtonStyles,
  primaryButtonStyles,
  roundedBorderButtonStyles,
  roundedButtonStyles,
  roundedIconbuttonStyles,
  roundedOutlineButtonStyles,
  roundedShadowButtonStyles,
  secondaryButtonStyles,
  successButtonStyles,
  transparentButtonStyles,
  warningButtonStyles,
} from "./BaseButtonStyles";

export const applyVariantStyle = (baseStyle, variant) => {
  switch (variant) {
    case "primary":
      return [baseStyle, primaryButtonStyles.variantButton];
    case "secondary":
      return [baseStyle, secondaryButtonStyles.secondaryButton];
    case "rounded":
      return [baseStyle, roundedButtonStyles.variantButton];
    case "outline":
      return [baseStyle, outlineButtonStyles.variantButton];
    case "disabled":
      return [baseStyle, disabledButtonStyles.variantButton];
    case "icon":
      return [baseStyle, iconButtonStyles.iconButton];
    case "success":
      return [baseStyle, successButtonStyles.variantButton];
    case "warning":
      return [baseStyle, warningButtonStyles.variantButton];
    case "roundedOutline":
      return [baseStyle, roundedOutlineButtonStyles.variantButton];
    case "fullWidth":
      return [baseStyle, fullWidthButtonStyles.variantButton];
    case "roundedBorder":
      return [baseStyle, roundedBorderButtonStyles.variantButton];
    case "transparent":
      return [baseStyle, transparentButtonStyles.variantButton];
    case "roundedShadow":
      return [baseStyle, roundedShadowButtonStyles.variantButton];
    case "block":
      return [baseStyle, blockButtonStyles.variantButton];
    case "roundedIcon":
      return [baseStyle, roundedIconbuttonStyles.variantButton];
    default:
      return baseStyle;
  }
};
