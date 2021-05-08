import ReactMapboxGl, { Marker, ZoomControl } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import'../styles/DriverOrderDetails.css'
// import bottle from '../Photos/bottle.png';

const MapBox = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN
  });
  
const Map = ({ lat, lng }) => {
    
  return (
        <div className="mapBox">
            <MapBox
                style="mapbox://styles/mapbox/streets-v9"
                center={[lng, lat]}
                container="map"
                containerStyle={{
                    width: '100vw',
                    zoom: 1
                  }}
                
                >
                
                
                <Marker coordinates={[lng, lat]} className="marker">
                    <img
                    className="marker-icon"
                    src={require('../assets/pizzamonster.svg').default}
                    />
                </Marker>
                <ZoomControl />
            </MapBox>
        </div>
        
    
  );
};
export default Map;