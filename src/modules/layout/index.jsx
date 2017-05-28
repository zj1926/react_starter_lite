/* eslint import/no-unresolved: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import style from './style.less';
import Header from './components/header/index.jsx';

const Layout = ({ children }) =>
  <div className={style.layout}>
    <Header />
    <div className={style.menuContainer}>
      Link: &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/">
        <span>
          Home
        </span>
      </Link>
      &nbsp;&nbsp;
      <Link to="/todos">
        <span>
          Todos
        </span>
      </Link>
    </div>
    <div className={style.main}>
      {children}
    </div>
  </div>;


Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
