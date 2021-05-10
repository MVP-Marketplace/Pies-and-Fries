import ReactMapboxGl, { Marker, ZoomControl, Popup } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../styles/DriverOrderDetails.css';

const MapBox = new ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
});

const Map = ({ lng, lat }) => {
  return (
    <div className='mapBox' id='map'>
      <MapBox
        style='mapbox://styles/mapbox/streets-v9'
        center={[lng, lat]}
        container='map'
        containerStyle={{
          width: '100vw',
          zoom: 2,
        }}
      >
        <Marker coordinates={[lng, lat]} className='marker'>
          <img
            className='marker-icon'
            src={require('../assets/pizzamonster.svg').default}
            alt='pizza-monster'
          />
        </Marker>
        <ZoomControl />
      </MapBox>
    </div>
    // <div>
    //   <div ref={mapContainer} className="map-container" />
    // </div>
  );
};
export default Map;
