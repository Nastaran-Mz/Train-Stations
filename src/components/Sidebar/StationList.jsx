import StationCard from "./StationCard";

const StationList = ({ stations, selectedStation, onStationClick }) => {
  if (stations.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center p-8">
          <span className="text-6xl mb-4 block">🔍</span>
          <p className="text-gray-500 font-medium">No stations found</p>
          <p className="text-gray-400 text-sm mt-2">
            Try selecting a different city
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="p-3 space-y-2">
        {stations.map((station, index) => (
          <StationCard
            key={`${station.name}-${station.city}-${index}`}
            station={station}
            isSelected={selectedStation === station}
            onClick={onStationClick}
          />
        ))}
      </div>
    </div>
  );
};

export default StationList;
