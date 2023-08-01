import useTheme from "../hooks/useTheme";
import Header from "./Header/Header";
import OverviewToday from "./OverviewToday/OverviewToday";
import TotalFollowers from "./TotalFollowers/TotalFollowers";
import Container from "../assets/style/container";
import * as C from "./style";

const MainContents = () => {
  const { stateTheme } = useTheme();

  return (
    <C.MainContents isSwitchTheme={stateTheme}>
      <Header />
      <Container>
        <TotalFollowers />
        <OverviewToday />
      </Container>
    </C.MainContents>
  );
};

export default MainContents;
