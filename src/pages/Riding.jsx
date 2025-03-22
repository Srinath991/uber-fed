import React from "react";
import { Link } from "react-router";
const Riding = () => {
  return (
    <div className="h-screen bg-gray-100">
      {/* Home Button */}
      

      {/* Background Map */}
      <div className="h-1/2 w-full relative overflow-hidden">
      <Link className=" flex justify-center items-center absolute top-2 right-2 bg-white p-3 rounded-full h-10 w-10"
      to={'/user/home'}>
        <i className="ri-home-5-fill text-lg" ></i>
      </Link>
        <img
          className="w-full h-full object-cover"
          src="/maps.jpeg"
          alt="Map Background"
        />
      </div>

      {/* Ride Information Section */}
      <div className="h-1/2 w-full bg-white p-6 flex flex-col justify-center items-center rounded-t-2xl shadow-lg">
        <div className="flex flex-col justify-between items-center gap-6 w-full">
          {/* Driver Information */}
          <div className="flex justify-between items-center w-full">
            <img className="h-16" src="/uber-car.png" alt="Uber car" />
            <div className="text-right">
              <h2 className="text-lg font-medium">Srinath</h2>
              <h4 className="text-xl font-semibold">KA 04 AK 1234</h4>
              <p className="text-base text-gray-600">Maruti Suzuki Alto</p>
            </div>
          </div>

          {/* Route Information */}
          <div className="w-full flex flex-col gap-4">
            {/* Destination */}
            <div className="flex gap-2 items-center border-b border-gray-300 pb-4">
              <i className="ri-map-pin-user-fill text-lg text-gray-700"></i>
              <div>
                <h3 className="font-medium text-lg">Royal Mart</h3>
                <p className="text-sm text-gray-600">
                  7th Cross Road, 1st Sector, Bengaluru, Karnataka
                </p>
              </div>
            </div>

            {/* Payment Information */}
            <div className="flex gap-2 items-center">
              <i className="ri-currency-line text-lg text-gray-700"></i>
              <div>
                <h3 className="font-medium text-lg">$193</h3>
                <p className="text-sm text-gray-600">UPI Payment</p>
              </div>
            </div>

            {/* Payment Button */}
            <button className="w-full bg-green-600 text-white font-semibold rounded-xl py-3 mt-4 shadow-md hover:bg-green-500 transition-all">
              Make a Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Riding;
