import CityFilter from "./CityFilter";
import StationList from "./StationList";

const Sidebar = ({
  cities,
  selectedCity,
  onCityChange,
  filteredStations,
  allStations,
  selectedStation,
  onStationClick,
}) => {
  return (
    <aside className="w-96 bg-white border-r border-gray-200 flex flex-col shadow-2xl relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

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

      <div className="p-5 border-t-2 border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-700 font-semibold">
              {filteredStations.length} of {allStations.length} stations
            </span>
          </div>

          {selectedCity && (
            <button
              onClick={() => onCityChange("")}
              className="group flex items-center space-x-1 text-xs text-blue-600 hover:text-blue-800 
                         font-bold transition-all duration-300 hover:scale-105"
            >
              <span>Clear</span>
              <svg
                className="w-4 h-4 transform group-hover:rotate-90 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
