import { ImageField, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

interface Fields {
  Logo: { value: ImageField };
}

type LogoProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const Logo = (props: LogoProps): React.ReactElement => {
  return (
    <>
      {/* <h3 style={{ color: 'red' }}>Logo</h3> */}
      <h4>{props.params.RenderingIdentifier}</h4>
      <a className="navbar-brand " href="/">
        <span className="logo">
          <Image field={props.fields.Logo} />
        </span>
      </a>
    </>
  );
};

export default Logo;
