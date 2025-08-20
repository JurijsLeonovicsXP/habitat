import React from 'react';

const Video = (): React.ReactElement => {
  return (
    <>
      {/* <h3 style={{ color: 'red' }}>Media Gallery</h3> */}

      <div>
        <div className="embed-responsive embed-responsive-16by9">
          <video width="750" height="414" autoPlay loop poster="">
            <source src="/-/media/Habitat/Videos/Sitecore-Experience.mp4" type="video/mp4" />
            <img
              src="/-/media/Habitat/Images/Wide/Habitat-071-wide.jpg?h=258&amp;mw=750&amp;w=750&amp;hash=91A44238AA103EFEB20ADDC1A2820DC5"
              className="img-responsive"
              alt="Experience Marketing"
              width="750"
              height="258"
            />
          </video>
        </div>
      </div>
    </>
  );
};

export default Video;
