import React from 'react';
import {useJsApiLoader, GoogleMap, Marker} from '@react-google-maps/api';
import './styles.css';

const Map = () => {

  var lat, lng
 
  navigator.geolocation.getCurrentPosition(showPosition, ()=>{console.log('no')});
  
  
  function showPosition(position) {
    console.log(position.coords)
  }


    const coords = {lat:22, lng:80};

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyCptcuNcT8JQIOtPNPM0Qf9-1S4fPOJWXw'
    })

    if(!isLoaded)
        return <div>Loading...</div>
    
  return (
    <div className='mapContainer'>
      <GoogleMap
   
        center={coords}
        zoom={15}
        defaultZoom={14}
        mapContainerStyle={{width:'100%', height:'70vh', float:'right', position:'sticky', top:100, margin:'30px'}}
        margin={[50, 50, 50, 50]}
      >
        <Marker position={coords}></Marker>
       
      </GoogleMap>
    </div>
  );
};

export default Map;