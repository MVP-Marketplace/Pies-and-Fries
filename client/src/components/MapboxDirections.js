import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import'../styles/MapboxDirections.scss'
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN


const Map = () => {
  const mapContainerRef = useRef(null);
  const [lng, setLng] = useState(-74.055984);
  const [lat, setLat] = useState(40.883884);
  const [zoom, setZoom] = useState(12);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style:"mapbox://styles/mapbox/streets-v9",
      center: [lng, lat],
      zoom: zoom,
      height: "30vh"
    });
    const directions = new MapboxDirections({
        accessToken: process.env.REACT_APP_MAPBOX_TOKEN
        // unit: 'metric',
        // profile: 'mapbox/cycling'
      })

    new mapboxgl.Marker({
    }).setLngLat([-74.055984,40.883884 ]).addTo(map)

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
      
    });
    map.addControl(directions,'top-left')
    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className='sidebarStyle'>
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div className='map-container' ref={mapContainerRef} />
    </div>
  );
};

export default Map;