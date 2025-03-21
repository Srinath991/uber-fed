import React from "react";

const ConfirmRidePanel = (props) => {
  return (
    <>
      <div className="flex flex-col justify-between items-start p-2 bg-white w-f ">
        <div className="flex justify-between items-center w-full mb-4">
          <h3 className="text-2xl font-semibold text-center">
            Confirm your Ride
          </h3>
          <h5
            onClick={() => props.setVehicleFound(false)}
            className="cursor-pointer"
          >
            <i className="ri-arrow-down-wide-fill text-lg text-gray-700"></i>
          </h5>
        </div>
        <div className="flex flex-col justify-between items-center gap-1 w-full">
          <div className="py-4">
            <img className="h-25" src="/uber-car.png" alt="uber-car" />
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-2 border-b-1 border-gray-300 pb-4">
              <div className="flex justify-center items-center">
                <i className="ri-map-pin-2-fill"></i>
              </div>
              <div>
                <h3 className="font-medium text-lg">562/11A</h3>
                <p className="text-sm text-gray-600">
                  lingadheeranahalli, bengalore, karnataka
                </p>
              </div>
            </div>
            <div className="flex gap-2 border-b-1 border-gray-300 pb-4">
              <div className="flex justify-center items-center">
                <i className="ri-map-pin-user-fill"></i>
              </div>
              <div>
                <h3 className="font-medium text-lg">Royal Mart</h3>
                <p className="text-sm text-gray-600">
                  {" "}
                  7th cross road 1st sector , bengalore, karnataka
                </p>
              </div>
            </div>
            <div className="flex gap-2 ">
              <div className="flex justify-center items-center">
                <i className="ri-currency-line"></i>
              </div>
              <div>
                <h3 className="font-medium text-lg">$193</h3>
                <p className="text-sm text-gray-600">UPI</p>
              </div>
            </div>
          </div>
          <button
            className="w-full bg-green-600 text-white font-semibold rounded-2xl py-3 mt-4"
            onClick={() => {
              props.setVehicleFound(true);
              props.setConfirmRide(false);
            }}
          >
            confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmRidePanel;
