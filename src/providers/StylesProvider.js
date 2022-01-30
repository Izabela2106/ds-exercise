import GlobalStyles from "../theme/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";

const StylesProvider = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default StylesProvider;
