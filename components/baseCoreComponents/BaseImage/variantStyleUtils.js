import {
  bannerImageStyles,
  borderedImageStyles,
  circleThumbnailStyles,
  circularImageStyles,
  fadeInImageStyles,
  fullScreenImageStyles,
  gradientImageStyles,
  grayscaleImageStyles,
  grayscaleThumbnailStyles,
  iconImageStyles,
  overlayImageStyles,
  placeholderImageStyles,
  responsiveImageStyles,
  roundedBorderImageStyles,
  roundedCornerImageStyles,
  roundedCornerThumbnailStyles,
  roundedImageStyles,
  shadowImageStyles,
  shadowThumbnailStyles,
  successImageStyles,
  thumbnailImageStyles,
  transparentImageStyles,
  warningImageStyles,
  zoomableImageStyles,
} from "./BaseImageStyles";

export const applyVariantStyle = (baseStyle, variant) => {
  switch (variant) {
    case "rounded":
      return [baseStyle, roundedImageStyles.variantImage];
    case "thumbnail":
      return [baseStyle, thumbnailImageStyles.variantImage];
    case "overlay":
      return [baseStyle, overlayImageStyles.variantImage];
    case "fullScreen":
      return [baseStyle, fullScreenImageStyles.variantImage];
    case "roundedBorder":
      return [baseStyle, roundedBorderImageStyles.variantImage];
    case "transparent":
      return [baseStyle, transparentImageStyles.variantImage];
    case "icon":
      return [baseStyle, iconImageStyles.variantImage];
    case "success":
      return [baseStyle, successImageStyles.variantImage];
    case "warning":
      return [baseStyle, warningImageStyles.variantImage];
    case "zoomable":
      return [baseStyle, zoomableImageStyles.variantImage];
    case "placeholder":
      return [baseStyle, placeholderImageStyles.variantImage];
    case "gradient":
      return [baseStyle, gradientImageStyles.variantImage];
    case "banner":
      return [baseStyle, bannerImageStyles.variantImage];
    case "circular":
      return [baseStyle, circularImageStyles.variantImage];
    case "grayscale":
      return [baseStyle, grayscaleImageStyles.variantImage];
    case "bordered":
      return [baseStyle, borderedImageStyles.variantImage];
    case "roundedCorner":
      return [baseStyle, roundedCornerImageStyles.variantImage];
    case "shadow":
      return [baseStyle, shadowImageStyles.variantImage];
    case "responsive":
      return [baseStyle, responsiveImageStyles.variantImage];
    case "fadeIn":
      return [baseStyle, fadeInImageStyles.variantImage];
    case "circleThumbnail":
      return [baseStyle, circleThumbnailStyles.variantImage];
    case "grayscaleThumbnail":
      return [baseStyle, grayscaleThumbnailStyles.variantImage];
    case "roundedCornerThumbnail":
      return [baseStyle, roundedCornerThumbnailStyles.variantImage];
    case "shadowThumbnail":
      return [baseStyle, shadowThumbnailStyles.variantImage];
    default:
      return baseStyle;
  }
};
