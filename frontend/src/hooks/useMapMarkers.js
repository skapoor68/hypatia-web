import { useState, useCallback } from 'react';

export default function useMapMarkers() {
  const [markers, setMarkers] = useState([]);

  const addMarker = useCallback((e) => {
    setMarkers(prevMarkers => [...prevMarkers, e.latlng]);
  }, []);

  return { markers, addMarker };
}