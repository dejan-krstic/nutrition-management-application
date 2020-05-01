// This is a class-based component because the current version of hot reloading won't hot reload a stateless component at the top-level.
import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  render() {
    return <div>App</div>;
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default hot(module)(App);
