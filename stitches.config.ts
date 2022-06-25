// stitches.config.ts
import { createStitches } from "@stitches/react";
import { purpleDark, mauveDark, amberDark, yellowDark } from "@radix-ui/colors";

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      ...amberDark,
      ...yellowDark,
      ...purpleDark,
      ...mauveDark,
    },
    fonts: { inter: "Inter, sans-serif" },
  },

  utils: {
    size: (value: number | string) => ({
      width: value,
      height: value,
    }),
  },
});
