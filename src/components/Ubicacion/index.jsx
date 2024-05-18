/* eslint-disable no-unused-vars */
import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { ProyectoContainer } from '../Proyecto';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -41.25792,
  lng: -73.03988
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBX-fT0cZLTKydQN_HFfeCfHKq_Um_4cSQ"
  })
  
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center}/>
        
      </GoogleMap>
  ) : <></>
}

const Ubicacion = () => {
    return(
        <ProyectoContainer>
            <Map/>
        </ProyectoContainer>
    )
}
export default Ubicacion

