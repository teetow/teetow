import { styled } from "../../stitches.config";

export const List = styled("ul", {
  listStyle: "none",
  padding: 0,
  margin: 0,
  alignItems: "center",
  display: "flex",
  gap: "2rem",

  variants: {
    axis: {
      horizontal: { flexFlow: "column wrap" },
      vertical: { flexFlow: "column wrap" },
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
        "@initial": {
          flexFlow: "column wrap",
        },
        "@bp2": {
          flexFlow: "row wrap",
        },
        "@bp3": {
        },
      },
    },
  ],
});

export const ResponsiveList = styled(List, {

})

export const ListItem = styled("li", {
  alignItems: "center",
  display: "flex",
});
