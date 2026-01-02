import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Progress from "./components/Progress";

const LazyAuthApp = lazy(() => import("./components/AuthApp"));
const LazyMarketingApp = lazy(() => import("./components/MarketingApp"));
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
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth" component={LazyAuthApp} />
            <Route path="/" component={LazyMarketingApp} />
          </Switch>
        </Suspense>
      </Router>
    </StylesProvider>
  );
};
