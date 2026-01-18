import { screens } from "./screens";

const toNumber = (value) => Number.parseInt(value, 10);

export const carouselResponsive = {
  desktop: {
    breakpoint: {
      max: Number.MAX_SAFE_INTEGER,
      min: toNumber(screens.lg),
    },
    items: 3,
  },
  tablet: {
    breakpoint: {
      max: toNumber(screens.lg) - 1,
      min: toNumber(screens.md),
    },
    items: 2,
  },
  mobile: {
    breakpoint: {
      max: toNumber(screens.md) - 1,
      min: 0,
    },
    items: 1,
  },
};
