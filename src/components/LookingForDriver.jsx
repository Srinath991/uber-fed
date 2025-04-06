import React from "react";

const LookingForDriver = ({ setVehicleFound, pickup, destination, fare, vehicleType }) => {
  return (
    <div className="flex flex-col justify-between items-start p-4 bg-white w-full">
      <div className="flex justify-between items-center w-full mb-4">
        <h3 className="text-2xl font-semibold text-center">
          Looking for a driver...
        </h3>
        <h5
          onClick={() => setVehicleFound(false)}
          className="cursor-pointer"
        >
          <i className="ri-arrow-down-wide-fill text-lg text-gray-700"></i>
        </h5>
      </div>

      <div className="flex flex-col justify-between items-center gap-4 w-full">
        <div className="py-4">
          <img className="h-24" src="/uber-car.png" alt="uber-car" />
        </div>

        <div className="w-full flex flex-col gap-4">
          {/* Pickup */}
          <div className="flex gap-2 border-b border-gray-300 pb-4">
            <div className="flex justify-center items-center">
              <i className="ri-map-pin-2-fill text-lg text-gray-700"></i>
            </div>
            <div>
              <h3 className="font-medium text-lg">562/11A</h3>
              <p className="text-sm text-gray-600">{pickup}</p>
            </div>
          </div>

          {/* Destination */}
          <div className="flex gap-2 border-b border-gray-300 pb-4">
            <div className="flex justify-center items-center">
              <i className="ri-map-pin-user-fill text-lg text-gray-700"></i>
            </div>
            <div>
              <h3 className="font-medium text-lg">Royal Mart</h3>
              <p className="text-sm text-gray-600">{destination}</p>
            </div>
          </div>

          {/* Fare */}
          <div className="flex gap-2">
            <div className="flex justify-center items-center">
              <i className="ri-currency-line text-lg text-gray-700"></i>
            </div>
            <div>
              <h3 className="font-medium text-lg">
                ${fare?.[vehicleType] || "0.00"}
              </h3>
              <p className="text-sm text-gray-600">UPI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDriver;
