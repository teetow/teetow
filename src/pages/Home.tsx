import { globalCss, styled } from "../../stitches.config";
import Icon from "../ui/Icon";
import Tee from "../assets/tee.webp";

const bodyStyles = globalCss({
  "@import":
    "url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wdth@82.5&display=swap')",
  body: {
    backgroundColor: "$purple3",
    color: "$purple12",
    display: "grid",
    justifyContent: "center",
    fontFamily: "$inter",
  },
});

const HomeContainer = styled("div", {
  alignItems: "center",
  display: "flex",
  flexFlow: "column nowrap",
  gap: "1rem",
});

const HeaderView = styled("h1", {
  textAlign: "center",
  margin: "0 0 3rem",
});

const List = styled("ul", {
  listStyle: "none",
  padding: 0,
  margin: 0,
  alignItems: "center",
  display: "flex",
  gap: "2rem",

  variants: {
    axis: {
      horizontal: { flexFlow: "row nowrap" },
      vertical: { flexFlow: "column nowrap" },
    },
  },
});

const ListItem = styled("li", {
  alignItems: "center",
  display: "flex",
});

const Link = styled("a", {
  alignItems: "center",
  color: "$amber10",
  display: "flex",
  gap: "0.7rem",
});

const TeeAvatar = styled("img", {
  size: "50%",
});

const Home = () => {
  bodyStyles();
  return (
    <HomeContainer>
      <TeeAvatar src={Tee}></TeeAvatar>
      <HeaderView>Yes?</HeaderView>
      <List axis="horizontal">
        <ListItem>
          <Link href="https://soundcloud.com/teetow">
            <Icon icon="soundcloud" size={"2rem"} /> SoundCloud
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://twitter.com/teetow">
            <Icon icon="twitter" size={"2rem"} />
            Twitter
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/teetow">
            <Icon icon="github" size={"2rem"} />
            Github
          </Link>
        </ListItem>
      </List>
    </HomeContainer>
  );
};

export default Home;
