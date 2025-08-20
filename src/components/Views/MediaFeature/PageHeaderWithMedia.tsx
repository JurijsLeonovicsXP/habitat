import {
  ComponentParams,
  ComponentRendering,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

interface ComponentProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
}

const PageHeaderwithMedia = (props: ComponentProps): React.ReactElement => {
  return (
    <>
      {/* <h3 style={{ color: 'red' }}>Page Header With Media</h3> */}
      <header className="page-header bg-dark">
        <Placeholder name="page-header" rendering={props.rendering} />
      </header>
    </>
  );
};

export default PageHeaderwithMedia;
