import React from 'react';

const LanguageMenu = (): React.ReactElement => {
  return (
    <>
      {/* <h3 style={{ color: 'red' }}>Language Menu</h3> */}
      <li className="dropdown">
        <a href="#" className="btn dropdown-toggle" data-toggle="dropdown">
          <i className="fa fa-globe"></i>
        </a>
        <ul className="dropdown-menu">
          <li className="">
            <a href="http://habitat.dev.local/da/about habitat/">dansk</a>
          </li>
          <li className="">
            <a href="http://habitat.dev.local/ja-jp/about habitat/">日本語 (日本)</a>
          </li>
          <li className="active">
            <a href="http://habitat.dev.local/en/about habitat/">English</a>
          </li>
        </ul>
      </li>
    </>
  );
};

export default LanguageMenu;
