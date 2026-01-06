import { Marker, Popup } from 'react-leaflet';

/**
 * Reusable station marker component for map
 */
const StationMarker = ({ station }) => {
  if (!station.latitude || !station.longitude) {
    return null;
  }

  return (
    <Marker position={[station.latitude, station.longitude]}>
      <Popup>
        <div className="text-center p-2">
          <h3 className="font-bold text-gray-800 text-base mb-2">
            {station.name}
          </h3>
          <div className="flex items-center justify-center text-sm text-gray-600">
            <span className="mr-1">📍</span>
            <span>{station.city}</span>
          </div>
          {station.latitude && station.longitude && (
            <div className="text-xs text-gray-500 mt-2">
              {station.latitude.toFixed(4)}, {station.longitude.toFixed(4)}
            </div>
          )}
        </div>
      </Popup>
    </Marker>
  );
};

export default StationMarker;