import React from "react";

const VehiclePanel = (props) => {
  const fare=props.fare
  const vehicleOptions = [
    {
      src: "/uber-car.png",
      title: "UberGo",
      type: "auto",
      capacity: 4,
      time: "2 minutes away",
      price: `$${fare.car}`,
      description: "Affordable, comfort rides",
    },
    {
      src: "/uber-bike.png",
      title: "Moto",
      type: "moto",
      capacity: 2,
      time: "3 minutes away",
      price: "$"+fare.moto,
      description: "Affordable, comfort rides",
    },
    {
      src: "/uber-auto.png",
      title: "Uber Auto",
      type: "auto",
      capacity: 3,
      time: "2 minutes away",
      price: '$'+fare.auto,
      description: "Affordable, comfort rides",
    },
  ];
  return (
    <>
      <div className="flex justify-between items-start">
        <h3 className="text-2xl font-semibold">Choose the vehicle</h3>
        <h5 onClick={() => props.setVehiclePanelOpen(false)}>
          <i className="ri-arrow-down-wide-fill cursor-pointer"></i>
        </h5>
      </div>
      {/* Vehicle Options */}
      {vehicleOptions.map((vehicle, index) => (
        <div
        onClick={()=>{
          props.setVehicleType(vehicle.type)
          props.setConfirmRide(true)
            
        }}
          key={index}
          className="flex items-center justify-between bg-gray-100 p-2 rounded-2xl cursor-pointer active:border-black active:border-1 "
        >
          {/* Vehicle Image */}
          <img
            className="h-12"
            src={vehicle.src} // Default fallback image
            alt={`Image of ${vehicle.type}`}
          />
          {/* Vehicle Information */}
          <div className="w-1/2">
            <h4 className="font-medium text-sm">
              {vehicle.title}
              <span className="ml-2 text-gray-500">
                <i className="ri-user-fill"></i> {vehicle.capacity}
              </span>
            </h4>
            <h5 className="font-medium text-base">{vehicle.time}</h5>
            <p className="font-normal text-xs">{vehicle.description}</p>
          </div>
          {/* Vehicle Price */}
          <h2 className="text-lg font-semibold pr-1">{vehicle.price}</h2>
        </div>
      ))}
    </>
  );
};

export default VehiclePanel;
