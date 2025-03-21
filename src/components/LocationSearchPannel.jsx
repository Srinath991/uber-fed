import React from "react";

const LocationSearchPannel = (props) => {
  // List of locations
  const locations = [
    "Thummalahalli Chintanami Chikkaballapur",
    "Thummalahalli Chintanami Schikkaballapur",
  ];

  return (
    <div className="p-2">
      
      {locations.map((location, index) => (
        <div
          key={index}
          // Handle click events to toggle panels
          onClick={() => {
            props.setVehiclePanelOpen(true); // Updated prop name
            props.setPannelOpen(false); // Close location panel
          }}
          className="flex items-center justify-start mb-3 border-2 border-gray-50 hover:border-black rounded-2xl cursor-pointer"
        >
          {/* Pin Icon */}
          <h2 className="bg-[#eee] flex items-center justify-center w-10 h-8 rounded-full m-2">
            <i className="ri-map-pin-line"></i>
          </h2>
          {/* Location Text */}
          <h4 className="text-base font-semibold">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPannel;
