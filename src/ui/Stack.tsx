import { styled } from "../../stitches.config";

const Stack = styled("div", {
  alignItems: "center",
  display: "flex",
  flexFlow: "column nowrap",
  variants: {
    horizontal: {
      true: {
        flexFlow: "row nowrap",
      },
    },
    stretch: {
      true: {
        alignItems: "stretch",
      },
    },
    responsive: {
      true: {},
    },
  },
  compoundVariants: [
    {
      horizontal: true,
      responsive: true,
      css: {
        flexFlow: "column wrap",
        "@bp3": {
          flexFlow: "row wrap",
        },
      },
    },
  ],
});

export default Stack;
