import React from "react";
import { withRouter } from "react-router-dom";

import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Layout from "./Components/Layout/Layout";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
// import history from "./utils/history";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
