import React from 'react';

const ContentTeaserwithSummary = (): React.ReactElement => {
  return (
    <>
      {/* <h3 style={{ color: 'red' }}>Content Teaser with Summary</h3> */}
      <div className="well ">
        <h4>About Habitat</h4>
        <p>
          Habitat sites are demonstration sites for the Sitecore® Experience Platform™.
          <br />
          The sites demonstrate the full set of capabilities and potential of the platform through a
          number of both technical and business scenarios.
        </p>
        <a
          className="btn btn-default"
          rel="noopener noreferrer"
          href="http://github.com/sitecore/habitat"
          target="_blank"
        >
          Example available on GitHub
        </a>
      </div>
    </>
  );
};

export default ContentTeaserwithSummary;
