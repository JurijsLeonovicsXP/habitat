import React from 'react';

const TwitterFeed = (): React.ReactElement => {
  return (
    <>
      {/* <h3 style={{ color: 'red' }}>Tweeter Feed</h3> */}

      <div className="well bg-dark">
        <h4>Tweets by @sitecorehabitat</h4>
        <div>
          <a
            className="twitter-timeline"
            href="https://twitter.com/sitecorehabitat"
            data-widget-id="641815052882804737"
            data-tweet-limit="2"
            data-chrome="noheader nofooter noscrollbar noborders "
          >
            Tweets by @sitecorehabitat
          </a>
        </div>
      </div>
    </>
  );
};

export default TwitterFeed;
