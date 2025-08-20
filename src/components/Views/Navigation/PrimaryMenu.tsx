import React from 'react';

const PrimaryMenu = (): React.ReactElement => {
  return (
    <>
      {/* <h3 style={{ color: 'red', margin: '10px' }}>Primary menu</h3> */}
      <div className="collapse navbar-collapse" id="siteNavbar">
        <ul className="nav navbar-nav">
          <li className=" dropdown">
            <a
              href="/en/About-Habitat"
              className="dropdown-toggle text-uppercase"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              About Habitat<span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              <li className="">
                <a href="/en/About-Habitat/Introduction" target="">
                  Introduction
                </a>
              </li>
              <li className="">
                <a href="/en/About-Habitat/Getting-Started" target="">
                  Getting Started
                </a>
              </li>
              <li className="">
                <a href="http://helix.sitecore.net" target="_blank">
                  Helix Documentation
                </a>
              </li>
            </ul>
          </li>
          <li className=" dropdown">
            <a
              href="/en/Modules"
              className="dropdown-toggle text-uppercase"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Modules<span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              <li className="">
                <a href="/en/Modules/Project" target="">
                  Project
                </a>
              </li>
              <li className="">
                <a href="/en/Modules/Feature" target="">
                  Feature
                </a>
              </li>
              <li className="">
                <a href="/en/Modules/Foundation" target="">
                  Foundation
                </a>
              </li>
            </ul>
          </li>
          <li className="">
            <a className="text-uppercase" href="/en/More-Info" target="">
              More Info!
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PrimaryMenu;
