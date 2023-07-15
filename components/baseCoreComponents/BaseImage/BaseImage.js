import React from "react";
import { Image } from "react-native";
import { baseImageStyles } from "./BaseImageStyles";
import { applyVariantStyle } from "./variantStylesUtils";

const BaseImage = ({ source, variant }) => {
  const imageStyles = applyVariantStyle(baseImageStyles.baseImage, variant);

  return <Image source={source} style={imageStyles} />;
};

export default BaseImage;
