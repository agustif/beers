import React, { useState, useRef, useCallback } from "react";
import Geocoder from "react-map-gl-geocoder";
import MapGL from "react-map-gl";
import { FormField } from "grommet";

import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

const MAPBOX_API_ACCESS_TOKEN = process.env.MAPBOX_API_ACCESS_TOKEN;
const GeocoderInput = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  const geocoderContainerRef = useRef();
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );

  return (
    <FormField
      label="Where will be the meeting?"
      style={{ height: "200px", position: "relative" }}
    >
      <div style={{ height: "200px", position: "relative" }}>
        <div
          // @ts-expect-error
          ref={geocoderContainerRef}
          style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}
        />
        <MapGL
          // @ts-expect-error
          ref={mapRef}
          {...viewport}
          width="100%"
          height="100%"
          onViewportChange={handleViewportChange}
          mapboxApiAccessToken={MAPBOX_API_ACCESS_TOKEN}
        >
          <Geocoder
            placeholder="Search meeting location"
            mapRef={mapRef}
            containerRef={geocoderContainerRef}
            onViewportChange={handleGeocoderViewportChange}
            mapboxApiAccessToken={MAPBOX_API_ACCESS_TOKEN}
            position="top-left"
          />
        </MapGL>
      </div>
    </FormField>
  );
};

export { GeocoderInput };
