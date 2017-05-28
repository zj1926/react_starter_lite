/* eslint react/forbid-prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, IndexRoute } from 'react-router';
import App from '../modules/app';
import Hello from '../modules/hello';
import Todos from '../modules/todos';

const Routes = ({ history }) => <Router history={history}>
  <Route path="/" component={App}>
    <IndexRoute component={Hello} />
    <Route path="todos" component={Todos} />
  </Route>
</Router>;

Routes.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Routes;
