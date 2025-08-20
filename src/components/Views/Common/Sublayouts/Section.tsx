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

const Section = (props: ComponentProps): React.ReactElement => {
  return (
    <>
      {/* <h3 style={{ color: 'red', margin: '10px' }}>Section</h3> */}
      <section className="section section-full ">
        <Placeholder name="section" rendering={props.rendering} />
      </section>
    </>
  );
};

export default Section;
