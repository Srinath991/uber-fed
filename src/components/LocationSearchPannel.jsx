import React from "react";

const LocationSearchPanel = ({
  suggestedPlaces = [],
  setPickup,
  setDestination,
  activeField,
}) => {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion);
    } else {
      setDestination(suggestion);
    }
  };

  return (
    <div className="p-2">
      {suggestedPlaces.map((location, index) => (
        <div
          key={index}
          onClick={() => handleSuggestionClick(location.description)}
          role="button"
          tabIndex={0}
          className="flex items-center justify-start mb-3 border border-gray-200 hover:border-black rounded-2xl cursor-pointer p-2 transition duration-200"
        >
          <div className="bg-[#eee] flex items-center justify-center w-10 h-8 rounded-full mr-3">
            <i className="ri-map-pin-line"></i>
          </div>
          <h4 className="text-base font-semibold">{location.description}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
