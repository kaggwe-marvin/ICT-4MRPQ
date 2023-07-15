import {
  accordionScrollViewStyles,
  contentContainerStyles,
  floatingActionButtonStyles,
  gradientBackgroundStyles,
  gridScrollViewStyles,
  horizontalScrollStyles,
  insetScrollViewStyles,
  nestedScrollMenuStyles,
  nestedScrollTabStyles,
  nestedScrollViewStyles,
  pageControlStyles,
  paginationIndicatorStyles,
  parallaxBackgroundStyles,
  parallaxScrollStyles,
  pullToRefreshStyles,
  scrollIndicatorStyles,
  shadowScrollViewStyles,
  sideMenuScrollViewStyles,
  stickyActionButtonStyles,
  stickyFooterStyles,
  stickyHeaderStyles,
  stickyHeaderWithTabsStyles,
  stickyNavHeaderStyles,
  stickySectionHeaderStyles,
  stickyTabBarStyles,
  stickyTabHeaderStyles,
  tiledScrollViewStyles,
  transparentHeaderStyles,
  zoomableScrollViewStyles,
} from "./BaseScrollViewStyles";

export const applyVariantStyle = (baseStyle, variant) => {
  switch (variant) {
    case "contentContainer":
      return [baseStyle, contentContainerStyles.variantScrollView];
    case "horizontalScroll":
      return [baseStyle, horizontalScrollStyles.variantScrollView];
    case "scrollIndicator":
      return [baseStyle, scrollIndicatorStyles.variantScrollView];
    case "stickyHeader":
      return [baseStyle, stickyHeaderStyles.variantScrollView];
    case "parallaxScroll":
      return [baseStyle, parallaxScrollStyles.variantScrollView];
    case "transparentHeader":
      return [baseStyle, transparentHeaderStyles.variantScrollView];
    case "paginationIndicator":
      return [baseStyle, paginationIndicatorStyles.variantScrollView];
    case "nestedScrollView":
      return [baseStyle, nestedScrollViewStyles.variantScrollView];
    case "stickyFooter":
      return [baseStyle, stickyFooterStyles.variantScrollView];
    case "gradientBackground":
      return [baseStyle, gradientBackgroundStyles.variantScrollView];
    case "shadowScrollView":
      return [baseStyle, shadowScrollViewStyles.variantScrollView];
    case "zoomableScrollView":
      return [baseStyle, zoomableScrollViewStyles.variantScrollView];
    case "stickyTabHeader":
      return [baseStyle, stickyTabHeaderStyles.variantScrollView];
    case "nestedScrollTab":
      return [baseStyle, nestedScrollTabStyles.variantScrollView];
    case "accordionScrollView":
      return [baseStyle, accordionScrollViewStyles.variantScrollView];
    case "insetScrollView":
      return [baseStyle, insetScrollViewStyles.variantScrollView];
    case "stickyActionButton":
      return [baseStyle, stickyActionButtonStyles.variantScrollView];
    case "parallaxBackground":
      return [baseStyle, parallaxBackgroundStyles.variantScrollView];
    case "stickyTabBar":
      return [baseStyle, stickyTabBarStyles.variantScrollView];
    case "nestedScrollMenu":
      return [baseStyle, nestedScrollMenuStyles.variantScrollView];
    case "gridScrollView":
      return [baseStyle, gridScrollViewStyles.variantScrollView];
    case "stickySectionHeader":
      return [baseStyle, stickySectionHeaderStyles.variantScrollView];
    case "pullToRefresh":
      return [baseStyle, pullToRefreshStyles.variantScrollView];
    case "floatingActionButton":
      return [baseStyle, floatingActionButtonStyles.variantScrollView];
    case "stickyHeaderWithTabs":
      return [baseStyle, stickyHeaderWithTabsStyles.variantScrollView];
    case "sideMenuScrollView":
      return [baseStyle, sideMenuScrollViewStyles.variantScrollView];
    case "pageControl":
      return [baseStyle, pageControlStyles.variantScrollView];
    case "tiledScrollView":
      return [baseStyle, tiledScrollViewStyles.variantScrollView];
    case "stickyNavHeader":
      return [baseStyle, stickyNavHeaderStyles.variantScrollView];
    default:
      return baseStyle;
  }
};
