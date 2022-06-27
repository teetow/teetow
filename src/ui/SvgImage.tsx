import { CSSProperties } from "@stitches/react";
import { ComponentProps, SVGAttributes } from "react";
import { styled } from "../../stitches.config";
import { SvgDef } from "./assetutils";

const SvgView = styled("svg", {
  fill: "currentColor",
  "--size": "3rem",
  size: "var(--size)",
});

type Props = {
  asset: SvgDef;
  size?: number | string;
  alt?: string;
} & ComponentProps<typeof SvgView>;

const SvgImage = ({ asset, size, alt, ...props }: Props) => (
  <SvgView {...{ ...props }} css={{ size: size }} {...{ ...asset.attrs }} role="img" aria-label={alt}>
    {asset.children}
  </SvgView>
);

export default SvgImage;
