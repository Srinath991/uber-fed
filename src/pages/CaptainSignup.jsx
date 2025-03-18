import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { captainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainSignup = () => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleTpye, setVehicleTpye] = useState("");
  const { captain, setCaptain } = useContext(captainDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
      fullName: { firstName, lastName },
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleTpye,
      },
    };
    await axios
      .post(`${apiUrl}/captain/register`, userData)
      .then((response) => {
        if ((response.status = 201)) {
          setCaptain(response.data.user);
          localStorage.setItem("token", response.data.token);
          navigate("/captain/home");
        }
      });
  };
  return (
    <div>
      <div className=" flex flex-col justify-between p-5 h-screen">
        <div>
          <div className="pb-1">
            <img
              className="w-25 object-cover p-0 overflow-hidden rounded-lg"
              src="/uber-driver-logo.svg"
              alt="uber"
            />
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h3 className=" text-2xl font-semibold">What's Captain name</h3>
              <div className="flex gap-2 ">
                <input
                  className="bg-[#eeeeee] rounded p-2 text-base w-1/2 "
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Firstname"
                  autoComplete="current-password"
                />
                <input
                  className="bg-[#eeeeee] rounded p-2 text-base w-1/2 "
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Lastname"
                  autoComplete="current-password"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className=" text-2xl font-semibold">What's Captain email</h3>
              <input
                className="bg-[#eeeeee] rounded p-2 w-full text-base "
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                autoComplete="current-password"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className=" text-2xl font-semibold">Enter password</h3>
              <input
                value={password}
                className="bg-[#eeeeee] rounded p-2 w-full text-base "
                type="password"
                required
                placeholder="password"
                autoComplete="current-password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className=" text-2xl font-semibold">Vehicle infomation</h3>
              <div className="flex gap-2 ">
                <input
                  className="bg-[#eeeeee] rounded p-2 text-base w-1/2 "
                  type="text"
                  required
                  value={vehicleColor}
                  onChange={(e) => setVehicleColor(e.target.value)}
                  placeholder="Vehicle color"
                  autoComplete="current-password"
                />
                <input
                  className="bg-[#eeeeee] rounded p-2 text-base w-1/2 "
                  type="text"
                  required
                  value={vehiclePlate}
                  onChange={(e) => setVehiclePlate(e.target.value)}
                  placeholder="Vehicle plate"
                  autoComplete="current-password"
                />
              </div>
              <div className="flex gap-2 ">
                <input
                  className="bg-[#eeeeee] rounded p-2 text-base w-1/2 "
                  type="text"
                  required
                  value={vehicleCapacity}
                  onChange={(e) => setVehicleCapacity(e.target.value)}
                  placeholder="Vehicle capacity"
                  autoComplete="current-password"
                />
                <input
                  className="bg-[#eeeeee] rounded p-2 text-base w-1/2 "
                  type="text"
                  required
                  value={vehicleTpye}
                  onChange={(e) => setVehicleTpye(e.target.value)}
                  placeholder="Vehicle type"
                  autoComplete="current-password"
                />
              </div>
            </div>
            <div>
              <button className=" w-full bg-[#111] text-white mt-3 rounded font-extrabold p-4 mb-1">
                Sign up
              </button>
              <p className="mt-1.5 text-center">
                Already have a account?{" "}
                <Link to={"/captain/login"} className=" text-blue-400">
                  login here
                </Link>
              </p>
            </div>
          </form>
        </div>
        <p className=" text-sm leading-tight">
          The site is protected by reCAPTCHA and google,{" "}
          <span className=" underline">Privacy policy</span> and
          <span className="underline"> terms and conditions apply. </span>
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
