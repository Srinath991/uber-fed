import React, {useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { captainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {

  const navigate=useNavigate()
  const apiUrl=import.meta.env.VITE_API_URL
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const {setCaptain}=useContext(captainDataContext)

  const handleSubmit = async(e) => {
    e.preventDefault();
    const captainData={email,password };
    await axios.post(`${apiUrl}/captain/login`,captainData)
    .then(
      (response)=>{
        if(response.data.status=200){
          setCaptain(response.data.user);
          localStorage.setItem("token", response.data.token);
          navigate("/captain/home");
        }
      }
    )
  };

  return (
    <div className=" flex flex-col justify-between p-5 h-screen">
      <div>
        <div className="pb-1">
          <img
            className="w-25 object-cover p-0 overflow-hidden rounded-lg"
            src="/uber-driver-logo.svg"
            alt="uber"
          />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h3 className=" text-2xl font-semibold">What's your email</h3>
            <input
              className="bg-[#eeeeee] rounded p-2 w-full text-lg "
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
              className="bg-[#eeeeee] rounded p-2 w-full text-lg "
              type="password"
              required
              placeholder="password"
              onChange={(e) => setpassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          <div>
            <button className=" w-full bg-[#111] text-white mt-3 rounded font-extrabold p-4 mb-1">
              Login
            </button>
            <p className="mt-1.5 text-center">
              Join a fleet,{" "}
              <Link to={"/captain/signup"} className=" text-blue-400">
                register as a Captain
              </Link>
            </p>
          </div>
        </form>
      </div>
      <Link
        to={"/user/login"}
        className=" flex justify-center items-center w-full bg-[#d5622d] text-white p-3 rounded mt-3 text-xl font-semibold"
      >
        Sign in as User
      </Link>
    </div>
  );
};

export default CaptainLogin;
