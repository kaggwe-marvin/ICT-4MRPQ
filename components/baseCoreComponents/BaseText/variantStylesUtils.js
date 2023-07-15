import {
  baseTextStyles,
  captionStyles,
  codeStyles,
  disabledStyles,
  emphasisStyles,
  errorStyles,
  headingStyles,
  highlightStyles,
  importantStyles,
  linkStyles,
  mutedStyles,
  quoteStyles,
  smallHeadingStyles,
  successStyles,
  tagStyles,
} from "./BaseTextStyles";

export const applyVariantStyle = (baseStyle, variant) => {
  switch (variant) {
    case "heading":
      return [baseStyle, headingStyles.variantText];
    case "emphasis":
      return [baseStyle, emphasisStyles.variantText];
    case "base":
      return [baseStyle, baseTextStyles.variantText];
    case "caption":
      return [baseStyle, captionStyles.variantText];
    case "highlight":
      return [baseStyle, highlightStyles.variantText];
    case "error":
      return [baseStyle, errorStyles.variantText];
    case "link":
      return [baseStyle, linkStyles.variantText];
    case "disabled":
      return [baseStyle, disabledStyles.variantText];
    case "quote":
      return [baseStyle, quoteStyles.variantText];
    case "success":
      return [baseStyle, successStyles.variantText];
    case "smallHeading":
      return [baseStyle, smallHeadingStyles.variantText];
    case "muted":
      return [baseStyle, mutedStyles.variantText];
    case "tag":
      return [baseStyle, tagStyles.variantText];
    case "important":
      return [baseStyle, importantStyles.variantText];
    case "code":
      return [baseStyle, codeStyles.variantText];
    default:
      return baseStyle;
  }
};
