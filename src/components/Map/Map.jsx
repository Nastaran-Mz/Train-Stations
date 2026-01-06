import { MapContainer, TileLayer } from "react-leaflet";
import { MAP_CONFIG } from "../../constants/mapConfig";
import MapController from "./MapController";
import StationMarker from "./StationMarker";

const Map = ({ stations, selectedStation }) => {
  return (
    <div className="flex-1 relative">
      <MapContainer
        center={MAP_CONFIG.CENTER}
        zoom={MAP_CONFIG.DEFAULT_ZOOM}
        className="h-full w-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution={MAP_CONFIG.TILE_LAYER.attribution}
          url={MAP_CONFIG.TILE_LAYER.url}
        />

        {stations.map((station, index) => (
          <StationMarker
            key={`${station.name}-${station.city}-${index}`}
            station={station}
          />
        ))}

        <MapController selectedStation={selectedStation} />
      </MapContainer>
    </div>
  );
};

export default Map;
