import ThemeProvider from "./contexts/ThemeContext";
import { GlobalStyle } from "./GlobalStyle";
import MainContents from "./components";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <MainContents />
      </ThemeProvider>
    </>
  );
};

export default App;
