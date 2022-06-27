import { styled } from "../../stitches.config";

export const List = styled("ul", {
  alignItems: "center",
  display: "grid",
  gap: "1.8rem",
  gridAutoFlow: "column",
  listStyle: "none",
  margin: 0,
  padding: 0,

  variants: {
    axis: {
      horizontal: {},
      vertical: {},
    },
    responsive: {
      true: {},
    },
  },
  compoundVariants: [
    {
      axis: "horizontal",
      responsive: true,
      css: {
        gridAutoFlow: "row",

        "@bp2": {
          gridAutoFlow: "column",
        },
      },
    },
  ],
});

export const ResponsiveList = styled(List, {});

export const ListItem = styled("li", {
  alignItems: "center",
  display: "flex",
  gap: 0,
});
