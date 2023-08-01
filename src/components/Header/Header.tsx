import useTheme from "../../hooks/useTheme";
import Container from "../../assets/style/container";
import * as C from "./style";
import "./animation.css";

const Header = () => {
  const { stateTheme, toggleTheme } = useTheme();
  return (
    <C.Header isSwitchTheme={stateTheme}>
      <Container className="header__container">
        <div className="header__title">
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </div>
        <div className="header__switch-theme">
          <p>Dark Mode</p>
          <button onClick={toggleTheme}>
            <span></span>
            <span
              className={`${stateTheme ? "slideInRight" : "slideInLeft"}`}
            ></span>
          </button>
        </div>
      </Container>
    </C.Header>
  );
};

export default Header;
