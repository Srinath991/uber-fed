import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPannel from "../components/LocationSearchPannel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRidePanel from "../components/ConfirmRidePanel";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  // State variables
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pannelOpen, setPannelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmRide, setConfirmRide] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setwaitingForDriver] = useState(false)

  // References for panels
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const WaitingForDriverRef=useRef(null)

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // GSAP Animation for Location Search Panel
  useEffect(() => {
    gsap.to(panelRef.current, {
      height: pannelOpen ? "75%" : "0%",
      display: pannelOpen ? "block" : "none",
      duration: 0.3,
    });
  }, [pannelOpen]);

  // GSAP Animation for Vehicle Panel
  useEffect(() => {
    gsap.to(vehiclePanelRef.current, {
      transform: vehiclePanelOpen ? "translateY(0)" : "translateY(100%)",
      duration: 0.3,
    });
  }, [vehiclePanelOpen]);

  // GSAP Animation for Confirm Ride Panel
  useEffect(() => {
    gsap.to(confirmRidePanelRef.current, {
      transform: confirmRide ? "translateY(0)" : "translateY(100%)",
      duration: 0.3,
    });
  }, [confirmRide]);

  // GSAP Animation for Looking For Driver Panel
  useEffect(() => {
    gsap.to(vehicleFoundRef.current, {
      transform: vehicleFound ? "translateY(0)" : "translateY(100%)",
      duration: 0.3,
    });
  }, [vehicleFound]);

  useEffect(() => {
    gsap.to(WaitingForDriverRef.current, {
      transform: vehicleFound ? "translateY(0)" : "translateY(100%)",
      duration: 0.3,
    });
  }, [waitingForDriver]);

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      {/* Uber Logo */}
      <img className="w-24 p-4 absolute" src="/uber-logo.png" alt="Uber Logo" />

      {/* Background Map */}
      <div className="h-full w-full relative overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/maps.jpeg"
          alt="Map Background"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-end absolute top-0 w-full h-screen">
        {/* Trip Search Section */}
        <div className="bg-white h-[25%] p-5 relative">
          {pannelOpen && (
            <h5 onClick={() => setPannelOpen(false)}>
              <i className="ri-arrow-down-wide-fill absolute right-5 cursor-pointer"></i>
            </h5>
          )}
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={handleSubmit} className="relative">
            <div className="h-16 border-l-4 border-gray-700 mx-4 absolute top-10"></div>
            <input
              className="bg-[#eee] px-8 py-3 text-base w-full rounded-lg mb-5 mt-5"
              type="text"
              placeholder="Add a pick-up location"
              onChange={(e) => setPickup(e.target.value)}
              onClick={() => setPannelOpen(true)}
              value={pickup}
            />
            <input
              className="bg-[#eee] px-8 py-3 text-base w-full rounded-lg"
              type="text"
              placeholder="Add your destination"
              onClick={() => setPannelOpen(true)}
              onChange={(e) => setDestination(e.target.value)}
              value={destination}
            />
          </form>
        </div>

        {/* Location Search Panel */}
        <div ref={panelRef} className="bg-white hidden">
          <LocationSearchPannel
            setPannelOpen={setPannelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>

      {/* Vehicle Selection Panel */}
      <div
        ref={vehiclePanelRef}
        className="flex flex-col fixed z-10 bottom-0 p-2 w-full gap-4 bg-white translate-y-full"
      >
        <VehiclePanel
          setConfirmRide={setConfirmRide}
          setVehiclePanelOpen={setVehiclePanelOpen}
        />
      </div>

      {/* Confirm Ride Panel */}
      <div
        ref={confirmRidePanelRef}
        className="fixed z-20 bottom-0 p-5 w-full bg-white translate-y-full"
      >
        <ConfirmRidePanel setVehicleFound={setVehicleFound} setConfirmRide={setConfirmRide} />
      </div>

      {/* Looking For Driver Panel */}
      <div
        ref={vehicleFoundRef}
        className="fixed z-20 bottom-0 p-5 w-full bg-white translate-y-full"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div
      ref={WaitingForDriverRef}
        className="fixed z-20 bottom-0 p-5 w-full bg-white "
      >
        <WaitingForDriver setwaitingForDriver={setwaitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
