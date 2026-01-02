import React, { lazy, Suspense,useState } from "react";
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
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router>
        <Header
          isSignedIn={isSignedIn}
          onSignOut={() => setIsSignedIn(false)}
        />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <LazyAuthApp onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/" component={LazyMarketingApp} />
          </Switch>
        </Suspense>
      </Router>
    </StylesProvider>
  );
};
