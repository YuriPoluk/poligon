'use client'

import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';

const GMAPS_API_KEY = 'AIzaSyCWzfwNXc8GNXLQKONwJws06OfVrHX3rmo'

export default function Map({ className }: { className: string }) {
    const { isLoaded } = useLoadScript({
        id: "google-map-script",
        googleMapsApiKey: GMAPS_API_KEY as string,
    });

    if (!isLoaded) {
        return <p>Loading...</p>;
    }

    const mapOptions = {
        disableDefaultUI: false,
        clickableIcons: true,
        scrollwheel: false
    }

    const mapCenterPosition = {lat: 50.6487808, lng: 30.3271258}
    const markerPosition = {lat: 50.7487808, lng: 30.3271258}

  return (
    <GoogleMap
        mapContainerClassName={`h-[35rem] rounded-3xl mx-auto ${className}`}
        options={mapOptions}
        zoom={10}
        center={mapCenterPosition}
        mapTypeId={'roadmap'}
        onLoad={() => console.log('Map Component Loaded...')}>
            <MarkerF
                position={markerPosition}
              />
    </GoogleMap>
  )
}
