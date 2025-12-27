import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "con",
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router>
        <Header />
        <MarketingApp />
      </Router>
    </StylesProvider>
  );
};
