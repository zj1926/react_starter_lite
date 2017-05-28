/* eslint import/no-unresolved: 0 */
import React from 'react';
import img1 from '!file-loader!./assets/react.png';
import style from './style.less';

const Header = () => {
  const result = (<header className={style.header}>
    <div className={style.left}>
      <img
        src={img1}
        alt="logo"
      />
      <h1>
        React Starter <em style={{ color: 'red' }}>Lite</em>
      </h1>
    </div>
    <div className={style.right} />
  </header>);

  return result;
};

export default Header;
