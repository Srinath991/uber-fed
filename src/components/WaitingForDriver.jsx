import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div className="flex flex-col justify-between items-start p-2 bg-white w-full ">
      <div className="flex justify-between items-start">
        <h5 onClick={() => props.setwaitingForDriver(false)}>
          <i className="ri-arrow-down-wide-fill cursor-pointer"></i>
        </h5>
      </div>
      <div className="flex flex-col justify-between items-center gap-1 w-full">
        <div className="flex justify-between items-center w-full">
          <img className="h-15" src="/uber-car.png" alt="uber-car" />
          <div className="text-right">
            <h2 className=" text-lg font-medium">
              {props.ride?.captain?.fullName?.firstName}
            </h2>
            <h4 className="text-xl font-semibold -m-1 -mb-1">
              {props.ride?.captain?.vehicle?.plate}
            </h4>
            <p className="text-xl text-gray-600 ">Maruthi suzuki Alto</p>
            <h4 className="text-xl font-semibold tracking-widest">
              {props.ride.otp}
            </h4>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="flex gap-2 border-b-1 border-gray-300 pb-4">
            <div className="flex justify-center items-center">
              <i className="ri-map-pin-2-fill"></i>
            </div>
            <div>
              <h3 className="font-medium text-lg">562/11A</h3>
              <p className="text-sm text-gray-600">{props?.ride?.pickUp}</p>
            </div>
          </div>
          <div className="flex gap-2 border-b-1 border-gray-300 pb-4">
            <div className="flex justify-center items-center">
              <i className="ri-map-pin-user-fill"></i>
            </div>
            <div>
              <h3 className="font-medium text-lg">Royal Mart</h3>
              <p className="text-sm text-gray-600">
                {props?.ride?.destination}
              </p>
            </div>
          </div>
          <div className="flex gap-2 ">
            <div className="flex justify-center items-center">
              <i className="ri-currency-line"></i>
            </div>
            <div>
              <h3 className="font-medium text-lg">${props.ride?.fare}</h3>
              <p className="text-sm text-gray-600">UPI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
