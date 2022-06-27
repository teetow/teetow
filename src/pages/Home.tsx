import { globalCss, styled } from "../../stitches.config";
import Tee from "../assets/tee.webp";
import iconassets from "../ui/iconassets";
import { List, ListItem } from "../ui/List";
import Stack from "../ui/Stack";
import SvgImage from "../ui/SvgImage";
import { Heading1, Heading2, Heading3, Text } from "../ui/Text";
import assets, { AssetDef } from "../ui/thumbassets";

const bodyStyles = globalCss({
  "@import":
    "url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wdth@82.5&display=swap')",
  html: {
    minHeight: "100vh",
  },
  body: {
    backgroundColor: "$mauve6",
    color: "$purple12",
    display: "grid",
    margin: 0,
    padding: 0,
    fontFamily: "$inter",
    minHeight: "100vh",
  },
  "#app": {
    minHeight: "100%",
    width: "100%",
  },
});

const HomeContainer = styled(Stack, {
  alignItems: "start",
  display: "grid",
  gap: "2rem",
  justifyContent: "stretch",
  minHeight: "100%",
  width: "100%",
});

const xy = (x: number, y: number) => `${x}% ${y}%`;

const bg_max = 100;
const bg_in = 95;
const bg_width = 0.5 * 85;
const bg_slant = 0.5 * 3;

const Header = styled(Stack, {
  position: "relative",
  width: "100%",
  padding: "0 0 1em",

  "&:before": {
    backgroundColor: "$purple2",
    clipPath: `polygon(${[
      xy(0, 0),
      xy(bg_max, 0),
      xy(bg_max, bg_in),
      xy(0, bg_in),
      xy(50 + bg_width + bg_slant, bg_in),
      xy(50 + bg_width - bg_slant, bg_max),
      xy(50 - bg_width + bg_slant, bg_max),
      xy(50 - bg_width - bg_slant, bg_in),
      xy(0, bg_in),
    ]})`,
    content: "",
    height: "100%",
    pointerEvents: "none",
    position: "absolute",
    width: "100%",
    zIndex: -1,
  },
});

const Social = styled(List, {
  alignSelf: "end",
  justifySelf: "center",
  padding: "2em 4em",
  position: "relative",

  "&:before": {
    backgroundColor: "$mauve3",
    clipPath: "polygon(3% 0, 97% 0, 100% 100%, 0% 100%)",
    borderRadius: "3px",
    content: "",
    height: "100%",
    pointerEvents: "none",
    position: "absolute",
    width: "100%",
    zIndex: -1,
  },
});

const Link = styled("a", {
  color: "$amber10",
});

const TeeAvatar = styled("img", {
  size: "min(20%, 192px)",
  aspectRatio: 1,
});

const Thumbnail = styled(SvgImage, {
  "--fadetime": "120ms",
  "--shadowcolor": "hsla(280, 100%, 3%, 0.3)",
  border: "1px solid $mauve6",
  borderRadius: "4px",
  boxShadow: "0 1em 3em -1em var(--shadowcolor)",
  display: "block",
  transition: "box-shadow var(--fadetime) ease-in-out, border var(--fadetime) ease-in-out",

  "&:hover": {
    "--fadetime": "60ms",
    borderColor: "$mauve9",
    boxShadow: "0 2em 3em -1em var(--shadowcolor)",
  },
});

type CardProps = {
  asset: AssetDef;
  size: string | number;
};

const Card = ({ asset, size = "12rem" }: CardProps) => {
  return (
    <Stack css={{ gap: "1em" }}>
      <Link
        href={asset.url}
        target="_blank"
        rel="noopener noreferrer"
        css={{
          color: "CurrentColor",
          textDecoration: "none",
        }}
      >
        <Thumbnail asset={asset} size={size} alt={asset.title} />
      </Link>
      <Heading3>{asset.title}</Heading3>
      <Text css={{ fontSize: "0.8em", maxWidth: "12rem", margin: "0" }}>{asset.description}</Text>
    </Stack>
  );
};

const SocialLink = styled(Link, {
  alignItems: "center",
  display: "flex",
  gap: "0.7rem",
  textDecoration: "none",
});

const Home = () => {
  bodyStyles();

  return (
    <HomeContainer className="home">
      <Header className="header">
        <TeeAvatar className="avatar" src={Tee} css={{ margin: "2rem 0 0" }}></TeeAvatar>
        <Heading1 css={{ justifySelf: "stretch" }}>Hm?</Heading1>
        <Text css={{ justifySelf: "stretch" }}>
          Oh, me? I'm Teetow.
          <br /> I make code, software and music.
          <br />I used to make video games.
        </Text>
      </Header>

      <Stack>
        <Heading2 as="h2" css={{ justifySelf: "stretch" }}>
          Recent projects
        </Heading2>

        <Stack
          horizontal
          responsive
          css={{ alignSelf: "center", justifyContent: "center", gap: "2rem", padding: "2rem 0" }}
        >
          {Object.entries(assets).map(([title, asset]) => (
            <Card key={title} asset={asset} size="12rem" />
          ))}
        </Stack>
      </Stack>

      <Social axis="horizontal" responsive>
        <ListItem>
          <SocialLink href="https://soundcloud.com/teetow">
            <SvgImage asset={iconassets.soundcloud} size={"1.5rem"} /> SoundCloud
          </SocialLink>
        </ListItem>
        <ListItem>
          <SocialLink href="https://twitter.com/teetow">
            <SvgImage asset={iconassets.twitter} size={"1.5rem"} />
            Twitter
          </SocialLink>
        </ListItem>
        <ListItem>
          <SocialLink href="https://github.com/teetow">
            <SvgImage asset={iconassets.github} size={"1.5rem"} />
            Github
          </SocialLink>
        </ListItem>
      </Social>
    </HomeContainer>
  );
};

export default Home;
