import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPannel from "../components/LocationSearchPannel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRidePanel from "../components/ConfirmRidePanel";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
import axios from "axios";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pannelOpen, setPannelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmRide, setConfirmRide] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setwaitingForDriver] = useState(false);
  const [placesSuggestions, setPlacesSuggestions] = useState([]);
  const [activeField, setActiveField] = useState("pickup");
  const [fare, setFare] = useState({});
  const [vehicleType, setVehicleType] = useState(null);

  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const WaitingForDriverRef = useRef(null);

  const apiUrl = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePlacesSuggestions = async (input) => {
    try {
      if (!token) {
        console.error("Token not found in localStorage");
        return;
      }

      const response = await axios.get(`${apiUrl}/maps/suggestions`, {
        params: { input },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPlacesSuggestions(response.data);
    } catch (error) {
      console.error(
        "Error fetching pickup suggestions:",
        error?.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    gsap.to(panelRef.current, {
      height: pannelOpen ? "65%" : "0%",
      display: pannelOpen ? "block" : "none",
      duration: 0.3,
    });
  }, [pannelOpen]);

  useEffect(() => {
    gsap.to(vehiclePanelRef.current, {
      transform: vehiclePanelOpen ? "translateY(0)" : "translateY(100%)",
      duration: 0.3,
    });
  }, [vehiclePanelOpen]);

  useEffect(() => {
    // console.log("dfjakldjfklajdkfjlk", confirmRide);
    gsap.to(confirmRidePanelRef.current, {
      transform: confirmRide ? "translateY(0)" : "translateY(100%)",
      // display: confirmRide ? "block" : "none",
      duration: 0.3,
    });
  }, [confirmRide]);

  useEffect(() => {
   
    gsap.to(vehicleFoundRef.current, {
      transform: vehicleFound ? "translateY(0)" : "translateY(100%)",
      duration: 0.3,
    });
  }, [vehicleFound]);

  useEffect(() => {
    gsap.to(WaitingForDriverRef.current, {
      transform: waitingForDriver ? "translateY(0)" : "translateY(100%)",
      duration: 0.3,
    });
  }, [waitingForDriver]);

  const handleFindTrip = async () => {
    try {
      const response = await axios.get(`${apiUrl}/ride/fare`, {
        params: { pickUp: pickup, destination },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFare(response.data);
      setVehiclePanelOpen(true);
      setPannelOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const createRide = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/ride/create`,
        { pickUp: pickup, destination, vehicleType },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error(
        "Error creating ride:",
        error?.response?.data || error.message
      );
    }
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <img className="w-24 p-4 absolute" src="/uber-logo.png" alt="Uber Logo" />

      <div className="h-full w-full relative overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/maps.jpeg"
          alt="Map Background"
        />
      </div>

      <div className="flex flex-col justify-end absolute top-0 w-full h-screen">
        <div className="bg-white h-[35%] p-5 relative">
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
              onChange={(e) => {
                handlePlacesSuggestions(e.target.value);
                setPickup(e.target.value);
              }}
              onClick={() => {
                setPannelOpen(true);
                setActiveField("pickup");
              }}
              value={pickup}
            />
            <input
              className="bg-[#eee] px-8 py-3 text-base w-full rounded-lg"
              type="text"
              placeholder="Add your destination"
              onClick={() => {
                setPannelOpen(true);
                setActiveField("destination");
              }}
              onChange={(e) => {
                setDestination(e.target.value);
                handlePlacesSuggestions(e.target.value);
              }}
              value={destination}
            />
            <button
              className="text-2xl font-semibold bg-black text-white rounded-lg p-2 w-full mt-4 mb-2"
              onClick={handleFindTrip}
            >
              Find trip
            </button>
          </form>
        </div>

        <div ref={panelRef} className="bg-white hidden">
          <LocationSearchPannel
            setPannelOpen={setPannelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
            suggestedPlaces={placesSuggestions}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="flex flex-col fixed z-10 bottom-0 p-2 w-full gap-4 bg-white translate-y-full"
      >
        <VehiclePanel
          setConfirmRide={setConfirmRide}
          setVehiclePanelOpen={setVehiclePanelOpen}
          fare={fare}
          setVehicleType={setVehicleType}
        />
      </div>

      {confirmRide ? (
        <div
          ref={confirmRidePanelRef}
          className="fixed z-20 bottom-0 p-5 w-full bg-white translate-y-full"
        >
          <ConfirmRidePanel
            pickup={pickup}
            destination={destination}
            setVehicleFound={setVehicleFound}
            setConfirmRide={setConfirmRide}
            fare={fare}
            createRide={createRide}
            vehicleType={vehicleType}
          />
        </div>
      ) : null}
      {vehicleFound ? (
        <div
          ref={vehicleFoundRef}
          className={`fixed bottom-0 z-10  p-5 w-full bg-white ${vehicleFound ?"translate-y-0":"translate-y-full"}`}
        >
          <LookingForDriver
            setVehicleFound={setVehicleFound}
            fare={fare}
            vehicleType={vehicleType}
            pickup={pickup}
            destination={destination}
          />
        </div>
      ) : null}
      <div
        ref={WaitingForDriverRef}
        className="fixed z-20 bottom-0 p-5 w-full bg-white translate-y-full"
      >
        <WaitingForDriver setwaitingForDriver={setwaitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
