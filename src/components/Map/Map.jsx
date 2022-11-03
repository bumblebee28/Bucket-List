import React, { useState } from 'react';
import {useJsApiLoader, GoogleMap, Marker} from '@react-google-maps/api';
import './styles.css';  


export default function Map(props) {
    
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_MAP_API
    })

  if(!isLoaded)
      return <div>Loading...</div>
 
    //   var request = {
    //     // location: map.getCenter(),
    //     // radius: '500',
    //     query: 'Google Sydney'
    //   };
    
    //   var service = new google.maps.places.PlacesService(map);
    //   service.textSearch(request, callback);
    // }
    
    // // Checks that the PlacesServiceStatus is OK, and adds a marker
    // // using the place ID and location from the PlacesService.
    // function callback(results, status) {
    //   if (status == google.maps.places.PlacesServiceStatus.OK) {
    //     var marker = new google.maps.Marker({
    //       map: map,
    //       place: {
    //         placeId: results[0].place_id,
    //         location: results[0].geometry.location
    //       }
    //     });
    //   }
    // }
  return (
    <div className='mapContainer'>
      <GoogleMap
   
        center={props.coords}
        zoom={15}
        radius= {500}
        defaultZoom={10}
        mapContainerStyle={{width:'100%', height:'60vh', float:'right', position:'sticky', top:80, marginRight:'20px'}}
        margin={[50, 50, 50, 50]}
      >
        <Marker position={props.coords}/>

      </GoogleMap>
    </div>
  )  


}
