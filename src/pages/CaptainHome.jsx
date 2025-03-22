import React, { useEffect, useState,useRef } from "react";
import { Link } from "react-router"; // Fixed import for react-router-dom
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  // state variables
  const [ridePopUpPanel, setridePopUpPanel] = useState(true)
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false)


  // reerence to panals
  const ridePopUpPanelRef = useRef()
  const confirmRidePopUpPanelRef = useRef()

  useEffect(() => {
    gsap.to(ridePopUpPanelRef.current, {
      transform: ridePopUpPanel ? "translateY(0)" : "translateY(100%)",
      duration: 0.3,
    });
  }, [ridePopUpPanel]);

  useEffect(() => {
    gsap.to(confirmRidePopUpPanelRef.current, {
      transform: confirmRidePopUpPanel ? "translateY(0)" : "translateY(100%)",
      duration: 0.3,
    });
  }, [confirmRidePopUpPanel]);

  return (
    <div className="h-screen bg-gray-100">
      {/* Background Map and Navigation */}
      <div className="h-1/2 w-full relative overflow-hidden">
        <div className="absolute flex justify-between items-center w-full p-4">
          {/* Uber Logo */}
          <img
            className="w-24 p-4 pt-2 pl-0"
            src="/uber-logo.png"
            alt="Uber Logo"
          />
          {/* Logout Button */}
          <Link
            className="flex justify-center items-center bg-white p-3 rounded-full h-10 w-10 shadow-md hover:bg-gray-200 transition-all"
            to={"/user/home"}
          >
            <i className="ri-logout-box-r-line text-lg text-gray-700"></i>
          </Link>
        </div>
        {/* Map Background */}
        <img
          className="w-full h-full object-cover"
          src="/maps.jpeg"
          alt="Map Background"
        />
      </div>
      <CaptainDetails />
      <div ref={ridePopUpPanelRef} className="flex flex-col fixed z-10 bottom-0 p-2 w-full gap-4 bg-white ">
        <RidePopUp setridePopUpPanel={setridePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
      </div>
      <div ref={confirmRidePopUpPanelRef} className="flex flex-col fixed z-10 bottom-0 p-2 w-full gap-4 bg-white h-[80%] ">
        <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setridePopUpPanel={setridePopUpPanel}/>
      </div>
     
    </div>
  );
};

export default CaptainHome;
