import React, { useEffect, useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router"; // Fixed import for react-router-dom
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { captainDataContext } from "../context/CaptainContext";
import { SocketContext } from "../context/SocketContext";
import axios from "axios";
import LiveTracking from "../components/LiveTracking";


const apiUrl = import.meta.env.VITE_API_URL;

const CaptainHome = () => {
  // state variables
  const [ridePopUpPanel, setridePopUpPanel] = useState(false);
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
  const [ride, setRide] = useState({});
  const [finalRide, setFinalRide] = useState({})

  // reerence to panals
  const ridePopUpPanelRef = useRef();
  const confirmRidePopUpPanelRef = useRef();

  const navigate=useNavigate()

  const { sendMessage, receiveMessage, socket } = useContext(SocketContext);
  const { captain } = useContext(captainDataContext);

  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported by your browser."));
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude: lat, longitude: lng } = position.coords;
          resolve({ lat, lng });
        },
        (error) => {
          reject(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    });
  };
  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const location = await getCurrentLocation();
        sendMessage("update-location-captain", { location });
      } catch (err) {
        console.error("Failed to get location:", err.message);
      }
    }, 3000); // every 3 seconds

    return () => clearInterval(intervalId);
  }, [sendMessage]);

  useEffect(() => {
    sendMessage("join", { userType: "captain" });
  });
  receiveMessage("new-ride", (data) => {
    setRide(data);

    setridePopUpPanel(true);
  });
  const confirmRide = async () => {
    try {
      const token = localStorage.getItem("token"); // ensure token is fetched here
      if (!token) {
        console.error("❌ Token not found in localStorage");
        return;
      }
  
      const response = await axios.post(
        `${apiUrl}/ride/confirm`,
        {
          rideId: ride._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFinalRide(response.data)
    } catch (error) {
      console.error(
        "❌ Error while confirming ride:",
        error?.response?.data?.message || error.message
      );
      // Optional: show error toast or feedback to user
    }
  };
  
  receiveMessage("ride-started",(data)=>{
    navigate('/captain/riding')
  });

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
        <LiveTracking/>
      </div>
      <CaptainDetails />
      <div
        ref={ridePopUpPanelRef}
        className="flex flex-col fixed z-10 bottom-0 p-2 w-full gap-4 bg-white "
      >
        <RidePopUp
          setridePopUpPanel={setridePopUpPanel}
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
          ride={ride}
          confirmRide={confirmRide}
        />
      </div>
      <div
        ref={confirmRidePopUpPanelRef}
        className="flex flex-col fixed z-10 bottom-0 p-2 w-full gap-4 bg-white h-[80%] "
      >
        <ConfirmRidePopUp
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
          setridePopUpPanel={setridePopUpPanel}
          finalRide={finalRide}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
