// This is a class-based component because the current version of hot reloading won't hot reload a stateless component at the top-level.
import PropTypes from "prop-types";
import { hot } from "react-hot-loader";
import Navigation from "./components/Navigation";
import WhatToEat from "./containers/pages/WhatToEat";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";

const App = () => {
  return (
    <>
      <Navigation />
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <WhatToEat />
            </Route>
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </main>
    </>
  );
};

App.propTypes = {
  children: PropTypes.element,
};

export default hot(module)(App);
