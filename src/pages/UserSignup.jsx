import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [userData, setuserData] = useState({});
  const [firstName,setFirstName] =useState('')
  const [lastName,setLastName] =useState('')
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setuserData({ ...userData, email, password,...{fullname:{firstName,lastName}} });
    setFirstName('')
    setLastName('')
    setEmail("");
    setpassword("");
  };
  return (
    <div>
      <div className=" flex flex-col justify-between p-5 h-screen">
        <div>
          <div className=" pb-6">
            <img
              className="w-25 object-cover p-0 overflow-hidden rounded-lg"
              src="uber-logo.png"
              alt="uber"
            />
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h3 className=" text-2xl font-semibold">What's your name</h3>
              <div className="flex gap-2 ">
                <input
                autoComplete="current-password"
                  className="bg-[#eeeeee] rounded p-2 text-base w-1/2 "
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Firstname"
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
              <h3 className=" text-2xl font-semibold">What's your email</h3>
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
                onChange={(e) => setpassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
            <div>
              <button className=" w-full bg-[#111] text-white mt-3 rounded font-extrabold p-4 mb-1">
                Sign up
              </button>
              <p className="mt-1.5 text-center">
                Already have a account?{" "}
                <Link to={"/login"} className=" text-blue-400">
                  login here
                </Link>
              </p>
            </div>
          </form>
        </div>
        <p className=" text-sm leading-tight">
        By procedding, you get a calls,whatsApp or SMS messages,including a
        automated means, from uber and it's affiliates to the number provided.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
