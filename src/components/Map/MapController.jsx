import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { MAP_CONFIG } from "../../constants/mapConfig";

const MapController = ({ selectedStation }) => {
  const map = useMap();

  useEffect(() => {
    if (
      selectedStation &&
      selectedStation.latitude &&
      selectedStation.longitude
    ) {
      map.setView(
        [selectedStation.latitude, selectedStation.longitude],
        MAP_CONFIG.STATION_ZOOM,
        { animate: true, duration: 1 }
      );
    }
  }, [selectedStation, map]);

  return null;
};

export default MapController;
