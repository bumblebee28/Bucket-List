import React, { useState } from 'react';
import {useJsApiLoader, GoogleMap, Marker} from '@react-google-maps/api';
import './styles.css';

export default function Map() {
  
  var lati, lngi
  var coords = {lat:14, lng:-9}
  window.onload = navigator.geolocation.getCurrentPosition(showPosition, ()=>{console.log('no')});
  
  function showPosition(position) {
      lati = position.coords.latitude
      lngi = position.coords.longitude
      
      coords.lat = lati
      coords.lng = lngi
      console.log(coords.lat,coords.lng, '1')
    }
    
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_MAP_API
    })

  if(!isLoaded)
      return <div>Loading...</div>
 
  return (
    <div className='mapContainer'>
      {/* {console.log(coords.lat, '2')} */}
      <GoogleMap
   
        center={coords}
        zoom={15}
        defaultZoom={10}
        mapContainerStyle={{width:'100%', height:'60vh', float:'right', position:'sticky', top:80, marginRight:'20px'}}
        margin={[50, 50, 50, 50]}
      >
        <Marker position={coords}></Marker>
        {/* {console.log(coords.lat,coords.lng)} */}
      </GoogleMap>
      {test}
    </div>
  )
  function test(){console.log(coords.lat, 'test')}
  }