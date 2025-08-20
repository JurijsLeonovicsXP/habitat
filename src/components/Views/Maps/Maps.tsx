import React from 'react';

const Maps = (): React.ReactElement => {
  return (
    <>
      {/* <h3 style={{ color: 'red' }}>Map</h3> */}
      <link href="/styles/maps/maps.min.css" rel="stylesheet" />
      <div className="map">
        <div className="map-container">
          <input
            type="hidden"
            id="mapContextItem"
            name="mapContextItem"
            value="{F4477B0F-B874-4385-A3D7-ED1C1A868DB0}"
          />
          <input
            type="hidden"
            id="mapRenderingParameters"
            name="mapRenderingParameters"
            value='{"MapType":"terrain","CenterLocation":"-33.832724, 151.289431","ZoomLevel":"10"}'
          />
          <div className="map-canvas"></div>
        </div>
      </div>
    </>
  );
};

export default Maps;
