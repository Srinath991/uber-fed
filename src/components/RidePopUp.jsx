import React from "react";

const RidePopUp = ({ setridePopUpPanel, setConfirmRidePopUpPanel, ride,confirmRide}) => {
  return (
    <>
      <div className="flex flex-col justify-between items-start p-2 bg-white w-full ">
        <div className="flex flex-col justify-between items-center w-full mb-4">
          <div className="flex justify-between items-center w-full mb-4">
            <h3 className="text-2xl font-semibold">New ride available</h3>
            <h5
              onClick={() => setridePopUpPanel(false)}
              className="cursor-pointer"
            >
              <i className="ri-arrow-down-wide-fill text-lg text-gray-700"></i>
            </h5>
          </div>
          <div className="flex items-center justify-between bg-yellow-200 p-4 rounded-lg shadow-lg w-full">
            <div className="flex items-center gap-4">
              {/* Captain's Profile Picture */}
              <img
                className="h-16 w-16 rounded-full object-cover"
                src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
                alt="Captain Profile"
              />
              <div>
                <h4 className="text-lg font-medium">
                  {ride?.user?.fullName?.firstName +
                    " " +
                    ride?.user?.fullName?.lastName}
                </h4>
              </div>
            </div>
            <div className="text-right">
              <h4 className="text-xl font-semibold">2.2 KM</h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center gap-1 w-full">
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-2 border-b-1 border-gray-300 pb-4">
              <div className="flex justify-center items-center">
                <i className="ri-map-pin-2-fill"></i>
              </div>
              <div>
                <h3 className="font-medium text-lg">562/11A</h3>
                <p className="text-sm text-gray-600">{ride.pickUp}</p>
              </div>
            </div>
            <div className="flex gap-2 border-b-1 border-gray-300 pb-4">
              <div className="flex justify-center items-center">
                <i className="ri-map-pin-user-fill"></i>
              </div>
              <div>
                <h3 className="font-medium text-lg">Royal Mart</h3>
                <p className="text-sm text-gray-600">{ride.destination}</p>
              </div>
            </div>
            <div className="flex gap-2 ">
              <div className="flex justify-center items-center">
                <i className="ri-currency-line"></i>
              </div>
              <div>
                <h3 className="font-medium text-lg">${ride.fare}</h3>
                <p className="text-sm text-gray-600">UPI</p>
              </div>
            </div>
          </div>
          <button
            className="w-full bg-green-600 text-white font-semibold rounded-2xl py-3 mt-4"
            onClick={() => {
              setConfirmRidePopUpPanel(true);
              confirmRide()
            }}
          >
            Accept
          </button>
          <button
            className="w-full bg-gray-400 text-gray-700 font-semibold rounded-2xl py-3 mt-4"
            onClick={() => {
              setridePopUpPanel(false);
            }}
          >
            Ignore
          </button>
        </div>
      </div>
    </>
  );
};

export default RidePopUp;
