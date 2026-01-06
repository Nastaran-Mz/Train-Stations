import CityFilter from './CityFilter';
import StationList from './StationList';

/**
 * Sidebar component containing filter and station list
 */
const Sidebar = ({
  cities,
  selectedCity,
  onCityChange,
  filteredStations,
  allStations,
  selectedStation,
  onStationClick
}) => {
  return (
    <aside className="w-96 bg-white border-r border-gray-200 flex flex-col shadow-lg">
      <CityFilter
        cities={cities}
        selectedCity={selectedCity}
        onCityChange={onCityChange}
        totalStations={allStations.length}
        allStations={allStations}
      />

      <StationList
        stations={filteredStations}
        selectedStation={selectedStation}
        onStationClick={onStationClick}
      />

      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 font-medium">
            Showing {filteredStations.length} of {allStations.length} stations
          </span>
          {selectedCity && (
            <button
              onClick={() => onCityChange('')}
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Clear filter
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;