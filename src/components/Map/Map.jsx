import React, { useState } from 'react';
import {useJsApiLoader, GoogleMap, Marker} from '@react-google-maps/api';
import './styles.css';  


export default function Map(props) {
    
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_MAP_API
    })

  if(!isLoaded)
      return <div>Loading...</div>
 
  return (
    <div className='mapContainer'>
      <GoogleMap
   
        center={props.coords}
        zoom={15}
        defaultZoom={10}
        mapContainerStyle={{width:'100%', height:'60vh', float:'right', position:'sticky', top:80, marginRight:'20px'}}
        margin={[50, 50, 50, 50]}
      >
        <Marker position={props.coords}></Marker>
        
      </GoogleMap>
    </div>
  )  


}
