import React from "react";
import "./App.css";
import MainTabPanel from "./components/MainTabPanel";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import logo from "./logo.svg";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "rgb(41, 114, 255)",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <img src={logo} className="App-logo" alt="logo" />
      <MainTabPanel />
    </ThemeProvider>
  );
}

export default App;
