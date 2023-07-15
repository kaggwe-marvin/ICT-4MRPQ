import { StyleSheet } from "react-native";

export const baseImageStyles = StyleSheet.create({
  baseImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 15,
    marginTop: 10,
  },
});

export const roundedImageStyles = StyleSheet.create({
  roundedImage: {
    borderRadius: 100,
  },
});

export const thumbnailImageStyles = StyleSheet.create({
  thumbnailImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
});

export const overlayImageStyles = StyleSheet.create({
  overlayImage: {
    overlayColor: "rgba(0, 0, 0, 0.5)",
  },
});

export const fullScreenImageStyles = StyleSheet.create({
  fullScreenImage: {
    flex: 1,
    resizeMode: "cover",
  },
});

export const roundedBorderImageStyles = StyleSheet.create({
  roundedBorderImage: {
    borderWidth: 1,
    borderColor: "#333333",
  },
});

export const transparentImageStyles = StyleSheet.create({
  transparentImage: {
    opacity: 0.8,
  },
});

export const iconImageStyles = StyleSheet.create({
  iconImage: {
    width: 24,
    height: 24,
  },
});

export const successImageStyles = StyleSheet.create({
  successImage: {
    tintColor: "#4CD964",
  },
});

export const warningImageStyles = StyleSheet.create({
  warningImage: {
    tintColor: "#FFCC00",
  },
});

export const zoomableImageStyles = StyleSheet.create({
  zoomableImage: {
    flex: 1,
    resizeMode: "contain",
  },
});

export const placeholderImageStyles = StyleSheet.create({
  placeholderImage: {
    backgroundColor: "#f5f5f5",
  },
});

export const gradientImageStyles = StyleSheet.create({
  gradientImage: {
    borderRadius: 8,
    overflow: "hidden",
  },
});

export const bannerImageStyles = StyleSheet.create({
  bannerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
});

export const circularImageStyles = StyleSheet.create({
  circularImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});

export const grayscaleImageStyles = StyleSheet.create({
  grayscaleImage: {
    tintColor: "gray",
  },
});

export const borderedImageStyles = StyleSheet.create({
  borderedImage: {
    borderWidth: 1,
    borderColor: "#333333",
  },
});

export const roundedCornerImageStyles = StyleSheet.create({
  roundedCornerImage: {
    borderRadius: 20,
  },
});

export const shadowImageStyles = StyleSheet.create({
  shadowImage: {
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
});

export const responsiveImageStyles = StyleSheet.create({
  responsiveImage: {
    aspectRatio: 1,
  },
});

export const fadeInImageStyles = StyleSheet.create({
  fadeInImage: {
    opacity: 0,
  },
});

export const circleThumbnailStyles = StyleSheet.create({
  circleThumbnail: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

export const grayscaleThumbnailStyles = StyleSheet.create({
  grayscaleThumbnail: {
    tintColor: "gray",
  },
});

export const roundedCornerThumbnailStyles = StyleSheet.create({
  roundedCornerThumbnail: {
    borderRadius: 10,
  },
});

export const shadowThumbnailStyles = StyleSheet.create({
  shadowThumbnail: {
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
});
