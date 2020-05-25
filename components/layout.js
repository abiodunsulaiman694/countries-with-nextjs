import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import theme from "./theme";

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    {children}
  </ThemeProvider>
);
