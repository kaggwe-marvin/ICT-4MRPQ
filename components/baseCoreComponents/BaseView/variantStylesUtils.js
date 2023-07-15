import {
  bgViewStyles,
  centeredViewStyles,
  flexViewStyles,
  fullHeightViewStyles,
  fullWidthViewStyles,
  horizontalViewStyles,
  paddedViewStyles,
  spacedViewStyles,
  variant1Styles,
  variant2Styles,
  verticalViewStyles,
} from "./BaseViewStyles";

export const applyVariantStyle = (baseStyle, variant) => {
  switch (variant) {
    case "variant1":
      return [baseStyle, variant1Styles.variantView];
    case "variant2":
      return [baseStyle, variant2Styles.variantView];
    case "fullWidth":
      return [baseStyle, fullWidthViewStyles.variantView];
    case "fullHeight":
      return [baseStyle, fullHeightViewStyles.variantView];
    case "centered":
      return [baseStyle, centeredViewStyles.variantView];
    case "horizontal":
      return [baseStyle, horizontalViewStyles.variantView];
    case "vertical":
      return [baseStyle, verticalViewStyles.variantView];
    case "padded":
      return [baseStyle, paddedViewStyles.variantView];
    case "spaced":
      return [baseStyle, spacedViewStyles.variantView];
    case "flex":
      return [baseStyle, flexViewStyles.variantView];
    case "bg":
      return [baseStyle, bgViewStyles.variantView];
    default:
      return baseStyle;
  }
};
