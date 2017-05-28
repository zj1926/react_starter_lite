/* eslint react/forbid-prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout/index.jsx';

const App = ({ children }) => <Layout>
  { children }
</Layout>;

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
