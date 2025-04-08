import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router"; // Updated the import for react-router-dom
import gsap from "gsap";
import FinishRide from "../components/FinishRide";
import LiveTracking from "../components/LiveTracking";

const CaptainRiding = () => {
  const [finishRidePanel, setfinishRidePanel] = useState(false);
  const finishRideRef = useRef();
  const location = useLocation();
  const rideData = location.state?.ride;

  useEffect(() => {
    gsap.to(finishRideRef.current, {
      transform: finishRidePanel ? "translateY(0)" : "translateY(100%)",
      duration: 0.3,
    });
  }, [finishRidePanel]);

  return (
    <div className="h-screen bg-gray-100">
      {/* Background Map and Navigation */}
      <div className="h-4/5 w-full relative overflow-hidden">
        {/* Navigation Section */}
        <div className="absolute flex justify-between items-center w-full p-4 z-10">
          {/* Uber Logo */}
          <img className="w-24" src="/uber-logo.png" alt="Uber Logo" />
          {/* Logout Button */}
          <Link
            className="flex justify-center items-center bg-white p-3 rounded-full h-12 w-12 shadow-md hover:bg-gray-200 transition-all"
            to="/user/home"
          >
            <i className="ri-logout-box-r-line text-xl text-gray-700"></i>
          </Link>
        </div>
        {/* Map Background */}
        <LiveTracking/>
      </div>

      {/* Bottom Section */}
      <div
        className="h-1/5 bg-yellow-400 flex justify-between items-center relative p-6"
        onClick={() => setfinishRidePanel(true)}
      >
        <h5 className="cursor-pointer absolute top-0 left-0 text-center w-full">
          <i className="ri-arrow-up-wide-fill text-gray-700 text-3xl font-semibold"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 KM away</h4>
        <button className=" flex justify-center items-center bg-green-600 text-white font-semibold rounded-2xl py-3 px-8">
          complete ride
        </button>
      </div>
      <div ref={finishRideRef} className="fixed z-10 bottom-0 w-full bg-white ">
        <FinishRide
          setfinishRidePanel={setfinishRidePanel}
          ride={rideData}
        />
      </div>
    </div>
  );
};

export default CaptainRiding;
